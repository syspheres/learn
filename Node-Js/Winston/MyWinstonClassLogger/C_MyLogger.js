// CMyCLogger.js
// This script contains Winston logger in default class

// CONFIGURE NODE_MODULE AND LOAD WINSTON PACKAGE
const NodeModule = "E:/Project/syspheres/xspheres/learn/Node-Js/Winston/node_modules";      // Create constante for node_module folder
const CO_Winston = require (NodeModule+"/winston");                    // Constant for require and load winston package
import 'winston-daily-rotate-file';                                    // import winston-logrotate node-module package

class CL_Winston {                                                     // Begin Class CWinston
    constructor(LoggerPath) {                                          // Begin constructor method

    };

};                                                                     // End of class CWinston

module.exports = CO_Winston;

