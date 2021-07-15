module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - tu n'es pas dans un salon voc !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - tu n'es pas dans le même salon voc !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucun musique joué !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: "Si tu rencontres des problèmes contacte Yuukiジ#7067 ou https://www.twitter.com/yuukisama_nc.`" },
                fields: [
                    { name: 'Chaîne', value: track.author, inline: true },
                    { name: 'Demandé-e par', value: track.requestedBy.username, inline: true },
                    { name: 'playlist?', value: track.fromPlaylist ? 'Oui' : 'Non', inline: true },

                    { name: 'Vu', value: track.views, inline: true },
                    { name: 'Durée', value: track.duration, inline: true },
                    { name: 'Filtres activées', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Mode répétiton', value: client.player.getQueue(message).repeatMode ? 'Oui' : 'Non', inline: true },
                    { name: 'Mis en pause?', value: client.player.getQueue(message).paused ? 'Oui' : 'Non', inline: true },

                    { name: 'Barre de progression', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};