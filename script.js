const enterbtn = document.getElementById("enter");
const greeting = document.querySelector(".greeting");
const container = document.querySelector(".container");
const input = document.querySelector("#input");
const buttons = document.querySelectorAll(".container button");

// enterbtn.addEventListener("click", () => {
//   greeting.classList.remove("active");
//   container.classList.add("active");
// });

// document.addEventListener("keydown", () => {
//   greeting.classList.remove("active");
//   container.classList.add("active");
// });
setTimeout(() => {
  greeting.classList.remove("active");
  container.classList.add("active");
}, 2500);

let string = "";
let decimal = false;

Array.from(buttons).forEach((buttons) => {
  buttons.addEventListener("click", (event) => {
    let clickedbuttons = event.target;
    if (clickedbuttons.Id === "enter") return;
    if (clickedbuttons.innerHTML.trim() === "=") {
      try {
        string = eval(string);
        input.value = string;
        string = "";
        decimal = string.includes(".");
      } catch (error) {
        input.value = "ERROR!";
        string = "";
      }
    } else if (clickedbuttons.innerHTML.trim() === "X") {
      string += "*";
      input.value = string;
    } else if (clickedbuttons.innerHTML.trim() === "AC") {
      string = "";
      input.value = "";
      decimal = false;
    } else if (clickedbuttons.innerHTML.trim() === "DEL") {
      if (string.endsWith(".")) decimal = false;
      string = string.toString().slice(0, -1);
      input.value = string;
    } else if (
      clickedbuttons.innerHTML.trim() === "0" ||
      clickedbuttons.innerHTML.trim() === "00"
    ) {
      if (string === "" || string === "0") {
        string = "";
      } else {
        string += clickedbuttons.innerHTML.trim();
        input.value = string;
      }
    } else if (clickedbuttons.innerHTML.trim() === ".") {
      if (!decimal) {
        if (string === "ERROR!") string = "0";
        if (string === "") {
          string = "0.";
        } else {
          string += ".";
        }
        input.value = string;
        decimal = true;
      } else {
        string = "ERROR!";
        input.value = string;
      }
    } else if (
      ["/", "%", "*", "+", "-"].includes(clickedbuttons.innerHTML.trim())
    ) {
      string += clickedbuttons.innerHTML.trim();
      input.value = string;
      decimal = false;
    } else {
      if (string === "0") {
        string = input.value;
      } else {
        string += clickedbuttons.innerHTML.trim();
      }
      input.value = string;
    }
  });
});
