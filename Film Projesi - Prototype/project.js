
const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI objesini Başlatma
const ui = new UI();

//Storage objesi üret
const storage = new Storage();

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);
    document.addEventListener("load",load());
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function load() {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        
        ui.displayMessages("Tüm alanları doldurun...","danger");

    }
    else {

        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);

        ui.displayMessages("Film başarıyla eklendi...","success");

    }

    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();

}

function deleteFilm(e) {
    
    if (e.target.id === "delete-film") {
        
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        ui.displayMessages("Silme işlemi başarılı...","success")
    }

}

function clearAllFilms() {

    if (confirm("Emin misiniz ?")) {
        ui.ClearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }


}