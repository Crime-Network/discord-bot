const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'stats',
    description: "stats menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace | Discord Bot Statistics") 
      .setDescription(` 
`)
.addFields( 
{
name: `Help Command:` ,
  value: "`.help`" 
},
  )

.addFields( 
{
name: `**Package Info**` ,
  value:
    "```OS - linux\nNode.js - v16.13.2\nDiscord.js - 13.6.0```"
  
},
  )

                    .addFields(  
           {
              name: '**Bot Metadata**' ,
              value: "> Uptime: 10 Hours \n> Emote Servers: 1 \n> Servers Loaded: 1/1 \n> API/Bot Latency: 409ms",
              inline: true,
            },
             {
               name: '**Bot process data**' ,
               value: "> RAM usage: 1.61 GB \n> CPU Usage: 16.2% \n> Network:\n> - Sent: 3.48 GB \n> - Received: 9.5 GB",
                              inline: true,
               
             },
         )

.addFields( 
{
name: `__Special Thanks to these people:__` ,
  value:
    "> <:value:953135025694601228> **Value**\n> <:Letoa:953135463110180894> **Letoa**\n> <:stoker:953135756422037554> **Stoker** \n"
  
},
  )
        
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}