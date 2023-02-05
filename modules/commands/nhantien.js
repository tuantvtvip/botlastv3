const coinsup = 500000
module.exports.config = {
	name: "nhantien",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Nhận tiền mỗi 12h",
	commandCategory: "Người Dùng",
    cooldowns: 5000,
    envConfig: {
    cooldownTime: 300000 
}
  };
module.exports.run = async ({ event, api, Currencies, args }) => {
    const { threadID, messageID, senderID } = event;
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    const cooldownTime = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldownTime - (Date.now() - (data.workTime || 0)) > 0) {
        var time = cooldownTime - (Date.now() - data.workTime),
            seconds = Math.floor( (time/1000) % 60 ),
            minutes = Math.floor( (time/1000/60) % 60 ),
            hours = Math.floor( (time/(1000*60*60)) % 24 );
                 const res = await axios.get("https://jrt-api.nguyenhaidang.ml/loli");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
						return api.sendMessage({ body: `𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 𝐭𝐢𝐞̂̀𝐧, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐮̛𝐨̛̀𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜\n𝐓𝐡𝐮̛̉ 𝐥𝐚̣𝐢 𝐬𝐚𝐮 ${hours} giờ ${minutes} 𝐩𝐡𝐮́𝐭 ${(seconds < 10 ? "0" : "")}${seconds} 𝐠𝐢𝐚̂𝐲!`,
						 attachment: download }, event.threadID, event.messageID);
}
    else {
        const job = [
            "daily"
        ];
        await Currencies.increaseMoney(event.senderID, parseInt(coinsup));
                 const res = await axios.get("https://jrt-api.nguyenhaidang.ml/instagram");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
						return api.sendMessage({ body: `𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 + ${coinsup}$💸.\n𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐧𝐠𝐚̀𝐲 𝐦𝐨̛́𝐢 𝐭𝐡𝐚̣̂𝐭 𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐯𝐚̀ 𝐯𝐮𝐢 𝐯𝐞̉ 𝐛𝐞̂𝐧 𝐠𝐢𝐚 đ𝐢̣𝐧𝐡 𝐯𝐚̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐚̣̂𝐧.`,
                  attachment: download }, event.threadID, event.messageID);
	}
  return api.sendMessage(reply, threadID, messageID);
}