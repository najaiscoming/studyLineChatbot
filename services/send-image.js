exports.sendImage = (event) => {
    let msg = {
            "type": "image",
            "originalContentUrl": process.env.BASE_URL + "/images/static/MapSWU_0.png",
            "previewImageUrl": process.env.BASE_URL + "/images/static/MapSWU_0.png"
        };
    
    return msg;
};