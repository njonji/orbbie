

const nav = document.querySelector(".navbar");
const contact = document.querySelector(".nav-link--contact")


window.onscroll = function() {
    if(window.scrollY >= 50) {
        nav.classList.add("scaleMe")    /* ScaleMe and ShowMe classes are in the nav.scss */
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





