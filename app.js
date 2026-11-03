const dialog=document.querySelector("#art-dialog");
const cards=[...document.querySelectorAll(".art-card")];
cards.forEach(card=>{
  const open=()=>{const img=card.querySelector("img");document.querySelector("#dialog-image").src=img.src;document.querySelector("#dialog-image").alt=img.alt;document.querySelector("#dialog-title").textContent=card.dataset.title;document.querySelector("#dialog-meta").textContent=`PLACE DANS LE RÉCIT · ${card.dataset.position}  /  PROMPT ORIGINAL · ${card.dataset.prompt}`;document.querySelector("#dialog-description").textContent=card.dataset.description;dialog.showModal()};
  card.querySelector(".art-open").addEventListener("click",open);
  card.querySelector(".text-button").addEventListener("click",open);
});
document.querySelector(".dialog-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});

const list=document.querySelector("#sortable");let dragged=null;
function enableDrag(){
  list.querySelectorAll(".sort-card").forEach(card=>{
    card.addEventListener("dragstart",()=>{dragged=card;card.classList.add("dragging")});
    card.addEventListener("dragend",()=>{card.classList.remove("dragging");dragged=null});
    card.addEventListener("dragover",e=>{e.preventDefault();if(!dragged||dragged===card)return;const r=card.getBoundingClientRect();const after=e.clientY>r.top+r.height/2;list.insertBefore(dragged,after?card.nextSibling:card)});
  });
}
enableDrag();
document.querySelector("#check-order").addEventListener("click",()=>{
  const names=[...list.querySelectorAll(".sort-card strong")].map(x=>x.textContent);
  const ok=names[0]==="Frimer"&&names[1]==="Héros";
  document.querySelector("#feedback").textContent=ok?"Bravo ! Tu as retrouvé l'ordre narratif de ces deux fragments.":"Pas tout à fait : dans ton récit, Frimer (place 10) précède Héros (place 11). Essaie encore !";
});
document.querySelector("#reset-order").addEventListener("click",()=>{
  const items=[...list.children];items.reverse().forEach(x=>list.appendChild(x));
  document.querySelector("#feedback").textContent="Les deux fragments ont été mélangés. À toi de jouer !";
});
