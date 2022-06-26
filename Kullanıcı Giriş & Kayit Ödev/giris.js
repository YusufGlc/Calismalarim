if (localStorage.getItem("email") != null && localStorage.getItem("passwd") != null) {
    window.location.href = "kullanici.html";
}

let form = document.getElementById("girisForm");

let db = new DbProcess("AIzaSyA1wm3YInpmO7XWPD-a1mLBIsU6gnRkpCE");

form.addEventListener("submit",function(e) {
    e.preventDefault()
    
    if (db.loginUser(e.target[0].value,e.target[1].value) == true) {
        
        window.location.href = "kullanici.html"
        localStorage.setItem("email",e.target[0].value)
        localStorage.setItem("passwd",e.target[1].value)

    }
    else {
        console.log("giriş başarısız");
    }

})






