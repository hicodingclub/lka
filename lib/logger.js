const appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, json, printf } = format;

var options = {
    file: {
        level: process.env.FILE_LOG_LEVEL || 'warn',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        timestamp:true,
    },
    console: {
        level: process.env.CONSOLE_LOG_LEVEL || 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        timestamp:true,
    },
};

const myFormat = printf(({timestamp, level, message}) => {
    return `${timestamp} [${level}]: ${message},`;
    //return JSON.stringify(data);
  });

var logger = new createLogger({
    format: combine(
        timestamp(),
        json(),
      ),
    transports: [
        new transports.File(options.file),
        new transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// redirect morgan genearted output to info, too.
// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
    },
};

module.exports = logger;