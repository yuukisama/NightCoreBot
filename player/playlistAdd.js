module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} a été ajouté dans la file d'attente (**${playlist.tracks.length}**) !`);
};