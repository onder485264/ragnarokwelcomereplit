const Discord = require('discord.js');
const tokens = [
    "OTY5MjIwMTI0OTQ5MjQxODY3.YmqOlQ.MNXpCk4kOfa3R6YlR3inlfXxQwQ",
    "OTY5MjI3MDU3MTgxNjM0NTgw.G_WyuL.lR30G8al5nB_ewtPYBb-Cfu32NrM3UwybGgKI0",
    "OTY5MjI3NDI0Njg2NTY3NDI0.YmqVYQ.8X8MDHV-ASOx9LqGEJmIY997vUE",
    ""
];
const chnls = [
    "972884564156485682",
    "972885555379601418",
    "972885641828368434",
    "",
];
const selamlı = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
    let concon;
    client.on('ready', async () => {
        console.log(client.user.username);
        await client.user.setActivity({
            name: "Ragnarok❤️Valersia",
            type: "WATCHING"
        });
        concon = await client.channels.cache.get(chnls[index]).join()
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls[index])) {
            if (cur.channelID === prev.channelID) return;
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("963003491549339698").rawPosition)) { //Yetkili Id'si
                ses = await concon.play('./yetk.mp3');
                selamlı.push(cur.member.user.id);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get("963003489754165258").rawPosition) {//Hosgeldin ıd'si
                ses = await concon.play('./hosgel.mp3');
                selamlı.push(cur.member.user.id);
            }
        }
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls[index]).join();
    })
}
