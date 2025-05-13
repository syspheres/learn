// this program test loglevel function winston
// and use npm winston package load in constant
// Use argument for set to default value for LogLevel 

// Configure Node_Module winston package
const NodeModule = "E:/Project/syspheres/xspheres/learn/Node-Js/Winston/node_modules";      // Create constante for node_module folder
const Winston = require (NodeModule+"/winston");                    // Constante declaration for use winston package

// read arguments
process.argv.forEach((val, index) => {                              // Argument reading loop
  console.log(index + ': ' + val);                                  // Display index argument and value
});                                                                 // end of loop

// You can change level 
const MyLogLevels = {                                               // Constante for define my log level 
    fatal: 0,                                                       // Fatal, abnormal situation, program must be stop
    error: 1,                                                       // Error, abnormal situation, program can handle this error 
    warn: 2,                                                        // Warning, Abnormal situation but program continue
    info: 3,                                                        // Display a report situation on the Program 
    debug: 4,                                                       // Display the values of variables and begin and end
    trace: 5,                                                       // Display a situation point every 5 lines of code
};

const MyLogLevel = process.argv[2];                                 // Retrieve the first argument of the program call.
                                                                    // This argument corresponds to the default log level to use.

// Create a logger Winston
const Logger = Winston.createLogger ({                              // Create a logger
    levels: MyLogLevels,
    level: MyLogLevel || 'info',                                                  // for level infos and smaller level
    format: Winston.format.json(),                                  // format Display log in Json
    transports: [new Winston.transports.Console()],                 // Create mthode output logging
});

Logger.fatal("fatal Message");                                     // Display on output the log message of fatal level
Logger.error("error Message");                                     // Display on output the log message of error level
Logger.warn("Warn Message");                                       // Display on output the log message of warning level
Logger.info("Info Message");                                       // Display on output the log message of info level
Logger.debug("Debug Message");                                     // Display on output the log message of debug level
Logger.trace("Trace Message");                                     // Display on output the log message of trace level