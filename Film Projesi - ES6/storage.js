
class Storage {


    static addFilmToStorage(newFilm) {
    
        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
    
        localStorage.setItem("films",JSON.stringify(films))
    
    }

    static getFilmsFromStorage() {
        
        if (localStorage.getItem("films") === null) {
            return [];
    
        }
        else {
            return JSON.parse(localStorage.getItem("films"));
    
        }
    
    }

    static deleteFilmFromStorage(filmTitle) {
        
        let films = this.getFilmsFromStorage();
    
        films.forEach(function (film,index) {
            
            if (film.title === filmTitle) {
    
                film = films.splice(index,1);
            }
    
        });
        
        localStorage.setItem("films",JSON.stringify(films));
    
    }

    static clearAllFilmsFromStorage() {
        
        localStorage.removeItem("films");
    
    }


}

