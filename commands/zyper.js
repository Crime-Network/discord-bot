const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'zuper',
    description: "zyper face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#FFC0CB")
      .setTitle("<:solace:953107883531333692> Solace | Zyper's Face") 
      .setDescription(` 
`)
        
      .setImage("https://z.zz.fo/J0qSy.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}