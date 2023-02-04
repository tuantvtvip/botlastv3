module.exports.config = {
  name: "plan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Thông Tin Admin.",
  commandCategory: "𝐓𝐢𝐞̣̂𝐧 𝐈́𝐜𝐡",
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
"https://i.imgur.com/PpF4RGc.gif",  // Vào Dùng Lệnh get link để lấy link gắn vào
    "https://i.imgur.com/21FpNC9.gif",
 ];
  var callback = () => api.sendMessage({body:`━━━━━━━━━━
𝐏𝐥𝐚𝐧 𝐄𝟏 『 𝟓𝟎𝐊 』
• 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭
• 𝐋𝐞̣̂𝐧𝐡 𝐑𝐢𝐞̂𝐧𝐠 
➣ 𝐬𝐞𝐧𝐝𝐧𝐨𝐭𝐢
➣ 𝐬𝐞𝐭𝐦𝐨𝐧𝐞𝐲 『 𝐬𝐞𝐭  』•『 𝐚𝐝𝐝 』
➣ 𝐭𝐡𝐚𝐦𝐠𝐢𝐚
━━━━━━━━━━━
𝐏𝐥𝐚𝐧 𝐄𝟐 『 𝟏𝟎𝟎𝐊 』
• 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭
• 𝐋𝐞̣̂𝐧𝐡 𝐑𝐢𝐞̂𝐧𝐠
➣ 𝐬𝐧𝐨𝐭𝐢 • 𝐬𝐞𝐧𝐝𝐧𝐨𝐭𝐢
➣ 𝐚𝐝𝐦𝐢𝐧 𝐚𝐝𝐝 『 𝐗𝟏 』
➣ 𝐭𝐡𝐚𝐦𝐠𝐢𝐚
➣ 𝐬𝐞𝐭𝐦𝐨𝐧𝐞𝐲 『 𝐬𝐞𝐭  』•『 𝐚𝐝𝐝 』
➣ 𝐨𝐮𝐭
━━━━━━━━━━━
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐝𝐦𝐢𝐧
➣ fb.me/tuantvt
━━━━━━━━━━━━`,attachment: fs.createReadStream(__dirname + "/cache/1.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.gif")).on("close",() => callback());
   }; 
// Muốn Nó Ra Video Thì Đuôi .mp4
// Muốn Nó Ra Ảnh Thì Đuôi .png
// Tạo Ở Cache
// Xong Run Lại Bot
// Sucesss
