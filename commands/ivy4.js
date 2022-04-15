const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'ivy4',
    description: "Flexin",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#764acd")
      .setTitle("<:solace:953107883531333692> Solace | Ivy's Face 4") 
      .setDescription(` `)

              .setImage("https://z.zz.fo/7C1RU.jpg")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}