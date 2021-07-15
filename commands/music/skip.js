module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'es pas dans un salon voc !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'es pas la mêùe salon voc !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucun Musique joué!`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - La musique à été juste **annulé** !`);
    },
};