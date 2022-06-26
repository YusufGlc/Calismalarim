if (localStorage.getItem("email") == null && localStorage.getItem("passwd") == null) {
    window.location.href = "giris.html";
}

document.querySelector(".title").textContent += localStorage.getItem("email").split("@")[0];

let mesaj = document.getElementById("mesaj");

let db = new DbProcess("AIzaSyA1wm3YInpmO7XWPD-a1mLBIsU6gnRkpCE");


document.getElementById("şifreDeğiş").addEventListener("click",function() {
    
    if (db.changeUserPassword(localStorage.getItem("email"))) {
        mesaj.textContent = "Maile şifre değiştirme linki gönderildi";
    }
    else {
        mesaj.textContent = "Şifre Değiştirme maili gönderilemedi";
    }

})


document.getElementById("hesapSil").addEventListener("click",function() {
    
    if (confirm("Hesabı Silmek istediğine eminmisin ?")) {
        
        let userId = db.getUserId(localStorage.getItem("email"),localStorage.getItem("passwd"))
        if (db.deleteUser(userId)) {
            localStorage.removeItem("email");
            localStorage.removeItem("passwd");
            window.location.href = "giris.html";
        }

    }

})


document.getElementById("çıkışYap").addEventListener("click",function() {

    localStorage.removeItem("email");
    localStorage.removeItem("passwd");
    window.location.href = "giris.html";

})
