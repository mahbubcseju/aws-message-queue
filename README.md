# aws-message-queue

### Long pulling of messages from AWS sqs queues.

First create a config file in ~/.aws/credentials (mac/linux)
Then store the aws keys in that file. After that run any of the following files,

##### for  create a queue run:
```
   node create_queue.js
```

##### for  list the queues:
```
   node list.js
```
##### for sending message in a  time interval:
```
   node send_message.js
```
##### for receiving message in a time interval:
```
   node receive_message.js
```

