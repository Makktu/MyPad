"use strict";

const menuBar = document.querySelector(".menu-items");
const textEntryArea = document.querySelector(".text-entry-area");
const lightDarkModeBtn = document.getElementById("light-dark-btn");
const fileBtn = document.getElementById("file-btn");
textEntryArea.focus(); //set the focus - cursor at end

let darkModeOn = true;

lightDarkModeBtn.addEventListener("click", () => {
    if (darkModeOn) {
        menuBar.classList.add("light-mode");
        textEntryArea.classList.add("light-mode");
        darkModeOn = false;
        lightDarkModeBtn.textContent = "Dark Mode";
    } else {
        menuBar.classList.remove("light-mode");
        textEntryArea.classList.remove("light-mode");
        darkModeOn = true;
        lightDarkModeBtn.textContent = "Light Mode";
    }
});

fileBtn.addEventListener("click", () => {
    console.log("File clicked");
});
