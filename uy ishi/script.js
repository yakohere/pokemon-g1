'use strict'

const firstname = document.querySelector("#firstname")
const surname = document.querySelector("#surname")
const address = document.querySelector("#address")
const submitButton = document.querySelector("#submit")
const tbody = document.querySelector("tbody")

submitButton.addEventListener("click", function() { 
    let hasEmptyField = false;
    let radioValue = null;
    const tr = document.createElement("tr");

    const radioButtons = document.querySelectorAll("input[type=radio]")

    for (let radio of radioButtons) {
        if (radio.checked) radioValue = radio.value 
    }

    if (!radioValue) hasEmptyField = true

    for (let data of [firstname.value, surname.value, address.value, radioValue]) {
        if (data.trim() === "") hasEmptyField = true;
        if (hasEmptyField) return alert("Malumot to'ldiring!") 

        const td = document.createElement("td")
        td.innerText = data
        tr.appendChild(td)
    }

    tbody.appendChild(tr)
})

