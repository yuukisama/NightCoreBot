# Musique-bot
Un code complet à télécharger pour un bot musical. Utilisation d'un module (discord-player) 🎧

Vous cherchez un code pour un bot musical ? Ce code entièrement open source est fait pour votre projet !

Si vous avez besoin d'aide pour ce projet, pour obtenir une assistance plus rapidement, vous pouvez rejoindre le serveur d'aide en cliquant simplement [ici] (https://discord.gg/KUXn5gF4ck).

### Installation

Eh bien, commençons par télécharger le code.
Allez dans le dossier `config` puis le fichier `bot.js`.
Pour que le bot puisse démarrer, veuillez compléter le fichier avec vos identifiants comme suit :

- Pour les émojis

```js
émoticônes : {
    off : ':x:',
    erreur : ' : avertissement : ',
     dattente : ": bar_chart :",
    musique : ':musical_note:',
    succès : ':white_check_mark:',
}
```

- Pour la configuration

```js
discorde : {
    token: 'TOKEN',
    préfixe : 'PREFIX',
    activité : 'ACTIVITE',
}
```

- `token`, le token du bot disponible dans la section [Discord Developers](https://discordapp.com/developers/applications).
- `prefix`, le préfixe qui sera défini pour utiliser le bot.
- `activité`, l'activité du bot.

Dans la console, tapez `npm install` pour installer toutes les dépendances.

- Pour démarrer le bot :

```
#Avec nœud
index de nœud.js
npm start #Indiqué dans package.json

#Avec pm2
pm2 start index.js --name "MusicBot"
```

Il ne vous reste plus qu'à allumer votre bot !

### 🎵 Commandes musicales

```
lire <nom/URL>, lire de la musique dans un canal vocal.
recherchez <nom>, ouvrez un panneau pour choisir une musique, puis écoutez-la.
pause, pause la musique en cours.
reprendre, remet la musique en cours.
file d'attente, voir les prochaines chansons.
clear-queue, supprime la musique dans la file d'attente.
shuffle, pour mélanger la file d'attente.
en cours de lecture, voir la musique en cours.
boucle, pour activer ou désactiver la fonction de répétition.
volume <1 - 100>, modifiez le volume.
sauter, passer à la musique suivante.
arrête, arrête toute musique.
filtrer <filtre>, ajouter/supprimer un filtre.
w-filtres, voir filtres.
```

### 💡 Commandes générales

```
ping, voir la latence du bot.
help, voir la liste des commandes disponibles.
debug, voir le nombre de connexions vocales.
```#
