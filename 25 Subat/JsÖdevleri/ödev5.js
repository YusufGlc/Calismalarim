
let sayi,kontrol=0;

sayi=prompt();

for (let index = 2; index < sayi; index++) {
    
    if (sayi%index==0) {
        kontrol++;
    }
    
}

if (kontrol==0) {
    console.log("girilen sayı asal");
}
else {
    console.log("girilen sayı asal değil");
}
