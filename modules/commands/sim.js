/**
 * @author manhG
 * @warn Do not edit code or edit credits
 */
 module.exports.config = {
    name: "sim",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "manhG",
    description: "Chat cùng con simsimi dễ thương nhất",
    commandCategory: "𝐓𝐢𝐞̣̂𝐧 𝐈́𝐜𝐡",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    },
    envConfig: {
        APIKEY: "API-1234-abcd-1234-abcd"
    }
}


async function simsimi(a, b, c) {
    const axios = global.nodemodule.axios, { APIKEY } = global.configModule.sim, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await axios({ url: `https://api.simsimi.net/v2/?text=${g(a)}&lc=vn&key=${APIKEY}`, method: "GET" });
        return { error: !1, data: j }
        //console.log();
    } catch (p) {
        return { error: !0, data: {} }
    }
    
}
module.exports.onLoad = async function () {
    "undefined" == typeof global.manhG && (global.manhG = {}), "undefined" == typeof global.manhG.simsimi && (global.manhG.simsimi = new Map);
};
module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, senderID, body} = event, g = (senderID) => api.sendMessage(senderID, threadID, messageID);
    if (global.manhG.simsimi.has(threadID)) {
        if (senderID == api.getCurrentUserID() || "" == body || messageID == global.manhG.simsimi.get(threadID)) return;
        var { data, error } = await simsimi(body, api, event);
        return !0 == error ? void 0 : !1 == data.success ? g(data.error) : g(data.success)
    }
}
module.exports.run = async function ({ api, event, args}) {
    const { threadID, messageID} = event, body = (args) => api.sendMessage(args, threadID, messageID);
    if (0 == args.length) return body("Bạn chưa nhập tin nhắn");
    switch (args[0]) {
        case "on":
            return global.manhG.simsimi.has(threadID) ? body("Bạn chưa bật sim.") : (global.manhG.simsimi.set(threadID, messageID), body("Bật sim thành công."));
        case "off":
            return global.manhG.simsimi.has(threadID) ? (global.manhG.simsimi.delete(threadID), body("Tắt sim thành công.")) : body("Bạn chưa bật sim.");
        default:
            var { data, error } = await simsimi(args.join(" "), api, event);
            return !0 == data ? void 0 : !1 == data.success ? body(data.error) : body(data.success);
    }
};