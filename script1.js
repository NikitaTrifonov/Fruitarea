let productItemTemplate = document.querySelector('#product_card_template').content;
let newProductItem = productItemTemplate.querySelector('.product_wrapper');
let productList = document.querySelector('.products');
let fullPriceInput = document.querySelector('.input_all_product_price');
let fullPrice = 0;
let favorite = [];
let cart = [];
let productsData = [
    {
        id: 1,
        imgUrl: 'assets/images/orang1.jpg',
        nameProduct: 'Апельсин',
        producingСountry: 'Уругвай',
        averageWeight: '1 шт. ~ 0.15 кг.',
        shelf_life: '2 мес.',
        price_rub: 24,
        price_cop: 99,
    },
    {
        id: 2,
        imgUrl: 'assets/images/banan1.jpg',
        nameProduct: 'Банан',
        producingСountry: 'Перу',
        averageWeight: '1 шт. ~ 0.2 кг.',
        shelf_life: '2 нед.',
        price_rub: 9,
        price_cop: 99,
    },
    {
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
        imgUrl: 'assets/images/persik1.jpg',
        nameProduct: 'Персик',
        producingСountry: 'Греция',
        averageWeight: '1 шт. ~ 0.2 кг.',
        shelf_life: '3 нед.',
        price_rub: 114,
        price_cop: 99,
    }
]
let addCartButtonHandler = function (item) {
    let cartButton = item.querySelector('.cart_button');
    let countPieceBox = item.querySelector('.count_box');
    let sumInCard = item.querySelector('.sum_box_card');
    let cardDescription = item.querySelector('#info')
    cartButton.addEventListener('click', function () {
        cartButton.style.display = 'none';
        countPieceBox.style.display = 'flex';
        cardDescription.style.display = 'none';
        sumInCard.style.display = 'block';
    });
}

let addFavoriteButton = function (item) {
    let favoriteButton = item.querySelector('.favorite_button');
    favoriteButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('favorite_button_active');
    })
}
let addMinusCountButtonHandler = function (item, productData) {
    let minusCountButton = item.querySelector('.minus_button');
    let inputCount = item.querySelector('.input_count');
    let cartButton = item.querySelector('.cart_button');
    let countPieceBox = item.querySelector('.count_box');
    let sumInCard = item.querySelector('.sum_box_card');
    let cardDescription = item.querySelector('#info');
    let cardSumPrice = item.querySelector('.input_sum');
    let price = cardSumPrice.value;
    
    minusCountButton.addEventListener('click', function () {
        let count;
        if (inputCount.value == 0) {
            countPieceBox.style.display = 'none';
            cartButton.style.display = 'block';
            cardDescription.style.display = 'block';
            sumInCard.style.display = 'none';
            return;
        }

        let findItem = cart.find(i => productData.id === i.id);
        if (findItem && findItem.count > 1) {
            count = --findItem.count;

           
        }
        else {
            cart = cart.filter(i => productData.id !== i.id);
            count = 0;
         
        }
        inputCount.value = count;
        price = (productData.price_rub + (productData.price_cop / 100)) * count;
        cardSumPrice.value = price.toFixed(2);


        fullPrice -= (productData.price_rub + (productData.price_cop / 100));
        fullPriceInput.value = fullPrice.toFixed(2);
              
        console.log(fullPriceInput);
    })
}
let addPlusCountButtonHandler = function (item, productData) {
    let plusCountButton = item.querySelector('.plus_button');
    let inputCount = item.querySelector('.input_count');
    let cardSumPrice = item.querySelector('.input_sum');
    let price = 0;


    plusCountButton.addEventListener('click', function () {
        if (inputCount.value == 20) {
            return;

        }
        let findItem = cart.find(i => productData.id === i.id);
        if (findItem) {
            findItem.count++;
        }
        else {
            findItem = { productData, id: productData.id, count: 1 }
            cart.push(findItem);

        }
        if (inputCount.value == 20) {
            plusCountButton.setAttribute('disabled', '');

        }

        inputCount.value++;
        price = (productData.price_rub + (productData.price_cop / 100)) * findItem.count;
        cardSumPrice.value = price.toFixed(2);

        fullPrice += (productData.price_rub + (productData.price_cop / 100));
        fullPriceInput.value = fullPrice.toFixed(2);
       

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

    addCartButtonHandler(newItem);
    addFavoriteButton(newItem);
    addMinusCountButtonHandler(newItem, productData);
    addPlusCountButtonHandler(newItem, productData);

    productList.appendChild(newItem);
})

/*let calculatingCart = function(cart){
    cart.forEach(function(productInCart){
        fullPrice += productInCart.
    })
}*/