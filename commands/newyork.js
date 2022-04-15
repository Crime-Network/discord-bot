const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'newyork',
    description: "newyorks face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#2b6d21")
      .setTitle("<:solace:953107883531333692> Solace | NewYork's Face") 
      .setDescription(` 
`)
        
      .setImage("https://z.zz.fo/bhPo7.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}