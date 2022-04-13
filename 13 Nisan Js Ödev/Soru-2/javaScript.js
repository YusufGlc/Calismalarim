
document.getElementById("gonder").addEventListener("click",function(e) {
    
    closeAllErrorMessage()

    let texts = document.querySelectorAll("form input");

    let isReady = true;

    texts.forEach(element => {
        if (element.value.trim() == "") {
            document.getElementById(element.id+"-error").style.display = "inline-block"
            isReady = false;
        }
    });

    if (isReady) {
        
        let table = document.getElementById("table")

        let row = document.createElement("tr");

        texts.forEach(element => {
            
            let td = document.createElement("td");

            td.innerText = element.value;

            row.appendChild(td);

        });

        table.appendChild(row);

    }

});


function closeAllErrorMessage() {
    let errors = document.querySelectorAll(".errors");

    errors.forEach(element => {
        element.style = null;
    });

}