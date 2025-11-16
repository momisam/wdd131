// Auto-update last modified timestamp
document.getElementById("modified").textContent = new Date().toLocaleString();

// Sync temperature across both cards
const temperature = 28; // Example static value

document.getElementById("temp").textContent = temperature;
document.getElementById("temp2").textContent = temperature;
