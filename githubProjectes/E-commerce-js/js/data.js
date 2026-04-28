let productsDB = [
    {
        id:1,
        imageUrl: 'photo1.png',
        title:'Green Item' ,
        size:'large' ,
        qty:1
    },
    {
        id:2,
        imageUrl: 'photo1.png',
        title:'red Item' ,
        size:'medium' ,
        qty:1
    },
    {
        id:3,
        imageUrl: 'photo1.png',
        title:'black Item' ,
        size:'small' ,
        qty:1
    },
];

localStorage.setItem('products', JSON.stringify(productsDB));