const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'packetguard',
    description: "packetguards face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setTitle("<:solace:953107883531333692> Solace | PacketGuards's Face") 
      .setDescription(` 
`)
        
      .setImage("https://z.zz.fo/e8xYD.jpg")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}