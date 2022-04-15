const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'support',
    description: "support menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#f73032 ")
      .setTitle("<:solace:953107883531333692> Solace | Support Menu") 
      .setDescription(` 
`)
        
                    .addFields(  
           {
              name: '**Command Usage!**' ,
              value: "> Type in the command you want as so {PREFIX}{COMMAND} {ARGUMENTS}.",
            },
            {
               name: '**Command Not Working!**' ,
               value: ">  If a command you put it comes back with a error, it means we haven't added that command yet or you've entered it wrong.",
             },
             {
               name: '**Support Server!**' ,
               value: "> The Solace bot does not have a support server yet!",
                              inline: true,
               
             },
         )
      .setThumbnail("")
         .setFooter({ text: 'Made with ♡ by Crime Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}