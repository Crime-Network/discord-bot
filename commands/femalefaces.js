const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'femalefaces',
    description: "female face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace|  Female Face Menu") 
      .setDescription(` 

**Female Faces Command Help**
> **lanie** - Displays a menu where you can pick which image of Lanie you want.
> **babyhell** - Displays a menu where you can pick which image of Babyhell you want.
> **criey** - Displays Criey's face from (Multiable coms she a treesh)
> **ivy** - Displays a menu where you can pick which image of Ivy you want.

`)
        
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}