

localStorage.setItem("kelimeler",

JSON.stringify([{
    Kelime: "Emrah"
}, {
    Kelime: "Selam"
}, {
    Kelime: "Lorem"
}, {
    Kelime: "yusuf"
}])

);

var kelimeler = JSON.parse(localStorage.getItem("kelimeler"))

document.getElementById("text").addEventListener("input",function(e) {

    let text = e.target.value;
    

    
    kelimeler.forEach(element => {
        
        let reg = new RegExp(element.Kelime,"gi");

        console.log(reg);

        text = text.replace(reg,'***');

    });

    

    e.target.value = text;

})

var text  = document.getElementById("text");