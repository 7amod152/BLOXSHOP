// قائمة المنتجات
let products = JSON.parse(localStorage.getItem("products")) || [];

// دالة لإظهار/إخفاء نموذج إضافة المنتج
function toggleAddProductForm() {
  const form = document.getElementById("addProductBox");
  form.style.display = form.style.display === "block" ? "none" : "block";
}

// دالة لإضافة المنتج
function addProduct() {
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productImage = document.getElementById("productImage").value;

  if (!productName || !productPrice || !productImage) {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  const newProduct = {
    name: productName,
    price: productPrice,
    image: productImage
  };

  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  alert("تمت إضافة المنتج بنجاح");

  // تنظيف الحقول بعد الإضافة
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productImage").value = "";

  // إخفاء النموذج بعد الإضافة
  toggleAddProductForm();

  // عرض المنتجات بعد إضافتها
  showProducts();
}

// دالة لعرض المنتجات في لوحة الأدمن
function showProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>السعر: ${product.price} ر.س</p>
      <img src="${product.image}" alt="${product.name}" style="width: 100px;" />
    `;
    productList.appendChild(div);
  });
}
