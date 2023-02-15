const User = require('../models/keyword')
const Sequelize = require('sequelize')


    // User.findAll({
    // attributes: [
    //   "id",
    //   "word",
    //   "answer",
    //   "type",
    // ]})


exports.sendText = (event) => {
    let msg;
    let msgText = event.message.text.toLowerCase().trim();
    
    //study
    if(msgText.includes("สวัสดี")) {
        msg = { type: 'text', text: 'Hi' };
    } else if(msgText.includes("555")) {
        msg = { type: 'text', text: 'ตลกอะไรหรอครับ?:('}
    } 
    else if(msgText === 'liff') {
        msg = { type: 'text', text: "https://liff.line.me/1657721392-6RJwoNwr"}
    } else if(msgText === 'Success') {
        msg = { type: 'text', text: "Arigato!"}
    } 
    //listing
    else if(msgText === 'คำถามในหมวดหมู่วิชาการ') {
        msg = { type: 'text', text: 'คำถามในหมวดหมู่วิชาการ\n-วิชาเสรี\n-ตัวย่อวิชา\n-เกียรตินิยม\n-การคำนวณเกรด\n-ข้อมูลการยื่นใบลาออก\n-ใบเสร็จ\n-การยื่นเปลี่ยนข้อมูลส่วนตัว\n-การโอนย้ายหน่วยกิต\n-การสอบ SWU set'}
    } else if(msgText === 'คำถามในหมวดหมู่ทุนการศึกษา กยศ') {
        msg = { type: 'text', text: 'คำถามในหมวดหมู่ทุนการศึกษา กยศ\n-การขอทุน\n-ชั่วโมงจิตอาสา\n-กสรคืนเงิน\n-แจ้งความประสงค์ไม่ต้องการกู้กยศต่อ\n-ไลน์กลุ่มกยศ'}
    } else if(msgText === 'คำถามในหมวดหมู่อาคารเรียน') {
        msg = { type: 'text', text: 'คำถามในหมวดหมู่อาคารเรียน\n-แผนที่ภายในมศว\n-ที่อยู่ของมศวประสานมิตร\n-ที่อยู่ของมศวองครักษ์\n-รหัสตึก\n-ตึกสวัสดิการต่างๆภายในมหาวิทยาลัย'}
    } else if(msgText === 'คำถามในหมวดหมู่ประกันภัย การรักษาพยาบาล') {
        msg = { type: 'text', text: 'คำถามในหมวดหมู่ประกันภัย การรักษาพยาบาล\n-เอกสารที่ต้องใช้ในกรณีเข้ารับการรักษา\n-เคลมค่าประกันอย่างไร\n-รายละเอียดประกัน\n-โรงพยาบาลที่สามารถใช้ได้'}
    } else if(msgText === 'คำถามในหมวดหมู่อื่นๆ') {
        msg = { type: 'text', text: 'คำถามในหมวดหมู่อื่นๆ\n-แจ้งของหายภายในอาคาร\n-การทำเรื่องขอยืมอุปกรณ์\n-สำนักงานที่ดูแลในส่วนต่างๆ\n-การติดตามการดำเนินงาน\n-การทำบัตรนิสิตใหม่\n-การยืมอุปกรณ์ในวิทยาลัย'}
    } 
    
    //text answer
    else if(msgText.includes("swu-set")) {
        msg = { type: 'text', text: "ข้อมูลการสอบ swu-set สามารตรวจสอบได้ที่: https://swu-set.medium.com/"}
    } 
    //answer component
    else if(msgText.includes("แผนที่")) {
        msg = { "type": "location",
                "title": "my location",
                "address": "114 Soi Sukhumvit 23, Khwaeng Khlong Toei Nuea, Khet Watthana, Krung Thep Maha Nakhon 10110",
                "latitude": 13.745441950248404,
                "longitude": 100.5653669576712
    } }


    else if(msgText.includes("เดินทาง")) {
        msg = { type: 'image', 
               "originalContentUrl": process.env.BASE_URL + "/images/static/MapSWU_0.png",
               "previewImageUrl": process.env.BASE_URL + "/images/static/MapSWU_0.png"
    } }

    // "type": "image",
    //         "originalContentUrl": process.env.BASE_URL + "/images/static/MapSWU_0.png",
    //         "previewImageUrl": process.env.BASE_URL + "/images/static/MapSWU_0.png"
    
    else if(msgText.includes('รัก')) {
        msg = {
            "type": "sticker",
            "packageId": "11538",
            "stickerId": "51626495"}
    }
    
    else {
        msg = { type: 'text', text: 'ไม่เข้าใจในคำถามครับ'}
    }
    
    return msg;
}


/* 
:search for the specific word in text
string.includes(word)
string.indexOf(word) !== -1
string.toLowerCase().includes(word.toLowerCase())
*/

/* 
:open liff
liff.openWindow({
  url: "https://your-liff-app.com",
  external: true,
  height: 500,
  width: 500,
  features: "location=no,toolbar=no",
  name: "My LIFF App"
  });
/
liff.init().then(() => {
  liff.openWindow({
    url: "https://your-liff-app.com",
    external: true
  });
});


*/