const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'tools',
    description: "tools menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace | Tool Commands") 
      .setDescription(` 

**Tool Command Help**
> **whois** - Lookup a user
> **avatar** - Get a users avatar
> **serverinfo** - Get information about the server

`)
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}