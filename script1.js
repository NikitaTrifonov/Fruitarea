let bascetButton = document.querySelector('.bascet_button')
let countPieceBox = document.querySelector('.count_box')
let favoriteButton = document.querySelector('.favorite_button')
let inputCount = countPieceBox.querySelector('.input_count')
let minusCountButton = countPieceBox.querySelector('.minus_button')
let plusCountButton = countPieceBox.querySelector('.plus_button')

let productItemTemplate = document.querySelector('#product_card_template').content;
let newProductItem = productItemTemplate.querySelector('.product_wrapper');
let productList = document.querySelector('.products');
let productsData = [
    {
        imgUrl: 'assets/images/orang1.jpg',
        nameProduct: 'Апельсин',
        producingСountry: 'Уругвай',
        averageWeight: '1 шт. ~ 0.1 кг.',
        shelf_life: '4 мес.'


    },
    {
        imgUrl: 'assets/images/banan1.jpg',
        nameProduct: 'Банан',
        producingСountry: 'Перу',
        averageWeight: '1 шт. ~ 0.2 кг.',
        shelf_life: '3 мес.'
    },
    {
        imgUrl: 'assets/images/mango1.jpg',
        nameProduct: 'Манго',
        producingСountry: 'Колумбия',
        averageWeight: '1 шт. ~ 0.3 кг.',
        shelf_life: '4 мес.'
    }
]


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

productsData.forEach(function(productData){
    let newItem = newProductItem.cloneNode(true);

    let img = newItem.querySelector('#product_img');
    img.setAttribute('src', productData.imgUrl);
    img.setAttribute('alt', productData.nameProduct);

    let ItemName = newItem.querySelector('#product_name');
    ItemName.textContent = productData.nameProduct;

    let prodСountry = newProductItem.querySelector('#country');
    prodСountry.textContent = productData.producingСountry;

    let averageWeight = newItem.querySelector('#average_weight');
    averageWeight.textContent = productData.averageWeight;




    productList.appendChild(newItem);
})

/*for (let i = 0; i < productsData.length; i++) {
    
}*/