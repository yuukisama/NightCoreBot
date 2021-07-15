module.exports = {
    name: 'w-filters',
    aliases: ['filters'],
    category: 'Music',
    utilisation: '{prefix}w-filters',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - tu n'es pas dans un salon voc !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas danns la même voc`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Pas de musique en lecture`);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'ORANGE',
                footer: { text: "Si tu rencontres des problèmes n'hésite pas à contacter Yuukiジ#7067 ou https://www.twitter.com/yuukisama_nc" },
                fields: [
                    { name: 'Filtres', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `Liste de tous les filtres activés ou désactivés.\nUtilise \`${client.config.discord.prefix}filter\` pour ajouter un filtre à une chanson.`,
            },
        });
    },
};