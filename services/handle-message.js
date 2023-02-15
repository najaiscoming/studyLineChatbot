const { text } = require('express');
const config = require('../config/line');
const { createRichMenu } = require('./create-richmenu');
const { deleteRichMenu } = require('./delete-richmenu');
const { handleDatabase } = require('./handle-database');
const { handlePostback } = require('./handle-postback');
const { sendFlexCosciInfo } = require('./send-flex-cosci-info');
const { sendFlexCovidInfo } = require('./send-flex-covid-info');
const { sendFlexPromotion } = require('./send-flex-promotion');
const { sendImage } = require('./send-image');
const { sendImagemap } = require('./send-imagemap');
const { sendLocation } = require('./send-location');
const { sendText } = require('./send-text');


exports.handleMessage = async (event) => {
    let msg;

    switch (event.message.text.toLowerCase().trim()) {
        case "image" :
            msg = sendImage();
            break;
        case "imagemap" :
            msg = sendImagemap();
            break;
        case "location" :
            msg = sendLocation();
            break;
        case "info" :
            msg = sendFlexCosciInfo();
            break;
        case "covid" :
            msg = await sendFlexCovidInfo();
            break;
        case "promotion" :
            msg = await sendFlexPromotion();
            break;
        case "open liff" :
            msg = event.message.text.toLowerCase("https://e23d-58-10-154-242.ngrok.io/app.html");
            break;
        case "roompromotion" :
            msg = await handlePostback();
            break;
        case "answer1" :
            msg = sendLocation();
            break
        case "addq" :
            msg = sendLocation();
            handleDatabase(event);
            break
        default :
            msg = sendText(event);
            break;
        
    }
  
    /* I should change it into if else

    let msg= event.message.text.toLowerCase().trim();

    if (msg === 'covid' || msg == 'covid') {

    } */

    

    return config.client.replyMessage(event.replyToken, msg);
}