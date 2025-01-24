const button = document.querySelector("#readmoreButton");
const newArtDom = document.querySelector(".newAdded");
const text = "READ MORE";
const textArray = [...text];

const menu = document.querySelector('#menu-open');

const blob = document.createElement("div");
blob.classList.add("blob");
newArtDom.appendChild(blob);

button.addEventListener("mouseenter", (e) => {
  button.innerHTML = "";
  let j = 0;
  for (let i = 0; i <= 8; i++) {
    let el = document.createElement("p");
    el.innerHTML = textArray[i] == " " ? "&nbsp;" : textArray[i];
    el.classList.add("swipeup");
    el.style.animationDelay = `${j}s`;
    button.appendChild(el);
    j += 0.01;
  }
});

button.addEventListener("mouseleave", (e) => {
  button.innerHTML = "";
  let j = 0;
  for (let i = 0; i <= 8; i++) {
    let el = document.createElement("p");
    el.innerHTML = textArray[i] == " " ? "&nbsp;" : textArray[i];
    el.classList.add("swipedown");
    el.style.animationDelay = `${j}s`;
    button.appendChild(el);
    j += 0.01;
  }
});

newArtDom.addEventListener("mousemove", (e) => {
  blob.style.left = `${e.clientX - newArtDom.getBoundingClientRect().left - (150/2)}px`;
  blob.style.top = `${e.clientY - newArtDom.getBoundingClientRect().top - (150/2)}px`;
});

newArtDom.addEventListener('mouseleave',(e)=>{
  blob.style.opacity = 0
})

newArtDom.addEventListener('mouseenter',(e)=>{
  blob.style.opacity = 0.5;
  blob.style.zIndex = 0
})



menu.onclick = ()=>{
  if(menu.getAttribute('data-isOpen') == 'false'){
    menu.src = './assets/images/icon-menu-close.svg';
    menu.setAttribute('data-isOpen','true');
    document.querySelector('.nav').style.display = 'block';
  }else{
    menu.src = "./assets/images/icon-menu.svg";
    menu.setAttribute('data-isOpen','false');
    document.querySelector('.nav').style.display = 'none';
  }
}