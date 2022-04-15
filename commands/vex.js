const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'vex',
    description: "vex face menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#FFC0CB")
      .setTitle("<:solace:953107883531333692> Solace | Vex's Face") 
      .setDescription(` 
`)
        
      .setImage("https://images-ext-2.discordapp.net/external/QbAgyZFy1y9tJ4WYdQfMb1-g9AaM9GR95lJX-RtauOo/https/images-ext-2.discordapp.net/external/Y-78aS8nsVwVfyEAT_cMaXgR6dLxbX9HrKhmZfG9y6o/https/i.ibb.co/HCnXZBf/vex12.png")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}