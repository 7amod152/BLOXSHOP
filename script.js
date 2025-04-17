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
// بيانات طلبات وهمية – تقدر تستبدلها بالطلبات الحقيقية
const orders = [
  { id: 1, product: "بطاقة روبلوكس", user: "أحمد" },
  { id: 2, product: "سكن نادر", user: "سارة" },
];

// عرض الطلبات
function displayOrders() {
  const orderList = document.getElementById("orderList");
  orderList.innerHTML = "";

  orders.forEach((order) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>طلب رقم #${order.id}: ${order.product} – ${order.user}</span>
      <span class="order-actions">
        <button onclick="markAsReceived(${order.id})">استلام</button>
        <button onclick="cancelOrder(${order.id})">إلغاء</button>
      </span>
    `;
    orderList.appendChild(li);
  });
}

function markAsReceived(orderId) {
  alert("تم استلام الطلب #" + orderId);
  // تقدر تحدث الطلب في قاعدة بيانات أو localStorage هنا
}

function cancelOrder(orderId) {
  alert("تم إلغاء الطلب #" + orderId);
  // نفس الشي هنا، احذف الطلب من البيانات
}

// تشغيل عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", displayOrders);
