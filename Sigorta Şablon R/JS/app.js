$(document).ready(function(){
    var urlParameters = new URLSearchParams(location.search);
    urlParameters.forEach(function (value,key) {
        var input = $("[data-name='" + key + "']");
        var type = input.attr("type");
        if (type === "radio" | type === "checkbox") {
            input.filter("[value='" + value + "']").prop("checked", true);
        } else {
            input.val(value);
        }
    });
})

const initIMask = () => {
    $('input.imask').each((index, select) => {
        const mask = $(select).data('is-regex') ?
        new RegExp($(select).data('mask')): $(select).data('mask');
        new IMask(select, {mask});
    });
};

function goStageAllForms() {
    $("form.dynamic-form.stage-form").each((index,
        form) => {
        goStage("firstStage",
            $(form),false);
    });
}
function goStage(stage, form, valid = true) {
    if (!form || form.length === 0) {
        return;
    }
    if (form.has(".stage-form") && (!valid || form.valid())) {
        var formInputs = form.find("div.form-input"),
        activStep = $(form).attr("data-id");
        formInputs.not(`.${stage}`).hide();
        formInputs.filter(`.${stage}`).show();
        $(".step").find("li:not(:first-child)").removeClass("active")
        .end()
        .filter('[data-formstep='+activStep+']')
        .find(`.${stage}`).addClass("active")
        .prevAll("li")
        .addClass("active")
    }
}

function filter(id, datas) {
    if (id) {
        $(datas).hide();
        $(datas).filter("div[data-id='" + id + "']").show();

    } else {
        $(datas).show();
    }
    let allCards = $('.filter-flex').length;
    let noneCards = $('.filter-flex[style*="display: none"]').length;
    if (allCards == noneCards) {
        $("#alert").css("display", "block");
    } else {
        $("#alert").css("display", "none");

    }
}

goStageAllForms();
initIMask();
AOS.init();

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
}



function cardClicked(e) {

    let target;

    target = e.target;

    while (target.className != "question") {
        target = target.parentElement;
    }

    let answer = document.querySelector("#"+target.id+" .answer");

    if (answer.style.display == "block") {
        
        target.style.border = "1px #DEB9F5 solid";
        target.style.borderLeft = "13px #E13793 solid";
        answer.style.display = "none";
    }
    else {

        let questions = document.querySelectorAll(".SSS .container-1 .questions .question");
        let answers = document.querySelectorAll(".SSS .container-1 .questions .question .answer");

        for (let i = 0; i < questions.length; i++) {

            answers[i].style.display = "none";
            questions[i].style.border = "1px #DEB9F5 solid";
            questions[i].style.borderLeft = "13px #E13793 solid";
            
        }

        target.style.border = "3px #6639A6 solid";
        target.style.borderLeft = "26px #824394 solid";
        answer.style.display = "block";
    }
}


var Pressed = false;
var animationReady = true;

var oldX = 0;

function mouseDown(e) {
    
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

function touchMove(e) {

    if (window.innerWidth <= 1150) {

        let slick = document.querySelector(".Sigorta-Şirketleri .main-container")

        let matrix = new WebKitCSSMatrix(getComputedStyle(slick).transform);

        if (oldX > e.changedTouches[0].clientX) {
            matrix.e -= 3
        }
        else if (oldX < e.changedTouches[0].clientX) {
            matrix.e -= -3
        }

        oldX = e.changedTouches[0].clientX

        if (matrix.e < -slick.clientWidth + 300) {
            matrix.e = -slick.clientWidth + 300;
        }
        else if (matrix.e > 200) {
            matrix.e = 200
        }

        slick.setAttribute("style", "animation-duration: 0s; transform: " + matrix + ";")

    }
    
}


function MenuClick() {
    
    let nav = document.querySelector("nav");
    let container = document.querySelector("nav .container-1");
    let menuContainer = document.querySelector("nav .menu-container");

    if (getComputedStyle(menuContainer).display == "flex") {
        nav.className = nav.className.replace(" menuOpened","");
        container.className = container.className.replace(" menuOpened","");
        menuContainer.className = menuContainer.className.replace(" menuOpened","");
    }
    else {
        nav.className += " menuOpened";
        container.className += " menuOpened";
        menuContainer.className += " menuOpened";
    }

}
