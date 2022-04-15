const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'lanie',
    description: "lanie face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#764acd")
      .setTitle("<:solace:953107883531333692> Solace | Lanie's Menu") 
      .setDescription(` 
> **lanie1** - Flexin
> **lanie2** - BOOBS!
> **lanie3** - Ian<3
> **lanie4** - Eye
> **lanie4** - Thumbs up
`)
        
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}