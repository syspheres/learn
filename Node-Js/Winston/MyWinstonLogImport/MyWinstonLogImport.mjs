// MyWinstonLogImport.mjs
// // this program test import and use logger.mjs
// Script rename MyWinstonLogImport.mjs for use import module 


// IMPORT LOGGER SCRIPT
import MyLogger from './MyLogger.mjs';                                // Constant Define for MyLogger Module


// DISPLAY LOGGER FOR VALIDATE TEST
MyLogger.fatal("fatal Message");                                     // Display on output the log message of fatal level
MyLogger.error("error Message");                                     // Display on output the log message of error level
MyLogger.warn("Warn Message");                                       // Display on output the log message of warning level
MyLogger.info("Info Message");                                       // Display on output the log message of info level
MyLogger.debug("Debug Message");                                     // Display on output the log message of debug level
MyLogger.trace("Trace Message");                                     // Display on output the log message of trace level