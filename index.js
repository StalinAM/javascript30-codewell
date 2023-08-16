const openMenu = document.getElementById("icon-burger");
const menuModal = document.getElementById("menu-modal");
const closeMenu = document.getElementById("icon-close");
const openMenuP = document.getElementById("product");

closeMenu.addEventListener("click", () => (menuModal.style.display = "none"));
openMenu.addEventListener("click", () => (menuModal.style.display = "flex"));
openMenuP.addEventListener("click", () => {
  menuModal.style.display !== "none"
    ? (menuModal.style.display = "flex")
    : (menuModal.style.display = "none");
  menuModal.style.display === "flex"
    ? (menuModal.style.display = "none")
    : (menuModal.style.display = "flex");
});
