const ms = require('ms');

module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
// role ids
    if(message.member.roles.cache.has('961720573413707796', '961720591604408402', '961720638958076005')){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('<:wrong:953143651528245298> Cant find that member!');
      }  
      } else {
      message.channel.send('<:no:953142832888184852> You dont have the required permissions to use this command.')
    }
    }
    }