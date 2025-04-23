// this program test loglevel function winston
// and use npm winston package load in ../ Directory

const NodeModule = "D:/Project/syspheres/xspheres/learn/Node-Js/Winston/node_modules";

const Winston = require (NodeModule+"/winston");                       // Constante declaration for use winston packa

// You can change level 
const MyLogLevel = {                                                // Constante for define my log level 
    fatal: 0,                                                       // Fatal, abnormal situation, program must be stop
    error: 1,                                                       // Error, abnormal situation, program can handle this error 
    warn: 2,                                                        // Warning, Abnormal situation but program continue
    info: 3,                                                        // Display a report situation on the Program 
    debug: 4,                                                       // Display the values of variables and begin and end
    trace: 5,                                                       // Display a situation point every 5 lines of code
};

// Create a logger Winston
const Logger = Winston.createLogger ({                              // Create a logger
    level: 'info',                                                  // for level infos and smaller level
    format: Winston.format.json(),                                  // format Display log in Json
    transports: [new Winston.transports.Console()],                 // Create mthode output logging
});