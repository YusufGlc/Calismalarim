


function Email() {
    let bosalan = document.querySelector(".errors");
    let text = document.querySelector("#mail")
    var Format = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (text.value.match(Format)) {
        bosalan.style.display = "none";

        text.focus();
        return true;
    } else {
        bosalan.style.display = "inline-block";

        text.focus();
        return false;
    }
}