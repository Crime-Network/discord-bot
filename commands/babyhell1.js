const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'babyh1',
    description: "I have a boner rn...",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#abb2b5")
      .setTitle("<:solace:953107883531333692> Solace | Babyhell's Face 1") 
      .setDescription(`
`)
        
      .setImage("https://images-ext-2.discordapp.net/external/xSlJXW_OfDAjcNCnEBfznvXKW7pNf_FGCL00Zw0mHRQ/https/i.ibb.co/1rSgygr/Screen-Shot-2020-12-05-at-00-04-03.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}