const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'courvix',
    description: "courvellys face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#8b0000")
      .setTitle("<:solace:953107883531333692> Solace | Courvelly's Face") 
      .setDescription(` 
`)
        
      .setImage("https://images-ext-2.discordapp.net/external/X30Iy3zvhJbCZUn-FQBodQ45gzQwK7J9SgJ03y4EQSU/%3Fwidth%3D330%26height%3D568/https/media.discordapp.net/attachments/786031845682315274/786051262624825364/Screen_Shot_2020-12-08_at_19.16.16.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}