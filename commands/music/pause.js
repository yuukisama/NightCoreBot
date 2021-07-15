module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - tu n'es pas dans un salon voc !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - tu n'es pas dans la même salon voc !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucun musique joué !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - La musique est en pause !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - la musique ${client.player.getQueue(message).playing.title} est en pause !`);
    },
};