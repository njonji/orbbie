

const nav = document.querySelector(".navbar");
const contact = document.querySelector(".nav-link--contact")


window.onscroll = function() {
    if(window.scrollY >= 50) {
        nav.classList.add("scaleMe")
        contact.classList.add("showMe")
       
    }  else {
        contact.classList.remove("showMe")

    }
} 

const tickTock = () => {
    nav.classList.remove("scaleMe")
}

setInterval(() => {
    tickTock()
}, 1000);





