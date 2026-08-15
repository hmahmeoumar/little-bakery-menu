// ------------------------------------------------------------------
// MENU DATA — modifie ce tableau pour ajouter / changer des produits.
// "price" est en MRU (Ouguiya).
// "full: true" fait passer une catégorie sur toute la largeur (utile
// pour les catégories avec beaucoup de produits).
// ------------------------------------------------------------------
const MENU = [
  {
    id: "cookies",
    title: "Cookies",
    tag: "80 MRU",
    items: [
      { fr: "Classique", price: 80 },
      { fr: "Kinder", price: 80 },
      { fr: "Chocolat & Caramel", price: 80 },
      { fr: "Spéculos", price: 80 },
      { fr: "Marshmallow", price: 80 },
    ]
  },
  {
    id: "cookies-cups",
    title: "Cookies Cups",
    tag: "50 MRU",
    items: [
      { fr: "Chocolat", price: 50 },
      { fr: "Caramel", price: 50 },
      { fr: "El Mordjane", price: 50 },
    ]
  },
  {
    id: "jus",
    title: "Les Jus",
    tag: "Fresh Juices",
    items: [
      { fr: "Mangue", price: 100 },
      { fr: "Avocat", price: 100 },
      { fr: "Trio Tropical", price: 150 },
    ]
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    tag: "150 MRU",
    items: [
      { fr: "Fraise", price: 150 },
      { fr: "Blueberry", price: 150 },
      { fr: "Spéculos", price: 150 },
      { fr: "Bueno", price: 150 },
    ]
  },
  {
    id: "patisseries",
    title: "Gâteaux & Cheesecakes",
    tag: "Cakes",
    full: true,
    items: [
      { fr: "Brownies", price: 100 },
      { fr: "Gâteau Citron", price: 100 },
      { fr: "Carrot Cake", price: 150 },
      { fr: "Gâteau Chocolat", price: 150 },
      { fr: "Gâteau Coco", price: 150 },
      { fr: "Cheesecake Fraise", price: 150 },
      { fr: "Cheesecake Oreo", price: 150 },
      { fr: "Cheesecake Mangue", price: 150 },
      { fr: "Tiramisu Classique", price: 150 },
      { fr: "Tiramisu Blueberry & Citron", price: 150 },
      { fr: "Tiramisu Fraise & Coco", price: 150 },
    ]
  },
  {
    id: "verrines",
    title: "Verrines",
    tag: "100 MRU",
    full: true,
    items: [
      { fr: "Oreo Chocolat", price: 100 },
      { fr: "Spéculos", price: 100 },
      { fr: "Raffaello", price: 100 },
      { fr: "Tiramisu", price: 100 },
      { fr: "Fraise", price: 100 },
    ]
  },
  {
    id: "cheesecake-complet",
    title: "Cheesecake Complet",
    tag: "13 000 MRU",
    items: [
      { fr: "Oreo & Chocolat", price: 13000 },
      { fr: "Lotus", price: 13000 },
      { fr: "Fruit Rouge", price: 13000 },
      { fr: "Mangue", price: 13000 },
    ]
  },
  {
    id: "charlotte-complet",
    title: "Charlotte Complet",
    tag: "13 000 MRU",
    items: [
      { fr: "Fraise & Coco", price: 13000 },
      { fr: "Mangue", price: 13000 },
      { fr: "Citron & Blueberry", price: 13000 },
      { fr: "Tiramisu", price: 13000 },
    ]
  },
  {
    id: "brownies-complet",
    title: "Brownies Complet",
    tag: "Format complet",
    items: [
      { fr: "Brownies Complet", price: 6000 },
    ]
  }
];

function formatPrice(p){
  return p.toLocaleString('fr-FR') + " MRU";
}

function renderItemRow(it){
  const label = it.en
    ? `${it.fr} <span class="en">/ ${it.en}</span>`
    : it.fr;
  const note = it.desc ? `<div class="item-note">${it.desc}</div>` : '';
  return `
    <div>
      <div class="item-row">
        <span class="name">${label}</span>
        <span class="leader"></span>
        <span class="price">${formatPrice(it.price)}</span>
      </div>
      ${note}
    </div>
  `;
}

function renderCategory(cat){
  return `
    <section id="${cat.id}" class="${cat.full ? 'full' : ''}">
      <div class="cat-head">
        <h2>${cat.title}</h2>
        <span class="tag">${cat.tag}</span>
      </div>
      <div class="item-list">
        ${cat.items.map(renderItemRow).join('')}
      </div>
    </section>
  `;
}

function render(){
  const main = document.getElementById('menu');
  main.innerHTML = MENU.map(renderCategory).join('');
}

render();
