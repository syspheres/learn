// In logger.js
const winston = require('winston');

class Winston {
    constructor(errorPath) {
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
        return new winston.createLogger(settings);
    }
}

module.exports = Winston;