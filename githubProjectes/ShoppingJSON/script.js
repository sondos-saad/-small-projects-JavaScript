

let get_data_from_api = async() =>{
    let res = await fetch("http://localhost:3000/products")
    .then((res)=> res.json())
    console.log(res)
}

window.addEventListener("DOMContentLoaded" , ()=>{
    get_data_from_api();
})

function display__product (){
    let tem = "";
    
}