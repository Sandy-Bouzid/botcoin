const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hellothere')
		.setDescription('Replies with General Kenobi!'),
	async execute(interaction) {
		await interaction.reply('General Kenobi !');
	},
};