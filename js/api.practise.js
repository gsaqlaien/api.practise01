const searchButton = () => {
    document.getElementById('search-button')
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');

    const inputValue = input.value;

    if (isNaN(inputValue) || inputValue == "") {
        error.innerText = "Please place a number ";
        input.value = "";
    }
    else if (inputValue <= 0) {
        error.innerText = "Please place a positive value to get the result";
        input.value = "";
    }

    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data))
        input.value = "";
    }

}

const cardsDisplay = (cards) => {
    console.log(cards)

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
//         console.log(cards)
//     }
// }