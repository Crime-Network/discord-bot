const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'malefaces',
    description: "male faces menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace | Male Face Menu") 
      .setDescription(` 

**Male Faces Command Help**
> **saynings** - Displays Sayning's face from (Old NSA, + bunch others Com)
> **newyork** - Displays newyork's face from (alot of coms)
> **courvix** - Displays Courvelly's face from (Courvix Com)
> **packetguard** - Displays Packetguard's face from (Old NSA)
> **zyper** - Displays Zyper's face from (Old courvix + More)
> **vex** - Displays Vex's face from (Old NSA + More)

`)
        
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}