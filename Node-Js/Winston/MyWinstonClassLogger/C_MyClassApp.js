// C_logger.js
const winston = require('winston');

const errorPath = 'MyLogFile';
const format = winston.format;
const customFormatter = format((info) => {
    return Object.assign({
        timestamp: info.timestamp
    }, info);
});

let settings = {
    level: 'silly',
    format: winston.format.json(),
    transports: [
        new (winston.transports.File)({
            filename: errorPath + '/error.log',
            level: 'error',
            handleExceptions: true,
            stack: true,
            format: format.combine(
                format.timestamp(),
                customFormatter(),
                format.json()
            )
        }),
        new (winston.transports.File)({
            filename: errorPath + '/general.log',
            format: format.combine(
                format.timestamp(),
                customFormatter(),
                format.json()
            )
        })
    ],
    exitOnError: false
};
settings.transports.push(new (winston.transports.Console)());

module.exports = new winston.createLogger(settings);
