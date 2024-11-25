let UserName_SignUp = document.getElementById("SUsername")
let Password_SignUp = document.getElementById("SPassword")
let SignUpBtn = document.getElementById("SignUpBtn")
let UserName_Login = document.getElementById("Username")
let Password_Login = document.getElementById("Password")
let LoginBtn = document.getElementById("loginBtn")
SignUpBtn.addEventListener("click", function(){
    let UserName = UserName_SignUp.value
    localStorage.setItem("Name", UserName)
    let Password = Password_SignUp.value
    localStorage.setItem("Password", Password)
})
//fFunção da pagina de login(pagina separada)
LoginBtn.addEventListener("click", function(){
    let storedName = localStorage.getItem("Name")
    let storedPass = localStorage.getItem("Password")
    console.log(storedName)
    console.log(storedPass)
})