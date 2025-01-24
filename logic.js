const card = document.querySelector(".card");
const dom = card.getBoundingClientRect();

card.addEventListener("mousemove", (e) => {
  card.style.boxShadow = `${(e.clientX - dom.left) / (dom.width / 30)}px ${
    (e.clientY - dom.top) / (dom.height / 30)
  }px 0 black`;
});

card.addEventListener("mouseleave", (e) => {
  card.style.boxShadow = `8px 8px 0 black`;
});
