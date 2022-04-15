const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'misc',
    description: "misc menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace | Misc Commands") 
      .setDescription(` 

**Miscellaneous Command Help**
> **faces** - Displays faces of old com people
`)
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}