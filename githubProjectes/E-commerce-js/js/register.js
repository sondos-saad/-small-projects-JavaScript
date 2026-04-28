
//vars
let usernameEle =document.querySelector("#username");
let emailEle =document.querySelector("#email");
let passwordEle =document.querySelector("#password");
let signUpBtn =document.querySelector("#signUp");

//event
signUpBtn.addEventListener("click", DataForm);

//functions
function DataForm(e){
    e.preventDefault();
    if(usernameEle.value === "" || emailEle.value === "" || passwordEle.value === ""){
        alert("Please Fill Data")
    }else{
        localStorage.setItem("username", usernameEle.value);
        localStorage.setItem("email" , emailEle.value);
        localStorage.setItem("password", passwordEle.value);

        setTimeout(()=>{
            window.location = "login.html";
        }, 1500);
    }

}
