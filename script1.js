let productItemTemplate = document.querySelector('#product_card_template').content;
let newProductItem = productItemTemplate.querySelector('.product_wrapper');
let productList = document.querySelector('.products');
let productsData = [
    {
        imgUrl: 'assets/images/orang1.jpg',
        nameProduct: 'Апельсин',
        producingСountry: 'Уругвай',
        averageWeight: '1 шт. ~ 0.15 кг.',
        shelf_life: '2 мес.',
        price_rub: 24,
        price_cop: 99,
    },
    {
        imgUrl: 'assets/images/banan1.jpg',
        nameProduct: 'Банан',
        producingСountry: 'Перу',
        averageWeight: '1 шт. ~ 0.2 кг.',
        shelf_life: '2 нед.',
        price_rub: 9,
        price_cop: 99,
    },
    {
        imgUrl: 'assets/images/mango1.jpg',
        nameProduct: 'Манго',
        producingСountry: 'Колумбия',
        averageWeight: '1 шт. ~ 0.2 кг.',
        shelf_life: '1 мес.',
        price_rub: 95,
        price_cop: 99,
    }
    ,
    {
        imgUrl: 'assets/images/lime1.jpg',
        nameProduct: 'Лайм',
        producingСountry: 'Колумбия',
        averageWeight: '1 шт. ~ 0.1 кг.',
        shelf_life: '3 мес.',
        price_rub: 59,
        price_cop: 99,
    }
    ,
    {
        imgUrl: 'assets/images/strawberry1.jpg',
        nameProduct: 'Клубника',
        producingСountry: 'Италия',
        averageWeight: '1 шт. ~ 0.1 кг.',
        shelf_life: '2 нед.',
        price_rub: 34,
        price_cop: 99,
    }
    ,
    {
        imgUrl: 'assets/images/kokos1.jpg',
        nameProduct: 'Кокос',
        producingСountry: 'Индия',
        averageWeight: '1 шт. ~ 0.3 кг.',
        shelf_life: '3 мес.',
        price_rub: 119,
        price_cop: 99,
    }
    ,
    {
        imgUrl: 'assets/images/nict1.jpg',
        nameProduct: 'Никтарин',
        producingСountry: 'Грузия',
        averageWeight: '1 шт. ~ 0.2 кг.',
        shelf_life: '2 мес.',
        price_rub: 37,
        price_cop: 99,
    }
    ,
    {
        imgUrl: 'assets/images/kiwi1.jpg',
        nameProduct: 'Киви',
        producingСountry: 'Чили',
        averageWeight: '1 шт. ~ 0.18 кг.',
        shelf_life: '3 мес.',
        price_rub: 39,
        price_cop: 99,
    }
    ,
    {
        imgUrl: 'assets/images/dynia1.jpg',
        nameProduct: 'Дыня',
        producingСountry: 'Азербайджан',
        averageWeight: '1 шт. ~ 3.5 кг.',
        shelf_life: '1 мес.',
        price_rub: 119,
        price_cop: 99,
    }
    ,
    {
        imgUrl: 'assets/images/greipfruit1.jpg',
        nameProduct: 'Грейпфрут',
        producingСountry: 'Колумбия',
        averageWeight: '1 шт. ~ 0.2 кг.',
        shelf_life: '1 мес.',
        price_rub: 99,
        price_cop: 99,
    }
    ,
    {
        imgUrl: 'assets/images/grusha1.jpg',
        nameProduct: 'Груша',
        producingСountry: 'Россия',
        averageWeight: '1 шт. ~ 0.1 кг.',
        shelf_life: '1 мес.',
        price_rub: 15,
        price_cop: 99,
    }
    ,
    {
        imgUrl: 'assets/images/persik1.jpg',
        nameProduct: 'Персик',
        producingСountry: 'Греция',
        averageWeight: '1 шт. ~ 0.2 кг.',
        shelf_life: '3 нед.',
        price_rub: 114,
        price_cop: 99,
    }
]
let addBuscketButton = function (item) {
    let bascetButton = item.querySelector('.bascet_button');
    let countPieceBox = item.querySelector('.count_box');
    bascetButton.addEventListener('click', function () {
        bascetButton.style.display = 'none';
        countPieceBox.style.display = 'flex';
    });
}

let addFavoriteButton = function (item) {
    let favoriteButton = item.querySelector('.favorite_button');
    favoriteButton.addEventListener('click', function () {
        if (favoriteButton.style.backgroundImage == 'url("assets/images/heart-shape.png")') {
            favoriteButton.style.backgroundImage = 'url("assets/images/red-heart-shape.png")';

        }
        else {
            favoriteButton.style.backgroundImage = 'url("assets/images/heart-shape.png")';

        }
    })
}
let addMinusCountButtonHandler = function (item) {
    let minusCountButton = item.querySelector('.minus_button');
    let inputCount = item.querySelector('.input_count');
    let bascetButton = item.querySelector('.bascet_button');
    let countPieceBox = item.querySelector('.count_box');
    minusCountButton.addEventListener('click', function () {
        if (inputCount.value == 1) {
            countPieceBox.style.display = 'none';
            bascetButton.style.display = 'block';
        }
        else {
            inputCount.value--;
        }
    })
}
let addPlusCountButtonHandler = function (item) {
    let plusCountButton = item.querySelector('.plus_button');
    let inputCount = item.querySelector('.input_count');
    plusCountButton.addEventListener('click', function () {
        if (inputCount.value == 20) {
            inputCount.value = 20;
        }
        else {
            inputCount.value++;
            
        }
    })
}

productsData.forEach(function (productData) {
    let newItem = newProductItem.cloneNode(true);

    let img = newItem.querySelector('#product_img');
    img.setAttribute('src', productData.imgUrl);
    img.setAttribute('alt', productData.nameProduct);

    let ItemName = newItem.querySelector('#product_name');
    ItemName.textContent = productData.nameProduct;

    let country = newItem.querySelector('#country');
    country.textContent = productData.producingСountry;

    let averageWeight = newItem.querySelector('#average_weight');
    averageWeight.textContent = productData.averageWeight;

    let shelfLife = newItem.querySelector('#shelf_life');
    shelfLife.textContent = productData.shelf_life;

    let priceRub = newItem.querySelector('#rub');
    priceRub.textContent = productData.price_rub;

    let priceCop = newItem.querySelector('#cop');
    priceCop.textContent = productData.price_cop;

    addBuscketButton(newItem);
    addFavoriteButton(newItem);
    addMinusCountButtonHandler(newItem);
    addPlusCountButtonHandler(newItem);

    productList.appendChild(newItem);
})

