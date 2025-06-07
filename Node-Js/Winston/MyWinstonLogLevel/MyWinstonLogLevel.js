// this program test loglevel function winston
// and use npm winston package load in constant
// Use argument for set to default value for LogLevel 

// CONFIGURE NODE_MODULE AND LOAD WINSTON PACKAGE
const NodeModule = "E:/Project/syspheres/xspheres/learn/Node-Js/Winston/node_modules";      // Create constante for node_module folder
const Winston = require (NodeModule+"/winston");                    // Constante declaration for use winston package
var TmpLogLevel="error";                                            // Constante for default value of log

// READ PROGRAM PARAMETERS AND IDENT LOG LEVEL 
process.argv.forEach((Val, Index) => {                              // Argument reading loop, Indoex for order of argument, Val for Value of argument
    if (Val.search("=") > 0) {;                                     // Begin if Pos value is not positive search argName and ArgValue
        Arg = Val.split("=");                                       // split argument value by =
        ArgName = Arg[0];                                           // Argument Name in ArgName
        ArgValue = Arg[1];                                          // Argument Value in ArgValue
        if (ArgName="log") {;                                       // Begin if ArgValue = "log", change default value of LogLevels
            TmpLogLevel = ArgValue;                                 // Change Log Level Value by ArgValue
        };                                                          // End of If
    };                                                              // End of If
});                                                                 // end of loop

// CHANGING LOG LEVEL WINSTON 
const MyLogLevels = {                                               // Constante for define my log level 
    fatal: 0,                                                       // Fatal, abnormal situation, program must be stop
    error: 1,                                                       // Error, abnormal situation, program can handle this error 
    warn: 2,                                                        // Warning, Abnormal situation but program continue
    info: 3,                                                        // Display a report situation on the Program 
    debug: 4,                                                       // Display the values of variables and begin and end
    trace: 5,                                                       // Display a situation point every 5 lines of code
};

// INITIALIZE LOG LEVEL DEFAULT VALUE
const MyLogLevel=TmpLogLevel;                                       // Constante for default value of log
console.log("MyLogLevel : " + MyLogLevel);                          // Display MyLogLevel

// CREATE A WINSTON LOGER
const Logger = Winston.createLogger ({                              // Create a logger
    levels: MyLogLevels,
    level: MyLogLevel || 'fatal',                                   // for level infos and smaller level
    format: Winston.format.json(),                                  // format Display log in Json
    transports: [new Winston.transports.Console()],                 // Create mthode output logging
});

// DISPLAY LOGGER FOR VALIDATE TEST
Logger.fatal("fatal Message");                                     // Display on output the log message of fatal level
Logger.error("error Message");                                     // Display on output the log message of error level
Logger.warn("Warn Message");                                       // Display on output the log message of warning level
Logger.info("Info Message");                                       // Display on output the log message of info level
Logger.debug("Debug Message");                                     // Display on output the log message of debug level
Logger.trace("Trace Message");                                     // Display on output the log message of trace level