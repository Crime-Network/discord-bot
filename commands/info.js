const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: "info menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace Information Commands") 
      .setDescription(` 

**Informational Command Help**
> **support** - Displays support menu
> **docs** - Displays documention for the bot
> **credits** - Displays the bots credits
> **stats** - Displays the bots stats
> **bot** - Displays advanced information about the bot`)
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}