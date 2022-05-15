let Pressed = false;
let animationReady = true;

function mouseDown() {
    
    Pressed = true;
};

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

};

function mouseMove(e) {

    if (Pressed && window.innerWidth <= 1150) {
        
        e.preventDefault();

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

};


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