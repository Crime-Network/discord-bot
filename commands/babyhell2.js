const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'babyh2',
    description: "babyhell when she sees africas small peepee ",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#abb2b5")
      .setTitle("<:solace:953107883531333692> Solace | Babyhell's Face 2") 
      .setDescription(` 
`)
        
      .setImage("https://z.zz.fo/cvyLP.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}