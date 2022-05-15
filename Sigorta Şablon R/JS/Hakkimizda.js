

function buttonClicked(e) {

    if (e.target.classList.contains("selected")) {
        return;
    }
    

    document.querySelector(".ekibimiz .buttons button.selected").classList.remove("selected");
    e.target.classList.add("selected");

    HideAllCards();


    if (e.target.id == "all") {
        
        let cards = document.querySelectorAll(".ekibimiz .cards .card");

        cards.forEach(element => {
            element.classList.add("show")
        });

    }
    else {

        let cards = document.querySelectorAll(`.ekibimiz .cards .card.card-${e.target.id}`);

        cards.forEach(element => {
            element.classList.add("show")
        });

    }

}

function HideAllCards() {
    
    let cards = document.querySelectorAll(".ekibimiz .cards .card.show");

    cards.forEach(element => {
        element.classList.remove("show")
    });

}

AOS.init();