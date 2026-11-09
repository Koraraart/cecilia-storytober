# Cécilia — site Inktober

## Fichiers
- `index.html` : structure des pages et textes de présentation
- `style.css` : couleurs, polices et mise en page
- `script.js` : galerie, agrandissement des images et jeu de classement
- `images/` : ajoute ici tes illustrations JPEG

## Ajouter tes illustrations
1. Dépose tes fichiers dans `images/`.
2. Dans `script.js`, retrouve le tableau `fragments`.
3. Pour chaque jour, modifie `title`, `text`, `image` et éventuellement `speedpaint`.

Exemple :
```js
{ day: 4, title: "Pomme", text: "Ton texte ici.", image: "images/Pomme.jpg", speedpaint: "" }
```

Le nom et la casse du fichier doivent correspondre exactement (ex. `Pomme.jpg`).
Laisse `speedpaint: ""` si tu ne souhaites pas afficher de lien.

## Publier avec GitHub Pages
1. Crée un dépôt GitHub et envoie tous les fichiers de ce dossier à la racine du dépôt.
2. Dans le dépôt, ouvre **Settings → Pages**.
3. Dans **Build and deployment**, choisis **Deploy from a branch**, puis `main` et `/ (root)`.
4. Enregistre. GitHub Pages publiera le site après quelques instants.

Les illustrations ne sont pas incluses : ajoute tes propres fichiers JPEG dans `images/`.
