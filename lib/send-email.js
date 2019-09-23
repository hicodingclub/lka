const AWS = require('aws-sdk');

AWS.config.loadFromPath('../.ses.json');

function sendEmail(from, to, subject, content) {
  // Create sendEmail params 
  const params = {
    Destination: { /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: to, // array
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
        Charset: "UTF-8",
        Data: content,
        },
        Text: {
        Charset: "UTF-8",
        Data: content,
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      }
      },
    Source: from, /* required */
    /*
    ReplyToAddresses: [
      'EMAIL_ADDRESS',
      // more items 
    ],
    */
  };

  // Create the promise and SES service object
  const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
  return sendPromise;
}

module.exports = sendEmail;

