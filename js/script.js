let log = console.log;

// menu bar

const menu = document.querySelector(".links .fa-solid")
const menuLinks = document.querySelector(".links ul")

menu.onclick = e => {
    getComputedStyle(menuLinks).bottom === "-250px" ? (
        menuLinks.style.bottom = 0,
        e.target.classList.replace("fa-x", "fa-bars")
    ) : (
        menuLinks.style.bottom = "-250px",
        e.target.classList.replace("fa-bars", "fa-x")
    );
}

const linksIcon = ["fa-house", "fa-user", "fa-receipt", "fa-address-book"];

document.addEventListener("DOMContentLoaded", function () {
        menuLinks.querySelectorAll("a").forEach((a, index) => {
            a.insertAdjacentHTML("afterbegin", `<i class="fa-solid ${linksIcon[index]}"></i>`)
        })
});




// contact form number

let phone = document.querySelector(".field #phone");
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let defaultValue = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

const valuePlace = e => {
    phone.value = `(${defaultValue[0]}${defaultValue[1]}${defaultValue[2]}) ${defaultValue[3]}${defaultValue[4]}${defaultValue[5]}-${defaultValue[6]}${defaultValue[7]}${defaultValue[8]}${defaultValue[9]}`;
}

phone.addEventListener("keydown", e => {
    if (e.key == "Backspace") { // removing the last number
        for (let v = 0; v < defaultValue.length; v++) {
            if (defaultValue[v] == "_") {
                defaultValue.splice(v - 1, 1, "_");
                valuePlace(); // removing from user interface
                return;
            }
            else if (!defaultValue.includes("_")) {
                defaultValue.splice(defaultValue.length, 1, "_");
                return;
            }
        }
    }

    if (phone.value.length + 1 == 11) return;

    num.forEach(i => { // taking the use number input
        if (e.key == i) {
            for (let v = 0; v < defaultValue.length; v++) {
                if (defaultValue[v] == "_") {
                    defaultValue.splice(v, 1, e.key);
                    return;
                }
            }
        }
    })
    valuePlace(); // adding number to the user interface
})


phone.addEventListener("click", function () {
    this.nextElementSibling.style.top = "5%";
})

document.addEventListener("click", function (e) {
    for (let i = 0; i < num.length; i++) {
        if (phone.value.includes(num[i])) {
            phone.nextElementSibling.style.top = "5%";
            break;
        }
        else if (e.target.getAttribute("for") != "phone" && e.target.id != "phone") {
            phone.nextElementSibling.style.top = "50%";
        }
    }
})

// email send

const form = document.querySelector("form");


form.addEventListener("submit", function(e) {
    let name = this.querySelector("input[id='name']").value.trim();
    let phone = this.querySelector("input[id='phone']").value.trim();
    let email = this.querySelector("input[id='email']").value.trim();
    let message = this.querySelector("textarea").value.trim();
    let captcha = this.querySelector("input[id='code']").value.trim();
    e.preventDefault();
    
    // add a server here
})



// footer "WORKING HOURS" dates

const days = document.querySelectorAll(".column .days");
const date = new Date().getDay();

days[date-1].classList.add("activeDay");