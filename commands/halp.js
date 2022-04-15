const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'halp',
    description: "halp lol",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("HALP! <:halpp:953780861088702544> ") 
      .setDescription(` 
My prefix for commands is '.'

**General & Support**
> **help** - Displays current menu.
> **support** - Displays support menu
> **docs** - Displays documention for the bot

**Moderation & Utilites**
> **moderation** - Displays moderation commands.
> **tools** - Displays tool commands.
> **info** - Displays information about the bot ect.

**Fun**
> **fun** - Displays fun commands.
> **nsfwfun** - Displays NSFW fun commands.

**Uncategorized **
> **misc** - Displays miscellaneous commands.

**Command Usage**
> {PREFIX}{COMMAND} 
> {PREFIX}{COMMAND} {ARGUMENTS}



───────────── **Useful Links** ───────────── 
[Website](https://crimenetwork.repl.co) | [Donate]()`)
      .setThumbnail("https://file.coffee/u/AUmhrgxhz-Kc1t.gif")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}