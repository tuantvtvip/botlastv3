module.exports.config = {
  name: "plan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Thรดng Tin Admin.",
  commandCategory: "๐๐ข๐ฬฃฬ๐ง ๐ฬ๐๐ก",
  usages: "Admin",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/PpF4RGc.gif",  // Vร o Dรนng Lแปnh get link ฤแป lแบฅy link gแบฏn vร o
    "https://i.imgur.com/21FpNC9.gif",
 ];
  var callback = () => api.sendMessage({body:`โโโโโโโโโโ
๐๐ฅ๐๐ง ๐๐ ใ ๐๐๐ ใ
โข ๐๐๐ฆ๐ข๐ง ๐๐จ๐ญ
โข ๐๐ฬฃฬ๐ง๐ก ๐๐ข๐ฬ๐ง๐  
โฃ ๐ฌ๐๐ง๐๐ง๐จ๐ญ๐ข
โฃ ๐ฌ๐๐ญ๐ฆ๐จ๐ง๐๐ฒ ใ ๐ฌ๐๐ญ  ใโขใ ๐๐๐ ใ
โฃ ๐ญ๐ก๐๐ฆ๐ ๐ข๐
โโโโโโโโโโโ
๐๐ฅ๐๐ง ๐๐ ใ ๐๐๐๐ ใ
โข ๐๐๐ฆ๐ข๐ง ๐๐จ๐ญ
โข ๐๐ฬฃฬ๐ง๐ก ๐๐ข๐ฬ๐ง๐ 
โฃ ๐ฌ๐ง๐จ๐ญ๐ข โข ๐ฌ๐๐ง๐๐ง๐จ๐ญ๐ข
โฃ ๐๐๐ฆ๐ข๐ง ๐๐๐ ใ ๐๐ ใ
โฃ ๐ญ๐ก๐๐ฆ๐ ๐ข๐
โฃ ๐ฌ๐๐ญ๐ฆ๐จ๐ง๐๐ฒ ใ ๐ฌ๐๐ญ  ใโขใ ๐๐๐ ใ
โฃ ๐จ๐ฎ๐ญ
โโโโโโโโโโโ
๐๐๐๐๐๐จ๐จ๐ค ๐๐๐ฆ๐ข๐ง
โฃ fb.me/tuantvt
โโโโโโโโโโโโ`,attachment: fs.createReadStream(__dirname + "/cache/1.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.gif")).on("close",() => callback());
   }; 
// Muแปn Nรณ Ra Video Thรฌ ฤuรดi .mp4
// Muแปn Nรณ Ra แบขnh Thรฌ ฤuรดi .png
// Tแบกo แป Cache
// Xong Run Lแบกi Bot
// Sucesss
