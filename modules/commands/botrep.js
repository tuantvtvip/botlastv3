module.exports.config = {
    name: "bot đẹp zai",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "tuantvt",
        description: "bot đẹp zai không cần lệnh",
        commandCategory: "NoPrefix",
        usages: "noprefix",
        cooldowns: 5,
        dependencies: {
            "fs-extra": ""
        }
    };
    module.exports.handleEvent = async({ api, event, Users }) => {
        const fs = global.nodemodule["fs-extra"];
        var { threadID, messageID, senderID } = event;
        var tag = (await Users.getData(senderID)).name;
        let output = "ad của bot đz ";
        let varinput = [ "tuan","tuantvt","tuanvip","tuandz" ];
        let varinput1 = [ "bot dz", "Bot dz", "bot vip" ,"bot xinh" ,"bot pro"];
        for (const input of varinput) {
            if (event.body.indexOf(input)==0 && event.body.length == input.length) {
            var job = ['Vui lòng nhắn riêng với ad của bot https://www.facebook.com/tuantvtvip',
            'ad tôi đang bận bạn có thể dùng callad',  
            'yêu hay sao mà gọi thế',
            'ad đang đợi bạn nhắn riếng'];
                 api.sendMessage(job[Math.floor(Math.random() * job.length)] + ' '  , threadID, messageID);
            }
        }
        for (const input of varinput1) {
            if (event.body.indexOf(input)==0 && event.body.length == input.length) {
            var job = ['Bạn cũng rất xinh gái đẹp zai ạ 😘'];
                 api.sendMessage(job[Math.floor(Math.random() * job.length)] + ' '  , threadID, messageID);
            }     
        }        
        }
        module.exports.run = function({}) {
    }