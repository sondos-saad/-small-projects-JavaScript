let linksEle =document.querySelector("#links");
let userInfoEle =document.querySelector("#user_info");
let userEle =document.querySelector("#user");
let logOutEle = document.querySelector("#logout");

let usernameStorage = localStorage.getItem("username");



if(usernameStorage){
    linksEle.remove();
    userInfoEle.style.display = "flex";
    userEle.innerHTML = usernameStorage;
};

logOutEle.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 1500)
});