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



function cardHover(e) {

    let card_id = e.target.id;

    let image = document.querySelector("#"+card_id+" img");

    image.src = "./img/"+image.className+"White.png";

}

function cardLeave(e) {

    let card_id = e.target.id;

    let image = document.querySelector("#"+card_id+" img");

    image.src = "./img/"+image.className+"Gray.png";

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
        breakpoint: 1150,
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