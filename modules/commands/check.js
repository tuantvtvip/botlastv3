const axios = require("axios");
module.exports.config = {
	name: "check",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "Adonis",
	description: "",
	commandCategory: "Tiแปn รญch",
	usages: "check",
	cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": ""
    }
};

module.exports.run = async ({ args, api, event, Currencies, client }) => {
   const { threadID, senderID, messageID, type, mentions } = event;
   const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
   if (args.length == 0) return api.sendMessage(`===  ๐๐๐ก๐ ๐ฆ๐ฬ๐๐ ๐๐๐๐๐ === \n----------------\n๐ ๐ข๐๐ - ๐๐ต๐ฒ๐ฐ๐ธ ๐ป๐ฑ๐ณ๐ฏ => ๐๐ผฬฃ๐ฐ ๐๐ต๐ฎฬ๐ป๐ต ๐๐ถ๐ฒฬ๐ป ๐ฏ๐ถฬฃ ๐ฏ๐ฎ๐ ๐ฎ๐ฐ๐ฐ ๐ธ๐ต๐ผฬ๐ถ ๐ป๐ต๐ผฬ๐บ\n----------------\n๐ ๐ข๐๐ - ๐๐ต๐ฒ๐ฐ๐ธ ๐ฑ๐ฒ๐น => ๐๐ผฬฃ๐ฐ ๐๐ต๐ฎฬ๐ป๐ต ๐๐ถ๐ฒฬ๐ป ๐ธ๐ต๐ผฬ๐ถ ๐ป๐ต๐ผฬ๐บ ๐๐ต๐ฒ๐ผ ๐๐ผฬฬ ๐๐ถ๐ป ๐ป๐ต๐ฎฬฬ๐ป\n----------------\n๐ ๐ข๐๐ - ๐๐ต๐ฒ๐ฐ๐ธ ๐ผ๐ป๐น => ๐ซ๐ฒ๐บ ๐๐ต๐ผฬฬ๐ถ ๐ด๐ถ๐ฎ๐ป ๐ฏ๐ผ๐ ๐ฐ๐ต๐ฎฬฃ๐\n----------------\n๐ ๐ข๐๐ - ๐๐ต๐ฒ๐ฐ๐ธ ๐๐ => ๐๐ต๐ฒ๐ฐ๐ธ ๐๐ถฬ ๐น๐ฒฬฃฬ ๐๐ฬ๐ผฬ๐ป๐ด ๐๐ฎฬ๐ฐ ๐ฐ๐ฬ๐ฎ ๐ฏ๐ฎฬฃ๐ป\n----------------\n๐ ๐ข๐๐ - ๐๐ต๐ฒ๐ฐ๐ธ ๐ฏ๐ผ๐ => ๐๐ผฬฃ๐ฐ ๐ป๐ต๐ผฬ๐บ ๐ฑ๐ฬ๐ผฬฬ๐ถ ๐ฐ ๐๐ต๐ฎฬ๐ป๐ต ๐๐ถ๐ฒฬ๐ป\n----------------\n๐ ๐ข๐๐ - ๐ฐ๐ต๐ฒ๐ฐ๐ธ ๐๐๐ฎ๐น๐น => ๐๐ต๐ฒ๐ฐ๐ธ ๐๐ฎฬฬ๐ ๐ฐ๐ฎฬ ๐๐ถฬ ๐น๐ฒฬฃฬ ๐๐ฬ๐ผฬ๐ป๐ด ๐๐ฎฬ๐ฐ ๐ฐ๐ฎฬ๐ฐ ๐๐ต๐ฎฬ๐ป๐ต ๐๐ถ๐ฒฬ๐ป ๐๐ฟ๐ผ๐ป๐ด ๐ฏ๐ผ๐\n----------------\n๐ ๐ข๐๐ - ๐๐ต๐ฒ๐ฐ๐ธ ๐ฐ๐ผ๐๐ถ๐ฑ => ๐ซ๐ฒ๐บ ๐๐ต๐ผฬ๐ป๐ด ๐๐ถ๐ป ๐ฐ๐ผ๐๐ถ๐ฑ\n----------------\n๐ ๐ข๐๐ - ๐๐ต๐ฒ๐ฐ๐ธ ๐บ๐ฎ๐๐บ๐ฎ๐ป => ๐ซ๐ฒ๐บ ๐ง๐ถฬ ๐น๐ฒฬฃฬ % ๐บ๐ฎ๐ ๐บ๐ฎฬฬ๐ป ๐ฐ๐ฬ๐ฎ ๐ฏ๐ฎฬฃ๐ป ?\n----------------\n๐ ๐ข๐๐ - ๐๐ต๐ฒ๐ฐ๐ธ ๐ฐ๐ผ๐ป๐ => ๐ซ๐ฒ๐บ ๐๐ถฬ ๐น๐ฒฬฃฬ % ๐ฐ๐ผฬ ๐ป๐ด๐ฬ๐ผฬฬ๐ถ ๐๐ฒฬ๐\n----------------\n๐ ๐ข๐๐ - ๐๐ต๐ฒ๐ฐ๐ธ ๐ป๐๐ฑ๐ฒ => ๐๐ต๐ฒ๐ฐ๐ธ ๐ป๐ต๐ฬฬ๐ป๐ด ๐ฎฬ๐ป๐ต ๐ด๐ผฬฬฃ๐ถ ๐ฐ๐ฎฬ๐บ\n----------------\n=== ใ${timeNow}ใ ===`, event.threadID, event.messageID);
    var arr = [];
    var mention = Object.keys(event.mentions);
    const data = await api.getThreadInfo(event.threadID);
    if (args[0] == "ndfb") {// kick ngฦฐแปi dรนng fb
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());

    if (!find) return api.sendMessage(`[๐] => ๐๐ฬฃ๐ง ๐ฏ๐ฬ ๐๐จ๐ญ ๐๐ฬฬ๐ง ๐ฅ๐ฬ ๐ช๐ฎ๐ฬ๐ง ๐ญ๐ซ๐ขฬฃ ๐ฏ๐ข๐ฬ๐ง !`,event.threadID);
      let storage = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "gender": value.gender});
        for (const user of storage) {
            if (user.gender == undefined) api.removeUserFromGroup(user.id,event.threadID)
        }return;
    }  else if (args[0] == "del") {// lแปc thร nh viรชn theo sแป tin nhแบฏn bแบกn cแบงn
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());
    if (!find) return api.sendMessage(` ๐๐ฬฃ๐ง ๐ฏ๐ฬ ๐๐จ๐ญ ๐๐ฬฬ๐ง ๐ฅ๐ฬ ๐ช๐ฎ๐ฬ๐ง ๐ญ๐ซ๐ขฬฃ ๐ฏ๐ข๐ฬ๐ง !`,event.threadID);
    if (!args[1]) return api.sendMessage(`[๐] => ๐๐๐๐: ๐๐ก๐๐๐ค ๐๐๐ฅ => ๐ฌ๐จฬฬ ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐๐ฬฬ๐ง ๐ฅ๐จฬฃ๐`,event.threadID);
      let storage = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = (await Currencies.getData(user.id)).exp;
            if (typeof countMess == "undefined") await Currencies.setEXP(mention, parseInt(0))
           // if (countMess ==  undefined) api.removeUserFromGroup(user.id,event.threadID)
            if (countMess <= args[1]) setTimeout(function() { api.removeUserFromGroup(user.id,event.threadID) }, 2000);
        } return;
    }else if (args[0] == "covid") {
      const axios_1 = require("axios");
  const moment = require("moment-timezone");
  var time = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
   let fetchdata = await axios_1.get("https://static.pipezero.com/covid/data.json");
  var jsondata = (await fetchdata.data).total;
  var vn = (await fetchdata.data).overview[6];
  var year = vn.date + '-' + time;
  var world = jsondata.world,
    nhiemtg = world.cases,
    chettg = world.death,
    hoiphuctg = world.recovered,
    //////////////////////////////
    nhiemvn = vn.cases,
    chetvn = vn.death,
    hoiphucvn = vn.recovered,
    dieutrivn = vn.treating,
    //////////////////////////////
    nhiemvn7days = vn.avgCases7day,
    hoiphucvn7days = vn.avgRecovered7day,
    chetvn7days = vn.avgDeath7day,
    //////////////////////////////
    ptchetvn = Math.round((chetvn * 100) / nhiemvn),
    pthoiphucvn = Math.round((hoiphucvn * 100) / nhiemvn),
    ptchettg = Math.round((chettg * 100) / nhiemtg),
    pthoiphuctg = Math.round((hoiphuctg * 100) / nhiemtg),
    pthoiphucvn = pthoiphucvn.toString().split(".")[0],
    ptdieutrivn = (100 - pthoiphucvn - ptchetvn).toString().split(".")[0];
  /////////////////////////////////
  ptchetvn = ptchetvn.toString().split(".")[0];
  pthoiphuctg = pthoiphuctg.toString().split(".")[0];
  ptchettg = ptchettg.toString().split(".")[0];
  return api.sendMessage(
    "====== ๐๐ก๐ฬฬ ๐๐ข๐จฬฬ๐ข ======\n" +
    `๐ท ๐๐ก๐ข๐ฬฬ๐ฆ: ${nhiemtg}\n` +
    `๐ ๐๐จฬฬ๐ข ๐ฉ๐ก๐ฎฬฃ๐: ${hoiphuctg} (${pthoiphuctg}%)\n` +
    `๐ ๐๐ฎฬฬ ๐ฏ๐จ๐ง๐ : ${chettg} (${ptchettg}%)\n` +
    "====== ๐๐ข๐ฬฃฬ๐ญ ๐๐๐ฆ ======\n" +
    `๐ท ๐๐ก๐ข๐ฬฬ๐ฆ: ${nhiemvn}\n` +
    `๐ ๐๐ก๐ฎฬฬ๐ ๐๐ซ๐ขฬฃ: ${dieutrivn} (${ptdieutrivn}%)\n` +
    `๐ ๐๐จฬฬ๐ข ๐ฉ๐ก๐ฎฬฃ๐: ${hoiphucvn} (${pthoiphucvn}%)\n` +
    `๐ ๐๐ฎฬฬ ๐ฏ๐จ๐ง๐ : ${chetvn} (${ptchetvn}%)\n` +
    `๐คจ ๐๐ก๐ข๐ฬฬ๐ฆ ๐ ๐ง๐ ๐ฬ๐ฒ: ${nhiemvn7days}\n` +
    `โค ๐๐จฬฬ๐ข ๐ฉ๐ก๐ฎฬฃ๐ ๐ ๐ง๐ ๐ฬ๐ฒ: ${hoiphucvn7days}\n` +
    `โ ๏ธ ๐๐ฎฬฬ ๐ฏ๐จ๐ง๐  ๐ ๐ง๐ ๐ฬ๐ฒ: ${chetvn7days}\n\n` +
    //`Tin tแปฉc: ${news.vietnam}\n` +
    `Cแบญp nhแบญt: ${year}`,
    event.threadID, event.messageID
  );
}
    else if (args[0] == "box") {
      if (event.senderID != "100075885595966") return api.sendMessage(`cรบt`, event.threadID, event.messageID)
            let number = [];
            api.getThreadList(50, null, ["INBOX"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["OTHER"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["PENDING"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["unread"], (err, list) => getInfo({ list }))
            var getInfo = ({ list }) => {
              list.forEach(info => {
                if (info.name == "" || info.participants < 8 || info.imageSrc == null) { 
                  number.push(info);
                  api.removeUserFromGroup(api.getCurrentUserID(),info.threadID);
                  api.deleteThread(info.threadID, (err) => {
                    Threads.delData(info.threadID)
                    if(err) return console.error(err);
                    });
                }
              })
            }
           return api.sendMessage(`[๐ป] => ๐๐ข๐ฬฬ๐ง ๐ก๐ฬ๐ง๐ก ๐ฅ๐จฬฃ๐ ๐ง๐ก๐ฎฬฬ๐ง๐  ๐ง๐ก๐จฬ๐ฆ ๐ค๐ก๐จฬ๐ง๐  ๐ญ๐ฬ๐ง ๐ฏ๐ฬ ๐๐ฎฬ๐จฬฬ๐ข ๐ ๐ญ๐ก๐ฬ๐ง๐ก ๐ฏ๐ข๐ฬ๐ง.`,threadID)
    }

    else if (args[0] == "onl") {
      	let time = process.uptime();
	let hours = Math.floor(time / (60 * 60));
	let minutes = Math.floor((time % (60 * 60)) / 60);
	let seconds = Math.floor(time % 60);
      const timeStart = Date.now();
       return api.sendMessage('[ ๐๐๐ ๐ฆ] => ๐๐ฬฃฬ ๐ญ๐ก๐จฬฬ๐ง๐  ๐ค๐ข๐ฬฬ๐ฆ ๐ญ๐ซ๐ ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ฏ๐ฎ๐ข ๐ฅ๐จฬ๐ง๐  ๐๐ก๐จฬฬ...!\nโโโโโโโโโโโโ 99%', event.threadID, (err, info) => {
    setTimeout(() => {
      api.sendMessage(`[ ๐๐๐๐ ๐ฆ] - ๐๐๐๐๐ \n[ ๐๐๐๐๐ ๐ฆ] - ๐๐ข๐ง๐ : ${(Date.now() - timeStart)}๐ฆ๐ฌ \n[ ๐๐๐๐๐๐ ๐ฆ] - ๐๐จ๐ญ ๐ญ๐ข๐ฆ๐ ๐จ๐ง๐ฅ๐ข๐ง๐: ${hours}:${minutes}:${seconds}`, event.threadID, event.messageID);
    }, 200);
  }, event.messageID);
} else if (args[0] == "mayman") {
const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var tile = Math.floor(Math.random() * 101); 
    var link = ["https://i.imgur.com/gWACvcO.jpg",
    "https://i.imgur.com/mpHit7i.jpg",
    "https://i.imgur.com/glHFetf.jpg",
    "https://i.imgur.com/CxwzNMv.png",
    "https://i.imgur.com/RVerKnc.jpg"
    ];
var callback = () => api.sendMessage({body:`โ ๐๐ขฬ ๐ฅ๐ฬฃฬ ๐ฆ๐๐ฒ ๐ฆ๐ฬฬ๐ง ๐๐ฎฬ๐ ๐๐ฬฃ๐ง ๐ฅ๐ฬ ${tile}% โ`, attachment: fs.createReadStream(__dirname + "/cache/tile.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tile.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tile.jpg")).on("close",() => callback());
 }
      else if (args[0] == "cony") {
const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var tile = Math.floor(Math.random() * 101); 
    var link = ["https://i.imgur.com/AM8dK12.gif",
"https://i.imgur.com/aNl8mIb.gif",
"https://i.imgur.com/UCmHAty.gif",
"https://i.imgur.com/MFaeP78.gif",
"https://i.postimg.cc/xjGxQfqW/Damp-Offbeat-Cuckoo-size-restricted.gif",
"https://i.postimg.cc/L5SxP7QC/Fg-SQXwn-U0-GEln-Z3-SNg-HOi-ECx7-Toh-P3-Mu-Hfavsfw-WZKXI0-Uo2-MDt-LQvn-KATQs-HDiv-WMX-e-BFwkcd-Av-QLk1-IIVd-Gd-Orn-QF2ip135q.gif",
"https://i.postimg.cc/hGHyDhLq/tumblr-06326cc87c2807008891104ee22ed943-0fd2e4f6-540.gif",
"https://i.postimg.cc/XvZ169y8/tumblr-60453c020ab1a1220e18395b0b7b2d58-937b2e9f-540.gif",
"https://i.postimg.cc/ZKTfKGd0/tumblr-e4f1fec723d0760d84f6557adcafd19c-3187d901-540.gif"
    ];
var callback = () => api.sendMessage({body:`๐ธ ๐๐ต๐ฬ๐ฐ ๐บ๐ฬฬ๐ป๐ด ๐ฏ๐ฎฬฃ๐ป ๐ป๐ต๐ฒฬ\n๐ธ ๐ก๐ฒฬฬ๐ ๐ฏ๐ฎฬฃ๐ป ๐๐ผฬ ๐๐ถฬ๐ป๐ต ๐ฐ๐ฟ๐๐๐ต ๐๐ต๐ถฬ ${tile}% ๐น๐ฎฬ ๐ฏ๐ฎฬฃ๐ป ๐๐ฒฬ ๐ฐ๐ผฬ ๐ป๐ด๐ฬ๐ผฬฬ๐ถ ๐๐ฒฬ๐ โ`, attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
 }
    else if (args[0] == "nude") {
  var linkanh =  event.messageReply.attachments[0].url || args.join(" ");
	if(!linkanh) return api.sendMessage('Vui lรฒng reply hoแบทc nhแบญp link 1 hรฌnh แบฃnh!!!', event.threadID, event.messageID)
const res = await axios.get(`https://manhict.tech/checknude?key=mzk_G8D0BIPFX70FXUYEUL5&link=${encodeURIComponent(linkanh)}`);    
var img = res.data.NSFW_Prob;
    return api.sendMessage(`๐๐ฒฬ ๐ฅ๐ฬฃฬ ๐ง๐ฎ๐๐ ๐๐ฎฬ๐ ๐ฬ๐ง๐ก ๐ฅ๐ฬ: ${img}`, event.threadID, event.messageID);
	
} else if (args[0] == "ttall") {
      let threadInfo = await api.getThreadInfo(event.threadID);
        let number = 0, msg = "", storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            if (user.name != null) exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
        });
         let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        for (const lastData of exp) {
            number++;
            msg += `${number}. ${(lastData.name) == null || undefined  ? "Khรดng tรชn" : lastData.name} vแปi ${lastData.exp} ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง\nโข---------------------------โข\n`;
        }
        return api.sendMessage(`๐๐๐ก๐๐๐ค ๐๐ฎฬ๐จฬ๐ง๐  ๐๐ฬ๐ ๐๐ซ๐จ๐ง๐  ๐๐จ๐ฑ๐\n\n` + msg +`\nยป ๐น ๐๐ขฬ ๐ฅ๐ฬฃฬ ๐ญ๐ฎฬ๐จฬ๐ง๐  ๐ญ๐ฬ๐ ๐๐จ๐ฑ: ${(exp[rank].exp).toFixed(0)}%\nยป ๐ฌ ๐๐จฬฬ๐ง๐  ๐ฌ๐จฬฬ ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐๐จ๐ฑ: ${threadInfo.messageCount}\nยป ๐ ๐๐ก๐ขฬ ๐ญ๐ขฬ๐ง๐ก ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ค๐ฬฬ ๐ญ๐ฎฬฬ ๐ค๐ก๐ข ๐๐จ๐ญ ๐ฏ๐ฬ๐จ ๐๐จ๐ฑ ๐ญ๐ก๐จฬ๐ข ๐ง๐ก๐ฬ ๐\n     โฐ=== ใ${timeNow}ใ ===โฐ\n`, threadID, messageID);
    }
    
    else if (args[0] == "tt") {
        let storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
		    if (a.id < b.id) return -1;
        });
        let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        return api.sendMessage(`\n๐๐๐ก๐๐๐ค ๐๐ฎฬ๐จฬ๐ง๐  ๐๐ฬ๐ ๐๐ฬ ๐๐ก๐ฬ๐ง๐\n\nยป ๐ป ๐๐ฌ๐๐ซ `+`๐ก๐ข๐ฬฃฬ๐ง ๐ง๐ฬฬ๐ฆ ๐ฏ๐ขฬฃ ๐ญ๐ซ๐ขฬ ๐ญ๐จ๐ฉ ${rank} ๐ฏ๐จฬฬ๐ข ${infoUser.exp} ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง\nยป ๐ค ๐๐ฬ๐ง: ${infoUser.name}\nยป๏ธ ๐ฅ ๐๐ฬฃ๐ง๐ : ${rank} \nยป ๐ฌ ๐๐ข๐ง ๐ง๐ก๐ฬฬ๐ง: ${infoUser.exp}\nยป ๐ ๐๐๐ง๐ค: ${rank + 1}\nยป ๐น ๐๐ขฬ ๐ฅ๐ฬฃฬ ๐ญ๐ฎฬ๐จฬ๐ง๐  ๐ญ๐ฬ๐: ${(exp[rank].exp).toFixed(0)}%\nยป โฐ ๐๐ข๐ฆ๐: ${timeNow}`, event.threadID,event.messageID);
    }
  else if (args[0] == "()") {
        let storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
		    if (a.id < b.id) return -1;
        });
        let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        return api.sendMessage(`\n๐๐๐ก๐๐๐ค ๐๐ฎฬ๐จฬ๐ง๐  ๐๐ฬ๐ ๐๐ฬ ๐๐ก๐ฬ๐ง๐\n\nยป ๐ป ๐๐ฌ๐๐ซ `+`๐ก๐ข๐ฬฃฬ๐ง ๐ง๐ฬฬ๐ฆ ๐ฏ๐ขฬฃ ๐ญ๐ซ๐ขฬ ๐ญ๐จ๐ฉ ${rank} ๐ฏ๐จฬฬ๐ข ${infoUser.exp} ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง\nยป ๐ค ๐๐ฬ๐ง: ${infoUser.name}\nยป๏ธ ๐ฅ ๐๐ฬฃ๐ง๐ : ${rank} \nยป ๐ฌ ๐๐ข๐ง ๐ง๐ก๐ฬฬ๐ง: ${infoUser.exp}\nยป ๐ ๐๐๐ง๐ค: ${rank + 1}\nยป ๐น ๐๐ขฬ ๐ฅ๐ฬฃฬ ๐ญ๐ฎฬ๐จฬ๐ง๐  ๐ญ๐ฬ๐: ${(exp[rank].exp).toFixed(0)}%\nยป โฐ ๐๐ข๐ฆ๐: ${timeNow}`, event.threadID,event.messageID);
    }
  
    }