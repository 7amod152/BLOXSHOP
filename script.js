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
// بيانات تسجيل دخول بسيطة (يمكن تغييرها)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "1234";

// بيانات الطلبات الوهمية (يمكنك تعديلها أو جعلها فارغة كبداية)
let orders = JSON.parse(localStorage.getItem("orders")) || [
  { id: 1, name: "منتج 1", status: "قيد المعالجة" },
  { id: 2, name: "منتج 2", status: "قيد المعالجة" }
];

// التحقق من تسجيل الدخول
function checkAdmin() {
  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    showOrders();
  } else {
    alert("بيانات الدخول غير صحيحة");
  }
}

// عرض الطلبات
function showOrders() {
  const ordersContainer = document.getElementById("orders");
  ordersContainer.innerHTML = "";

  orders.forEach((order, index) => {
    const div = document.createElement("div");
    div.className = "order";
    div.innerHTML = `
      <strong>رقم الطلب:</strong> ${order.id}<br>
      <strong>المنتج:</strong> ${order.name}<br>
      <strong>الحالة:</strong> ${order.status}<br>
      <button class="btn accept" onclick="updateOrder(${index}, 'تم الاستلام')">استلام الطلب</button>
      <button class="btn cancel" onclick="updateOrder(${index}, 'تم الإلغاء')">إلغاء الطلب</button>
    `;
    ordersContainer.appendChild(div);
  });
}

// تحديث حالة الطلب
function updateOrder(index, newStatus) {
  orders[index].status = newStatus;
  localStorage.setItem("orders", JSON.stringify(orders));
  showOrders();
}
