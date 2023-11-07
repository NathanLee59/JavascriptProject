let flipCount = 0;
let order = [];
let card1Type = '';
let card2Type = '';
let card1Name = '';
let card2Name = '';

function assignPlaces() {
    while (order.length < 16) {
        let cardSpot = Math.floor(Math.random() * 16);
        if (!order.includes(cardSpot)) {
            order.push(cardSpot);
        }
    }

    for (let i = 0; i < 16; i++) {
        let image = document.querySelector(`#face${i}`);
        image.src = `images/card${order[i]}.jpg`;
        image.style.opacity = 0;
        if (order[i] == 0 || order[i] == 1) {
            image.className += " apple";
        } else if (order[i] == 2 || order[i] == 3) {
            image.className += " orange";
        } else if (order[i] == 4 || order[i] == 5) {
            image.className += " pear";
        } else if (order[i] == 6 || order[i] == 7) {
            image.className += " grape";
        } else if (order[i] == 8 || order[i] == 9) {
            image.className += " banana";
        } else if (order[i] == 10 || order[i] == 11) {
            image.className += " strawberry";
        } else if (order[i] == 12 || order[i] == 13) {
            image.className += " dragonfruit";
        } else if (order[i] == 14 || order[i] == 15) {
            image.className += " mango";
        }
    }
    console.log(order);
}

let memCards = document.querySelectorAll('.card');
for (let memCard of memCards) {
    memCard.addEventListener('click', function () {
        showHidden(memCard);
    });
}

function showHidden(memCard) {
    if (flipCount == 3) {
        document.querySelector(`#${card1Name}`).style.opacity = 0;
        document.querySelector(`#${card2Name}`).style.opacity = 0;
        flipCount = 0;
        card1Type = '';
        card2Type = '';
        card1Name = '';
        card2Name = '';
    }
    flipCount += 1;
    let cardNum = (memCard.getAttribute('id'));
    let faceIDNum = cardNum.replace(/\D/g,'');
    let faceID = `face${faceIDNum}`;
    let image = document.querySelector(`#${faceID}`);
    image.style.opacity = 1;
    if (flipCount == 1) {
        card1Type = image.className;
        card1Name = faceID;
    } else if (flipCount == 2) {
        card2Type = image.className;
        card2Name = faceID;
    }
    if (flipCount == 2) {
        checkFlipped();
    }
}

function checkFlipped() {
    if (card1Name == card2Name) {
        document.querySelector(`#${card1Name}`).style.opacity = 0;
        document.querySelector(`#${card2Name}`).style.opacity = 0;
        card1Type = '';
        card2Type = '';
        card1Name = '';
        card2Name = '';
        flipCount = 0;
    } 
    if (card1Type == card2Type) {
        flipCount = 0;
        card1Type = '';
        card2Type = '';
        card1Name = '';
        card2Name = '';
        console.log('match!');
    } else {
        flipCount = 3;
        console.log('not a match');
    }
}


assignPlaces();