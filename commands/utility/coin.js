const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coin')
		.setDescription('Replies with Coin-Coin!'),
	async execute(interaction) {
		await interaction.reply('Coin-Coin !');
	},
};