
class DbProcess {

    constructor(apiKey) {

        this.apiKey = apiKey;

    }


    loginUser = function(email,password) {
        
        let xhr = new XMLHttpRequest();

        xhr.open("POST",`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}&email=${email}&password=${password}`,false)

        let donecek = null;

        xhr.onload = function() {
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

        xhr.onload = function() {
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

        xhr.onload = function() {
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

        xhr.onload = function() {
            if (xhr.status == 200) {
                donecek = true;
                return
            }

            donecek = false;
        }

        xhr.send();

        return donecek;

    }


    sendEmailVerify = function(id) {
        
        let xhr = new XMLHttpRequest();

        xhr.open("POST",`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${this.apiKey}&requestType=VERIFY_EMAIL&idToken=${id}`,false)

        let gonderildimi = null;

        xhr.onload = function() {
            if (xhr.status == 200) {
                gonderildimi = true;
                return
            }

            gonderildimi = false;
        }

        xhr.send();

        return gonderildimi;
    }

    verifiedEmail = function(id) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST",`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${this.apiKey}&idToken=${id}`,false)

        let donecek = null;

        xhr.onload = function() {
            console.log(JSON.parse(xhr.response).users[0].emailVerified)
            if (xhr.status == 200) {
                
                donecek = JSON.parse(xhr.response).users[0].emailVerified;
                return 
            }

            donecek = false;
        }

        xhr.send();

        return donecek;

    }


}