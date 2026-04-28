

let productEle = document.querySelector('.product'); 
let noProductEle = document.querySelector(".noProduct");


function drawCartProductsUI(allProducts = []){
    if(JSON.parse(localStorage.getItem('productInCart')).length === 0){
        noProductEle.innerHTML = "No Product....";
        
    }

    let products = JSON.parse(localStorage.getItem('productInCart')) || allProducts;
    let productsUI = products.map((item) => {
        return`
        <div class="product-item">
            <img src="${item.imageUrl}" alt="photo" class="product-item-img">
            <div class="product-item-desc">
                <a  class="title">${item.title}</a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span>size: ${item.size}</span> <br>
                <span>Quantaty: ${item.qty}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove</button>
            </div>
        </div>
        `
    }) 
    productEle.innerHTML = productsUI;
}
drawCartProductsUI();

function removeItemFromCart(id) {
    let productsInCart = localStorage.getItem("productInCart");
    if (productsInCart) {
        let items = JSON.parse(productsInCart);
        let filterItems = items.filter( item => item.id !== id);
        localStorage.setItem("productInCart", JSON.stringify(filterItems));
        drawCartProductsUI(filterItems);
    }
}
