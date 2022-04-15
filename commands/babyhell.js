const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'babyhell',
    description: "babyhells face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#764acd")
      .setTitle("<:solace:953107883531333692> Solace | BabyHell Menu") 
      .setDescription(` 
> **babyh1** - I got a boner rn 
> **babyh2** - babyhell when she sees africas small peepee 
> **babyh3** - Watch out
> **babyh4** - When Lunaa replies
`)
        
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}