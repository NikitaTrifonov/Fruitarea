/*let productsData = [
    {
        imgUrl ='assets/images/orang1.jpg',
        nameProduct = 'Апельсин'
    },
    {
        imgUrl ='assets/images/orang1.jpg',
        nameProduct = 'Апельсин'
    },
    {
        imgUrl ='assets/images/orang1.jpg',
        nameProduct = 'Апельсин'
    }
];

*/

let bascetButton = document.querySelector('.bascet_button');
let countPieceBox = document.querySelector('.count_box');
let favoriteButton = document.querySelector('.favorite_button');
let inputCount = countPieceBox.querySelector('.input_count');
let minusCountButton = countPieceBox.querySelector('.minus_button')
let plusCountButton = countPieceBox.querySelector('.plus_button')
let productItemTemplate = document.querySelector('#product_item_template').content;
let newProductItem = productItemTemplate.querySelector('.product_item');
let productList = document.querySelector('.products');


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

for(let i = 0; i<5;i++){
    let newItem = newProductItem.cloneNode(true);
    let tt = newItem.querySelector('.tt');
    tt.textContent = i;
    productList.appendChild(newItem);
}

/*for (let i = 0; i < productsData.length; i++) {
    let newItem = newProductItem.cloneNode(true);
    var img = newItem.querySelector('#product_img');
    img.style.src = productsData[i].imgUrl;
    img.style.alt = productsData[i].nameProduct;
    var name = newItem.querySelector('#product_name');
    name.text() = productsData[i].nameProduct;
    productList.appendChild(newItem);
}*/