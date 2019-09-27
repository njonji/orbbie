

const nav = document.querySelector(".navbar");
const contact = document.querySelector(".nav-link--contact");
const links = document.querySelector(".navbar__links");
const logo = document.querySelector(".navbar--logo");
const modalContact = document.querySelector(".mobileContact");
const toggler = document.querySelector(".navbar-toggler")


window.onscroll = function() {
    if(window.scrollY >= 50) {
        nav.classList.add("scaleMe")    /* ScaleMe and ShowMe classes are in the nav.scss */
        contact.classList.add("showMe")
        links.classList.add("scaleLinks")
        logo.classList.add("scaleLogo")
        modalContact.classList.add("scaleModal")
       
    }  else {
        contact.classList.remove("showMe")
        nav.classList.remove("scaleMe") 
        links.classList.remove("scaleLinks")
        logo.classList.remove("scaleLogo")
        modalContact.classList.remove("scaleModal")
    }
} 

toggler.addEventListener("click", e => {
    nav.classList.toggle("scaleNavToggle")
})






