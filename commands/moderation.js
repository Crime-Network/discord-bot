const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'moderation',
    description: "moderation cmds menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace | Moderation Commands") 
      .setDescription(` 
`)

.addFields( 
{
name: `**Beta**` ,
  value:
    "More moderation commands will be coming in the future!"
  
},
  )

                    .addFields(  
           {
              name: 'ㅤ ' ,
              value: "> **!ban** - Bans the specified user \n> **!clear** - Clears the specified amount of messages \n> **!kick** - Kicks the specified user \n> **!mute** - Mutes the specified user\n> **!unmute** - Unmutes the specified user",
              inline: true,
            },
         )
        
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}