const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'lanie1',
    description: "Flexin",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#764acd")
      .setTitle("<:solace:953107883531333692> Solace | Lanie's Face 1") 
      .setDescription(` `)

              .setImage("https://z.zz.fo/NZZj4.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}