exports.sendFlexCosciInfo = (event) => {
    let msg = {
            "type": "flex",
            "altText": "Cosci Information",
            "contents": {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/317783663_6088043574559787_6057877666647820401_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH5gYs46r42D6bjCffkXOSoGGeoMJ8RWdMYZ6gwnxFZ08E7VGBVbYdgTa-21dv521-5sOb7kxloNpU_k1EmMzq9&_nc_ohc=c_uS5zgbZWUAX-oMvhF&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfAiZNuKPWvEutuwqRnU1RXnTgJqgL8K-oFgGDH6v13MlQ&oe=6395328A",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "action": {
                    "type": "uri",
                    "uri": "http://linecorp.com/"
                    }
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "text": "COSCI Contact",
                        "weight": "bold",
                        "size": "xl",
                        "color": "#160647",
                        "style": "normal",
                        "align": "start",
                        "gravity": "top"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "margin": "lg",
                        "spacing": "sm",
                        "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                            {
                                "type": "text",
                                "text": "Place",
                                "color": "#aaaaaa",
                                "size": "sm",
                                "flex": 1
                            },
                            {
                                "type": "text",
                                "text": "114 Soi Sukhumvit 23, Khwaeng Khlong Toei Nuea, Khet Watthana, Krung Thep Maha Nakhon 10110",
                                "wrap": true,
                                "color": "#666666",
                                "size": "sm",
                                "flex": 5
                            }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                            {
                                "type": "text",
                                "text": "Time",
                                "color": "#aaaaaa",
                                "size": "sm",
                                "flex": 1
                            },
                            {
                                "type": "text",
                                "text": "08:00 - 17:00",
                                "wrap": true,
                                "color": "#666666",
                                "size": "sm",
                                "flex": 5
                            }
                            ]
                        }
                        ]
                    }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                        {
                            "type": "button",
                            "style": "link",
                            "height": "sm",
                            "action": {
                            "type": "uri",
                            "label": "WEBSITE",
                            "uri": "http://cosci.swu.ac.th"
                            },
                            "color": "#F5F5F5"
                        }
                        ],
                        "margin": "sm",
                        "backgroundColor": "#1A34FF",
                        "cornerRadius": "10px"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": []
                    }
                    ],
                    "flex": 0
                }
            }
        };
    
    return msg;
};
