// this program test create log file with Winston
// use npm winston package load in constant
// Use argument for set to default value for LogLevel
// Test if logdir exist  and create Log Directory
// Combine timestamp and json to Winston format
// Create and add log line in LogFile variable


// CONFIGURE NODE_MODULE AND LOAD WINSTON PACKAGE
const NodeModule = "E:/Project/syspheres/xspheres/learn/Node-Js/Winston/node_modules";      // Create constante for node_module folder
const Winston = require (NodeModule+"/winston");                    // Constant for require and load winston package
const Fs = require('fs');                                           // constant for require and load fs package
const LogDir = "./Log";                                             // Constant for log directory
const LogFile = LogDir+'/LogFile.log'                               // Constant for log File
var TmpLogLevel="error";                                            // Constante for default value of log

// CONTROL IF LOGDIR EXIST AND IF NOT EXIST CREATE DIRECTORY
if (!Fs.existsSync(LogDir)){                                        // BEGIN IF testing if LogDir (log Directory) not exist (not exist is true)
    Fs.mkdirSync(LogDir, { recursive: true });                      // if not exist call function mkdir for create Dir in synchrone mode
    console.log("create " + LogDir + " Directory");                 // Display message create Directory
};                                                                  // END IF


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
const MyLogLevels = {                                               // Begin Constante for define my log level 
    fatal: 0,                                                       // Fatal, abnormal situation, program must be stop
    error: 1,                                                       // Error, abnormal situation, program can handle this error 
    warn: 2,                                                        // Warning, Abnormal situation but program continue
    info: 3,                                                        // Display a report situation on the Program 
    debug: 4,                                                       // Display the values of variables and begin and end
    trace: 5,                                                       // Display a situation point every 5 lines of code
};                                                                  // End Constant loglevels 

// INITIALIZE LOG LEVEL DEFAULT VALUE
const MyLogLevel=TmpLogLevel;                                       // Constante for default value of log
console.log("MyLogLevel : " + TmpLogLevel);                         // Display MyLogLevel

// DEFINE FORMAT PARAMETERS USED
const { combine, timestamp, json } = Winston.format;                // define all parameters winston format

// CREATE A WINSTON LOGER
const Logger = Winston.createLogger ({                              // Create a logger
    levels: MyLogLevels,
    level: MyLogLevel || 'fatal',                                   // for level infos and smaller level
    format: combine(                                                // combine multiple parameters format
        timestamp({                                                 // begin timestamp format
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',                    // Date Format
        }),                                                         // end timestamp format
        json()),                                                    // format Display log in Json
    transports: [                                                   // Begin Transport parameters Winston logger
        new Winston.transports.File({                               // Begin Transport file create a new transport for create file
            filename: `${LogFile}`,                                 // Define filename with LogDir and log file with Date in prefix
            datePattern: 'YYYYMMDD',                                // Date format of %DATE%
        }),                                                         // end Trqnsport file
    ],                                                              // end Transport
});

// DISPLAY LOGGER FOR VALIDATE TEST
Logger.fatal("fatal Message");                                     // Display on output the log message of fatal level
Logger.error("error Message");                                     // Display on output the log message of error level
Logger.warn("Warn Message");                                       // Display on output the log message of warning level
Logger.info("Info Message");                                       // Display on output the log message of info level
Logger.debug("Debug Message");                                     // Display on output the log message of debug level
Logger.trace("Trace Message");                                     // Display on output the log message of trace level