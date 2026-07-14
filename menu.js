// ------------------------------------------------------------------
// MENU DATA — modifie ce tableau pour ajouter / changer des produits.
// "price" est en MRU (Ouguiya).
// ------------------------------------------------------------------
const MENU = [
  {
    id: "cafe",
    title: "Café",
    tag: "Coffee",
    items: [
      { fr: "Espresso", en: null, desc: "Ristretto court et intense", price: 150 },
      { fr: "Cappuccino", en: null, desc: "Mousse de lait onctueuse", price: 250 },
      { fr: "Café Latte", en: null, desc: "Doux et crémeux", price: 280 },
      { fr: "Café Mocha", en: null, desc: "Espresso, chocolat, lait chaud", price: 300 },
    ]
  },
  {
    id: "jus",
    title: "Jus de Fruits Frais",
    tag: "Fresh Juices",
    items: [
      { fr: "Jus de Mangue", en: "Mango", price: 350 },
      { fr: "Jus de Banane", en: "Banana", price: 300 },
      { fr: "Jus d'Orange", en: "Orange", price: 300 },
      { fr: "Jus de Fraise", en: "Strawberry", price: 350 },
      { fr: "Jus de Pastèque", en: "Watermelon", price: 320 },
    ]
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    tag: "Milkshakes",
    items: [
      { fr: "Milkshake Vanille", en: "Vanilla", price: 450 },
      { fr: "Milkshake Chocolat", en: "Chocolate", price: 450 },
      { fr: "Milkshake Fraise", en: "Strawberry", price: 480 },
      { fr: "Milkshake Caramel", en: "Caramel", price: 480 },
    ]
  },
  {
    id: "cookies",
    title: "Cookies",
    tag: "Cookies",
    items: [
      { fr: "Pépites de Chocolat", en: "Chocolate Chip", price: 150 },
      { fr: "Double Chocolat", en: "Double Chocolate", price: 180 },
      { fr: "Noix de Coco", en: "Coconut", price: 160 },
      { fr: "Beurre de Cacahuète", en: "Peanut Butter", price: 170 },
    ]
  }
];

const DESSERTS = {
  id: "desserts",
  title: "Desserts au Chocolat",
  tag: "Chocolate Desserts",
  items: [
    { fr: "Fondant au Chocolat", en: "Fondant", price: 450 },
    { fr: "Brownie Maison", en: "Homemade Brownie", price: 380 },
    { fr: "Mousse au Chocolat", en: "Mousse", price: 400 },
    { fr: "Tarte au Chocolat", en: "Chocolate Tart", price: 420 },
  ]
};

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
    <section id="${cat.id}">
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

  const full = document.createElement('div');
  full.className = 'full-section';
  full.innerHTML = `
    <div class="cat-head">
      <h2>${DESSERTS.title}</h2>
      <span class="tag">${DESSERTS.tag}</span>
    </div>
    <div class="full-grid">
      ${DESSERTS.items.map(renderItemRow).join('')}
    </div>
  `;
  document.querySelector('.page').appendChild(full);
}

render();
