const toggleBtn = document.getElementById("toggle");
const menuMobile = document.getElementById("menu-mobile");

toggleBtn.addEventListener("click", () => {
    if (menuMobile.getAttribute("class") === "hidden") {
        menuMobile.setAttribute("class", "block md:hidden");
    } else {
        menuMobile.setAttribute("class", "hidden");
    }
});