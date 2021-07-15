module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - tu n'es pas dans un salon voc !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - tu n'es pas dans le même salon voc !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - indique le titre de musique ou colle un lien URL !`);

        client.player.play(message, args.join(" "), { firstResult: true });

        
    },
};