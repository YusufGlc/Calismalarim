
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