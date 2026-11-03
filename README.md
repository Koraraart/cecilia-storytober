# Cécilia — starter GitHub Pages

Site statique en HTML/CSS/JavaScript, prévu pour GitHub Pages.

## Personnaliser les 31 fragments

Ouvrir `fragments.js`. Chaque entrée possède :
- `image`: chemin vers l'image (ex. `assets/images/jour-03.jpg`)
- `text`: texte qui apparaît au clic
- `tiktok`: URL complète du speedpaint TikTok (laisser `""` si aucun lien)
- `title` et `inktoberDay`: titre et numéro du prompt/jour

Les 31 images doivent être déposées dans `assets/images/` avec les noms `jour-01.jpg` à `jour-31.jpg`.
Le visuel d'en-tête facultatif peut être nommé `hero.jpg`.

## Publier sur GitHub Pages

1. Créer un dépôt GitHub, par exemple `cecilia-inktober`.
2. Envoyer les fichiers du dossier à la racine du dépôt (`index.html`, `style.css`, `script.js`, `fragments.js`, `assets/`).
3. Dans GitHub : **Settings → Pages**.
4. Choisir **Deploy from a branch**, puis `main` et `/ (root)`, et enregistrer.
5. GitHub affichera l'adresse publique du site.

## Repères pour les liens TikTok

Dans `fragments.js`, repérer le champ `tiktok` :
`"tiktok": "https://www.tiktok.com/@votrecompte/video/ID"`

## Note sur le jeu

Le prototype compare actuellement l'ordre glissé à l'ordre narratif fourni dans la liste. Il utilise les numéros des jours Inktober comme identifiants de fragment. Le jeu peut être enrichi ensuite (indices, score, étapes, correction visuelle).
