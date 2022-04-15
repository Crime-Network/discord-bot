const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'criey',
    description: "crieys face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#abb2b5")
      .setTitle("<:solace:953107883531333692> Solace | Criey's Face") 
      .setDescription(` 
`)
        
      .setImage("https://z.zz.fo/6Do4Q.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}