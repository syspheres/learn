// this : RC_MyClassLogger.js
// Class Logger Winston

class C_MyLogger {                                                                              // Open Class C_MyLogger
    constructor() {                                                                             // Open Constructor of C_MyLogger Class
        const winston = require('winston');                                                     // Declare constant winston for winston module
        const errorPath = 'MyLogFile';                                                          // Declare constant for errorPath directory for file
        const format = winston.format;                                                          // Declare constant for Winston Format
        const customFormatter = format((info) => {                                              // Open and declare and open customFormatter for format infos
            return Object.assign({                                                              // Return an assigne Object format
                timestamp: info.timestamp                                                       // add timestamp in object
            }, info);                                                                           // Add info in customFormatter
        });                                                                                     // Close customFormatter format

        let settings = {                                                                        // Open and declare variable setting for winston
            level: 'silly',                                                                     // Declare default level
            format: winston.format.json(),                                                      // Declare format log to Json
            transports: [                                                                       // Open transports section
                new (winston.transports.File)({                                                 // Open Declare a new Transport File
                    filename: errorPath + '/error.log',                                         // Select Filename for transport concatenation Directory and Filename
                    level: 'error',                                                             // Select Level for this transport : level "error"
                    handleExceptions: true,                                                     // Select handleException at true for uncaught Exception
                    stack: true,                                                                // Select stacktrace at true
                    format: format.combine(                                                     // Open Format Section and combine
                        format.timestamp(),                                                     // Select timestamp in format
                        customFormatter(),                                                      // Add customFormatter constant
                        format.json()                                                           // Select format in json
                    )                                                                           // Close Format section
                }),                                                                             // Close Transport File
                new (winston.transports.File)({                                                 // Open Declare a new Transport File
                    filename: errorPath + '/general.log',                                       // Select Filename for transport concatenation Directory and Filename
                    format: format.combine(                                                     // Open Select Format and combine
                        format.timestamp(),                                                     // Select timestamp in format
                        customFormatter(),                                                      // Add customFormatter constant
                        format.json()                                                           // Select format in json
                    )                                                                           // Close Format Section
                })                                                                              // Close Transport File
            ],                                                                                  // Close transports section
            exitOnError: false                                                                  // Add configuration exit On error to false
        };                                                                                      // Close setting variable

        settings.transports.push(new (winston.transports.Console)());                           // Push setting variable transport
        return new winston.createLogger(settings);                                              // Return createLogger Winston in setting variable
    }
}                                                                                               // Clode Class C_MyLogger

module.exports = C_MyLogger;                                                                    // Export Class Module Class
