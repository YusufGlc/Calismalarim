

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
