// قائمة المنتجات
let products = [
  { name: "منتج 1", price: 50, image: "https://via.placeholder.com/150", description: "وصف المنتج 1" },
  { name: "منتج 2", price: 100, image: "https://via.placeholder.com/150", description: "وصف المنتج 2" },
  { name: "منتج 3", price: 200, image: "https://via.placeholder.com/150", description: "وصف المنتج 3" },
  // ... (أضف المزيد من المنتجات)
];

// قائمة الطلبات الخاصة
let requests = [
  { productName: "منتج 1", status: "تم الطلب" },
  { productName: "منتج 2", status: "قيد الانتظار" },
  { productName: "منتج 3", status: "تم التسليم" },
  // ... (أضف المزيد من الطلبات)
];

let currentPage = 0;
let productsPerPage = 20;
let totalPages = Math.ceil(products.length / productsPerPage);

// عرض الصفحة الرئيسية (20 منتجًا فقط)
function showMainPage() {
  document.getElementById("mainPage").classList.remove("hidden");
  document.getElementById("requestPage").classList.add("hidden");
  document.getElementById("productsPage").classList.add("hidden");

  renderMainPage();
}

// عرض الطلبات الخاصة
function showRequests() {
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("requestPage").classList.remove("hidden");
  document.getElementById("productsPage").classList.add("hidden");

  renderRequests();
}

// عرض جميع المنتجات
function showProducts() {
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("requestPage").classList.add("hidden");
  document.getElementById("productsPage").classList.remove("hidden");

  renderProducts();
}

// عرض المنتجات في القائمة الرئيسية (20 منتج فقط)
function renderMainPage() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  const start = currentPage * productsPerPage;
  const end = start + productsPerPage;
  const pageProducts = products.slice(start, end);

  pageProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-card";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price} ر.س</p>
      <p>${product.description}</p>
    `;
    productList.appendChild(productDiv);
  });
}

// عرض الطلبات الخاصة كـ "تكتات"
function renderRequests() {
  const requestsList = document.getElementById("requestsList");
  requestsList.innerHTML = "";

  requests.forEach((request) => {
    const requestDiv = document.createElement("div");
    requestDiv.className = "tckt";
    requestDiv.innerHTML = `
      <p><strong>${request.productName}</strong> - حالة الطلب: ${request.status}</p>
    `;
    requestsList.appendChild(requestDiv);
  });
}

// عرض جميع المنتجات
function renderProducts() {
  const productList = document.getElementById("allProductsList");
  productList.innerHTML = "";

  const start = currentPage * productsPerPage;
  const end = start + productsPerPage;
  const pageProducts = products.slice(start, end);

  pageProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-card";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price} ر.س</p>
      <p>${product.description}</p>
    `;
    productList.appendChild(productDiv);
  });
}

// التنقل بين الصفحات (للمنتجات)
function navigatePage(direction, allProducts = false) {
  const pageLimit = allProducts ? Math.ceil(products.length / productsPerPage) : totalPages;

  if (currentPage + direction >= 0 && currentPage + direction < pageLimit) {
    currentPage += direction;
    if (allProducts) {
      renderProducts();
    } else {
      renderMainPage();
    }
  }
}
