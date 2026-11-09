/*
      POUR AJOUTER TES DESSINS :
      1. Mets les fichiers JPEG dans un dossier nommé "images" à côté de ce fichier.
      2. Dans image, indique le nom exact : "Pomme.jpg", "Cactus.jpg", etc.
      3. Remplace les titres et textes par les tiens.
      4. Pour ajouter un speedpaint, colle son URL dans speedpaint.
         Laisse speedpaint: "" si tu n'as pas de lien : aucun lien ne sera affiché.
      5. Garde les fragments dans leur ordre chronologique ici : jour 1 en premier,
         jour 31 en dernier. La galerie suivra cet ordre automatiquement.
    */

    const fragments = [
      { day: 1,  title: "Pomme", text: "Tout a commencé avec une pomme, un moment de tentation, mais ça n’a pas été un choix fait en pleine conscience… et cela n’était que le début. ", image: "images/Pomme.jpg", speedpaint: "https://www.tiktok.com/@korara_art/video/7691751088088894723" },
      { day: 2,  title: "Relique", text: "Ajoute ici le texte de ce fragment.", image: "images/Relique.jpg", speedpaint: "" },
      { day: 3,  title: "Miniature", text: "Ajoute ici le texte de ce fragment.", image: "images/Cactus.jpg", speedpaint: "" },
      { day: 4,  title: "Cactus", text: "Ajoute ici le texte de ce fragment.", image: "images/.jpg", speedpaint: "" },
      { day: 5,  title: "Claque", text: "Ajoute ici le texte de ce fragment.", image: "images/Zip.jpg", speedpaint: "" },
      { day: 6,  title: "Ogre", text: "Ajoute ici le texte de ce fragment.", image: "images/Bidule.jpg", speedpaint: "" },
      { day: 7,  title: "Panique", text: "Ajoute ici le texte de ce fragment.", image: "images/Cuisiner.jpg", speedpaint: "" },
      { day: 8,  title: "Puant", text: "Ajoute ici le texte de ce fragment.", image: "images/Claque.jpg", speedpaint: "" },
      { day: 9,  title: "Bélier", text: "Ajoute ici le texte de ce fragment.", image: "images/Fragile.jpg", speedpaint: "" },
      { day: 10, title: "Mystique", text: "Ajoute ici le texte de ce fragment.", image: "images/Mystique.jpg", speedpaint: "" },
      { day: 11, title: "Sauvetage", text: "Ajoute ici le texte de ce fragment.", image: "images/Trophee.jpg", speedpaint: "" },
      { day: 12, title: "Jeter", text: "Ajoute ici le texte de ce fragment.", image: "images/Salon.jpg", speedpaint: "" },
      { day: 13, title: "Fragile", text: "Ajoute ici le texte de ce fragment.", image: "images/Belier.jpg", speedpaint: "" },
      { day: 14, title: "Dame", text: "Ajoute ici le texte de ce fragment.", image: "images/Puant.jpg", speedpaint: "" },
      { day: 15, title: "Hourra", text: "Ajoute ici le texte de ce fragment.", image: "images/Confus.jpg", speedpaint: "" },
      { day: 16, title: "Dégingandé", text: "Ajoute ici le texte de ce fragment.", image: "images/Sans-ailes.jpg", speedpaint: "" },
      { day: 17, title: "Bidule", text: "Ajoute ici le texte de ce fragment.", image: "images/Phare.jpg", speedpaint: "" },
      { day: 18, title: "Sans ailes", text: "Ajoute ici le texte de ce fragment.", image: "images/Fracture.jpg", speedpaint: "" },
      { day: 19, title: "Confus", text: "Ajoute ici le texte de ce fragment.", image: "images/Panique.jpg", speedpaint: "" },
      { day: 20, title: "Salon", text: "Ajoute ici le texte de ce fragment.", image: "images/Hourra.jpg", speedpaint: "" },
      { day: 21, title: "Héros", text: "Ajoute ici le texte de ce fragment.", image: "images/Elegant.jpg", speedpaint: "" },
      { day: 22, title: "Phare", text: "Ajoute ici le texte de ce fragment.", image: "images/Cookie.jpg", speedpaint: "" },
      { day: 23, title: "Élégant", text: "Ajoute ici le texte de ce fragment.", image: "images/Relique-2.jpg", speedpaint: "" },
      { day: 24, title: "Cuisiner", text: "Ajoute ici le texte de ce fragment.", image: "images/Stupide.jpg", speedpaint: "" },
      { day: 25, title: "Fracture", text: "Remplace par ton titre et ton texte.", image: "images/Fragment-25.jpg", speedpaint: "" },
      { day: 26, title: "Zip", text: "Remplace par ton titre et ton texte.", image: "images/Fragment-26.jpg", speedpaint: "" },
      { day: 27, title: "Stupide", text: "Remplace par ton titre et ton texte.", image: "images/Fragment-27.jpg", speedpaint: "" },
      { day: 28, title: "Trophée", text: "Remplace par ton titre et ton texte.", image: "images/Fragment-28.jpg", speedpaint: "" },
      { day: 29, title: "Défense d'éléphant", text: "Remplace par ton titre et ton texte.", image: "images/Fragment-29.jpg", speedpaint: "" },
      { day: 30, title: "Cookie", text: "Remplace par ton titre et ton texte.", image: "images/Fragment-30.jpg", speedpaint: "" },
      { day: 31, title: "Frimer", text: "Remplace par ton titre et ton texte.", image: "images/Fragment-31.jpg", speedpaint: "" }
    ];

    const gallery = document.getElementById("galleryGrid");
    const wordList = document.getElementById("wordList");
    const status = document.getElementById("gameStatus");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    function renderGallery() {
      gallery.innerHTML = "";
      [...fragments].sort((a,b) => a.day - b.day).forEach(fragment => {
        const card = document.createElement("article");
        card.className = "fragment-card";

        const imageButton = document.createElement("button");
        imageButton.className = "image-button";
        imageButton.type = "button";
        imageButton.setAttribute("aria-label", `Agrandir l’image : ${fragment.title}`);

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
        imageButton.addEventListener("click", () => openLightbox(fragment.image, fragment.title));

        const copy = document.createElement("div");
        copy.className = "card-copy";
        const day = document.createElement("div");
        day.className = "day";
        day.textContent = `Inktober · Jour ${String(fragment.day).padStart(2,"0")}`;
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
    document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

    let currentOrder = [];
    let draggedItem = null;

    function shuffle(items) {
      const result = [...items];
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
      // Évite que le mélange tombe par hasard dans le bon ordre.
      if (result.every((item, i) => item.day === i + 1) && result.length > 1) {
        [result[0], result[1]] = [result[1], result[0]];
      }
      return result;
    }

    function renderGame() {
      wordList.innerHTML = "";
      currentOrder.forEach((fragment, index) => {
        const card = document.createElement("div");
        card.className = "word-card";
        card.draggable = true;
        card.dataset.index = index;
        card.dataset.day = fragment.day;
        const grip = document.createElement("span");
        grip.className = "grip";
        grip.textContent = "↕";
        const label = document.createElement("span");
        label.textContent = fragment.title;
        card.append(grip, label);

        card.addEventListener("dragstart", () => {
          draggedItem = card;
          card.classList.add("dragging");
        });
        card.addEventListener("dragend", () => {
          card.classList.remove("dragging");
          wordList.querySelectorAll(".over").forEach(el => el.classList.remove("over"));
        });
        card.addEventListener("dragover", e => {
          e.preventDefault();
          if (draggedItem && draggedItem !== card) card.classList.add("over");
        });
        card.addEventListener("dragleave", () => card.classList.remove("over"));
        card.addEventListener("drop", e => {
          e.preventDefault();
          card.classList.remove("over");
          if (!draggedItem || draggedItem === card) return;
          const from = currentOrder.findIndex(item => item.day === Number(draggedItem.dataset.day));
          const to = currentOrder.findIndex(item => item.day === Number(card.dataset.day));
          const moved = currentOrder.splice(from, 1)[0];
          currentOrder.splice(to, 0, moved);
          status.textContent = "Ordre modifié — continuez ou vérifiez votre réponse.";
          renderGame();
        });
        wordList.appendChild(card);
      });
    }

    function startGame() {
      currentOrder = shuffle(fragments);
      status.textContent = "Les cartes ont été mélangées. À vous de jouer !";
      renderGame();
    }

    document.getElementById("shuffleButton").addEventListener("click", startGame);
    document.getElementById("checkButton").addEventListener("click", () => {
      const correct = currentOrder.every((fragment, index) => fragment.day === index + 1);
      if (correct) {
        status.textContent = "Bravo ! Vous avez reconstitué l’histoire dans le bon ordre ✨";
      } else {
        const placed = currentOrder.filter((fragment,index) => fragment.day === index + 1).length;
        status.textContent = `${placed} carte(s) bien placée(s) sur ${fragments.length}. Essayez encore !`;
      }
    });

    renderGallery();
    startGame();
