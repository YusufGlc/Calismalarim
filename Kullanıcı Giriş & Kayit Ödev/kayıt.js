

let form = document.getElementById("kayitForm");
let hataText = document.getElementById("hataText");
let db = new DbProcess("AIzaSyA1wm3YInpmO7XWPD-a1mLBIsU6gnRkpCE");

form.addEventListener("submit",function(e) {
    e.preventDefault()

    if (e.target[1].value != e.target[2].value) {
        hataText.textContent = "Şifreler eşleşmiyor";
        return
    }
    
    if (db.registerUser(e.target[0].value,e.target[1].value) == true) {
        
        window.location.href = "giris.html";

    }
    else {
        hataText.textContent = "Kayıt Başarısız";
    }

})