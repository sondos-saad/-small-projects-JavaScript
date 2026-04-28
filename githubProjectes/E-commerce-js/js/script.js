
//vars

let productEle = document.querySelector('.product');
let cartProductsDivEle = document.querySelector('.cart-products div');
let cartProductsEle = document.querySelector('.cart-products');
let badgeIconEle =document.querySelector('.badge');
let ShoppingCartEle = document.querySelector(".ShoppingCart");
let products = JSON.parse(localStorage.getItem("products"));
let searchInputEle= document.querySelector('#search')

ShoppingCartEle.addEventListener("click" , openShoppingCart);
searchInputEle.addEventListener('keyup', function(e){
    search(e.target.value, products);
   
   if(e.target.value.trim() === ""){
    drawProductsUI(products)
   }
})


// products

let drawProductsUI;
(drawProductsUI= function (products = []){
    let productsUI= products.map((item)=>{
        return`
        <div class="product-item">
            <img src="${item.imageUrl}" alt="photo" class="product-item-img">
            <div class="product-item-desc">
                <a onclick="saveItemData(${item.id})" class="title">${item.title}</a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span>size: ${item.size}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick= "addedToCart(${item.id})">Add To Cart</button>
                <i class="favorite fa-regular fa-heart" onclick="addedToFavorite(${item.id})"></i>
            </div>
        </div>
        `
    }) 
    productEle.innerHTML = productsUI;
})( products);
// drawProductsUI();

let addedItem = localStorage.getItem('productInCart') ? JSON.parse(localStorage.getItem('productInCart')) : [];

if(addedItem){
    addedItem.map((item) => {
        cartProductsDivEle.innerHTML +=`<p>${item.title} ${item.qty}</p>`
    })
    badgeIconEle.style.display = "block";
    badgeIconEle.innerHTML += addedItem.length; 
}

let allItems= [];
function addedToCart(id){
    if(localStorage.getItem("username")){
        let chooseItem = products.find((item) => item.id === id);
        let item = allItems.find(i => i.id === chooseItem.id);

        if(item){
            chooseItem.qty +=1;
        }else{
            allItems.push(chooseItem)
        }

        cartProductsDivEle.innerHTML="";
        allItems.forEach(e =>{
            cartProductsDivEle.innerHTML += `<p>${e.title} ${e.qty}</p>`;
        })
        

        addedItem = [...addedItem , chooseItem];
        let uniqueProducts= getUniqueArr(addedItem,"id"); 
        localStorage.setItem("productInCart", JSON.stringify(uniqueProducts));
        
       
        let cartsItem  = document.querySelectorAll(".cart-products div p");
        badgeIconEle.style.display = "block";
        badgeIconEle.innerHTML = cartsItem.length;
    }else{
        window.location = "login.html";
    }
}

function openShoppingCart(){
    if(cartProductsDivEle.innerHTML != ""){
        if(cartProductsEle.style.display == "block"){
            cartProductsEle.style.display = "none";
        }else{
            cartProductsEle.style.display = "block";
        }
    }  
}

function getUniqueArr(arr, filterType){
     let unique = arr.map(item => item[filterType]).map(( item , i ,final)=> final.indexOf(item) === i && i).filter((item)=> arr[item]).map((item)=> arr[item]);
     return unique;
}

function saveItemData(id){
    localStorage.setItem('productId', id);
    window.location = 'cartDetails.html';
}


function search(title, myArray){
    let arr = myArray.filter(item => item.title.indexOf(title) !== -1);
    drawProductsUI(arr)
}

let favoriteItem=[];
function addedToFavorite(id){
    if(localStorage.getItem("username")){
        let chooseItem = products.find((item) => item.id === id);
        localStorage.setItem("productFavorite", JSON.stringify(chooseItem));
    }else{
        window.location = "login.html";
    }
}
