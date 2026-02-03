function generateCards(list, containerId) {
  const grid = document.getElementById(containerId);
  list.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${index * 0.05}s`; // stagger
    card.innerHTML = `
      <img src="${item.img}">
      <div class="card-title">${item.name}</div>
    `;
    card.onclick = () => openModal(item);
    grid.appendChild(card);
  });
}
