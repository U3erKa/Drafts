// @ts-check
import { productDetails } from "./products.js"

// Example of JSDoc, multiline comment
/**
 * to make working tabs....
 * window. is written to make openTab function of global scope so that
 * onclick can work in index.html...
 * @param {Event} evt
 * @param {string} category
 */
// @ts-expect-error
window.openTab = function (evt, category) {
  const tabcontent = document.getElementsByClassName("tabcontent")
  const tablinks = document.getElementsByClassName("tablinks")

  for (let i = 0; i < tabcontent.length; i++) {
    // @ts-expect-error
    tabcontent[i].style.display = "none"
  }
  for (let i = 0; i < tablinks.length; i++) {
    // @ts-expect-error
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }

  // @ts-expect-error
  document.getElementById(category).style.display = "block"
  // @ts-expect-error
  evt.currentTarget.className += " active"
}

// You can put just the description in a single line as well

/** it returns an array of elements having class (product__item__box) */
const box = document.getElementsByClassName("product__item__box")

// it returns the list item
const totalItem = document.getElementById("total-item")

// it loops through each element of the array box...
let totalCounter = 0

/*============== Making changes to the modal ============ */

/** @type {HTMLDivElement} */
// @ts-expect-error
const itemName = document.querySelector(".item__Name")
/** @type {HTMLDivElement} */
// @ts-expect-error
const itemPrice = document.querySelector(".item__Price")
/** @type {HTMLDivElement} */
// @ts-expect-error
const itemQty = document.querySelector(".item__Qty")
/** @type {HTMLLIElement} */
// @ts-expect-error
const itemTotal = document.querySelector(".item__Total")
/** @type {HTMLDivElement} */
// @ts-expect-error
const tableBody = document.getElementById("tableBody")
let str = ""

for (let i = 0; i < box.length; i++) {
  // @ts-expect-error
  box[i].addEventListener("click", function () {
    /** @type {HTMLDivElement} */
    // @ts-expect-error
    const counter = document.getElementsByClassName("counter")[i]
    const counterNumber = +counter.innerText + 1

    // @ts-expect-error
    counter.innerText = counterNumber
    // @ts-expect-error
    totalItem.innerText = ++totalCounter

    // @ts-expect-error
    itemName.innerText = productDetails[i].name
    // @ts-expect-error
    itemPrice.innerText = productDetails[i].price
    // @ts-expect-error
    itemQty.innerText = counterNumber
    // @ts-expect-error
    itemTotal.innerText = itemPrice.innerText * counterNumber

    // @ts-expect-error
    if (box[i].classList.contains("clicked") === false) {
      // @ts-expect-error
      box[i].classList.add("clicked")
      str += `
            <tr>
                <td class = "item__Name">${itemName.innerText}</td>
                <td class = "item__Price">${itemPrice.innerText}</td>
                <td class = "item__Qty">${itemQty.innerText}</td>
                <td class = "item__Total">${itemTotal.innerText}</td>
            </tr>
            `
    }

    tableBody.innerHTML = str
  })

  // console.log(totalItems);
}

/* ================== DARK/LIGHT THEME ============== */
/** @type {HTMLDivElement} */
// @ts-expect-error
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "ri-sun-line"

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light")
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line")

// We validate if the user previously choose a topic
if (selectedTheme) {
  //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}

// Activate /Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  //Add or remove the dark icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})

/* =================== TO SHOW AND HIDE THE LIST ================= */
/** @type {HTMLDivElement} */
// @ts-expect-error
const modal = document.getElementById("pop__modal") // the modal..
/** @type {HTMLDivElement} */
// @ts-expect-error
const list = document.getElementById("the-list") // the list...
/** @type {HTMLDivElement} */
// @ts-expect-error
const close = document.getElementById("pop-close") // close button

list.addEventListener("click", function () {
  modal.classList.add("active")
})

close.addEventListener("click", function () {
  modal.classList.remove("active")
})

// /* ======================== GETTING THE NAMES OF ELEMENTS FROM OBJECTS ============== */
/** @type {NodeListOf<HTMLDivElement>} */
const nameProduct = document.querySelectorAll(".product__name")

for (let i = 0; i < nameProduct.length; i++) {
  // @ts-expect-error
  nameProduct[i].innerText = productDetails[i].name
  console.log("hello")
}
