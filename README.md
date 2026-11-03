# Cécilia — guide de démarrage GitHub Pages

Ce site statique utilise HTML, CSS et JavaScript. Les fichiers sont prêts à être placés à la racine d'un dépôt GitHub.

## Structure
- `index.html` : contenu et sections Présentation / Le projet / Galerie.
- `style.css` : apparence, couleurs, typographie, adaptation mobile.
- `script.js` : affichage galerie, popup dessin, drag-and-drop et vérification.
- `fragments.js` : titres, textes, jours Inktober, chemins image et liens TikTok.
- `answer-key.js` : clé de correction du jeu.
- `assets/images/` : déposer les illustrations ici.
- `assets/speedpaints/` : dossier facultatif pour ranger des ressources.

**Important :** la galerie s'affiche par numéro de jour Inktober, jamais par ordre narratif. L'ordre narratif n'est utilisé que par la vérification du jeu et n'est pas montré comme numérotation dans l'interface. Le code de correction côté navigateur n'est toutefois pas secret pour quelqu'un qui inspecte les fichiers.

## Ajouter les images
Les chemins sont prévus pour ces noms : `jour-01.jpg`, `jour-02.jpg`, …, `jour-31.jpg`.
Déposez les fichiers dans `assets/images/`. Les noms et extensions doivent correspondre exactement (GitHub distingue les majuscules/minuscules).

### Créer le dossier sur GitHub si vous ne le voyez pas
1. Ouvrez la page principale du dépôt.
2. Cliquez **Add file → Create new file**.
3. Nommez le fichier `assets/images/.gitkeep`.
4. Cliquez **Commit changes**. GitHub crée automatiquement les dossiers `assets` et `images`.
5. Ouvrez `assets/images`, cliquez **Add file → Upload files**, sélectionnez vos images puis validez.
6. Vérifiez qu'elles apparaissent dans ce dossier.

Vous pouvez aussi créer ces dossiers sur votre ordinateur puis envoyer le contenu. Assurez-vous que `index.html` reste à la racine du dépôt.

## Modifier un fragment
Dans `fragments.js`, cherchez le titre, par exemple `"title": "Pomme / Apple"`. Un objet contient :
- `id` : identifiant du jeu, gardez-le inchangé.
- `title` : titre visible.
- `inktoberDay` : numéro du prompt; la galerie se trie sur cette valeur.
- `image` : chemin du fichier image.
- `text` : texte affiché au clic.
- `tiktok` : URL du speedpaint; laissez `""` s'il n'y a pas de lien.

Exemple :
```js
{
  "id": "day-01",
  "title": "Pomme / Apple",
  "inktoberDay": 1,
  "image": "assets/images/jour-01.jpg",
  "text": "Tout a commencé avec une pomme…",
  "tiktok": "https://www.tiktok.com/@korara_art/video/7691751088088894723"
}
```
Pour changer le lien TikTok, collez l'URL complète dans le champ `"tiktok"`. Le lien s'ouvre depuis la fenêtre du dessin.

## Modifier l'ordre du jeu
La clé est `answer-key.js`, avec les identifiants des fragments dans l'ordre narratif voulu. Réordonnez cette liste pour changer la solution. Ne modifiez pas le tri de la galerie : elle reste classée par jour Inktober.

## Publier avec GitHub Pages
1. Créez un dépôt, par exemple `cecilia-inktober`.
2. Envoyez tous les fichiers et dossiers de ce kit à la racine du dépôt.
3. Vérifiez que `index.html` est directement visible dans le dépôt.
4. Allez dans **Settings → Pages**.
5. Choisissez **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
6. Attendez la fin du déploiement; GitHub Pages affiche l'URL du site dans cette page.

## Dépannage 404 / images absentes
- 404 de la page : `index.html` doit être à la racine et Pages publier `main` / `/ (root)`.
- Page OK mais image cassée : vérifiez chemin, extension et casse du nom.
- Pour un dépôt de projet, utilisez les chemins relatifs comme `assets/images/jour-01.jpg`; ne commencez pas par `/assets/`.
- Après un commit, attendez le déploiement puis rechargez la page.
