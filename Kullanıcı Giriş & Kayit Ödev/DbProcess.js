
class DbProcess {

    constructor(apiKey) {

        this.apiKey = apiKey;

    }


    loginUser = function(email,password) {
        
        let xhr = new XMLHttpRequest();

        xhr.open("POST",`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}&email=${email}&password=${password}`,false)

        let donecek = null;

        xhr.onload = function(e) {
            if (xhr.status == 200) {
                donecek = true;
                return
            }

            donecek = false;
        }

        xhr.send();

        return donecek;

    }


    registerUser = function(email,password) {
        
        let xhr = new XMLHttpRequest();

        xhr.open("POST",`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}&email=${email}&password=${password}`,false)

        let donecek = null;

        xhr.onload = function(e) {
            if (xhr.status == 200) {
                donecek = true;
                return
            }

            donecek = false;
        }

        xhr.send();

        return donecek;

    }


    getUserId = function(email,password) {
        
        let xhr = new XMLHttpRequest();

        xhr.open("POST",`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}&email=${email}&password=${password}`,false)

        let donecek = null;

        xhr.onload = function(e) {
            if (xhr.status == 200) {
                donecek = JSON.parse(xhr.response).idToken;
            }
        }

        xhr.send();

        return donecek;

    }


    deleteUser = function(id) {
        
        let xhr = new XMLHttpRequest();

        xhr.open("POST",`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${this.apiKey}&idToken=${id}`,false)

        let donecek = null;

        xhr.onload = function(e) {
            if (xhr.status == 200) {
                donecek = true;
                return
            }

            donecek = false;
        }

        xhr.send();

        return donecek;

    }

}