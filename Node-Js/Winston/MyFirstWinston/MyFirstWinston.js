// This : First Programme pour test winston

const Winston = require("winston");                             // Create constante for use Winston

// Create a logger and methode for display loggin
const Logger = Winston.createLogger({                           // createlogger function
    level: 'info',                                              // this logger is for level info
    format: Winston.format.json(),                              // format display, json
    transports: [new Winston.transports.Console()],             // Define transport logger, by Console
});

// After you can user loggin by use method on Logger.

Logger.info("infos message");                                   // Display on output the log message 