

let menuReadyToClick = true;

function MenuClick() {

    if (!menuReadyToClick) {
        return;
    }
    
    menuReadyToClick = false;

    document.body.style.overflowY = "scroll";

    let nav = document.querySelector("nav");

    let menuContainer = document.querySelector("nav .menu-container");

    if (nav.classList.contains("menuOpened")) {

        menuContainer.animate(
            [
                {height: getComputedStyle(menuContainer).height },
                {height: "50px"}
            ],
            {duration: 500, iterations: 1}
        )
        .onfinish = function() {
            nav.classList.remove("menuOpened");
            menuReadyToClick = true;
        };

    }
    else {

        document.body.style.overflowY = "hidden";

        nav.classList.add("menuOpened");

        menuContainer.animate(
            [
                {height: "50px" },
                {height: getComputedStyle(menuContainer).height }
            ],
            {duration: 500, iterations: 1}
        )
        .onfinish = function() {
            menuReadyToClick = true;
        };

    }

}

let dropdownReadyToClick = true;

function MenuDropdownClick() {
    
    if (!dropdownReadyToClick) {
        return;
    }

    dropdownReadyToClick = false;

    let dropdown = document.querySelector("nav .menu-container .dropdown-1 .dropdown-container");

    let arrowİcon = document.querySelector("nav .menu-container span i");

    if (getComputedStyle(dropdown).display == "flex") {

        dropdown.animate(
            [
                {height: getComputedStyle(dropdown).height },
                {height: "0px"}
            ],
            {duration: 500, iterations: 1}
        )
        .onfinish = function() {
            
            dropdown.style.display = null;
            dropdownReadyToClick = true;
        };

        arrowİcon.animate(
            [
                {transform: "rotateZ(90deg)"},
                {transform: "rotateZ(0deg)"}
            ],
            {duration: 200,iterations: 1}
        )
        .onfinish = function() {
            arrowİcon.style.transform = null;
        };
    }
    else {

        dropdown.style.display = "flex";

        dropdown.animate(
            [
                {height: "0px" },
                {height: getComputedStyle(dropdown).height }
            ],
            {duration: 500,iterations: 1}
        )
        .onfinish = function() {
            dropdownReadyToClick = true;
        };

        arrowİcon.animate(
            [
                {transform: "rotateZ(0deg)"},
                {transform: "rotateZ(90deg)"}
            ],
            {duration: 200, iterations: 1}
        )
        .onfinish = function() {
            arrowİcon.style.transform = "rotateZ(90deg)";
        };
    }

}


AOS.init();
