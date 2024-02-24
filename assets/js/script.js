'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
 }
}


/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar =  document.querySelector("[data-navbar]");
const navtogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(navtogglers, "click", toggleNav);


/***
 *  active heder when window  scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const headerActive = function (){
    if (window.scrollY > 100) {
        header.classList.remove("active") ;
    }
}

window.addEventListener("scroll", headerActive);