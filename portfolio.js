let sidebar = document.querySelector("#sideBar")
let sideBarLinks = document.querySelector("#nav-links")
let sideBarFooter = document.querySelector("#nav-footer")
let art1Btn = document.querySelector("#art1-btn")
let animationContainer = document.querySelector("#kLogo")
// Open and close sidebar
let openNav = document
    .querySelector("#menuBtn")
    .addEventListener("click", () => {
        if ((sidebar.style.width = "0px")) {
            sidebar.style.width = "320px"
            sideBarLinks.style.display = "inline-flex"
            sideBarFooter.style.display = "inline-block"
            art1Btn.style.display = "none"
            animationContainer.style.display = "none"
        }
    })
let closeNav = document
    .querySelector("#menuClose")
    .addEventListener("click", () => {
        document.querySelector("#sideBar").style.width = "0px"
        sideBarLinks.style.display = "none"
        sideBarFooter.style.display = "none"
        art1Btn.style.display = "inline-block"
        animationContainer.style.display = "Block"
    })

// Experience btns
let expBtns = document.querySelectorAll(".expBtn")

let adfBox = document.querySelector(".adf")
let dhlBox = document.querySelector(".dhl")
let investorHaven = document.querySelector(".investor-haven")

let dhlChildren = dhlBox.querySelectorAll("*")
let investorHavenChildren = investorHaven.querySelectorAll("*")
let adfBoxChildren = adfBox.querySelectorAll("*")
console.log(adfBoxChildren)
console.log(dhlChildren)

let dropExp = expBtns[0].addEventListener("click", () => {
    adfBox.classList.toggle("hidden" && "expBlock")
    // if (adfBox.style.display != "hidden") {
    //     adfBox.style.height = "430px"
    //     adfBox.style.padding = "20px"
    //     adfBox.style.display = "inline-block"
    // }
    if (adfBox.classList.contains !== "hidden") {
        // Object.keys(adfBoxChildren).forEach((key) => {
        //     adfBoxChildren[key].style.display = "inline-block"
        // })
        adfBox.classList.toggle("[&>*]:hidden")
    }
})
let dropExp2 = expBtns[1].addEventListener("click", () => {
    dhlBox.classList.toggle("hidden" && "expBlock")
    // if (adfBox.style.display != "hidden") {
    //     adfBox.style.height = "430px"
    //     adfBox.style.padding = "20px"
    //     adfBox.style.display = "inline-block"
    // }
    if (dhlBox.classList.contains !== "hidden") {
        // Object.keys(adfBoxChildren).forEach((key) => {
        //     adfBoxChildren[key].style.display = "inline-block"
        // })
        dhlBox.classList.toggle("[&>*]:hidden")
    }
})
let dropExp3 = expBtns[2].addEventListener("click", () => {
    investorHaven.classList.toggle("hidden" && "expBlock")
    // if (adfBox.style.display != "hidden") {
    //     adfBox.style.height = "430px"
    //     adfBox.style.padding = "20px"
    //     adfBox.style.display = "inline-block"
    // }
    if (investorHaven.classList.contains !== "hidden") {
        // Object.keys(adfBoxChildren).forEach((key) => {
        //     adfBoxChildren[key].style.display = "inline-block"
        // })
        investorHaven.classList.toggle("[&>*]:hidden")
    }
})

// On scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show2")
        } else {
            entry.target.classList.remove("show2")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hid")
const hiddenElements3 = document.querySelectorAll(".hid3")
const hiddenElements2 = document.querySelectorAll(".hid2")
hiddenElements.forEach((el) => observer.observe(el))
hiddenElements2.forEach((el) => observer.observe(el))
hiddenElements3.forEach((el) => observer.observe(el))
