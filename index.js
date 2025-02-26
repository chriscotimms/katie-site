const navBar = document.querySelector("nav");
const menuItems = document.querySelectorAll(".menu-item");


menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {

    menuItems.forEach((otherItem) => {
        if (otherItem !== menuItem) {
            otherItem.children[1].classList.remove("open");
            otherItem.children[1].classList.add("hide");
        }
    });

    menuItem.children[1].classList.toggle("open");
    menuItem.children[1].classList.toggle("hide");

    });
});

