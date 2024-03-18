const menuclick = document.getElementById('menuclick');
const menuOpen = document.getElementById('menuOpen');

menuclick.addEventListener('click', () => {
    if (menuOpen.classList.contains('disBlock')) {
        menuOpen.classList.remove('disBlock');
        menuOpen.classList.add('disNone');
    } else {
        menuOpen.classList.add('disBlock');
        menuOpen.classList.remove('disNone');
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        menuOpen.classList.remove('disBlock')
        menuOpen.classList.remove('disNone')
    } else {
        menuOpen.classList.remove('disBlock')
        menuOpen.classList.remove('disNone')
    }
})