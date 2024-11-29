let UserName_SignUp = document.getElementById("SUsername")
let Password_SignUp = document.getElementById("SPassword")
let Password_SignUp2 = document.getElementById("SPassword2")
let SignUpBtn = document.getElementById("SignUpBtn")
let UserName_Login = document.getElementById("Username")
let Password_Login = document.getElementById("Password")
let LoginBtn = document.getElementById("loginBtn")
if(SignUpBtn){
    SignUpBtn.addEventListener("click", function(){
    if(UserName_SignUp.value == "" || Password_SignUp.value == "" || Password_SignUp2.value == ""){
      alert("Preencha todos os campos")  
    }
    else{
    if(Password_SignUp.value == Password_SignUp2.value){
    let UserName = UserName_SignUp.value
    localStorage.setItem("Name", UserName)
    let Password = Password_SignUp.value
    localStorage.setItem("Password", Password)
    alert("cadastro efetuado!  ")
    }
    else{
        alert("Senhas não coincidem!")
    }
    }
})
}
if(LoginBtn){
    LoginBtn.addEventListener("click", function(){
    let storedName = localStorage.getItem("Name")
    let storedPass = localStorage.getItem("Password")
    if(UserName_Login.value == storedName && storedPass == storedPass){
        window.location.href = "./main.html"
    }
})
}
//pagina create
let newName = document.getElementById("newName")
let newCategoria = document.getElementById("createCategoria")
let newData = document.getElementById("newData")
let newValue = document.getElementById("newValor")
let CreateBtn = document.getElementById("CreateFinanca")
let newDesc = document.getElementById("newDesc")
if(CreateBtn){
    CreateBtn.addEventListener("click", () =>{
        localStorage.setItem("newName", newName.value)
    })
}