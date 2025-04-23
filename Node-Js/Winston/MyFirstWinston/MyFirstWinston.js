// This : First Programme pour test winston

const Winston = require("winston");                             // Create constante for use Winston

/* loglevel by default
{
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  }
*/

// Create a logger and methode for display loggin
const Logger = Winston.createLogger({                           // createlogger function
    level: 'info',                                              // log level max Display
    format: Winston.format.json(),                              // format display, json
    transports: [new Winston.transports.Console()],             // Define transport logger, by Console
});

// After you can user loggin by use method on Logger.

Logger.info("Infos Message");                                   // Display on output the log message of info level
Logger.debug("Debug Message");                                  // Display on output the log message of debug level
Logger.error("Error Message");                                  // Display on output the log message of error level

// launch test by run node MyFirstWinston
// Infos Message Display
// But Debug Message not Display because Debug is level 5 and Logger is define for level 2 and smaller 0,1
// Error Message Display