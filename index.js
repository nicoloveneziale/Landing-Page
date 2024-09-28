const button = document.querySelector("#signup-button");

function greeting() {
    const greeting = document.getElementById("js-test");
    greeting.textContent = "Welcome to our website!";
}

button.addEventListener("click" , greeting);