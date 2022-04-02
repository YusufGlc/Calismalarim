
function EkTeslimatlar() {
    let grid = document.querySelector(".sc-3 .grid-2");

    if (grid.style.display=="none") {
        grid.style.display="grid";
    }
    else{
        grid.style.display="none";
    }
    AOS.init();
}

function dropdownClick() {
    let item = document.querySelector(".dropdown-item-1");

    if (item.style.display=="none") {
        item.style.display="block";
    }
    else{
        item.style.display="none";
    }

}


// Overly
function overlyShow() {
    let overly = document.querySelector(".overly");
    overly.style.display="block";
}

function overlyHide() {
    let overly = document.querySelector(".overly");
    overly.style.display="none";
}


// 
function urunlerHover() {
    closeAllMenu();
    overlyShow();
    let box = document.querySelector(".urunler-box");
    box.style.display="block";

    let urunlerLink = document.querySelector(".urunler-a");
    urunlerLink.appendChild(box);
}

function kurumsalHover() {
    closeAllMenu();
    overlyShow();
    let box = document.querySelector(".kurumsal-box");
    box.style.display="block";

    let urunlerLink = document.querySelector(".kurumsal-a");
    urunlerLink.appendChild(box);
}

function acenteHover() {
    closeAllMenu();
    overlyShow();
    let box = document.querySelector(".acente-box");
    box.style.display="block";

    let urunlerLink = document.querySelector(".acente-a");
    urunlerLink.appendChild(box);
}

function hasarYardimHover() {
    closeAllMenu();
    overlyShow();
    let box = document.querySelector(".hasarYardım-box");
    box.style.display="block";

    let urunlerLink = document.querySelector(".hasarYardım-a");
    urunlerLink.appendChild(box);
}

function kesfetHover() {
    closeAllMenu();
    overlyShow();
    let box = document.querySelector(".kesfet-box");
    box.style.display="block";

    let urunlerLink = document.querySelector(".kesfet-a");
    urunlerLink.appendChild(box);
}

function closeAllMenu() {
    overlyHide();
    let box = document.querySelectorAll(".hidden-box");
    box.forEach(element => {
        element.style.display="none";
    });

}


// Navbar

window.onscroll = function name() { 

    if (window.scrollY != 0) {
        
        let nav = document.querySelector(".navbar")

        nav.setAttribute('style', 'position:fixed !important; box-shadow: 0 1px 25px 1px gray;');

        let banner = document.querySelector(".banner");
        banner.setAttribute('style','margin-top:75px');
    }
    else{

        let nav = document.querySelector(".navbar")

        nav.setAttribute('style', 'box-shadow:none');

        let banner = document.querySelector(".banner");

        banner.setAttribute('style','margin-top:15px');

    }

}

