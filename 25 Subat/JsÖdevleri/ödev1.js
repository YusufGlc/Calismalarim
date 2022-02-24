
    let toplam=0;

for (let index = 0; index < 100; index++) {

    let randomSayi = Math.floor(Math.random()*100)

    toplam+=randomSayi; 
}

console.log("100 rastgele sayının toplamının ortalaması "+toplam/100);