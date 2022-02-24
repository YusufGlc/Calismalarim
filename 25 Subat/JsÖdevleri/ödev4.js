
let tarih,saat;

tarih= new Date();

saat=tarih.getHours();

if (saat>=5&&saat<12) {
    alert("Günaydın");
}
else if (saat>12) {
    alert("İyi Günler");
}
else if (saat>17) {
    alert("İyi akşamlar");
}
else if (saat>=0 && saat<5) {
    alert("İyi Geceler");
}