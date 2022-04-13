
document.getElementById("gonder").addEventListener("click",function(e) {
    
    closeAllErrorMessage()

    let texts = document.querySelectorAll("form input");

    texts.forEach(element => {
        if (element.value.trim() == "") {
            document.getElementById(element.id+"-error").style.display = "inline-block"
            e.preventDefault();
        }
    });

});


function closeAllErrorMessage() {
    let errors = document.querySelectorAll(".errors");

    errors.forEach(element => {
        element.style = null;
    });

}