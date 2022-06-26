if (localStorage.getItem("email") != null && localStorage.getItem("passwd") != null) {
    window.location.href = "kullanici.html";
}

let form = document.getElementById("girisForm");

let db = new DbProcess("AIzaSyA1wm3YInpmO7XWPD-a1mLBIsU6gnRkpCE");

let hataText = document.getElementById("hataText");

form.addEventListener("submit",function(e) {
    e.preventDefault()
    
    if (db.loginUser(e.target[0].value,e.target[1].value) == true) {
        
        let userId = db.getUserId(e.target[0].value,e.target[1].value)

        if (db.verifiedEmail(userId)) {
            window.location.href = "kullanici.html"
            localStorage.setItem("email",e.target[0].value)
            localStorage.setItem("passwd",e.target[1].value)
        }
        else if (db.sendEmailVerify(userId)) {

            hataText.textContent = "Mail Doğrulama linki gönderildi";

            let myInterval = setInterval(function() {
                
                if (db.verifiedEmail(userId)) {
                    window.location.href = "kullanici.html"
                    localStorage.setItem("email",e.target[0].value)
                    localStorage.setItem("passwd",e.target[1].value)
                    clearInterval(myInterval);
                }

            }, 1000);
        }

    }
    else {
        hataText.textContent = "E-Mail veya Şifre Hatalı";
    }

})






