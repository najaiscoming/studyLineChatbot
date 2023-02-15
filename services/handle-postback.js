const {client} = require("../config/line");

exports.handlePostback = (event) => {
    let postbackData = event.postback.data; //String

    let data = JSON.parse(postbackData);

    let msg;
    if (data.type === 'roompromotion') {
        console.log(data.id); 
        msg = [
            { type: 'text', text: 'Promotion Detail' },
            { type: 'text', text: 'Price : ' + data.price },
        ];
    }

    // push message / broadcast 
    // console.log('User Id: ' + event.source.userId);
    // let msg2 = { type: 'text', text: 'hi' };
    // return client.pushMessage(event.source.userId, msg2);
    // return client.broadcast(msg2);

    return client.replyMessage(event.replyToken, msg);
}