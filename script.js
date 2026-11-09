/*
  CÉCILIA — Une histoire en 31 fragments

  day = numéro du dessin dans la galerie Inktober.
  chronologicalOrder = position réelle dans l'histoire.
*/

// DONNÉES DES 31 DESSINS
const fragments = [
  { day: 1, title: "Pomme", text: "Tout a commencé avec une pomme, un moment de tentation, mais ça n’a pas été un choix fait en pleine conscience… et cela n’était que le début.", image: "images/Pomme.jpg", speedpaint: "https://www.tiktok.com/@korara_art/video/7691751088088894723" },

  { day: 2, title: "Relique", text: "Mais qu’est-ce qu’il l’a amenée là ? A-t-elle été chassée ? Est-elle rentrée au monastère de Saint Cécile de son plein gré ? Une descente spirituelle ou une retraite nécessaire ?", image: "images/Relique.jpg", speedpaint: "https://www.tiktok.com/@korara_art/video/7692165707492085014" },

  { day: 3, title: "Miniature", text: "Quel sentiment si rare et si agréable ! C’est l’un des premiers souvenirs de Cécilia et son souvenir le plus cher. Son père lui a offert cette magnifique maison miniature. C’est l'un des rares moments de véritable bonheur de sa vie.", image: "images/Miniature.jpg", speedpaint: "https://www.tiktok.com/@korara_art/video/7692518875254033686" },

  { day: 4, title: "Cactus", text: "Quel endroit inhospitalier… Une adolescente prise entre deux figures de cactus, leurs conflits incessants la blessent profondément, quand est-ce qu’une famille est devenue un lieu si douloureux et si peu accueillant ?", image: "images/Cactus.jpg", speedpaint: "https://www.tiktok.com/@korara_art/video/7692891670404173078" },

  { day: 5, title: "Claque", text: "Hmpf, Il n’avait jamais osé lever ma main sur elle. Avant….il l’aimé. Et Pourtant cette amour filiale a pourtant ses limites.", image: "images/Claque.jpg", speedpaint: "https://www.tiktok.com/@korara_art/video/7693273777374874902" },

  { day: 6, title: "Ogre", text: "Vous savez tout s’achète, Cet homme…est répugnant, il fréquente les salons mondains, il a de multiples fiancées qu’il a fait parfois disparaitre, tout le monde rampe à ses pieds y compris les parents de Cécilia.", image: "images/Ogre.jpg", speedpaint: "https://www.tiktok.com/@korara_art/video/7693630197089717526" },

  { day: 7, title: "Panique", text: "Ajoute ici le texte de ce fragment.", image: "images/Panique.jpg", speedpaint: "" },

  { day: 8, title: "Puant", text: "Ajoute ici le texte de ce fragment.", image: "images/Puant.jpg", speedpaint: "" },

  { day: 9, title: "Bélier", text: "Ajoute ici le texte de ce fragment.", image: "images/Bélier.jpg", speedpaint: "" },

  { day: 10, title: "Mystique", text: "Ajoute ici le texte de ce fragment.", image: "images/Mystique.jpg", speedpaint: "" },

  { day: 11, title: "Sauvetage", text: "Ajoute ici le texte de ce fragment.", image: "images/Sauvetage.jpg", speedpaint: "" },

  { day: 12, title: "Jeter", text: "Ajoute ici le texte de ce fragment.", image: "images/Jeter.jpg", speedpaint: "" },

  { day: 13, title: "Fragile", text: "Ajoute ici le texte de ce fragment.", image: "images/Fragile.jpg", speedpaint: "" },

  { day: 14, title: "Dame", text: "Ajoute ici le texte de ce fragment.", image: "images/Dame.jpg", speedpaint: "" },

  { day: 15, title: "Hourra", text: "Ajoute ici le texte de ce fragment.", image: "images/Hourra.jpg", speedpaint: "" },

  { day: 16, title: "Dégingandé", text: "Ajoute ici le texte de ce fragment.", image: "images/Dégingandé.jpg", speedpaint: "" },

  { day: 17, title: "Bidule", text: "Ajoute ici le texte de ce fragment.", image: "images/Bidule.jpg", speedpaint: "" },

  { day: 18, title: "Sans ailes", text: "Ajoute ici le texte de ce fragment.", image: "images/Sans ailes.jpg", speedpaint: "" },

  { day: 19, title: "Confus", text: "Ajoute ici le texte de ce fragment.", image: "images/Confus.jpg", speedpaint: "" },

  { day: 20, title: "Salon", text: "Ajoute ici le texte de ce fragment.", image: "images/Salon.jpg", speedpaint: "" },

  { day: 21, title: "Héros", text: "Ajoute ici le texte de ce fragment.", image: "images/Héros.jpg", speedpaint: "" },

  { day: 22, title: "Phare", text: "Ajoute ici le texte de ce fragment.", image: "images/Phare.jpg", speedpaint: "" },

  { day: 23, title: "Élégant", text: "Ajoute ici le texte de ce fragment.", image: "images/Elegant.jpg", speedpaint: "" },

  { day: 24, title: "Cuisiner", text: "Ajoute ici le texte de ce fragment.", image: "images/Cuisiner.jpg", speedpaint: "" },

  { day: 25, title: "Fracture", text: "Remplace par ton titre et ton texte.", image: "images/Fracture.jpg", speedpaint: "" },

  { day: 26, title: "Zip", text: "Remplace par ton titre et ton texte.", image: "images/Fragment-26.jpg", speedpaint: "" },

  { day: 27, title: "Stupide", text: "Remplace par ton titre et ton texte.", image: "images/Zip.jpg", speedpaint: "" },

  { day: 28, title: "Trophée", text: "Remplace par ton titre et ton texte.", image: "images/Trophée.jpg", speedpaint: "" },

  { day: 29, title: "Défense d'éléphant", text: "Remplace par ton titre et ton texte.", image: "images/Défense d'éléphant.jpg", speedpaint: "" },

  { day: 30, title: "Cookie", text: "Remplace par ton titre et ton texte.", image: "images/Cookie.jpg", speedpaint: "" },

  { day: 31, title: "Frimer", text: "Remplace par ton titre et ton texte.", image: "images/Frimer.jpg", speedpaint: "" }
];


// CORRESPONDANCE CHRONOLOGIQUE
// Chaque nombre représente le jour de galerie correspondant
// à la position chronologique indiquée.
//
// Position 1 = galerie 3 : Miniature
// Position 2 = galerie 16 : Dégingandé
// Position 3 = galerie 29 : Défense d'éléphant

const chronologicalGalleryDays = [
  3, 16, 29, 4, 5, 26, 9, 7,
  6, 31, 21, 11, 23, 15, 1, 14,
  28, 17, 20, 8, 18, 27, 19, 12,
  13, 22, 25, 2, 10, 24, 30
];


// ATTRIBUTION DE L'ORDRE CHRONOLOGIQUE
fragments.forEach(fragment => {
  fragment.chronologicalOrder =
    chronologicalGalleryDays.indexOf(fragment.day) + 1;
});


// VÉRIFICATION DES DONNÉES
const mappingIsValid =
  chronologicalGalleryDays.length === fragments.length &&
  new Set(chronologicalGalleryDays).size === fragments.length &&
  chronologicalGalleryDays.every(day =>
    fragments.some(fragment => fragment.day === day)
  );

if (!mappingIsValid) {
  console.error("Erreur dans la correspondance chronologique !");
}


// ÉLÉMENTS HTML
const gallery = document.getElementById("galleryGrid");
const wordList = document.getElementById("wordList");
const status = document.getElementById("gameStatus");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");


// GALERIE : ORDRE INKTOBER
function renderGallery() {
  gallery.innerHTML = "";

  [...fragments]
    .sort((a, b) => a.day - b.day)
    .forEach(fragment => {
      const card = document.createElement("article");
      card.className = "fragment-card";

      const imageButton = document.createElement("button");
      imageButton.className = "image-button";
      imageButton.type = "button";
      imageButton.setAttribute(
        "aria-label",
        `Agrandir l’image : ${fragment.title}`
      );

      const img = document.createElement("img");
      img.src = fragment.image;
      img.alt = fragment.title;
      img.loading = "lazy";

      img.onerror = () => {
        imageButton.innerHTML = "";

        const placeholder = document.createElement("span");
        placeholder.className = "image-placeholder";
        placeholder.textContent = fragment.title;

        imageButton.appendChild(placeholder);
      };

      imageButton.appendChild(img);

      imageButton.addEventListener("click", () => {
        openLightbox(fragment.image, fragment.title);
      });

      const copy = document.createElement("div");
      copy.className = "card-copy";

      const day = document.createElement("div");
      day.className = "day";
      day.textContent =
        `Inktober · Jour ${String(fragment.day).padStart(2, "0")}`;

      const title = document.createElement("h3");
      title.textContent = fragment.title;

      const description = document.createElement("p");
      description.textContent = fragment.text;

      copy.append(day, title, description);

      if (fragment.speedpaint && fragment.speedpaint.trim()) {
        const link = document.createElement("a");
        link.className = "speedpaint";
        link.href = fragment.speedpaint;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Voir le speedpaint ↗";

        copy.appendChild(link);
      }

      card.append(imageButton, copy);
      gallery.appendChild(card);
    });
}


// LIGHTBOX
function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

document.getElementById("closeLightbox")
  .addEventListener("click", closeLightbox);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});


// =========================================
// JEU : NUMEROS FIXES ET CARTES DEPLACABLES
// =========================================

let currentOrder = [];
let selectedDay = null;
let draggedDay = null;


// MÉLANGE DES CARTES
function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  // Évite de commencer par hasard avec le bon ordre.
  if (
    result.every((item, index) =>
      item.chronologicalOrder === index + 1
    ) &&
    result.length > 1
  ) {
    [result[0], result[1]] = [result[1], result[0]];
  }

  return result;
}


// ÉCHANGE DE DEUX CARTES
function swapCards(firstDay, secondDay) {
  if (firstDay === secondDay) {
    return;
  }

  const firstIndex = currentOrder.findIndex(
    fragment => fragment.day === firstDay
  );

  const secondIndex = currentOrder.findIndex(
    fragment => fragment.day === secondDay
  );

  if (firstIndex === -1 || secondIndex === -1) {
    return;
  }

  // Les cartes échangent leurs positions.
  // Les numéros des cases ne changent jamais.
  [
    currentOrder[firstIndex],
    currentOrder[secondIndex]
  ] = [
    currentOrder[secondIndex],
    currentOrder[firstIndex]
  ];

  selectedDay = null;
  draggedDay = null;

  status.textContent =
    "Cartes échangées. Continuez ou vérifiez votre réponse.";

  renderGame();
}


// AFFICHAGE DE LA GRILLE
function renderGame() {
  wordList.innerHTML = "";

  currentOrder.forEach((fragment, index) => {

    // L'emplacement est créé avec son numéro fixe.
    const slot = document.createElement("div");
    slot.className = "game-slot";
    slot.dataset.position = index + 1;

    // Numéro fixe de la case.
    const number = document.createElement("span");
    number.className = "slot-number";
    number.textContent = index + 1;

    // Carte qui peut changer de case.
    const card = document.createElement("button");
    card.type = "button";
    card.className = "word-card";
    card.textContent = fragment.title;
    card.draggable = true;

    // Identifiant interne de la carte, invisible au joueur.
    card.dataset.day = fragment.day;

    card.setAttribute(
      "aria-label",
      `${fragment.title}. Position ${index + 1}.`
    );

    if (selectedDay === fragment.day) {
      card.classList.add("selected");
      card.setAttribute("aria-pressed", "true");
    } else {
      card.setAttribute("aria-pressed", "false");
    }

    slot.append(number, card);
    wordList.appendChild(slot);
  });
}


// =========================================
// GLISSER-DÉPOSER AVEC UNE SOURIS
// =========================================

// Début du déplacement.
wordList.addEventListener("dragstart", event => {
  const card = event.target.closest(".word-card");

  if (!card) return;

  draggedDay = Number(card.dataset.day);

  card.classList.add("dragging");

  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData(
      "text/plain",
      String(draggedDay)
    );
  }
});


// Autoriser le dépôt sur une case.
wordList.addEventListener("dragover", event => {
  const slot = event.target.closest(".game-slot");

  if (!slot) return;

  event.preventDefault();

  slot.classList.add("drag-over");
});


// Retirer l'effet visuel quand on quitte une case.
wordList.addEventListener("dragleave", event => {
  const slot = event.target.closest(".game-slot");

  if (slot && !slot.contains(event.relatedTarget)) {
    slot.classList.remove("drag-over");
  }
});


// Déposer une carte sur une autre case.
wordList.addEventListener("drop", event => {
  const slot = event.target.closest(".game-slot");

  if (!slot) return;

  event.preventDefault();

  const targetCard = slot.querySelector(".word-card");

  const targetDay = targetCard
    ? Number(targetCard.dataset.day)
    : null;

  const sourceDay = draggedDay;

  wordList.querySelectorAll(".game-slot").forEach(item => {
    item.classList.remove("drag-over");
  });

  if (
    sourceDay !== null &&
    targetDay !== null &&
    sourceDay !== targetDay
  ) {
    swapCards(sourceDay, targetDay);
  }
});


// Fin du glisser-déposer.
wordList.addEventListener("dragend", () => {
  draggedDay = null;

  wordList.querySelectorAll(".dragging, .drag-over").forEach(item => {
    item.classList.remove("dragging", "drag-over");
  });
});


// =========================================
// JEU SUR TELEPHONE ET PAR CLIC
// =========================================

// Premier toucher : sélectionner une carte.
// Deuxième toucher : échanger avec une autre carte.
wordList.addEventListener("click", event => {
  const card = event.target.closest(".word-card");

  if (!card) return;

  const clickedDay = Number(card.dataset.day);

  // Première carte sélectionnée.
  if (selectedDay === null) {
    selectedDay = clickedDay;

    renderGame();

    const selectedFragment = fragments.find(
      fragment => fragment.day === clickedDay
    );

    status.textContent =
      `« ${selectedFragment.title} » sélectionné. Touchez une autre carte pour échanger leurs places.`;

    return;
  }

  // Deuxième toucher sur la même carte : annuler.
  if (selectedDay === clickedDay) {
    selectedDay = null;

    renderGame();

    status.textContent = "Sélection annulée.";

    return;
  }

  // Deuxième carte : échange.
  swapCards(selectedDay, clickedDay);
});


// =========================================
// MELANGER LES CARTES
// =========================================

function startGame() {
  currentOrder = shuffle(fragments);

  selectedDay = null;
  draggedDay = null;

  renderGame();

  status.textContent =
    "Les 31 cartes ont été mélangées. À vous de jouer !";
}


// =========================================
// VERIFIER LES REPONSES
// =========================================

function checkGame() {
  let correctCount = 0;

  currentOrder.forEach((fragment, index) => {
    if (fragment.chronologicalOrder === index + 1) {
      correctCount++;
    }
  });

  if (correctCount === fragments.length) {
    status.textContent =
      "Bravo ! Vous avez reconstitué toute l'histoire de Cécilia ! ✨";
  } else {
    status.textContent =
      `${correctCount} carte(s) bien placée(s) sur ${fragments.length}. Continuez !`;
  }
}


// BOUTONS DU JEU
document.getElementById("shuffleButton")
  .addEventListener("click", startGame);

document.getElementById("checkButton")
  .addEventListener("click", checkGame);


// =========================================
// INITIALISATION
// =========================================

renderGallery();
startGame();
