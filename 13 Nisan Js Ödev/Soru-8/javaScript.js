
let badge = document.querySelector(".sepet .badge")

if (localStorage.getItem("ürünler") != null) {
    badge.textContent = JSON.parse(localStorage.getItem("ürünler")).length;
}
else {
    badge.textContent = "0";
}

function SepeteEkle() {
    
    
    let urunler = [document.querySelector("form #urunAd").value,document.querySelector("form #adet").value,document.querySelector("form #fiyat").value]

    let sepetUrunler = [];
    
    if (localStorage.getItem("ürünler") != null) {
        sepetUrunler = JSON.parse(localStorage.getItem("ürünler"));
    }
    
    let yeniUrun = [urunler[0],urunler[1],urunler[2]]

    sepetUrunler.push(yeniUrun);
    localStorage.setItem("ürünler",JSON.stringify(sepetUrunler))

    badge.textContent = parseInt(badge.textContent)+1;

}


var isAnimate;

function SepetClicked() {

    if (isAnimate==true) {
        return;
    }

    isAnimate=true;
    
    let sepetIçerik = document.querySelector(".sepet-icerik");

    sepetIçerik.style.display = "block";

    if (sepetIçerik.style.transform == "translate(70%,-50%)" || getComputedStyle(sepetIçerik).transform == "matrix(1, 0, 0, 1, 420, -300)") {
    
        TabloYenile();

        sepetIçerik.animate(
            [{transform: "translate(50%,-50%)",opacity:.1},{transform: "translate(-50%,-50%)",opacity:1}],
            {duration: 500}
        )

        setTimeout(function() {
    
            sepetIçerik.style.transform = "translate(-50%,-50%)";
            isAnimate=false;

        },420)

    }
    else {
        
        SepetKapat();

    }

}


function DeleteBtnClicked(e) {
    
    let urunler = JSON.parse(localStorage.getItem("ürünler"))

    let id = e.target.parentElement.id;

    let index = id.slice(4,id.length);

    urunler.splice(index,1);

    localStorage.setItem("ürünler",JSON.stringify(urunler));

    e.target.parentElement.remove();

    badge.textContent = parseInt(badge.textContent)-1;

    TabloYenile();

}


function SepetKapat() {
    isAnimate=true;
    let sepetIçerik = document.querySelector(".sepet-icerik");

    sepetIçerik.animate(
        [{transform: "translate(-50%,-50%)",opacity:1},{transform: "translate(70%,-50%)",opacity:.1}],
        {duration: 500}
    )

    setTimeout(function() {
        
        sepetIçerik.style.display = "none";
        sepetIçerik.style.transform = "translate(70%,-50%)";

        isAnimate=false;

    },420)
}

function SepetTableClear() {
    let rows = document.querySelectorAll(".row");

    rows.forEach(element => {
        element.remove();
    });
}

function TabloYenile() {
    
    if (localStorage.getItem("ürünler") != null) {

        let table = document.querySelector(".sepet-table tbody")
        let urunler = JSON.parse(localStorage.getItem("ürünler"))

        SepetTableClear();

        for (let i = 0; i < urunler.length; i++) {

            const element = urunler[i];
        
            let tr = document.createElement("tr");

            tr.className="row";
            tr.id = "urun"+i;

            element.forEach(element2 => {
                let td = document.createElement("td");
                td.textContent = element2;
                tr.appendChild(td);
            });

            let deleteBtn = document.createElement("i");

            deleteBtn.className = "fa-solid fa-trash-can";
            deleteBtn.setAttribute("onclick","DeleteBtnClicked(event)")

            tr.appendChild(deleteBtn);

            table.appendChild(tr);

        };

        
    }

}