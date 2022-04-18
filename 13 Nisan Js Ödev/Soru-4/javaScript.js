

    if (localStorage.getItem("gs") == null) {
        localStorage.setItem("gs",0);
        localStorage.setItem("fb",0);
        localStorage.setItem("bjk",0);
        localStorage.setItem("trabzon",0);
    }

    let progress = document.querySelectorAll(".takimOy");

document.getElementById("gonder").addEventListener("click",function oyla(e) {
    
    let gsOy,fbOy,bjkOy,TrabzonOy;

    gsOy = parseInt(localStorage.getItem("gs"));
    fbOy = parseInt(localStorage.getItem("fb"));
    bjkOy = parseInt(localStorage.getItem("bjk"));
    TrabzonOy = parseInt(localStorage.getItem("trabzon"));

    let radiobtn = document.querySelectorAll(".radioBtn");
    
    
    for (let i = 0; i < radiobtn.length; i++) {
        const element = radiobtn[i];

        if (element.checked && i == 0) {
            gsOy += 1;
        }
        else if (element.checked && i == 1) {
            fbOy += 1;
        }
        else if (element.checked && i == 2) {
            bjkOy += 1;
        }
        else if (element.checked && i == 3) {
            TrabzonOy += 1;
        }

    }

    let toplamOy = gsOy + fbOy + bjkOy + TrabzonOy;

    for (let i = 0; i < progress.length; i++) {
        const element = progress[i];

        element.max = toplamOy;
        
        if (i == 0) {
            
            element.value = gsOy;

        }
        else if (i == 1) {
            
            element.value = fbOy;

        }
        else if (i == 2) {
            
            element.value = bjkOy;

        }
        else if (i == 3) {
            
            element.value = TrabzonOy;

        }

    }

    localStorage.setItem("gs",gsOy);
    localStorage.setItem("fb",fbOy);
    localStorage.setItem("bjk",bjkOy);
    localStorage.setItem("trabzon",TrabzonOy);


})



    for (let i = 0; i < progress.length; i++) {
        const element = progress[i];

        element.max = parseInt(localStorage.getItem("gs")) + parseInt(localStorage.getItem("fb")) + parseInt(localStorage.getItem("bjk")) + parseInt(localStorage.getItem("trabzon"));
        
        if (i == 0) {
            
            element.value = parseInt(localStorage.getItem("gs"));;

        }
        else if (i == 1) {
            
            element.value = parseInt(localStorage.getItem("fb"));;

        }
        else if (i == 2) {
            
            element.value = parseInt(localStorage.getItem("bjk"));;

        }
        else if (i == 3) {
            
            element.value = parseInt(localStorage.getItem("trabzon"));;

        }

    }