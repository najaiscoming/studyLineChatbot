const Keyword = require("../../models/keyword");

exports.createKeyword = async (questionp, answerp, typep) => {
    return await Keyword.create({
        word: questionp,
        answer: answerp,
        type: typep
    })
}

exports.checkKeyword = async (wordID) => {
    return await Keyword.findOne({ where: {id: wordID}})
}

exports.removeKeyword = async (wordID) => {
    return await Keyword.destroy({ where: {id: wordID}})
}

