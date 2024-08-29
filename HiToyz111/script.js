function validate(){

    const nama = document.getElementById("nama").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const agreement = document.getElementById("agreement")

     if(!email.endsWith("@gmail.com")){
        alert("email must end at @gmail.com")
    }
    else if(nama.length < 1){
         alert("Name must exist")
    }
    else if(isAlphaNum(password) == false){
        alert("Password must contain at least 1 alphabet and 1 number ")
    }
    else if(!agreement.checked){
        alert("You must agree with our term and conditions")
    }
    
    else var Prompt = prompt("Type Human if u a human")
        if(Prompt == "Human"){
            document.getElementById("error").innerHTML = window.location.href = "index.html"
        }
        else document.getElementById("error").innerHTML = "You must be human to register"
}

function isAlphaNum(password){
    var isAlpha = false
    var isNum = false
    for(let i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else isNum = true
    }
    if(isAlpha == false || isNum == false){
        return false
    }
    return true
}

function validatelogin(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    if(email == ""){
        alert("email can't be empty")
    }
    else if(isAlphaNum(password) == false){
        alert("Password must contain at least 1 alphabet and 1 number ")
    }
    // Jika semua validasi berhasil, arahkan ke laman index.html
    window.location.href = "index.html";
}
