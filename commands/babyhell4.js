const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'babyh4',
    description: "Babyhell when lunaa replies",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#abb2b5")
      .setTitle("<:solace:953107883531333692> Solace | Babyhell's Face 4") 
      .setDescription(` 
`)
        
      .setImage("https://z.zz.fo/bQNVe.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}