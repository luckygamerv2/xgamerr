const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`b!help /by luckygamer#0111`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

















 
 var prefix = "b!"
 
 
 
 
 
 
 
 
 client.on('message', message => {
  if (true) {
if (message.content === 'b!invite') {
      message.author.send(' تفضل رابط اضاف البوت حبي  |  https://discordapp.com/oauth2/authorize?client_id=500548520307195915&permissions=8&scope=bot | يا ريت ما تنسا تشرفنا في سرفر الصيانة حبي | https://discord.gg/CvDEjq	  ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === "b!invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(true);
    }
});
 
 

 
 
 

 
 
 
 

 



     client.on('guildMemberAdd', member => {
            let channel = member.guild.channels.find('name', 'welcome');
            let memberavatar = member.user.avatarURL
            if (!channel) return;
            let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail(memberavatar)
                .addField('🎽 | name :  ',`${member}`)
                .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
                .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                        .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
                   
                        .addField("Name:",`<@` + `${member.id}` + `>`, true)
                           
                                            .addField(' الـسيرفر', `${member.guild.name}`,true)
                                           
            .setFooter(`${member.guild.name}`)
                .setTimestamp()
       
            channel.sendEmbed(embed);
            });
           
            client.on('guildMemberRemove', member => {
                var embed = new Discord.RichEmbed()
                .setAuthor(member.user.username, member.user.avatarURL)
                .setThumbnail(member.user.avatarURL)
                .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
                .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
                .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
                .setColor('RED')
                .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
           
            var channel =member.guild.channels.find('name', 'welcome')
            if (!channel) return;
            channel.send({embed : embed});
            })
 

 

 
 
 
 
 
 
 
 
 
 client.on('message', message => {
var prefix = "b!"
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ليس لديك برمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(100)});
  };
  
  });

 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
var prefix = "b!"	 
    if(!message.channel.guild) return;
if (message.content.startsWith('.ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms")
.addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
}
});
 
 
 
 
client.on("message", message => {
  if (message.content === "b!help") {
message.author.send(`**

 **البريفكس [b!] **
   **(1)-b!help** ' ,' **عشان تجيب الهلب والمساعدة** ')
    **(2)-b!invite**  ' ,' **عشان تضيف البوت** ')
    **(3)-b!clear** ' , '**عشان تمسح الشات**') 
   **(4)-b!bc** ' , '**عشان ترسل بروداسكات**') 
    **(5)-b!ping** ' ,' ** عشان تعرف سرعة البوت ping** '
  **(6)-b!server** ' ,' ** عشان تعرف معلومات السرفر** '
  **(7)-b!mc** ' ,' ** عشان تقفل الشات** 
   **(8)-b!un_mc** ' ,' ** عشان تفتح الشات** 
     **(9)-b!bot** ' ,' ** عشان تعرف احوال البوت  ** '
     **(10)-b!send** ' ,' ** عشان ترسل رسالة لشخص علي خاص من البوت  ** '
     **(11)-b!paint** ' ,' ** عشان البوت يكرر كلامك علي شكل صورة ** '
    **(12)-b!say** ' ,' **  البوت يكرر كلامك علي شكل صورة كتابة ** '
   **(13)-b!زواج** ' ,' ** عشان تطلب ايد واحدة بس لازم تمنشن ** '
    **(14)-b!chat** ' ,' ** عشان تسوي مكان كتابي لدقيقتان  ** '
  **(15)-b!move-all** ' ,' ** عشان تسحب كل الاعضاء في الرومات الي رومك الصوتي وطبعا لازم يكون عندك خاصية التحكم في النقل ** '
    **(16)-b!c-c** ' , '** عشان البوت يسوي لك 50 لون عشواءي**'   **(17)** ' , '**عشان اول ما واحد يدخل البوت يطية رتبة لازم يكون اسم الرتبة  MEMBER**'
   **(18)-b!avatar** ' , '**عشان تشوف الافتار مالك**'
    **(18)-b!id** ' , '**عشان تشوف البروفايل**'
    **(19)-b!report** ' , '**عشان تبلغ عن شخص**'
 **(20)-b!نكت** , '**بيجيب لك نكتة عشواءية تضحك **
    **(21)-b!تقديم** ** عشان تقدم لو تبي تكون ادارة ملحوظة: لازم يكون اكو وم اسمة [التقديمات] عشان التقيدم يكتب فية**'
    **(22)-b!طلب I ' , '** غشان تسوي طلب من شخص لو اكو سرفر شراء او هيك ملحوظة: لازم يكون اكو روم اسمة [الطلبات] عشان يكتب الطلب فيها**
    **(23)-b!inv [اسم البوت]** ' , '** لو عايز تعرف رابط اضافة اي بوت **') 
    **الترحيب** ' , '** [welcome] لو تبي البوت يرحب باللي يدخلوا لازم تخلي اسم الروم مال الترحيب **
  **هيك تكون اوامر البوت اتمني يكون عجبكم **




**`)
      message.channel.send("تم ارسال اوامر البوت في الخاص 🆗✅ ")
  }
});
 
 
 
 
 
 
 
 

  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
	  var prefix = "b!"
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':signal_strength:  Pong! :signal_strength:   In `' + `${client.ping}` + ' ms`');
    }
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', function(msg) {
	   var prefix = "b!"
	   
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {

    if (message.content === "b!mc") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === "b!un_mc") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" ||عشان المساعدة b!help || ");
    }
});
 
 
 
 
 
  
 client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" ||صنع بواسطة @X_Gamer#8828 || ");
    }
});
 
 
 
 
 
  
  
 client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" || تحذير لو انت مسوي انك قافل بس مو قافل البوت راح يكشفك LOL || ");
    }
});
 
 
 
 
 
 
 
 
 
 
 
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","عضو"));
    });

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
     if (message.content === "b!bot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
client.on("message", message => {
 var prefix= "b!";  
 if(message.content.startsWith(prefix + 'chat')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
          if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))

                             if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'chat').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporaryText : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> ⏱  انتهى وقت الروم الكتابي`), 120000))  // 120000 دقيقتان
    }
    });

 
 
 
 
  
 
 

 
 
 
 


 
 
client.on('message', message => {
	  var prefix= "b!";  
      if(message.content.startsWith(prefix + 'move-all')) {
       if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
         if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
      if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
       var author = message.member.voiceChannelID;
       var m = message.guild.members.filter(m=>m.voiceChannel)
       message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
       m.setVoiceChannel(author)
       })
       message.channel.send(`✅ **| تم سحب جميع الأعضاء إليك**`)
      
      
       }
         });

 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
client.on('message', async msg => {
              client.snek = require('snekfetch');
            var prefix = "b!"
          if(msg.content.startsWith(prefix + "paint")) {
           let args = msg.content.split(' ').slice(1).join(' ');
          if(!args) return args.missing(msg, 'No text added', this.help);
          msg.channel.startTyping();
          const searchMessage = await msg.channel.send('🖌️Painting...');
          const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
          msg.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
        };
        });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
   if(message.content.startsWith ("b!زواج")) {
   if(!message.channel.guild) return message.reply('** This command only for servers **')
   var proposed = message.mentions.members.first()

   if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
   if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
    if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
     if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
           message.channel.send(`**${proposed}
بدك تقبلي عرض الزواج من ${message.author}
العرض لمدة 15 ثانية
اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
 message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
.catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))

const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
message.channel.send(`**${message.author} تم رفض عرضك**`);
})




}
});

 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 client.on('message', message => {
    if (message.content.startsWith("b!avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
 
 
 
 
 
 
 
 
 
 
 
 client.on('message',function(message) {
    let prefix = "b!";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`);
}
});
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', msg => {
     if(msg.content === 'هلا')
                 setTimeout(function() {
   msg.reply('هلا حبي')
                 }, 0)
   });
 
 
 
 client.on('message', msg => {
     if(msg.content === 'مرحبا')
                 setTimeout(function() {
   msg.reply('مراحب حبي')
                 }, 0)
   });
 
 
 
 client.on('message', msg => {
     if(msg.content === 'باك')
                 setTimeout(function() {
   msg.reply('ولكم حبي')
                 }, 0)
   });
 
 
 
 
 client.on('message', msg => {
     if(msg.content === 'السلام عليكم')
                 setTimeout(function() {
   msg.reply('وعليكم السلام')
                 }, 0)
   });
 
 
 
 
 
 
 
 
 
 client.on('message', msg => {
     if(msg.content === 'ولكم')
                 setTimeout(function() {
   msg.reply('ولكم حبي')
                 }, 0)
   });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on("message", msg => {
           var prefix = "b!";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', function(message) {
	            var prefix = "b!";
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});
 
 
 
 
 
 
 
 

 
 
 client.on('message', function(message) {
    if(!message.channel.guild) return;
    if(message.content === 'c_c') {
    if(message.member.hasPermission('MANAGE_ROLES')) {
    setInterval(function(){})
    message.channel.send('يتم انشاء 50 لون انتضر | ▶️')
    }else{
    message.channel.send('ما معاك البرمشن المطلوب |❌🚫')
    }
    }
    });
    
    client.on('message', message=>{
    if (message.content === 'b!c-c'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 50; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }  
    }
    });
 
 
 
 
 
 
 
 
 client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'MEMBER'));  
});
 
 
 
 
 
 
 
 
 
client.on('message', message => {
var prefix = "b!";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
}); 
 
 
 
 
 
 
 
 
 
 
 
 
 
  

 
 
 
 
 
 
 
 client.on('message', msg => {
    if(msg.content.startsWith('b!inv')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
	 	var prefix = "b!";
        if (message.content === prefix + "dt") {
            if (!message.channel.guild) return message.reply('** This command only for servers **');  
var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds();
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL) 
                .setTitle("**الوقت وتاريخ**")
                .setColor('RANDOM')
                .setTimestamp()
                .addField('Time',
                "『"+ hours + ":" + minutes + "』") 
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year + "』")

                 message.channel.sendEmbed(Date15);
        }
    });
 
 
 
 
 
 
 
 
 
 
 

  client.on('message', async message => {
	  	 	var prefix = "b!";
  if(message.content.startsWith(prefix + "طلب")) {
    await message.channel.send("**اسمك**").then(e => {/////Mal Team  
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**كم تقدر تدفع**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('** الطلب ؟ **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`** :white_check_mark:  تم التقديم وسيتم الرد فـ اقرب وقت :white_check_mark: **`)
        },5000);
var gg = message.guild.channels.find('name', '🔥الطلبات🔥')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  اسمك :shield:   : \n ${lan}\nكم تقدر تدفع :moneybag: :\n ${md} \n طلبك :microphone2:  :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`LAX'TEAM`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})
 
 

 
 
 
 
 
 
 
  client.on('message', async message => {
	  	 	var prefix = "b!";
  if(message.content.startsWith(prefix + "تقديم")) {
    await message.channel.send("**وش اسمك الحقيقي ؟**").then(e => { 
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**كم عمرك ؟**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**ليش تبي تكون ادارة ؟ **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ...').then(b => {
        setTimeout(() => {
  b.edit(`** :white_check_mark: سيتم الرد في اقرب وقت :white_check_mark: **`)
        },5000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`** الاسم الحقيقي :shield:   : \n ${lan}\nالعمر :\n ${md} \n ليش يبي يكون ادارة :microphone2:  :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`LAX'TEAM`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})
 
 

 
 
 
 
 
 
 
 
 

 
 
 
 

 
 
 
 client.on('message', message => {
    if (message.content.startsWith("b!ترحيب")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  } 
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
     .setImage('https://images.search.yahoo.com/images/view;_ylt=AwrExdo01QZcpyQAGbc2nIlQ;_ylu=X3oDMTIyMzU0NHZrBHNlYwNzcgRzbGsDaW1nBG9pZAM4ZmE3ZWY3MGE1NjJjYjJmZTgwMmM4MjE0ZTdkODc1YQRncG9zAzMEaXQDYmluZw--?.origin=&back=https%3A%2F%2Fimages.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3Dwelcome%26ei%3DUTF-8%26type%3DYHS_SI_52499%26fr%3Dyhs-Lkry-newtab%26hsimp%3Dyhs-newtab%26hspart%3DLkry%26param1%3Dij7zzSxCeE_ZFQBL5238vr-A5Reue_PaX3XoonXGffUFBkafCNlIwPb7FJbey4ZToHt5xkD-JIZZbyBF5z5t37huS84kAQVK1X6NVDbxSAvpAc_ahCc03YmTeA9qEB35yIcgQ0hR_EoxGT4PKkGlT_4U_j4HVT4Q25PevSBMaoT8gIh7LUlVaV1KLg1UatN7xh92gKOE4nHQXbAYAaLG3L_7pJRWNqQAvrPQiOU5UEg6BUjhiB6ler6AsMoWxqscn8vmZQ%252C%252C%26tab%3Dorganic%26ri%3D3&w=1112&h=921&imgurl=lewamack.com%2FFacebook%2FPics%2FWelcome%2FWelcome-White_on_Blue-welcome.jpg&rurl=http%3A%2F%2Flewamack.com%2FFacebook%2FPics%2FWelcome%2F&size=97.5KB&name=Index+of+%2FFacebook%2FPics%2F%3Cb%3EWelcome%3C%2Fb%3E&p=welcome&oid=8fa7ef70a562cb2fe802c8214e7d875a&fr2=&fr=yhs-Lkry-newtab&tt=Index+of+%2FFacebook%2FPics%2F%3Cb%3EWelcome%3C%2Fb%3E&b=0&ni=21&no=3&ts=&tab=organic&sigr=11acf08hl&sigb=1d4e5uuaf&sigi=124c2v3vr&sigt=116d2ke9n&sign=116d2ke9n&.crumb=r.tPChMXis6&fr=yhs-Lkry-newtab&hsimp=yhs-newtab&hspart=Lkry&type=YHS_SI_52499&param1=ij7zzSxCeE_ZFQBL5238vr-A5Reue_PaX3XoonXGffUFBkafCNlIwPb7FJbey4ZToHt5xkD-JIZZbyBF5z5t37huS84kAQVK1X6NVDbxSAvpAc_ahCc03YmTeA9qEB35yIcgQ0hR_EoxGT4PKkGlT_4U_j4HVT4Q25PevSBMaoT8gIh7LUlVaV1KLg1UatN7xh92gKOE4nHQXbAYAaLG3L_7pJRWNqQAvrPQiOU5UEg6BUjhiB6ler6AsMoWxqscn8vmZQ%2C%2C')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
	 	  	 	var prefix = "b!";
    if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.reply('** This command only for SeArvers **')
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command === "kill"){

   var sabotage = message.mentions.users.first();
   if(sabotage == message.author)return message.reply(`**الانتحار ما زين و الله**`);
    if(sabotage === client.user) return message.reply(`** تبي تقتلني ؟ **`);
  if (sabotage < 1) {
    message.delete();
    return message.channel.sendMessage('ضع شيئا للقتل، مثل ذكر مستخدم، أو استخدام رمز تعبيري');
  }
  if (!sabotage) return message.channel.send(`Please Mention A Member to Kill :warning:`)
  message.channel.send("▄︻̷̿┻̿═━一 ${sabotage")
  .then(msg =>{
  msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
  }, 1000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
  }, 2000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
  }, 3000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :fire:`);///Mal Team
  }, 4000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
  }, 5000);
  msg.delete(7876)
  message.delete()
  })
  message.channel.send("**تم اخفاء الجريمة بنجاح 🕳 **").then(msg => msg.delete(10000));
    }
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', async msg => {
    if(msg.author.bot) return undefined;


    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (msg.content.match(prefixMention)) {
	 	  	 	var prefix = "b!";
  }

if(!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    let cmds = {
      play: { cmd: 'b!play', a: ['p'] },
      skip: { cmd: 'b!skip', a: ['s'] },
      stop: { cmd: 'b!stop' },
      pause: { cmd: 'b!pause' },
      resume: { cmd: 'b!resume', a: ['r'] },
      volume: { cmd: 'b!volume', a: ['vol'] },
      queue: { cmd: 'b!queue', a: ['q'] },
      repeat: { cmd: 'b!repeat', a: ['re'] },
      forceskip: { cmd: 'b!forceskip', a: ['fs', 'fskip'] },
      skipto: { cmd: 'b!skipto', a: ['st'] }
    };

  Object.keys(cmds).forEach(key => {
    var value = cmds[key];
      var command = value.cmd;
      client.commands.set(command, command);

      if(value.a) {
        value.a.forEach(alias => {
        client.aliases.set(alias, command)
      })
      }
  })

    let cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))

    if(cmd === 'play') {
        const voiceChannel = msg.member.voiceChannel;
        if(!voiceChannel) return msg.channel.send(`:no_entry_sign: You must be listening in a voice channel to use that!`);
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if(!permissions.has('CONNECT')) {
            return msg.channel.send(`:no_entry_sign: I can't join Your voiceChannel because i don't have ` + '`' + '`CONNECT`' + '`' + ` permission!`);
        }

        if(!permissions.has('SPEAK')) {
            return msg.channel.send(`:no_entry_sign: I can't SPEAK in your voiceChannel because i don't have ` + '`' + '`SPEAK`' + '`' + ` permission!`);
        }

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();

			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`Added to queue: ${playlist.title}`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(args, 1);

					// eslint-disable-next-line max-depth
					var video = await youtube.getVideoByID(videos[0].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('I can\'t find any thing');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}

        async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = active.get(msg.guild.id);


//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));

let hrs = video.duration.hours == 1 ? (video.duration.hours > 9 ? `${video.duration.hours}:` : `0${video.duration.hours}:`) : '';
let min = video.duration.minutes > 9 ? `${video.duration.minutes}:` : `0${video.duration.minutes}:`;
let sec = video.duration.seconds > 9 ? `${video.duration.seconds}` : `0${video.duration.seconds}`;
let dur = `${hrs}${min}${sec}`

	const song = {
		id: video.id,
		title: video.title,
    duration: dur,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 50,
			playing: true,
      repeating: false
		};
		active.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			active.delete(msg.guild.id);
			return msg.channel.send(`I cant join this voice channel`);
		}
	} else {
		serverQueue.songs.push(song);

		if (playlist) return undefined;
		if(!args) return message.channel.send('no results.');
		else return msg.channel.send(':watch: Loading... [`' + args + '`]').then(m => {
      setTimeout(() => {//:watch: Loading... [let]
        m.edit(`:notes: Added **${song.title}**` + '(` ' + song.duration + ')`' + ` to the queue at position ` + `${serverQueue.songs.length}`);
      }, 500)
    }) //:notes: Added FROZEN | Let It Go Sing-along | Official Disney UK (04:03)  to the queue at position 1
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = active.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		active.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);
  if(serverQueue.repeating) {
    serverQueue.textChannel.send(`**Repeating:** ${song.title}`);
  } else {
	serverQueue.textChannel.send(':notes: Added **' + song.title + '** (`' + song.duration + '`) to begin playing.');
}
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
      if(serverQueue.repeating) return play(guild, serverQueue.songs[0])
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);


}
} else if(cmd === 'stop') {
        if(msg.guild.me.voiceChannel !== msg.member.voiceChannel) return msg.channel.send(`You must be in ${msg.guild.me.voiceChannel.name}`)
        if(!msg.member.hasPermission('ADMINISTRATOR')) {
          msg.react('❌')
          return msg.channel.send('You don\'t have permission `ADMINSTRATOR`');
        }
        let queue = active.get(msg.guild.id);
        queue.voiceChannel.leave();
        return msg.channel.send(':notes: The player has stopped and the queue has been cleared.');

    } else if(cmd === 'skip') {

      let vCh = msg.member.voiceChannel;

      let queue = active.get(msg.guild.id);

        if(!vCh) return msg.channel.send('Sorry, but you can\'t because you are not in voice channel');

        if(!queue) return msg.channel.send('No music playing to skip it');

        if(queue.repeating) return msg.channel.send('You can\'t skip it, because repeating mode is on, run ' + `\`${prefix}forceskip\``);

        let req = vCh.members.size - 1;

        if(req == 1) {
            msg.channel.send('**:notes: Skipped **' + args);
            return queue.connection.dispatcher.end('Skipping ..')
        }

        if(!queue.votes) queue.votes = [];

        if(queue.votes.includes(msg.member.id)) return msg.say(`You already voted for skip! ${queue.votes.length}/${req}`);

        queue.votes.push(msg.member.id);

        if(queue.votes.length >= req) {
            msg.channel.send('**:notes: Skipped **' + args);

            delete queue.votes;

            return queue.connection.dispatcher.end('Skipping ..')
        }

        msg.channel.send(`**You have successfully voted for skip! ${queue.votes.length}/${req}**`)

    } else if(cmd === 'pause') {

      let queue = active.get(msg.guild.id);

        let vCh = msg.member.voiceChannel;

        if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send(`You are not in my voice channel.`);

        if(!queue) {
            return msg.channel.send('No music playing to pause.')
        }

        if(!queue.playing) return msg.channel.send(':no_entry_sign: There must be music playing to use that!')

        let disp = queue.connection.dispatcher;

        disp.pause('Pausing..')

        queue.playing = false;

        msg.channel.send(':notes: Paused ' + args + '. **Type** `' + prefix + 'resume` to unpause!')

    } else if (cmd === 'resume') {

      let queue = active.get(msg.guild.id);

        let vCh = msg.member.voiceChannel;

        if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send(`You are not in my voice channel.`);

        if(!queue) return msg.channel.send(':notes: No music paused to resume.')

        if(queue.playing) return msg.channel.send(':notes: No music paused to resume.')

        let disp = queue.connection.dispatcher;

        disp.resume('Resuming..')

        queue.playing = true;

        msg.channel.send(':notes: Resumed ' + args + '.')

    } else if(cmd === 'volume') {

      let queue = active.get(msg.guild.id);

      if(!queue || !queue.songs) return msg.channel.send(':notes: There is no music playing to set volume.');

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send(':notes: You are not in my voice channel');

      let disp = queue.connection.dispatcher;

      if(isNaN(args[0])) return msg.channel.send(':notes: Numbers only!');

      if(parseInt(args[0]) > 100) return msg.channel.send('You can\'t set the volume more than 100.')
//:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
      msg.channel.send(':speaker: Volume has been **changed** from (`' + queue.volume + '`) to (`' + args[0] + '`)');

      queue.volume = args[0];

      disp.setVolumeLogarithmic(queue.volume / 100);

    } else if (cmd === 'queue') {

      let queue = active.get(msg.guild.id);

      if(!queue) return msg.channel.send(':no_entry_sign: There must be music playing to use that!');

      let embed = new Discord.RichEmbed()
      .setAuthor(`${client.user.username}`, client.user.displayAvatarURL)
      let text = '';

      for (var i = 0; i < queue.songs.length; i++) {
        let num;
        if((i) > 8) {
          let st = `${i+1}`
          console.log(st);
          let n1 = conv.toWords(st[0])
          let n2 = conv.toWords(st[1])
          num = `:${n1}::${n2}:`
        } else {
        let n = conv.toWords(i+1)
        num = `:${n}:`
      }
        text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`
      }
      embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`)
      msg.channel.send(embed)

    } else if(cmd === 'repeat') {

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('You are not in my voice channel');

      let queue = active.get(msg.guild.id);

      if(!queue || !queue.songs) return msg.channel.send('There is no music playing to repeat it.');

      if(queue.repeating) {
        queue.repeating = false;
        return msg.channel.send(':arrows_counterclockwise: **Repeating Mode** (`False`)');
      } else {
        queue.repeating = true;
        return msg.channel.send(':arrows_counterclockwise: **Repeating Mode** (`True`)');
      }

    } else if(cmd === 'forceskip') {

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('You are not in my voice channel');

      let queue = active.get(msg.guild.id);

      if(queue.repeating) {

        queue.repeating = false;

        msg.channel.send('ForceSkipped, Repeating mode is on.')

        queue.connection.dispatcher.end('ForceSkipping..')

        queue.repeating = true;

      } else {

        queue.connection.dispatcher.end('ForceSkipping..')

        msg.channel.send('ForceSkipped.')

      }

    } else if(cmd === 'skipto') {

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('You are not in my voice channel');

      let queue = active.get(msg.guild.id);

      if(!queue.songs || queue.songs < 2) return msg.channel.send('There is no music to skip to.');

    if(queue.repeating) return msg.channel.send('You can\'t skip, because repeating mode is on, run ' + `\`${prefix}repeat\` to turn off.`);

      if(!args[0] || isNaN(args[0])) return msg.channel.send('Please input song number to skip to it, run ' + prefix + `queue` + ' to see songs numbers.');

      let sN = parseInt(args[0]) - 1;

      if(!queue.songs[sN]) return msg.channel.send('There is no song with this number.');

      while (0 < sN) {
        queue.songs.shift();
      }

      msg.channel.send(`Skipped to: **${queue.songs[0].title}[${queue.songs[0].duration}]**`)

      queue.connection.dispatcher.end('SkippingTo..')

    }

});

 
 
 
 
 
 
 
 
 
 
 
 
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');/////By Mahmoud-QuaStyle
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome !', `Welcome ${member}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
client.login('NTQ4ODM2NzI5NDE1Nzk0Njg4.D1O_TA.sgKdz6Qa0SXwyNHj9E48x-IIZAg');