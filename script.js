let is_not_a_game = document.querySelector("#is_not_a_game");
let tap = document.querySelector("#tap");

tap.addEventListener('click', () => {
    is_not_a_game.textContent = "Я ЖЕ СКАЗАЛ";
    is_not_a_game.style.color = "#ff0000"

});

let form = document.querySelector("#contactForm");
let formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent = "сообщение отправнено.";
    formMessage.style.color = "green";

    form.reset();
})
