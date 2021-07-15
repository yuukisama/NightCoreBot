module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'es pas dans un salon voc !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'es pas dans le même salon voc !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucun musique joué !`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - File d'attente mélangée **${client.player.getQueue(message).tracks.length}** chanson(s) !`);
    },
};