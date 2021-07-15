module.exports = async (client) => {
    console.log(`connecté en tant que ${client.user.username}. Prêt sur ${client.guilds.cache.size} serveur, pour un total de ${client.users.cache.size} utilisateurs`);

    client.user.setActivity(client.config.discord.activity);
};