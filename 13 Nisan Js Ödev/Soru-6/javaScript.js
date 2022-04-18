

localStorage.setItem("kelimeler",

JSON.stringify([{
    Kelime: "Emrah"
}, {
    Kelime: "Selam"
}, {
    Kelime: "Lorem"
}])

);

console.log(localStorage.getItem("kelimeler"));

document.getElementById("text").addEventListener("input",function(e) {

    let text = e.target.value;
    

    text = text.replace(reg,'***');

    

    e.target.value = text;

})

var text  = document.getElementById("text");