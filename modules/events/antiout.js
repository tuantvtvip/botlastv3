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
   const type = (event.author == event.logMessageData.leftParticipantFbId) ? "๐ญ๐ฎฬฬฃ ๐ซ๐จฬฬ๐ข" : "๐๐ขฬฃ ๐๐๐ ๐ฅ๐จฬฃ๐/๐ค๐ข๐๐ค";
   if (type == "๐ญ๐ฎฬฬฃ ๐ซ๐จฬฬ๐ข") {
    api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
     if (error) {
      api.sendMessage(`๐ญ๐ข๐ฬฬ๐ ๐ช๐ฎ๐ฬ ๐๐จ๐ญ ๐ค๐ก๐จฬ๐ง๐  ๐ญ๐ก๐ฬ๐ฆ ${name} ๐ฏ๐จฬ ๐ฅ๐ฬฃ๐ข ฤ๐ฎฬ๐จฬฬฃ๐ ๐ซ๐จฬฬ๐ข๐ฟ`, event.threadID)
     } else api.sendMessage(`${name} ๐จ๐ฎ๐ญ ฤ๐ข ฤ๐ฬ๐ฎ ฤ๐ฬฬ๐ฒ, ๐ญ๐ก๐ขฬ๐๐ก ๐จ๐ฎ๐ญ ๐๐ก๐ฎฬ๐ ๐ค๐ก๐จฬ๐ง๐ ?,ฤ๐๐ง๐  ๐๐ฬฃฬ๐ญ ๐๐ง๐ญ๐ข๐จ๐ฎ๐ญ ๐ฆ๐ฬ ๐ ๐ฅ๐ฆ๐๐จ ๐ฅ๐ฆ๐๐จ๐คจ`, event.threadID);
    })
   }
  }