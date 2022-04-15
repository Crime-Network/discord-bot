const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'saynings',
    description: "saynings face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#374874")
      .setTitle("<:solace:953107883531333692> Solace | Saynings Face") 
      .setDescription(` 
`)
        
      .setImage("https://z.zz.fo/QTyi7.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}