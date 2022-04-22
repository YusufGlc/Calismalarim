
function EkTeslimatlar() {
    let grid = document.querySelector(".sc-3 .grid-2");

    if (grid.style.display=="grid") {
        grid.style.display="none";
    }
    else{
        grid.style.display="grid";
    }
    AOS.init();
}

function dropdownClick() {
    let item = document.querySelector(".dropdown-1");
    let nav = document.querySelector(".navbar");

    nav.setAttribute("style","position: fixed; box-shadow: 0 1px 25px 1px gray;")

    if (item.style.display=="block") {
        item.setAttribute("style","display: none;")
    }
    else{
        item.setAttribute("style","display: block;")
        nav.setAttribute("style","position: fixed; box-shadow: 0 1px 25px 1px gray; height: 100%")
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
    let box = document.querySelector(".urunler-box");
    closeAllMenu(box);
    overlyShow();
    if (box.style.display != "block") {

        box.setAttribute("style","display: block; animation-name: DropdownİtemsAnim; animation-duration: 0.5s;");
    }
    else {
        box.setAttribute("style","display: block;");
    }

    let urunlerLink = document.querySelector(".urunler-a");
    urunlerLink.appendChild(box);
}

function kurumsalHover() {
    let box = document.querySelector(".kurumsal-box");
    closeAllMenu(box);
    overlyShow();

    if (box.style.display != "block") {

        box.setAttribute("style","display: block; animation-name: DropdownİtemsAnim; animation-duration: 0.5s;");
    }
    else {
        box.setAttribute("style","display: block;");
    }

    let urunlerLink = document.querySelector(".kurumsal-a");
    urunlerLink.appendChild(box);
}

function acenteHover() {
    let box = document.querySelector(".acente-box");
    closeAllMenu(box);
    overlyShow();

    if (box.style.display != "block") {

        box.setAttribute("style","display: block; animation-name: DropdownİtemsAnim; animation-duration: 0.5s;");
    }
    else {
        box.setAttribute("style","display: block;");
    }

    let urunlerLink = document.querySelector(".acente-a");
    urunlerLink.appendChild(box);
}

function hasarYardimHover() {
    let box = document.querySelector(".hasarYardım-box");
    closeAllMenu(box);
    overlyShow();

    if (box.style.display != "block") {

        box.setAttribute("style","display: block; animation-name: DropdownİtemsAnim; animation-duration: 0.5s;");
    }
    else {
        box.setAttribute("style","display: block;");
    }

    let urunlerLink = document.querySelector(".hasarYardım-a");
    urunlerLink.appendChild(box);
}

function kesfetHover() {
    let box = document.querySelector(".kesfet-box");
    closeAllMenu(box);
    overlyShow();

    if (box.style.display != "block") {

        box.setAttribute("style","display: block; animation-name: DropdownİtemsAnim; animation-duration: 0.5s;");
    }
    else {
        box.setAttribute("style","display: block;");
    }

    let urunlerLink = document.querySelector(".kesfet-a");
    urunlerLink.appendChild(box);
}

function closeAllMenu(kapatilmiyacak=null) {
    overlyHide();
    let box = document.querySelectorAll(".hidden-box");
    box.forEach(element => {
        if (kapatilmiyacak != element) {
            element.style.display="none";
        }
    });

}


// Navbar

window.onscroll = function() { 

    let dropdown = document.querySelector(".dropdown-1");

    if (dropdown.style.display == "block") {
        return;
    }

    if (window.scrollY != 0) {
        
        let nav = document.querySelector(".navbar")

        nav.setAttribute('style', 'box-shadow: 0 1px 25px 1px gray;');

    }
    else{

        let nav = document.querySelector(".navbar")

        nav.setAttribute('style', 'box-shadow:none');

    }

}

window.onresize = function() {
    
    if (document.body.clientWidth > 987) {
        document.querySelector(".dropdown-1").style.display = "none";
        document.querySelector(".navbar").style.height="auto";
    }

}

function onlyNumber(e) {

    Array.from(e.target.value).forEach(element => {
        if (Number.isInteger(parseInt(element))==false) {
            e.target.value = e.target.value.replace(element,'');
        }
    });
    
} 

function onlyNumberPhone(e) {

    Array.from(e.target.value).forEach(element => {
        if (Number.isInteger(parseInt(element))==false && element != ' ' && element != '(' && element != ')' && element != '-') {
            e.target.value = e.target.value.replace(element,'');
        }
    });

    $(document).ready(function () {
        $('#phone').usPhoneFormat({
            
            format: '(xxx) xxx-xxxx',
        });   
    });
    
} 

