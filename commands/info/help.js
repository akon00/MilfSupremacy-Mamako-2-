const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setImage('https://media.discordapp.net/attachments/898712823444668417/898714470346551296/portada_okaasan-online-3.png?width=741&height=417')
    .setColor("#e04a54")
    .setDescription(`**Milf Supremacy!, use =help2 for other cmd!**`);

    const embed1 = new Discord.MessageEmbed()
    .setColor("#e04a54")
    .setImage('https://media.discordapp.net/attachments/898712823444668417/898714470346551296/portada_okaasan-online-3.png?width=741&height=417')
    .setTitle('😂**__FUN COMMANDS__**😂')
    .setDescription(`
  > ☆ advice 
  > ☆ joke 
  > ☆ meme 
  > ☆ topic 
  > ☆ why
  > ☆ 8ball`);

    const embed2 = new Discord.MessageEmbed()
    .setColor("#e04a54")
    .setImage('https://media.discordapp.net/attachments/898712823444668417/898714470346551296/portada_okaasan-online-3.png?width=741&height=417')
    .setTitle('🎶**_MUSIC COMMAND_**🎵')
    .setDescription(`
    > ☆ play
    > ☆ clearqueue
    > ☆ pause
    > ☆ queue
    > ☆ resume
    > ☆ now playing
    > ☆ filters
    > ☆ skip
    > ☆ stop
    > ☆ volume
    > ☆ search`);

    const embed3 = new Discord.MessageEmbed()
    .setImage('https://media.discordapp.net/attachments/898712823444668417/898714470346551296/portada_okaasan-online-3.png?width=741&height=417')
    .setTitle('📜**_RANK COMMANDS _**📊')
    .setColor("#e04a54")
    .setDescription(`
    > ☆ leaderboard 
    > ☆ rank `);

    const embed4 = new Discord.MessageEmbed()
    .setImage('https://media.discordapp.net/attachments/898712823444668417/898714470346551296/portada_okaasan-online-3.png?width=741&height=417')
    .setTitle('**_⚒ MOD COMMANDS_**🛠')
    .setColor("#e04a54")
    .setDescription(`
    > ☆ ban
    > ☆ lockdown
    > ☆ moveall
    > ☆ poll
    > ☆ snipe
    > ☆ unbanall
    > ☆ warn
    > ☆ purge
    > ☆ steal-emoji | se
    > ☆voicekick
    > ☆setnick
    > ☆modlog`);

    const embed5 = new Discord.MessageEmbed()
    .setImage('https://media.discordapp.net/attachments/898712823444668417/898714470346551296/portada_okaasan-online-3.png?width=741&height=417')
    .setTitle('**_🔎INFO COMMANDS📂_**')
    .setColor("#e04a54")
    .setDescription(`
    > ☆ help 
    > ☆ avatar 
    > ☆ invite 
    > ☆ menu 
    > ☆ ping ,
    > ☆ shorturl 
    > ☆sourcebin
    > ☆help2
    > ☆anime
    > ☆botinfo
    > ☆pokemon
    > ☆serveravatar
    > ☆serverinfo
    > ☆whois
    > ☆botinfo
    > ☆country
    > ☆badge`);
    
    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------
let button1 = new MessageButton()
    .setLabel(`FUN`)
    .setID(`help1`)
    .setEmoji(`889832675932782602`)
    .setStyle("gray");
    

     let button2 = new MessageButton()
    .setLabel(`MUSIC`)
    .setID(`help2`)
    .setEmoji(`889829496084119563`)
    .setStyle("gray");

     let button3 = new MessageButton()
    .setLabel(`LEVELING`)
    .setID(`help3`)
    .setEmoji(`890167162109591562`)
    .setStyle("red");
    if(!message.member.roles.cache.has("889887906838233098")) button3.setDisabled(false);

     let button4 = new MessageButton()
    .setLabel(`MOD`)
    .setID(`help4`)
    .setEmoji(`889828550864158720`)
    .setStyle("gray");
    if(!message.member.hasPermission("ADMINISTRATOR")) button4.setDisabled(true);

     let button5 = new MessageButton()
    .setLabel(`INFO`)
    .setID(`help5`)
    .setEmoji(`890150643870883840`)
    .setStyle("gray");

    let button6 = new MessageButton()
    .setLabel('Animals')
    .setID('help5')
    .setEmoji('890518792344592384')
    .setStyle('gray')
    

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4, button5,);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

       if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
         
            MESSAGE.edit(embed4, row);
            await b.reply.defer()
        }

        if(b.id == "help4") {
         
            MESSAGE.edit(embed4, row);
            await b.reply.defer()
        }

        if(b.id == "help5") {
         
            MESSAGE.edit(embed5, row);
            await b.reply.defer()
        }


  
  
    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
    })

       //---------------------------------------E N D----------------------------------------
       
       //------------------| Join our official server if you got any problem: https://discord.gg/EZDfrer
       //------------------| YouTube Video: https://youtu.be/USGkxqQQt4U
       //------------------| YouTube Channel: https://www.youtube.com/c/TheBlackFireCoder
    }
  };