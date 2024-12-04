let UserName_SignUp = document.getElementById("SUsername")
let Password_SignUp = document.getElementById("SPassword")
let Password_SignUp2 = document.getElementById("SPassword2")
let SignUpBtn = document.getElementById("SignUpBtn")
let UserName_Login = document.getElementById("Username")
let Password_Login = document.getElementById("Password")
let LoginBtn = document.getElementById("loginBtn")
let username = document.getElementById("user_name")

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

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
        username.textContent = storedName.value
    }
})
}
//pagina main
let newName = document.getElementById("newName")
let newCategoria = document.getElementById("createCategoria") 
let newData = document.getElementById("newData")
let newValue = document.getElementById("newValor")
let CreateBtn = document.getElementById("CreateFinanca")
let newDesc = document.getElementById("newDesc")
let finances = JSON.parse(localStorage.getItem("finances")) || []
function saveFinances() {
    localStorage.setItem("finances", JSON.stringify(finances))
}
function CriarFinancas(){
    if(newName.value == "" || newData.value == ""){
        alert("Preencha todos os campos!")
    }
    else{
    if(isNaN(newValue.value)){
        alert("Valor Invalido!")
        newValue.style.borderColor = "red"
    }
    else{
        let dados = {
        name: newName.value,
        categoria: newCategoria.value,
        data: newData.value,
        valor: newValue.value,
        descricao: newDesc.value
    }
    finances.push(dados)
    saveFinances()
    RenderFinancas(dados) 
    newValue.style.borderColor = "light-dark"
    }

    }

}
function RenderFinancas(dados){
    let MainM = document.getElementById("Main_M")
    let createExibirDiv = document.createElement("span")
    createExibirDiv.innerHTML = `
    <p>Name: ${dados.name}</p>
    <p>Categoria: ${dados.categoria}</p>
    <p>Data: ${dados.data}</p>
    <p>Valor: ${dados.valor}</p>
    <p>Descrição: ${dados.descricao}</p>
    <span><button class="Edit">Editar</button><button class="deleteBtn">Deletar</button></span>
    `
    MainM.appendChild(createExibirDiv)
    createExibirDiv.querySelector(".Edit").addEventListener('click', function(){
        const nome = prompt('Digite o novo nome:')
        const valor = prompt('Digite o valo:r')
        const descricao = prompt("Digite a descrição:")
        if(nome !== null){
            dados.name = nome
        } 
        if(valor !== null){
            dados.value = valor
        } 
        if(descricao !== null){
            dados.descricao = descricao
        }
        localStorage.setItem("finances", JSON.stringify(finances))
        MainM.innerHTML = ""
        for (const f of finances) {
            RenderFinancas(f)
        }
    })
    createExibirDiv.querySelector(".deleteBtn").addEventListener('click', function (){
        finances = finances.filter(x => x !== dados)
        localStorage.setItem("finances", JSON.stringify(finances))
        MainM.innerHTML = ""
        for (const f of finances) {
            RenderFinancas(f)
        }
    })
}
if(CreateBtn){
username.textContent = localStorage.getItem("Name")
    for(const f of finances) {
        RenderFinancas(f)
    }
    CreateBtn.addEventListener("click", CriarFinancas)
}  
