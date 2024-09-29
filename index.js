const signUpButton = document.getElementById("signup-button");
signUpButton.addEventListener("click", signUp);

function signUp() {
    const body = document.querySelector("body");
    const main = document.querySelector("#main");
    const signUpContainer = document.querySelector(".signup-container");
    body.classList.add("no-scroll");
    main.classList.add("blur");
    signUpContainer.classList.remove("hidden");
}

const signUpBackButton = document.getElementById("back-btn");
signUpBackButton.addEventListener("click", exitSignUp);

function exitSignUp() {
    const body = document.querySelector("body");
    const main = document.querySelector("#main");
    const signUpContainer = document.querySelector(".signup-container");
    body.classList.remove("no-scroll");
    main.classList.remove("blur");
    signUpContainer.classList.add("hidden");
}
