module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Voici les résultats de votre recherche pour ${query}` },
            footer: { text: 'Si tu as des problème contacte le créateur : Yuukiジ#7067 et https://www.twitter.com/yuukisama_NC ' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};