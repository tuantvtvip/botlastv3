module.exports.config = {
  name: "banksv",
  version: "BETA",
  hasPermssion: 0,
  credits: "ARAXY",
  description: "",
  commandCategory: "Coins",
  usages: "",
  cooldowns: 0,
};
module.exports.run = async function ({ api, args, event, Users, permssion, Currencies }) {
  const axios = require("axios")
  const fs = require('fs-extra');
  const request = require('request')
  const { threadID, messageID, senderID } = event;
  const lmao = (await Users.getData(senderID)).name
  var date = new Date();
  var duocsui = date.getDay();
  const dataMoney = await Currencies.getData(senderID);
  const moneyUser = dataMoney.money;
  if (duocsui == "9") {
    return api.sendMessage(`[ ððžððððð ] - ðððŪ ðūððŠĖ ðððĖĢĖðĐ ððĖðĢ ðððĪĖðĢð ððĖðĒ ðððĖĢĖð ðžðððð`, threadID, messageID)
  }
  const araxy = await axios.get("https://Ryanair-Api-Bank.chauminhtri2022.repl.co/")
  if (`${araxy.data.data}` == "false") {
    return api.sendMessage("[ ððð ððĄ ] - ððēðđðēððē ðĶðēððēðŋ", threadID, messageID)
  } else {
    if (args[0] == '-r' || args[0] == 'register') {
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/dangky?uid=${senderID}&name=${encodeURI(lmao)}`)
      if (`${res.data.data}` == "gban" || `${res.data.data}` == "true") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      }

      else {
        return api.sendMessage(`${res.data.msg}`, senderID, () => api.sendMessage("ðĨðēðīðķðððēðŋ ð§ðĩðŪĖðŧðĩ ððžĖðŧðī, ðĐððķ ððžĖðŧðī ððĩðēð°ðļ ð§ðķðŧ ðĄðĩðŪĖĖðŧ ððĩðžĖĖ", event.threadID)
        )
      }
    }
    if (args[0] == 'dangkyvay' || args[0] == '-rvay') {
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/dangkyvay?uid=${senderID}&name=${encodeURI(lmao)}`)
      if (`${res.data.data}` == "gban" || `${res.data.data}` == "true") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      }

      else {
        return api.sendMessage(`${res.data.msg}`, senderID, () => api.sendMessage("ðĨðēðīðķðððēðŋ ð§ðĩðŪĖðŧðĩ ððžĖðŧðī, ðĐððķ ððžĖðŧðī ððĩðēð°ðļ ð§ðķðŧ ðĄðĩðŪĖĖðŧ ððĩðžĖĖ", event.threadID)
        )
      }
    }
    if (args[0] == 'reset' || args[0] == 'resetpass') {
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/resetpass?sender=${senderID}`)
      if (`${res.data.data}` == "gban" || `${res.data.data}` == "true") {
        return api.sendMessage(`${res.data.msg}`, senderID, () => api.sendMessage("[ ðððŠĖĢð ððĪĖĖð  ] - ðððĖðĢð ðūðĪĖðĢð ðūðððð  ðððĢ ðððĖĖðĢ ðūððĪĖĖ", event.threadID)
        )
      }
      else {
        return api.sendMessage(`[ ððžðð ] -  ððĪĖĖð ðĖĖð`, threadID, messageID)
      }
    }
    if (args[0] == '-f' || args[0] == 'find') {
      if (!args[1]) { return api.sendMessage("[ ðŠððĨðĄððĄð ]- ðĄðĩðŪĖĢĖð― ð§ðð―ðē ððĩðĖðŪ ðĖĢ?", threadID, messageID) };
      return api.sendMessage(`ð―ðĖĢðĢ ðūððĪĖĢðĢ ðūðĖðð ðūðĪð ððĖ ððŪĖĖðŧðī ${args[1]} ðĨðēð―ðđð ð§ðķðŧ ðĄðĩðŪĖĖðŧ ðĄðŪĖð ðĐðŪĖ ðĄðĩðŪĖĢĖð― ${args[1]}`, event.threadID, async (err, info) => {
        return global.client.handleReply.push({
          type: "pay",
          name: this.config.name,
          author: senderID,
          pay: args[1],
          messageID: info.messageID
        });
      }, messageID);
    }
    if (args[0] == "all" || args[0] == "-a") {
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/all`)
      return api.sendMessage(`${res.data.data}`, threadID, messageID)
    }
    if (args[0] == "check" || args[0] == "-c") {
      var msg = { body: "[ ððŪðŧðļ ] - ðððĐðĨðē ððĒð§ ðĄðĩðŪĖĖðŧ ðĄðŪĖð ðĨðžĖĖðķ ðĄðĩðŪĖĢĖð― ðððŽðŽ" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "check",
            name: this.config.name,
            lmao: threadID,
            find_type: args[1],
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ ððŪðŧðļ ] - Check Tin NhášŊn Cháŧ", threadID, messageID)
    }
    if (args[0] == "checkvay" || args[0] == "-cv") {
      var msg = { body: "[ ððŪðŧðļ ] - Reply Tin NhášŊn NÃ y Äáŧ Nháš­p Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "check",
            name: this.config.name,
            lmao: threadID,
            find_type: args[1],
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ ððŪðŧðļ ] - Check Tin NhášŊn Cháŧ", threadID, messageID)
    }
    if (args[0] == "gáŧ­i" || args[0] == "send") {
      var money = args[1];
      if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ ððŪðŧðļ ] - Sáŧ DÆ° KhÃīng Äáŧ§ Äáŧ GD", threadID, messageID);
      if (moneyUser < money) return api.sendMessage(`[ BANK ] - Sáŧ DÆ° KhÃīng Äáŧ§ Äáŧ GD`, threadID, messageID);
      var msg = { body: "[ ððŪðŧðļ ] - Reply Tin NhášŊn NÃ y Äáŧ Nháš­p Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "send",
            name: this.config.name,
            lmao: threadID,
            send: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ ððŪðŧðļ ] - Check Tin NhášŊn Cháŧ", threadID, messageID)
    }
    if (args[0] == "gban" || args[0] == "gbanadd") {
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/gban?uid=${args[1]}&reson=${encodeURI(args.slice(2).join(" "))}&author=${event.senderID}`)
      if (`${res.data.data}` == "false") { return api.sendMessage(`${res.data.msg}`, threadID, messageID) } else {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      }
    }
    if (args[0] == "vay" || args[0] == "mÆ°áŧĢn") {
      var money = args[1];
      if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ VAY ] - Sáŧ DÆ° Ãt QuÃĄ NÃŠn KhÃīng GD ÄÃĒu", threadID, messageID);
      var msg = { body: "[ ðĐððŽ ] - Reply Tin NhášŊn NÃ y Äáŧ Nháš­p Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "vay",
            name: this.config.name,
            lmao: threadID,
            send: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ ðĐððŽ ] - Check Tin NhášŊn Cháŧ", threadID, messageID)
    }
    if (args[0] == "trášĢ") {
      var money = args[1];
      if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ ðĐððŽ ] - Sáŧ DÆ° Ãt QuÃĄ NÃŠn KhÃīng GD ÄÃĒu", threadID, messageID);
      var msg = { body: "[ ðĐððŽ ] - Reply Tin NhášŊn NÃ y Äáŧ Nháš­p Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "trášĢ",
            name: this.config.name,
            lmao: threadID,
            send: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ ðĐððŽ ] - Check Tin NhášŊn Cháŧ", threadID, messageID)
    }
    if (args[0] == "pay") {
      var money = args[1];
      if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ ðððĄð ] - Sáŧ DÆ° KhÃīng Äáŧ§ Äáŧ GD", threadID, messageID);
      var msg = { body: `[ ðððĄð ] - Sáŧ Tiáŧn BášĄn Muáŧn Chuyáŧn LÃ  ${args[1]} Reply Tin NhášŊn NÃ y Äáŧ Nháš­p Pass` }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "pay",
            name: this.config.name,
            lmao: threadID,
            paymm: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ ðððĄð ] - Check Tin NhášŊn Cháŧ", threadID, messageID)
    }
    if (args[0] == "rÃšt" || args[0] == "lášĨy") {
      var money = args[1];
      if (!money || isNaN(money)) return api.sendMessage("[ ðððĄð ] - KhÃīng PhášĢi LÃ  Máŧt Con Sáŧ", threadID, messageID);


      var msg = { body: "[ ðððĄð ] - Reply Tin NhášŊn NÃ y Äáŧ Nháš­p Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "rÃšt",
            name: this.config.name,
            lmao: threadID,
            sotien: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ ðððĄð ] - Check Tin NhášŊn Cháŧ", threadID, messageID)
    }
    if (args[0] == "top") {
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/top`)
      return api.sendMessage(`${res.data.data}`, threadID, messageID)
    }
    if (args[0] == "changepass" || args[0] == "change") {
      var msg = { body: "[ ðððĄð ] - Reply Tin NhášŊn NÃ y Äáŧ Nháš­p Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "changepass",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ ðððĄð ] - Check Tin NhášŊn Cháŧ", threadID, messageID)
    }
    if (!args[0]) {
      const res = await axios.get("https://Ryanair-Api-Bank.chauminhtri2022.repl.co/home")
      var callback = () => api.sendMessage({ body: `${res.data.msg}`, attachment: fs.createReadStream(__dirname + "/cache/bank.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bank.jpg"), event.messageID);
      return request(encodeURI(`${res.data.link}`)).pipe(fs.createWriteStream(__dirname + '/cache/bank.jpg')).on('close', () => callback());
    }
  }
}
module.exports.handleReply = async function ({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios")
  if (handleReply.author != event.senderID) return;
  const { threadID, messageID, senderID, body } = event;
  switch (handleReply.type) {
    case "find": {
      var find_type = handleReply.find_type;
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/find?luachon=${find_type}&find=${event.body}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      } else {
        return api.sendMessage(`${res.data.data}`, threadID, messageID)
      }
    }
      break;
    case "check": {
      var uh = handleReply.thread
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/check?senderID=${senderID}&pass=${encodeURI(event.body)}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      } else {
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ ðððĄð ] - NHášŽP MášŽT KHášĻU ÄÃ ÄÃNG", threadID)
        )
      }
    }
      break;
    case "checkvay": {
      var uh = handleReply.thread
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/checkvay?senderID=${event.senderID}&pass=${encodeURI(event.body)}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      } else {
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ ðððĄð ] - NHášŽP MášŽT KHášĻU ÄÃ ÄÃNG", threadID)
        )

      }
    }
      break;
    case "vay": {
      var uh = handleReply.thread;
      var money = handleReply.send;
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/vay?senderID=${senderID}&pass=${event.body}&sotien=${money}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, uh, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {
        await Currencies.increaseMoney(senderID, parseInt(money));
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ ðððĄð  ] - NHášŽP MášŽT KHášĻU ÄÃ ÄÃNG", threadID)
        )
      }
    } break;
    case "trášĢ": {
      var uh = handleReply.thread;
      var money = handleReply.send;
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/tra?senderID=${event.senderID}&pass=${event.body}&sotien=${money}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, uh, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {
        await Currencies.decreaseMoney(senderID, parseInt(money));
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ ðððĄð ] - NHášŽP MášŽT KHášĻU ÄÃ ÄÃNG", threadID)
        )
      }
    } break;
    case "send": {
      var uh = handleReply.thread;
      var money = handleReply.send;
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/send?senderID=${senderID}&sotien=${money}&pass=${encodeURI(event.body)}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      } else {
        await Currencies.decreaseMoney(senderID, parseInt(money));
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ ðððĄð ] - NHášŽP MášŽT KHášĻU ÄÃ ÄÃNG", threadID)
        )
      }
    } break;
    case "rÃšt": {
      var uh = handleReply.thread;
      var money = handleReply.sotien;
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/rut?senderID=${senderID}&sotien=${money}&pass=${encodeURI(event.body)}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, uh, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {
        await Currencies.increaseMoney(senderID, parseInt(money));
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ ðððĄð ] - NHášŽP MášŽT KHášĻU ÄÃ ÄÃNG", threadID)
        )
      }
    } break;
    case "pay": {
      return api.sendMessage(`[ ðððĄð ] - Reply Tin NhášŊn NÃ y Äáŧ Nháš­p STK MÃ  BášĄn Muáŧn Chuyáŧn`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "pay_next",
          name: this.config.name,
          author: senderID,
          paymm: handleReply.paymm,
          thread: handleReply.thread,
          text2: event.body,
          messageID: info.messageID
        });
      }, messageID)
    }
    case "pay_next": {
      var paymm = handleReply.paymm;
      var thread = handleReply.thread;
      var text2 = handleReply.text2;
      var text3 = event.body;
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/pay?sotien=${paymm}&sender=${event.senderID}&nguoinhan=${text3}&pass=${text2}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, thread, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {

        return api.sendMessage(`${res.data.data}`, thread, () => api.sendMessage("[ BANK ] - NHášŽP MášŽT KHášĻU ÄÃ ÄÃNG", threadID)
        )
      }
    } break;
    case "changepass": {
      return api.sendMessage(`[ ðððĄð ] - BášĄn Nháš­p Pass CÅĐ Cáŧ§a BášĄn LÃ : ${event.body}, Reply Tin NhášŊn NÃ y Äáŧ Nháš­p Pass Máŧi`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "next",
          name: this.config.name,
          author: senderID,
          text1: event.body,
          thread: handleReply.thread,
          messageID: info.messageID
        });
      }, messageID)
    }
    case "next": {
      var text1 = handleReply.text1;
      var thread = handleReply.thread;
      var text2 = event.body;
      const res = await axios.get(`https://Ryanair-Api-Bank.chauminhtri2022.repl.co/changepass?sender=${event.senderID}&pass=${text1}&newpass=${text2}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, thread, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {
        return api.sendMessage(`[ BANK ] - ðūðððĢðð ððĖĢĖðĐ ðððĖĖðŠ ðððĖðĢ ððĖðĢð ðððĖðĢð ðūðĪĖðĢð`, thread, () => api.sendMessage(`${res.data.data}`, threadID)
        )
      }
    }
  }
        }