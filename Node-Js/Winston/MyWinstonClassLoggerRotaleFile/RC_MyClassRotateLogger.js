// this : RC_MyRotateLogger.js
// Class Logger Winston
// this class test create log file with Winston Daily Rotate File
// And date LogFile and activate rotate log File
// use npm winston package load in constant
// use npm winston-daily-rotate-file for use logrotate parameters
// Use argument for set to default value for LogLevel
// Use constant for declare all logs levels
// Combine timestamp and json to Winston format
// configure Transport constant for configure logrotate options
// Create LogDir and LogFile in Transport logger 

class C_MyLogger {                                                                              // Open Class C_MyLogger
    constructor() {                                                                             // Open Constructor of C_MyLogger Class
        const winston = require('winston');                                                     // Declare constant winston for winston module
        const DailyRotateLog = require ('winston-daily-rotate-file');                                                  // Require winston-logrotate noe-module
        const Fs = require('fs');                                                               // constant for require and load fs package
        const LogDir = "./MyLog";                                                               // Constant for log directory
        const LogFile = "MyLogFile";                                                            // Constant for log File Name
        var TmpLogLevel="error";                                                                // Constante for default value of log

        // READ PROGRAM PARAMETERS AND IDENT LOG LEVEL 
        process.argv.forEach((Val, Index) => {                                                  // Argument reading loop, Indoex for order of argument, Val for Value of argument
            if (Val.search("=") > 0) {;                                                         // Begin if Pos value is not positive search argName and ArgValue
                var Arg = Val.split("=");                                                           // split argument value by =
                var ArgName = Arg[0];                                                               // Argument Name in ArgName
                var ArgValue = Arg[1];                                                              // Argument Value in ArgValue
                if (ArgName="log") {;                                                           // Begin if ArgValue = "log", change default value of LogLevels
                    TmpLogLevel = ArgValue;                                                     // Change Log Level Value by ArgValue
                };                                                                              // End of If
            };                                                                                  // End of If
        });                                                                                     // end of loop

        // CHANGING LOG LEVEL WINSTON 
        const MyLogLevels = {                                                                   // Begin Constante for define my log level 
            fatal: 0,                                                                           // Fatal, abnormal situation, program must be stop
            error: 1,                                                                           // Error, abnormal situation, program can handle this error 
            warni: 2,                                                                           // Warning, Abnormal situation but program continue
            infos: 3,                                                                           // Display a report situation on the Program 
            debug: 4,                                                                           // Display the values of variables and begin and end
            trace: 5,                                                                           // Display a situation point every 5 lines of code
        };                                                                                      // End Constante for define my log Level

        // INITIALIZE LOG LEVEL DEFAULT VALUE
        const MyLogLevel=TmpLogLevel;                                                           // Constante for default value of log
        console.log("MyLogLevel : " + MyLogLevel);                                              // Display MyLogLevel

        //--------------------------------------------------------------------------------------
        // INITIALIZE CONSTANT FOR WINSTON
        const format = winston.format;                                                          // Declare constant for Winston Format

        //--------------------------------------------------------------------------------------

        let settings = {                                                                        // Open and declare variable setting for winston
            levels: MyLogLevels,                                                                // Declare log levels
            level: MyLogLevel,                                                                  // Declare default level
            format: winston.format.json(),                                                      // Declare format log to Json
            stack: true,                                                                        // Select stackTrace
            transports: [                                                                       // Open transports section
                new (winston.transports.DailyRotateFile)({                                      // Open Transport Section with DailyRotyateFile
                    filename: `${LogFile}`+'-%DATE%.log',                                       // Select Filename with %DATE%
                    datePattern: 'YYYY-MM-DD',                                                  // Select DatePattern rerplace %DATE% in filename 
                    dirname: `${LogDir}`,                                                       // Select dirname directory for Filename
                    zippedArchive: true,                                                        // Select Option for zippedArchive after rotate
                    maxSize: '20m',                                                             // Max Size file log before rotate file log
                    maxFiles: '5d',                                                             // Max Daily before file log
                    format: format.combine(                                                     // Select format combine
                        format.timestamp(),                                                     // format timestamp
                        format.json()                                                           // format json
                    )                                                                           // Open Select Format and combine
                })
            ],                                                                                  // Close transports section
            exitOnError: false                                                                  // Add configuration exit On error to false
        };                                                                                      // Close setting variable

        settings.transports.push(new (winston.transports.Console)());                           // Push setting variable transport
        return new winston.createLogger(settings);                                              // Return createLogger Winston in setting variable
    }
}                                                                                               // Clode Class C_MyLogger

module.exports = C_MyLogger;                                                                    // Export Class Module Class


