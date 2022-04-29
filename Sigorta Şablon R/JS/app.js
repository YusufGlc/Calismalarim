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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


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