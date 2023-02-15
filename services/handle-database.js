
const { client } = require("../config/line")
const addDB = require("../services/keyword/index")

exports.handleDatabase = (event) => {
    const question = "testImg1"
    const answer = "/images/static/MapSWU_0.png"
    const type = 2

    addDB.createKeyword(question, answer, type)
    
    console.log(question, answer, type)
}