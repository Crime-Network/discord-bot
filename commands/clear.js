const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'clear',
     description: "Clear Messages",
    async execute(message, args){
                                             // Role IDs
    if(message.member.roles.cache.has('961720573413707796', '961720591604408402', '961720638958076005')){
    
          if(!args[0]) return message.reply("Please enter the amount of messages you want cleared.")
      if(isNaN(args[0])) return message.reply("<:wrong:953143651528245298> Pleasse enter a real number!")

      if(args[0] > 100) return message.reply("<:wrong:953143651528245298> You cannot delete more then 100!")
      if(args[0] < 1) return message.reply("<:wrong:953143651528245298> You must delete atleast one message!")

      await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);

      });
    
    }
    else {
      message.channel.send('<:no:953142832888184852> You dont have the required permissions to use this command.')
    }


    }
}