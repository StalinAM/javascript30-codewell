const openMenu = document.getElementById("icon-burger");
const menuModal = document.getElementById("menu-modal");
const closeMenu = document.getElementById("icon-close");

closeMenu.addEventListener("click", () => (menuModal.style.display = "none"));
openMenu.addEventListener("click", () => (menuModal.style.display = "flex"));
