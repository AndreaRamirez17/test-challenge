/**
 * - Develop a function in `users.js` to simulate fetching user data.
 * - The function should accept a user `ID`.
 * - Return a promise that resolved user data. You can mock this inside tests.
 * - You can include error handling for cases where the `ID` is invalid or unavailable.
 */
// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
const getUser = async (id) => {
  return new Promise((resolve,reject)=>{
    process.nextTick(()=>{
      const user=users.find((user) => user.id === id);
      if(user){
        resolve(user);
      }else{
        reject(new Error("User not found"));
      }
    });
  });
};

// test
// console.log(getUser(3));

module.exports = { getUsers, getUser };

