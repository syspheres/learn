const Loger = require('./logger');
const logger = new Loger('somepath');
logger.error('Some error');
logger.debug('Some debug');