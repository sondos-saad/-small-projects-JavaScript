//vars
let usernameLogInEle =document.querySelector("#usernameLogIn");
let passwordLogInEle =document.querySelector("#passwordLogIn");
let signInBtn =document.querySelector("#signIn");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

//event
signInBtn.addEventListener("click", DataFormSignIn);

//functions
function DataFormSignIn(e){
    e.preventDefault();
    if(usernameLogInEle.value === ""  || passwordLogInEle.value === ""){
        alert("Please Fill Data")
    }else{
        if(getUser &&
            getUser.trim() === usernameLogInEle.value &&
             getPassword &&
             getPassword === passwordLogInEle.value){
            setTimeout(()=>{
                window.location = "index.html";
            }, 1500);
        }
        
    }

}