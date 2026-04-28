
let input = document.getElementById('input');
let btn = document.querySelector('.btn');
let btnAdd = document.querySelector('.btnadd')
let DataDiv = document.querySelector(".Data")
let btnCopy = document.querySelector(".btnCopy")

btn.addEventListener("click", ()=>{
    input.value = ""
    DataDiv.innerHTML = input.value
})

btnAdd.addEventListener('click',()=>{
    DataDiv.innerHTML = input.value
} )
btnCopy.addEventListener('click', async () => {
    try {
        input.select();
        await navigator.clipboard.writeText(input.value);
        alert('Copy success! ' + input.value);
    } catch (error) {
        console.error('Error copying text:', error);
        alert('Copy failed. Please try again.');
    }
});
