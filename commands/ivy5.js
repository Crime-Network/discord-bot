const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'ivy5',
    description: "Flexin",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#764acd")
      .setTitle("<:solace:953107883531333692> Solace | Ivy's Face 5") 
      .setDescription(` `)

              .setImage("https://z.zz.fo/thumbs/jBV4e.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}