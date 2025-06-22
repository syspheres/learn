// MyLogger.msj
// This script contains Winston logger for import and use 
// Script rename MyLogger.mjs for use import module 

// CONFIGURE NODE_MODULE AND LOAD WINSTON PACKAGE
//const NodeModule = "E:/Project/syspheres/xspheres/learn/Node-Js/Winston/node_modules";      // Create constante for node_module folder
//const Winston = require (NodeModule+"/winston");                    // Constant for require and load winston package
//require (NodeModule+"/winston-daily-rotate-file");                  // Require winston-logrotate noe-module
import Winston from 'winston';                                      // import winston node-module package
import 'winston-daily-rotate-file';                                 // import winston-logrotate node-module package
const LogDir = "./MyLog";                                           // Constant for log directory
const LogFile = "MyLogFile"                                         // Constant for log File Name
var TmpLogLevel="error";                                            // Constante for default value of log

// CONTROL IF LOGDIR EXIST AND IF NOT EXIST CREATE DIRECTORY
// NOT USE IN THIS EXAMPLE BECAUSE DIRECTORY CREATE IN TRANSPORT PARAMETER
/*
if (!Fs.existsSync(LogDir)){                                        // BEGIN IF testing if LogDir (log Directory) not exist (not exist is true)
    Fs.mkdirSync(LogDir, { recursive: true });                      // if not exist call function mkdir for create Dir in synchrone mode
    console.log("create " + LogDir + " Directory");                 // Display message create Directory
};                                                                  // END IF
*/

// READ PROGRAM PARAMETERS AND IDENT LOG LEVEL 
process.argv.forEach((Val, Index) => {;                             // Argument reading loop, Indoex for order of argument, Val for Value of argument
    if (Val.search("=") > 0) {;                                     // Begin if Pos value is not positive search argName and ArgValue
        var Arg = Val.split("=");                                   // split argument value by =
        var ArgName = Arg[0];                                       // Argument Name in ArgName
        var ArgValue = Arg[1];                                      // Argument Value in ArgValue
        if (ArgName="log") {;                                       // Begin if ArgValue = "log", change default value of LogLevels
            TmpLogLevel = ArgValue;                                 // Change Log Level Value by ArgValue
        };                                                          // End of If
    };                                                              // End of If
});   

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
const MyLogLevel = TmpLogLevel;                                     // Constante for default value of log
console.log("MyLogLevel : " + MyLogLevel);                          // Display MyLogLevel

// DEFINE FORMAT PARAMETERS USED
const { combine, timestamp, json } = Winston.format;                // define all parameters winston format

// DEFINE A TRANSPORT FOR LOGROTATE
const LogRotateTransport = new Winston.transports.DailyRotateFile({     // Begin define constant for use Transport logger
//  filename: 'LogFile-%DATE%.log',                                     // Define FileName log
  filename: `${LogFile}`+'-%DATE%.log',                                 // Define FileName log
  dirname: `${LogDir}`,                                                 // Define Directory for LogFile, Directory create if not exist
  datePattern: 'YYYY-MM-DD',                                            // Define Date Pattern of %DATE%
  maxFiles: '5d',                                                       // Max Number of Day keep LogFile, here's 5 days, after logrotating
  maxSize: '512m',                                                      // Max Size for LogFIle, here's 512 Mega Octet, after logrotating
  zippedArchive: true,                                                  // Archive LogFile are zipped
});                                                                     // End define constant for use Transport logger

// CREATE A WINSTON LOGER
const MyLogger = Winston.createLogger ({                              // Create a logger
    levels: MyLogLevels,
    level: MyLogLevel || 'fatal',                                   // for level infos and smaller level
    format: combine(                                                // combine multiple parameters format
        timestamp({                                                 // begin timestamp format
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',                    // Date Format
        }),                                                         // end timestamp format
        json()),                                                    // format Display log in Json
    transports: [LogRotateTransport],                               //  Transport parameters Winston logger user constant
});

// EXPORT MyLogger
//export default MyLogger;
export default MyLogger;
