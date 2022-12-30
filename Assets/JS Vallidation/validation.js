let first = document.getElementById("firstErr");
let err = document.querySelector(".error-icon");
// last name
let last = document.getElementById("lastErr");
let errlast = document.querySelector(".errlast");
// email
let emaillName = document.getElementById("emailName");
let emaillErr = document.querySelector(".emailErr");
// password
let passName = document.getElementById("passName");
let passErr = document.querySelector(".passErr");

validateFirst=()=>{
    let firstName = document.getElementById("first-nameErr").value;
    if(firstName.length == 0){
        first.innerHTML = "First name cannot be empty!";
        first.style.color="hsl(0, 100%, 74%)";
        err.style.color="hsl(0, 100%, 74%)";
        err.innerHTML = "<i class='fal fa-exclamation-circle'></i>";
        return false
    }
        first.innerHTML = "First name is valid!";
        first.style.color="hsl(154, 59%, 51%)";
        err.innerHTML = "<i class='fal fa-check-circle'></i>";
        err.style.color="hsl(154, 59%, 51%)";
        return true;    
}
validateLastName=()=>{
    let lastName = document.getElementById("last-nameErr").value;
    if(lastName.length == 0){
        last.innerHTML = "Last name cannot be empty!";
        last.style.color="hsl(0, 100%, 74%)";
        errlast.style.color="hsl(0, 100%, 74%)";
        errlast.innerHTML = "<i class='fal fa-exclamation-circle'></i>";
        return false ;
    }
        last.innerHTML = "Last name is valid!";
        last.style.color="hsl(154, 59%, 51%)";
        errlast.style.color="hsl(154, 59%, 51%)";
        errlast.innerHTML = "<i class='fal fa-check-circle'></i>";
        return true;
}

validateEmail=()=>{
    let emailInput = document.getElementById("email-name").value;
    if(emailInput.length == 0){
        emaillName.innerHTML = "Email cannot be empty!";
        emaillName.style.color="hsl(0, 100%, 74%)";
        emaillErr.innerHTML = "<i class='fal fa-exclamation-circle'></i>";
        emaillErr.style.color="hsl(0, 100%, 74%)";
        return false;
    }if(!emailInput.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emaillName.innerHTML="Looks like this is not an email!";
        emaillName.style.color="hsl(0, 100%, 74%)";
        emaillErr.innerHTML = "<i class='fal fa-exclamation-circle'></i>";
        emaillErr.style.color="hsl(0, 100%, 74%)";
        return false;
    }
        emaillName.innerHTML = "Email is valid!";
        emaillName.style.color="hsl(154, 59%, 51%)";
        emaillErr.innerHTML = "<i class='fal fa-check-circle'></i>";
        emaillErr.style.color="hsl(154, 59%, 51%)";
        return true;
}

validatePass=()=>{
    let passWord = document.getElementById("password-name").value;
    if(passWord.length == 0){
        passName.innerHTML = "Password cannot be empty!";
        passName.style.color="hsl(0, 100%, 74%)";
        passErr.innerHTML = "<i class='fal fa-exclamation-circle'></i>";
        passErr.style.color="hsl(0, 100%, 74%)";
        return false;
    }
        passName.innerHTML = "Password is valid!";
        passName.style.color="hsl(154, 59%, 51%)";
        passErr.innerHTML = "<i class='fal fa-check-circle'></i>";
        passErr.style.color="hsl(154, 59%, 51%)";
        return true;
}

validateBtn=(e)=>{
    if(!validateFirst() && !validateLastName() && !validateEmail() && !validatePass()){
        e.prevenDefault();
        return false;
    }
}











