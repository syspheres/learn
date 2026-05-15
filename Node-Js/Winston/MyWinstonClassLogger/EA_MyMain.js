// this : A_MyMain.js
// Main program
// const CR_MyClassLogger = require('./RC_MyClassLogger.js');                              // declare constant for classe logger
const CR_MyClassLogger = require('./RC_MyClassLoggerNew.js');                           // declare constant for classe logger
const CR_MyUserService = require('./RC_MyAppUser.js');                                  // declare a constant for UserService class

global.GC_MyLog = new CR_MyClassLogger();                                               //
// CREATE INSTANCE OF UserService CLASS
const CC_MyUserService = new CR_MyUserService();                                        // create an instance for UserService constant class

// CALL AddUser ON INSTANCE UserService CLASS
CC_MyUserService.addUser({ name: 'Alice', email: 'alice@example.com' });                // Call userService.addUser methode for add alice
CC_MyUserService.addUser({ name: 'Bob', email: 'bob@example.com' });                    // Call userService.addUser methode for add bob

// CALL listUser ON INSTANCE UserService CLASS
console.log('All users:', CC_MyUserService.listUsers());                                // Call userService.listUsers methode for list all user

// CALL getUser ON INSTANCE UserService CLASS
console.log('Find user by email:', CC_MyUserService.getUser('alice@example.com'));      // Call userService.getUser methode for get alice name from ename


GC_MyLog.error('Error in EA_MyMain.js');
GC_MyLog.debug('Debug in EA_MyMain.js');