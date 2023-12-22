const button = document.querySelector(".buttonResponsive")
const navResponse = document.querySelector(".navResponse")
const links = document.querySelectorAll(".navBarResponsea")
button.addEventListener("click", () => {
    navResponse.classList.toggle("activeNavBar")
    document.querySelector("body").classList.toggle("disabledScroll")
    links[0].addEventListener("click", () => {
        navResponse.classList.remove("activeNavBar")
        document.querySelector("body").classList.remove("disabledScroll")
    })
    links[1].addEventListener("click", () => {
        navResponse.classList.remove("activeNavBar")
        document.querySelector("body").classList.remove("disabledScroll")
    })
    links[2].addEventListener("click", () => {
        navResponse.classList.remove("activeNavBar")
        document.querySelector("body").classList.remove("disabledScroll")
    })
    links[3].addEventListener("click", () => {
        navResponse.classList.remove("activeNavBar")
        document.querySelector("body").classList.remove("disabledScroll")
    })
    links[4].addEventListener("click", () => {
        navResponse.classList.remove("activeNavBar")
        document.querySelector("body").classList.remove("disabledScroll")
    })
})


