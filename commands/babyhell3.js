const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'babyh3',
    description: "Watch out",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#abb2b5")
      .setTitle("<:solace:953107883531333692> Solace | Babyhell's Face 3") 
      .setDescription(` 
`)
        
      .setImage("https://z.zz.fo/7qN1F.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}