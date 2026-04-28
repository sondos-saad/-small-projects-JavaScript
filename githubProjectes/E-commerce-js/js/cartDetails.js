let products = JSON.parse(localStorage.getItem('products')) ;
let productId = localStorage.getItem('productId');
let itemDetails = document.querySelector('.item-details');

let productDetails = products.find((item) => item.id == productId);


itemDetails.innerHTML=`
    <img src="${productDetails.imageUrl}" alt="">
    <h2>${productDetails.title}</h2>
    <span>size: ${productDetails.size}</span><br>
    <span>Quntaty: ${productDetails.qty}</span>
`
