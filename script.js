const formOpenbtn=document.querySelector("#form-open"),
home=document.querySelector(".Home"),
formContainer=document.querySelector(".form_container"),
formClosebtn=document.querySelector(".form_close"),
signupbtn=document.querySelector("#signup"),
loginbtn=document.querySelector("#login");

formOpenbtn.addEventListener("click",() => home.classList.add("show"));
formClosebtn.addEventListener("click",() => home.classList.remove("show"));

signupbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.add("active");
});

loginbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.remove("active");
});