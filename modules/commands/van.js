module.exports.config = {
	name: "van",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "JRT",
	description: "Chỉ là prefix thôi~~",
	commandCategory: "Công cụ",
	usages: "prefix",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const res = await axios.get("https://jrt-api.nguyenhaidang.ml/love");
    var love = res.data.data;
  const req = await axios.get("https://jrt-api.nguyenhaidang.ml/bancobiet");
    var bancobiet = req.data.data;
  const jrt = await axios.get("https://jrt-api.nguyenhaidang.ml/thayboi");
    var thayboi = jrt.data.data;
  const rosie· = await axios.get("https://jrt-api.nguyenhaidang.ml/cadao");
    var cadao = rosie·.data.data;
  const mai = await axios.get("https://jrt-api.nguyenhaidang.ml/joker");
    var joker = mai.data.data;
  
    axios.get('https://jrt-api.nguyenhaidang.ml/gai').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function() {
					api.sendMessage({body: `[⚜️] Ca dao [⚜️]\n${cadao}\n=================\n[⚜️] Thính [⚜️]\n${love}\n=================\n[⚜️] Bạn có biết [⚜️]\n${bancobiet}\n=================\n[⚜️] Xem bói [⚜️]\n${thayboi}\n=================\n[⚜️] Câu nói hay [⚜️]\n${joker}`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}