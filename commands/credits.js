const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'credits',
    description: "credits menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace | Bot Credits") 
      .setDescription(` 
`)


.addFields( 
{
name: `<:Lunaa:953786187099824129> Lunaa` ,
  value: "<:discordlogo:953785795108552785> Not Lunaa#4776\n<:discordlogo:953785795108552785> https://discord.gg/k2vJM5NvXa\n<:guilded:953787240448933938> https://guilded.gg/ran", 
  inline: true,
},
  {
name: `<:value2:953796413362409493> Value` ,
  value: "<:discordlogo:953785795108552785> Value#5770\n<:guilded:953787240448933938> https://guilded.gg/crime", 
  inline: true,
},


  
  )
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}