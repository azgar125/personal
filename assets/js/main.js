"user strict";
const toggleBtn = document.querySelector('[data-toggle-menu]');
const navbarId = document.querySelector('[data-navbar]');
const navbarLink = document.querySelectorAll("[data-navLink]");
const headerId = document.querySelector('[data-header]');
const backtop = document.querySelector("[data-backTop]");


toggleBtn.addEventListener('click', function(){
    navbarId.classList.toggle('active');
    this.classList.toggle('active');
})

for(let i = 0; i < navbarLink.length; i++){
    navbarLink[i].addEventListener('click', function(){
        navbarId.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });
}

window.addEventListener('scroll', function(){
    if(scrollY > 100){
      headerId.classList.add('active');
      backtop.classList.add('active');
    }else{
        headerId.classList.remove('active');
        backtop.classList.remove('active');
    }
})

const searchContent = document.querySelector("[data-search-content]");
const searchBtnId = document.querySelector('[data-navsearchBtn]');
const searchCloseBtn = document.querySelector('[data-search-cancel]');
const searchSubmitBtn = document.querySelector('[data-search-submit-btn]');

const searchElementId = [searchBtnId, searchCloseBtn, searchSubmitBtn];

for(let i = 0; i < searchElementId.length; i++){
    searchElementId[i].addEventListener("click", function(){
        searchContent.classList.toggle('active');
        document.body.classList.toggle('active');
    })
}

// delivery boy move

const  deliveryBoy = document.querySelector('[data-delivery-boy]');
let deliveryBoyMove =  -90;
let lastscrollprosition = 0;

window.addEventListener('scroll', function(){
    let deliveryBoyTopProsi = deliveryBoy.getBoundingClientRect().top;

    if(deliveryBoyTopProsi < 500 && deliveryBoyTopProsi > -250){
        
        let activeScrollprosition = window.scrollY;

        if(lastscrollprosition < activeScrollprosition){
            deliveryBoyMove++;
        }else{
            deliveryBoyMove--;
        }
        lastscrollprosition = activeScrollprosition;
        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
    }
});
