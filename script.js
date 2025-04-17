const products = [
  { name: "منتج 1", price: 50, image: "https://via.placeholder.com/150" },
  { name: "منتج 2", price: 100, image: "https://via.placeholder.com/150" },
];

function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price} ر.س</p>
    `;
    container.appendChild(div);
  });
}

document.getElementById("product-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const image = document.getElementById("image").value;
  products.push({ name, price, image });
  renderProducts();
  this.reset();
});

document.getElementById("adminToggle").addEventListener("click", () => {
  document.getElementById("admin-panel").classList.toggle("hidden");
});

renderProducts();
