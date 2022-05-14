
const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);
    document.addEventListener("load",load());
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function load() {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        
        UI.displayMessages("Tüm alanları doldurun...","danger");

    }
    else {

        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);

        UI.displayMessages("Film başarıyla eklendi...","success");

    }

    UI.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();

}

function deleteFilm(e) {
    
    if (e.target.id === "delete-film") {
        
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        UI.displayMessages("Silme işlemi başarılı...","success")
    }

}

function clearAllFilms() {

    if (confirm("Emin misiniz ?")) {
        UI.ClearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }


}