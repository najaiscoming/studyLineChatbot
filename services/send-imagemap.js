exports.sendImagemap = (event) => {
    let msg = {   
            "type": "imagemap",
            "baseUrl": process.env.BASE_URL + "/images/static/imagemap",
            "altText": "Please Choose One",
            "baseSize": {
              "width": 1040,
              "height": 1040
            },
            "video": {
              "originalContentUrl": process.env.BASE_URL + "/images/static/imagemap/video.mp4",
              "previewImageUrl": process.env.BASE_URL + "/images/static/imagemap/preview.jpg",
              "area": {
                "x": 0,
                "y": 0,
                "width": 1040,
                "height": 521
              },
              "externalLink": {
                "linkUri": "https://google.co.th",
                "label": "See More"
              }
            },
            "actions": [
              {
                "type": "uri",
                "linkUri": "https://supreme.swu.ac.th/portal/index.php",
                "area": {
                  "x": 0,
                  "y": 521,
                  "width": 520,
                  "height": 520
                }
              },
              {
                "type": "message",
                "text": "idiot lmao",
                "area": {
                  "x": 521,
                  "y": 521,
                  "width": 520,
                  "height": 520
                }
              }
            ]
        };
    
    return msg;
};