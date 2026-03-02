// this : A_Index.js 
// Application use a class UserService

// LOAD ./C_MyFirstClass js file
const UserService = require('./C_MyFirstClass');                                // declare a constant for UserService class

// CREATE INSTANCE OF UserService CLASS
const userService = new UserService();                                          // create an instance for UserService constant class

// CALL AddUser ON INSTANCE UserService CLASS
userService.addUser({ name: 'Alice', email: 'alice@example.com' });             // Call userService.addUser methode for add alice
userService.addUser({ name: 'Bob', email: 'bob@example.com' });                 // Call userService.addUser methode for add bob

// CALL listUser ON INSTANCE UserService CLASS
console.log('All users:', userService.listUsers());                             // Call userService.listUsers methode for list all user

// CALL getUser ON INSTANCE UserService CLASS
console.log('Find user by email:', userService.getUser('alice@example.com'));   // Call userService.getUser methode for get alice name from ename