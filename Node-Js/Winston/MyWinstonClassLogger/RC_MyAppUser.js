// this : RC_MyAppUser Class NodeJs class
// Class to manage UserService, add, get, list

// CLASS OPEN DESCRIPTION
class C_UserService {                                                       // Open Class UserService

  // CONSTRUCTOR METHODE OFF CLASS FOR CREATE User ARRAY
  constructor() {                                                         // Open Constructor function for class UserService
    this.users = [];                                                      // A simple in-memory store for users
    
    GC_MyLog.error('Error in RC_MyAppUser.js');
    
    // DISPLAY LOGGER FOR VALIDATE TEST
    /*
    I_MyLog.fatal("fatal Message");                                       // Display on output the log message of fatal level
    I_MyLog.error("error Message");                                       // Display on output the log message of error level
    I_MyLog.warn("Warn Message");                                         // Display on output the log message of warning level
    I_MyLog.info("Info Message");                                         // Display on output the log message of info level
    I_MyLog.debug("Debug Message");                                       // Display on output the log message of debug level
    I_MyLog.trace("Trace Message");                                       // Display on output the log message of trace level
    */
    }                                                                       // Close Constructor function

  
  // METHODE addUser FOR ADD USER WITH CONTROL AND TROW ERROR
  addUser(user) {                                                         // Open addUser Methode
    if (!user.name || !user.email) {                                      // Open if userName or userEmail section
      throw new Error('User must have a name and an email.');             // throw an error for name or email user missing
    }                                                                     // Close if
    this.users.push(user);                                                // add an user in arrau users
    console.log(`User ${user.name} added successfully.`);                 // Display console add user
  }                                                                       // Close addUser Methode         

  // METHODE getUser FOR GET AND RETURN USER
  getUser(email) {                                                        // Open getUser methode
    return this.users.find(user => user.email === email);                 // return user if user email equal email call parameters
  }                                                                       // Close getUser methode

  // METHODE listUser FOR LIST AND RETURN USER ARRAY
  listUsers() {                                                           // Open listUser methode
    return this.users;                                                    // return user array
  }                                                                       // Close listUser methode
}                                                                         // Close Class UserSarvice

// EXPORT MODULE
module.exports = C_UserService;                                             // Export Class Module UserService
