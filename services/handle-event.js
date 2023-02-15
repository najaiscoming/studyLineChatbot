const config = require('../config/line');
const service = require('./handle-message');
const { handlePostback } = require('./handle-postback');

// event handler
exports.handleEvent = (event) => {
    switch (event.type) {
        case "message":
            switch (event.message.type) {
                case 'text':
                    service.handleMessage(event);
                    break;
                case 'sticker':
                    console.log('sticker message')
                    break;
                default:
                    throw new Error('Unknown Message' + JSON.stringify(event.message.type));
            }
            break;
        case "postback":
            // console.log('promotionID: ' + event.postback.data);
            handlePostback(event);
            break;
        case "follow":
            console.log("gain follower" + event.source.userID);
            break;
        case "unfollow":
            console.log("Someone unfollow you" + event.source.userID);
            break;
        default:
            throw new Error('Unknown Event' + JSON.stringify(event));
    }
  }

  