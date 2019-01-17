const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});










client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('529756005786058752').roles.find("name", "F5R").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});



client.login(process.env.BOT_TOKEN);
