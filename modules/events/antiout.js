module.exports.config = {
   name: "antiout",
   eventType: ["log:unsubscribe"],
   version: "0.0.1",
   credits: "DungUwU",
   description: "Listen events"
  };
  
  module.exports.run = async({ event, api, Threads, Users }) => {
   let data = (await Threads.getData(event.threadID)).data || {};
   if (data.antiout == false) return;
   if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
   const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
   const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝐭𝐮̛̣ 𝐫𝐨̛̀𝐢" : "𝐛𝐢̣ 𝐐𝐓𝐕 𝐥𝐨̣𝐜/𝐤𝐢𝐜𝐤";
   if (type == "𝐭𝐮̛̣ 𝐫𝐨̛̀𝐢") {
    api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
     if (error) {
      api.sendMessage(`𝐭𝐢𝐞̂́𝐜 𝐪𝐮𝐚́ 𝐛𝐨𝐭 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂𝐦 ${name} 𝐯𝐨̂ 𝐥𝐚̣𝐢 đ𝐮̛𝐨̛̣𝐜 𝐫𝐨̂̀𝐢😿`, event.threadID)
     } else api.sendMessage(`${name} 𝐨𝐮𝐭 đ𝐢 đ𝐚̂𝐮 đ𝐚̂́𝐲, 𝐭𝐡𝐢́𝐜𝐡 𝐨𝐮𝐭 𝐜𝐡𝐮̀𝐚 𝐤𝐡𝐨̂𝐧𝐠?,đ𝐚𝐧𝐠 𝐛𝐚̣̂𝐭 𝐚𝐧𝐭𝐢𝐨𝐮𝐭 𝐦𝐚̀ 𝐞 𝐥𝐦𝐚𝐨 𝐥𝐦𝐚𝐨🤨`, event.threadID);
    })
   }
  }