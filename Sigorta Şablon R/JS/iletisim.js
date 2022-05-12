

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


let Pressed = false;
let animationReady = true;

function mouseDown() {
    
    Pressed = true;
}

function mouseUp() {
      
    Pressed = false;

    if (animationReady == false) {
        return;
    }

    setTimeout(function() {

        if (Pressed == false) {

            let slick = document.querySelector(".Sigorta-Şirketleri .main-container");

            slick.style=null;

        }

        animationReady = true;

    },10000);

    animationReady = false;

}

function mouseMove(e) {

    if (Pressed && window.innerWidth <= 1150) {
        
        let slick = document.querySelector(".Sigorta-Şirketleri .main-container")

        let matrix = new WebKitCSSMatrix(getComputedStyle(slick).transform);

        matrix.e += e.movementX;

        if (matrix.e < -slick.clientWidth + 300) {
            matrix.e = -slick.clientWidth + 300;
        }
        else if (matrix.e > 200) {
            matrix.e = 200
        }

        slick.setAttribute("style", "animation-duration: 0s; transform: " + matrix + ";")
    }

}


let oldX = 0;

function touchStart(e) {
    oldX = e.touches[0].pageX;
};

function touchMove(e) {

    if (window.innerWidth <= 1150) {
        e.preventDefault();
        console.log(e.touches[0].pageX)

        let slick = document.querySelector(".Sigorta-Şirketleri .main-container")

        let matrix = new WebKitCSSMatrix(getComputedStyle(slick).transform);

        if (oldX > e.changedTouches[0].clientX) {
            matrix.e -= oldX - e.changedTouches[0].clientX
        }
        else if (oldX < e.changedTouches[0].clientX) {
            matrix.e -= oldX - e.changedTouches[0].clientX
        }

        oldX = e.changedTouches[0].clientX

        if (matrix.e < -slick.clientWidth + 300) {
            matrix.e = -slick.clientWidth + 300;
        }
        else if (matrix.e > 20) {
            matrix.e = 20
        }

        slick.setAttribute("style", "animation-duration: 0s; transform: " + matrix + ";")


    }
    
};


window.onresize = function() {

    if (window.innerWidth >= 1150 && document.querySelector("nav").classList.contains("menuOpened")) {
        
        document.querySelector("nav").classList.remove("menuOpened");
        document.body.style.overflowY = "scroll";

    }
    else if (window.innerWidth <= 500) {
        
        let slick = document.querySelector(".Sigorta-Şirketleri .main-container")

        slick.style.transform = "translateX(0px)";

    };

}


function FormSubmited(e) {

    let texts = document.querySelectorAll(".form-box input, .form-box textarea") 


    for (const iterator of texts) {

        console.log(iterator.value.split(" ").join(""))

        if (iterator.value.split(" ").join("") == "") {

            iterator.classList.add("hasError")
            document.querySelector("."+iterator.id+"-box .hata").classList.add("show");

            iterator.value = "";

            e.preventDefault();

        }
        

    }

}

function closeThisError(e) {
    
    e.target.classList.remove("hasError")
    document.querySelector("."+e.target.id+"-box .hata").classList.remove("show");

}


AOS.init();
