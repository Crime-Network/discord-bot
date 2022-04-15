const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'ivy',
    description: "ivy face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#764acd")
      .setTitle("<:solace:953107883531333692> Solace | Ivy's Menu") 
      .setDescription(` 
> **ivy1** - no face no case
> **ivy2** - Big ass head
> **ivy3** - Always hiding that ugly ass face
> **ivy4** - Mia Kalifa wannabe + Filter saving you
> **ivy5** -  Who you trying look submissive for?
`)
        
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}