function mostrarMenu() {
    const menu = document.querySelector(".menu-links");
    const icono = document.querySelector(".icono-hamburguesa");

    menu.classList.toggle("open");
    icono.classList.toggle("open");
}