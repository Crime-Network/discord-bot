 const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: "Bans a user",
    execute(message, args){
// role ids - must have admin/moderation perms
    if(message.member.roles.cache.has('961720573413707796', '961720591604408402', '961720638958076005')){
    
          const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("<:ok:953143004187746304> User has been banned!");
        }else {
            message.channel.send(`<:wrong:953143651528245298> You coudn't ban that member!`);

      };
    
    }
    else {
      message.channel.send('<:no:953142832888184852> You dont have the required permissions to use this command.')
    }
      
  }
}