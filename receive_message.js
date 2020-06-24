// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
const config = require('./const');
// Set the region
AWS.config.update({region: 'ap-northeast-1'});

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var queueURL = config.SQS_QUEUE_URL;

var params = {
    AttributeNames: [
        "SentTimestamp"
    ],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: [
        "All"
    ],
    QueueUrl: queueURL,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0
};

receiver = () => {
    sqs.receiveMessage(params, function(err, data) {
        if (err) {
          console.log("Receive Error", err);
        } else if (data.Messages) {
          var deleteParams = {
            QueueUrl: queueURL,
            ReceiptHandle: data.Messages[0].ReceiptHandle
          };
          sqs.deleteMessage(deleteParams, function(err, data) {
            if (err) {
              console.log("Delete Error", err);
            } else {
              console.log("Message Deleted", data);
            }
          });
        }
      });

}

setInterval(receiver, 3000);