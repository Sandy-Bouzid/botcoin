const { SlashCommandBuilder } = require('discord.js');

const min = 1;
const max = 2;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Replies with Random Meme !'),
	async execute(interaction) {
        const imageNumber = Math.floor(Math.random() * (max - min + 1) + min);
		await interaction.reply({ content: "I sent you a photo!", files: [`./images/${imageNumber}.jpg`] })
	},
};