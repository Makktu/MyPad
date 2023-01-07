"use strict";

const menuBar = document.querySelector(".menu-items");
const textEntryArea = document.getElementById("text-entry-area");
const lightDarkModeBtn = document.getElementById("light-dark-btn");
let darkModeOn = true;

lightDarkModeBtn.addEventListener("click", () => {
    if (darkModeOn) {
        menuBar.classList.add("light-mode");
        textEntryArea.classList.add("light-mode");
        darkModeOn = false;
    } else {
        menuBar.classList.remove("light-mode");
        textEntryArea.classList.remove("light-mode");
        darkModeOn = true;
    }
});
