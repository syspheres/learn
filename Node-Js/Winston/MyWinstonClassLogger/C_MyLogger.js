// CMyCLogger.js
// This script contains Winston logger in default class

// CONFIGURE NODE_MODULE AND LOAD WINSTON PACKAGE
const CD_Disk = "E:";
const CD_NodeModule = CD_Disk+"/Project/syspheres/xspheres/learn/Node-Js/Winston/node_modules"; // Create constante for node_module folder
const CR_Winston = require (CD_NodeModule+"/winston");                                          // Constant for require and load winston package
import 'winston-daily-rotate-file';                                                             // import winston-logrotate node-module package

/*
class OC_Winston {                                                                              // Begin Class CWinston
    constructor(LoggerPath) {                                                                   // Begin constructor method

    };

};                                                                                              // End of class CWinston
*/

module.exports = OC_Winston;

