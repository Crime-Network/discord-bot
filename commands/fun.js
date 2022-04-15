const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'fun',
    description: "fun menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace | Fun Commands") 
      .setDescription(` 

**Fun Command Help**
> **iq** - Displays a users IQ
> **rate** - Displays a users attractiveness
> **lovecalc** - Displays the love percentage between users
> **kiss** - Kiss a user
> **hug** - Hug a user
> **slap** - Slap a user
> **feed** - Feed a user 
> **pet** - Pet a user
> **gay** - Displays the gay meter for a user

**NSFW Fun Command Help**
> **||penis||** - Displays a users ||penis|| size
> **||fuck||** - ||Fuck|| a user `)
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}