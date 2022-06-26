if (localStorage.getItem("email") == null && localStorage.getItem("passwd") == null) {
    window.location.href = "giris.html";
}

document.querySelector(".title").textContent += localStorage.getItem("email").split("@")[0];

let db = new DbProcess("AIzaSyA1wm3YInpmO7XWPD-a1mLBIsU6gnRkpCE");

document.getElementById("hesapSil").addEventListener("click",function() {
    
    if (confirm("Hesabı Silmek istediğine eminmisin ?")) {
        
        let userId = db.getUserId(localStorage.getItem("email"),localStorage.getItem("passwd"))
        if (db.deleteUser(userId)) {
            localStorage.removeItem("email");
            localStorage.removeItem("passwd");
            window.location.href = "giris.html";
        }

    }
    else {

    }

})


document.getElementById("çıkışYap").addEventListener("click",function() {

    localStorage.removeItem("email");
    localStorage.removeItem("passwd");
    window.location.href = "giris.html";

})
