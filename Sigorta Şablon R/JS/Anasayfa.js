
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
