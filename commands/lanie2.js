const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'lanie2',
    description: "Flexin",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#764acd")
      .setTitle("<:solace:953107883531333692> Solace | Lanie's Face 2") 
      .setDescription(` `)

              .setImage("https://z.zz.fo/hV9W1.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}