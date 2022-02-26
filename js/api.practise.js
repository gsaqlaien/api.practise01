const searchButton = () => {
    document.getElementById('search-button')
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const main = document.getElementById('main');

    const inputValue = parseInt(input.value);

    if (isNaN(inputValue) || inputValue == "") {
        error.innerText = "Please place a number ";
        input.value = "";
        main.innerHTML = "";

    }
    else if (inputValue <= 0) {
        error.innerText = "Please place a positive value to get the result";
        input.value = "";
        main.innerHTML = "";
    }

    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data.cards))
        input.value = "";
        error.innerHTML = "";
    }

}

const cardsDisplay = (cards) => {
    for (const card of cards) {
        console.log(card);
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        div.classList.add("mb-5");
        div.innerHTML = `

        <div class="card" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.code}</h5>
                <p class="card-text">${card.suit}</p>
                <a href="#" class="btn btn-primary">See Details</a>
        </div>
</div>
        
        
        `;
        main.appendChild(div);

    }

}


// const searchButton = () => {
//     document.getElementById('search-button');
//     const input = document.getElementById('input-value');
//     const error = document.getElementById('error');

//     const inputValue = input.value;


//     if (isNaN(inputValue) || inputValue == "") {
//         error.innerText = "please place a number"
//         error.innerText = "";
//     }
//     else if (inputValue <= 0) {
//         error.innerText = "please place a positive number to get the Value";
//         error.innerText = "";
//     }

//     else {
//         fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
//             .then(res => res.json())
//             .then(data => cardsDisplay(data))
//     }
//     const cardsDisplay = (cards) => {
//         console.log(cardsDisplay)
//     }
// }