let buttonTheme = document.querySelector(".buttonTheme")
let darkTheme = document.querySelectorAll(".darkTheme")

buttonTheme.addEventListener("click", ()=>{
    for (let index = 0; index < darkTheme.length; index++) {
        const element = darkTheme[index];
        element.classList.toggle("darkMode")
    }
    buttonTheme.classList.toggle("buttonThemeDark")
    document.getElementById("body").classList.toggle("darkBg")
    document.querySelector(".bannerImg").classList.toggle("bannerImgDark")
})