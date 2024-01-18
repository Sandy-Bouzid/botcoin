const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("sondage")
    .setDescription("Créer un sondage")
    .addStringOption(option => option
        .setName('question')
        .setDescription('Question du sondage')
        .setMaxLength(100)
        .setRequired(true)
    )
    .addStringOption(option => option
        .setName('option1')
        .setDescription('option 1 sur 5')
        .setMaxLength(50)
        .setRequired(true)
    )
    .addStringOption(option => option
        .setName('option2')
        .setDescription('option 2 sur 5')
        .setMaxLength(50)
        .setRequired(true)
    )
    .addStringOption(option => option
        .setName('option3')
        .setDescription('option 3 sur 5')
        .setMaxLength(50)
    )
    .addStringOption(option => option
        .setName('option4')
        .setDescription('option 4 sur 5')
        .setMaxLength(50)
    )
    .addStringOption(option => option
        .setName('option5')
        .setDescription('option 5 sur 5')
        .setMaxLength(50)
    ),

    async execute(interaction){
        await interaction.deferReply({ephemeral: true})
        const { client, channel } = await interaction;
        const options = await interaction.options.data;
        const emojis = [client.emojis.resolve('966420888943726643'), client.emojis.resolve('1016815538481147904'), client.emojis.resolve('1191028887489101864'), client.emojis.resolve('937794255483699261'), client.emojis.resolve('1191028879524122684')];

        let embed = new EmbedBuilder()
            .setTitle(`${options[0].value}`)
            .setColor('Green');

        for(let i = 1; i < options.length; i++){
            let emoji = emojis[i-1];
            let option = options[i];
            embed.addFields(
                {
                    name: `${emoji} ${option.value}`,
                    value: ' '
                }
            )
        }
       
        const message = await channel.send({embeds: [embed]});

        for(let i = 1; i < options.length; i++){
            let emoji = emojis[i-1];
            await message.react(emoji);
        }

        await interaction.editReply({content: 'Coin ! Sondage envoyé !'})
    }
}