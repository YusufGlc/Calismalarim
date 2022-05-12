
$('.slider-for').slick({
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false
});

$('div[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-for').slick('slickGoTo', slideno - 1);

});

$('.slick').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }

    ]
});

if (document.body.clientWidth <= 1250) {
        
    $('.slick-2').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: true
    }); 
};



function cardClicked(e) {

    let question = e.target;

    while (question.classList.contains("question") == false) {
        question = question.parentElement;
    }

    let answer = document.querySelector("#"+question.id+" .answer");
    
    if (getComputedStyle(answer).display == "block") {
        
        answer.classList.remove("show");
        question.classList.remove("answerShowed");
    }
    else {

        let questions = document.querySelectorAll(".SSS .container-1 .questions .question");
        let answers = document.querySelectorAll(".SSS .container-1 .questions .question .answer");

        for (let i = 0; i < questions.length; i++) {

            answers[i].classList.remove("show");
            questions[i].classList.remove("answerShowed");
            
        }

        answer.classList.add("show");
        question.classList.add("answerShowed");
        
    }
};


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



let menuReadyToClick = true;

function MenuClick() {

    if (!menuReadyToClick) {
        return;
    }
    
    menuReadyToClick = false;

    document.body.style.overflow = null;

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

        document.body.style.overflow = "hidden";

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

};

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

};

window.onresize = function() {

    if (window.innerWidth >= 1150 && document.querySelector("nav").classList.contains("menuOpened"))
    document.querySelector("nav").classList.remove("menuOpened");
    else if (window.innerWidth <= 500) {
        
        let slick = document.querySelector(".Sigorta-Şirketleri .main-container")

        slick.style.transform = "translateX(0px)";

    };

    try {
        
        if (document.body.clientWidth <= 1250) {

            $('.slick-2').slick({
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                dots: true
            }); 
            
        }
        else {
            $('.slick-2').slick('unslick');
        }

    } catch (error) {
        
    }

};


AOS.init();
