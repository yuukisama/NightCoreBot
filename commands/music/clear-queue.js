module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - tu n'es pas dans un salon voc !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - tu n'es pas dans le même salon voc`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - aucune musique joué !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Il n'y a qu'une chanson dans la file d'attente.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - la file d'attente est **supprimée** !`);
    },
};