module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: "Panneau d'aide" },
                    footer: { text: "si t'es problème persiste tu peux envoyer un msg à 「Y U U K I」#7067 ou contacte sur Twitter (@_yuukisama)" },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music', value: music },
                        { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Pour utiliser des filtres, ${client.config.discord.prefix}filter (le filtre). Exemple : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - J'ai pas trouvé ta commande :(`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: "Panneau d'aide" },
                    footer: { text: 'Ce bot utilise un projet réalisé par Yuuki ( Twitter : @_yuukisama)' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Recherchez des informations sur la commande fournie.\nArguments obligatoires `[]`, arguments facultatifs `<>`.',
                }
            });
        };
    },
};