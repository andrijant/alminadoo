let hgroup = document.querySelector('#hgroup');
let homePage = document.querySelector('#home-page');
let about = document.querySelector('#about');
let products = document.querySelector('#products');
let services = document.querySelector('#services');
let customers = document.querySelector('#customers');

let homePageLink = document.querySelector('.home-page-link');
let aboutPageLink = document.querySelector('.about-page-link');
let contactPageLink = document.querySelector('.contact-link');
let language = document.querySelector('#language');
let displayNone = document.querySelectorAll('.display-none');
let displayBlock = document.querySelectorAll('.display-block');


//  display contact page
contactPageLink.addEventListener("click", function () {
    hgroup.classList.add("d-none");
    homePage.style.height = "20vh";
    about.classList.add("d-none");
    products.classList.add("d-none");
    services.classList.add("d-none");
    customers.classList.add("d-none");
});

//  display whole web page
homePageLink.addEventListener("click", function () {
    hgroup.classList.remove("d-none");
    homePage.style.height = "93vh";
    about.classList.remove("d-none");
    products.classList.remove("d-none");
    services.classList.remove("d-none");
    customers.classList.remove("d-none");
});

//  display about page
aboutPageLink.addEventListener("click", function () {
    hgroup.classList.remove("d-none");
    homePage.style.height = "93vh";
    about.classList.remove("d-none");
    products.classList.remove("d-none");
    services.classList.remove("d-none");
    customers.classList.remove("d-none");
    about.scrollIntoView();
});


//  language change
language.addEventListener('click', function removeElements(){
    displayBlock.forEach(element => {
        if (element.style.display !== "none") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
        
      //  element.classList.remove('display-block');
    });
    
    displayNone.forEach(element => {
        if (element.classList == "display-none") {
            element.classList.remove("display-none");
        } else {
            element.classList.add("display-none");
        }
    });
    
});

// language.addEventListener('click', function () {

//     displayNone.forEach(element => {
//         className.remove("display-none");
// // displayBlock.className = "d-none";

// });
// });