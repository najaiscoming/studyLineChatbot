exports.sendLocation = (event) => {
    let msg = {
        "type": "location",
        "title": "my location",
        "address": "114 Soi Sukhumvit 23, Khwaeng Khlong Toei Nuea, Khet Watthana, Krung Thep Maha Nakhon 10110",
        "latitude": 13.745441950248404,
        "longitude": 100.5653669576712
        };
    
    return msg;
};
