let bascetButton = document.querySelector('.bascet_button');
let countPieceBox = document.querySelector('.count_box');
let favoriteButton = document.querySelector('.favorite_button');
let inputCount = countPieceBox.querySelector('.input_count');
let minusCountButton = countPieceBox.querySelector('.minus_button')
let plusCountButton = countPieceBox.querySelector('.plus_button')

bascetButton.addEventListener('click', function () {
    bascetButton.style.display = 'none';
    countPieceBox.style.display = 'flex';

})

favoriteButton.addEventListener('click', function () {
    if (favoriteButton.style.backgroundImage == 'url("assets/images/heart-shape.png")') {
        favoriteButton.style.backgroundImage = 'url("assets/images/red-heart-shape.png")';

    }
    else {
        favoriteButton.style.backgroundImage = 'url("assets/images/heart-shape.png")';

    }
})

minusCountButton.addEventListener('click', function () {

    if (inputCount.value == 1) {
        countPieceBox.style.display = 'none';
        bascetButton.style.display = 'block';
    }
    else {
        inputCount.value--
    }
})

plusCountButton.addEventListener('click', function () {
    if (inputCount.value == 20) {
        inputCount.value = 20;
    }
    else {
        inputCount.value++;
    }
})