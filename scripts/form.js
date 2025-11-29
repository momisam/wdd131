// Provided product list
const products = [
  { id: "p100", name: "Laptop Pro Max 16" },
  { id: "p101", name: "Smart Refrigerator X" },
  { id: "p102", name: "Noise Cancel Headphones" },
  { id: "p103", name: "Smartphone Z Ultra" },
  { id: "p104", name: "Air Purifier Elite" },
];

// Populate dynamic select field
window.onload = function () {
  const select = document.getElementById("productName");

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
};

// Footer info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;