
let isAnimate = false;

function button1_Clicked(e) {

    closeAllErrorMessage()
    let texts = document.querySelectorAll("form .step-1 input");

    let isReady = true;

    texts.forEach(element => {
        if (element.value.trim() == "") {

            document.getElementById(element.id+"-error").style.display = "inline-block";
            isReady = false;
        }
    });

    if (isReady && !isAnimate) {
        
        isAnimate = true;

        let box = document.querySelector("form .step-1");

        let box2 = document.querySelector("form .step-2");

        box.style.position = "absolute";

        box2.style.display = "block";

        box.animate({ transform: [ 'translateX(100px)', 'translateX(-300px)' ],opacity: ['1','0'] },
        { duration: 1000 });

        box2.animate({ transform: [ 'translateX(500px)', 'translateX(0px)' ],opacity: ['0','1'] },
        { duration: 1000 });

        setTimeout(function() {
            box.style.display = "none";
            isAnimate= false;
        },1000)

    }

}

function button2_Clicked(e) {

    closeAllErrorMessage()
    let texts = document.querySelectorAll("form input");

    let isReady=true;

    texts.forEach(element => {
        if (element.value.trim() == "") {
            document.getElementById(element.id+"-error").style.display = "inline-block";
            isReady=false;
        }
    });

    if (isReady & !isAnimate) {
        isAnimate = true;

        let p = document.createElement("p");

        p.innerText = "Başarıyla kayıt oldunuz";

        p.style.color = "green";
        p.style.fontWeight = "700";
        p.style.textAlign = "center";

        document.body.appendChild(p);

        let box = document.querySelector("form .step-2");

        box.animate({ transform: [ 'translateX(0px)', 'translateX(-500px)' ],opacity: ['1','0'] },
        { duration: 1000 });

        setTimeout(function() {
            box.style.display = "none";
            isAnimate= false;
        },1000)

    }

}

function button3_Clicked(e) {

    closeAllErrorMessage()

    if (!isAnimate) {

        isAnimate = true;

        let box = document.querySelector("form .step-1");

        let box2 = document.querySelector("form .step-2");

        box.style = "position: absolute;";
        box.style.position = "none";

        box.animate({ transform: ['translateX(100px)', 'translateX(-300px)'], opacity: ['1', '0'] },
            { duration: 1000, direction: "reverse" });

        box2.animate({ transform: ['translateX(500px)', 'translateX(0px)'], opacity: ['0', '1'] },
            { duration: 1000, direction: "reverse" });

        setTimeout(function () {

            box.style = null;
            box2.style.display = "none";
            isAnimate = false;

        }, 1000)
    }

    


}


function closeAllErrorMessage() {
    let errors = document.querySelectorAll(".errors");

    errors.forEach(element => {
        element.style = null;
    });

}