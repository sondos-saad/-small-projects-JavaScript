
let btn =document.querySelector('.btn');
let box =document.querySelector('.box');


function addClassShow(){
    box.classList.add('show')
};
function removeClassShow(){
    box.classList.remove('show')
}


// tabs
function showTab(e1 , e2){
    let i ;
    let contentTab;
    let linkTab;
    contentTab = document.getElementsByClassName('content-tab');
    for( i = 0; i<contentTab.length; i++){
        contentTab[i].style.display = 'none'
    }

    linkTab = document.getElementsByClassName('btn-tab');
    for( i = 0; i<linkTab.length; i++){
        linkTab[i].className = linkTab[i].className.replace('active','')
    }

    document.getElementById(e2).style.display ="block";
    e1.currentTarget.className +='active'
}