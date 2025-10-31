document.addEventListener("DOMContentLoader", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModifield").textContent = document.lastModifield;
});