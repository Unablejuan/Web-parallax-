let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let clouds = document.getElementById('clouds');
let doves = document.getElementById('doves');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    doves.style.left = value * 1.5 + 'px';
    clouds.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 0.5 + 'px';
});