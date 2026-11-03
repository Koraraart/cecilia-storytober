const fragments = window.FRAGMENTS || [];
const gallery = document.querySelector("#gallery-grid");
const game = document.querySelector("#game");
const dialog = document.querySelector("#fragment-dialog");
let dragged = null;

function imageFor(item){ return item.image; }
function openFragment(item){
  document.querySelector("#dialog-day").textContent = `FRAGMENT ${item.order} · INKTOBER ${item.inktoberDay}`;
  document.querySelector("#dialog-title").textContent = item.title;
  document.querySelector("#dialog-image").src = imageFor(item);
  document.querySelector("#dialog-image").alt = `Illustration ${item.title}`;
  document.querySelector("#dialog-text").textContent = item.text;
  const link = document.querySelector("#dialog-tiktok");
  link.hidden = !item.tiktok;
  if(item.tiktok) link.href = item.tiktok;
  dialog.showModal();
}
function renderGallery(){
  gallery.innerHTML = "";
  fragments.forEach(item=>{
    const button = document.createElement("button");
    button.className = "art-card";
    button.type = "button";
    button.innerHTML = `<img loading="lazy" src="${imageFor(item)}" alt="Illustration ${item.title}"><strong>${item.title}</strong><small>Fragment ${item.order} · Jour ${item.inktoberDay}</small>`;
    button.addEventListener("click",()=>openFragment(item));
    gallery.appendChild(button);
  });
}
function renderGame(){
  game.innerHTML = "";
  // Départ mélangé : le visiteur doit reconstruire la chronologie.
  const shuffled = [...fragments].sort(()=>Math.random()-.5);
  shuffled.forEach((item,index)=>{
    const card = document.createElement("div");
    card.className = "game-card";
    card.draggable = true;
    card.tabIndex = 0;
    card.dataset.day = item.inktoberDay;
    card.innerHTML = `<span class="number">${String(index+1).padStart(2,"0")}</span><strong>${item.title}</strong>`;
    card.addEventListener("dragstart",()=>{dragged=card;card.classList.add("dragging")});
    card.addEventListener("dragend",()=>{card.classList.remove("dragging");dragged=null;renumber()});
    card.addEventListener("dragover",e=>e.preventDefault());
    card.addEventListener("drop",e=>{
      e.preventDefault();
      if(dragged && dragged!==card){
        const cards=[...game.children], a=cards.indexOf(dragged), b=cards.indexOf(card);
        if(a<b) card.after(dragged); else card.before(dragged);
        renumber();
      }
    });
    game.appendChild(card);
  });
  renumber();
}
function renumber(){[...game.children].forEach((c,i)=>c.querySelector(".number").textContent=String(i+1).padStart(2,"0"));}
document.querySelector("#check-order").addEventListener("click",()=>{
  const current=[...game.children].map(c=>Number(c.dataset.day));
  // Ordre narratif établi dans le document fourni : les jours associés aux fragments.
  const expected=fragments.map(f=>f.inktoberDay);
  const correct=current.every((day,i)=>day===expected[i]);
  document.querySelector("#game-feedback").textContent=correct
    ? "Bravo ! Vous avez retrouvé l’ordre narratif établi."
    : "Pas encore… Réessayez en suivant les indices des fragments.";
});
document.querySelector("#reset-order").addEventListener("click",renderGame);
document.querySelector("#close-dialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
renderGallery();
renderGame();
