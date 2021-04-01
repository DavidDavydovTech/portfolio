// -- Package Imports --
const { nSQL } = require('@nano-sql/core');


// -- Functions --
let hasBeenCalled = false;
// Wrapper function
const cleanExpiredSessionsIntervalWrapper = (minutes = 5) => {
  if (hasBeenCalled === true) {
    throw new Error('This function has already been called and can only be called once!');
  } else {
    hasBeenCalled = true;
    cleanExpiredSessionsInterval(minutes);
  }
};
// Actual function
const cleanExpiredSessionsInterval = (minutes) => {
  setInterval(() => {
    nSQL('sessions').query('delete').where(['expireDate', '<=', Date.now()]);
  }, minutes * 60 * 1000);
}


// -- Exports --
module.exports = cleanExpiredSessionsIntervalWrapper;