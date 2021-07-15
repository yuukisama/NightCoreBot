module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'es pas dans un salon voc !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'es pas dans le même salon voc !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucun musique joué !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - La musique peut reprendre !`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - La chanson ${client.player.getQueue(message).playing.title} a repris !`);
    },
};