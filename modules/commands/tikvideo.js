module.exports.config = {
    name: "tikvideo",
    version: "1.1.12",
    hasPermssion: 0,
    credits: "tuantvt",
    description: "tuan fix roi haha",
    commandCategory: "media",
    usages: "",
    cooldowns: 5,
    dependencies: {"axios": ""}
};
module.exports.run = async function ({ event, api, args, Users }) {
  try{
    const axios = global.nodemodule["axios"];
  const res = await axios.post('https://www.tikwm.com/api/', {
                url: args[0],
                count: 12,
                cursor: 0,
                hd: 1
        });
        if(res.status == 200){
            // test for status you want, etc
            console.log(res.status);
          const k = res.data
             const t = (await axios.get(`${k.data.play}`, { responseType: "stream" })).data;
    return api.sendMessage({ 
      body: `== [ πππ π©π€π  πππππ€ ] ==\nββββββββββββββββββ\nπβ ππ€Μ£Μπ ππͺπ£π: ${k.data.title}\nπΏβ ππΜπ£ ππΜπ£π: ${k.data.author.nickname} \nβ₯οΈβ πππ’: ${k.data.digg_count}\nπβ ππͺΜπ€ΜΜ£π© πππ’: ${k.data.play_count}\n`,
      attachment: t
    }, event.threadID)
  }
  }
    catch (err) {
        console.log(err)
        return api.sendMessage("ΔΓ£ xαΊ£y ra lα»i tα»« api", event.threadID);
}        
};