const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'faces',
    description: "faces menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace | Faces Commands") 
      .setDescription(` 
What is "!faces"?
 - A: Faces is an command that showcases people from "hacker" com over the years.

**Faces Command Help**
> **femalefaces** - Displays female faces of com people
> **malefaces** - Displays male faces of com people


`)
        
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}