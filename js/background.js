const body = document.querySelector("body");

const rand = Math.ceil(Math.random() * 10);

body.style.background = `url(images/bg/${rand}.jpg)`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundPosition = "100% 100%";
