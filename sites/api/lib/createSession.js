// -- Package Imports --
const { hash } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { nSQL } = require('@nano-sql/core');


// -- Setup Vars --


// -- Main function --
const createSession = (user) => {
  return new Promise((resolve, reject) => {
    const moddedUser = {...user};
    delete moddedUser.password;
    sign(moddedUser, 'testSecret', {expiresIn: '2h'}, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve({token, user: moddedUser});
      }
    })
  })
  .then( ({token, user}) => new Promise((resolve, reject) => {
    const signature = token.split('.').pop();
    hash(signature, 10, (err, hashedSignature) => {
      if (err) {
        reject(err);
      } else {
        resolve({token, user, hashedSignature});
      }
    })
  }))
  .then( ({token, user, hashedSignature}) => {
    return nSQL('sessions')
      .query(
        'upsert',
        {
          id: hashedSignature,
          userId: user._id,
          token,
          expireDate: Date.now() + 120*60*1000,
        }
        ).exec();
  })
};


// -- Exports --
module.exports = createSession;