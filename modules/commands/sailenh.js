module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "cc",
  description: "ghi mแปi prefix lร  ra dmm",
  commandCategory: "send",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const axios = require('axios');
const request = require('request');
const fs = require("fs");
module.exports.run = async({api,event,args}) => {
  const { threadID, messageID, senderID, body } = event;
const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
	const res = await axios.get(`https://caochungdat.me/docs/other/thinh`);
var thinh = res.data.url;
  const res1 = await axios.get(`https://caochungdat.me/docs/images/canh`);
  var img = res1.data.url;
	var callback = () => api.sendMessage({body:`๐๐ก๐จฬฬ๐ข ๐ ๐ข๐๐ง: ${gio}\nโโโโโ  ใ  tuantvt ๐ ใ    โโโโโ\n๐๐ฬ๐ฎ ๐๐ก๐ขฬ๐ง๐ก:ใ ${thinh} ใ`,attachment: fs.createReadStream(__dirname + "/cache/333.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/333.png"), event.messageID);	
      return request(encodeURI(`${img}`)).pipe(fs.createWriteStream(__dirname+'/cache/333.png')).on('close',() => callback());
   };