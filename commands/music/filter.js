module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - tu n'es pas dans un salon voc !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - tu n'es pas dans dans le même salon voc !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucun musique joué!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Veuillez spécifier un filtre valide pour activer ou désactiver !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Ce filtre n'existe pas, essayez par exemple (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - J'**ajoute** le filtre à la musique, veuillez patienter... Remarque : plus la musique est longue, plus cela prendra du temps.`);
        else message.channel.send(`${client.emotes.music} - Je **désactive** le filtre sur la musique, veuillez patienter... Remarque : plus la lecture de la musique est longue, plus cela prendra du temps.`);
    },
};