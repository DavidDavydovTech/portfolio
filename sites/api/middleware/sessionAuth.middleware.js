// -- Import Packages --
const { nSQL } = require('@nano-sql/core');
const { verify } = require('jsonwebtoken');


// -- Other Imports --
const Users = require('../models/users');
const createSession = require('../lib/createSession');
const cleanExpiredSessionsInterval = require('../lib/cleanExpiredSessionsInterval'); 

// -- Initalize Nano-SQL --
nSQL().createDatabase({
  id: 'authCache',
  mode: 'TEMP',
  tables: [
    {
      name: 'sessions',
      model: {
        'id:string': {},
        'userId:string': {pk: true},
        'token:string': {},
        'expireDate:number': {},
      },
    }
  ]
});


// -- Clear the Cache every X minutes --
cleanExpiredSessionsInterval(5);


// -- Exports --
module.exports = (req, res, next) => {
  const { "david-davydov-tech_auth": ddtAuth } = req.cookies;
  req.userInfo = null;
  if (typeof ddtAuth === 'string') {
    console.log('ID', ddtAuth)
    nSQL('sessions')
      .query('select')
      .where(['id', '=', ddtAuth])
      .exec()
      .then(selected => {
        console.log('SELECTED:', selected)
        if (selected.length < 1) {
          throw new Error('Your login has expired or someone else has logged in with your account, please login again.');
        } else {
          return selected[0].token;
        }
      })
      .then( token => new Promise((resolve, reject) => {
        verify(token, 'testSecret', (err, decoded) => {
          if (err) {
            reject(err);
          } else {
            resolve(decoded);
          }
        })
      }))
      .then(userData => {
        const expInMilliseconds = userData.exp * 1000;
        if (expInMilliseconds - Date.now() < 3600000) {
          const { _id } = userData;
          return Users.findById(_id)
            .exec()
            .then( user => new Promise((resolve, reject) => {
              try {
                const userObject = {...user.toObject()};
                resolve(createSession(userObject));
              } catch (err) {
                reject(err);
              }
            }))
            .then(queryResult => {
              console.log('QUERY RESULT:', queryResult[0])
              res.cookie('david-davydov-tech_auth', queryResult[0]);
              return new Promise((resolve, reject) => {
                verify(queryResult[0].token, 'testSecret', (err, decoded) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(decoded);
                  }
                })
              });
            })
        } else {
          return userData;
        }
      })
      .then(userData => {
        req.userInfo = userData;
        next();
      })
      .catch(err => {
        res.clearCookie('david-davydov-tech_auth');
        res.send(err);
        console.log('ERROR MESSAGE:', err.message);
      })
  } else {
    // TODO: Make req.userInfo a 'default user'.
    next();
  }
};