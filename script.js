const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const form = document.querySelector('form');

function validateEmail(email){ 
        const regex = /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/;
        return regex.test(email); 
}

function validatePassword(password){
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return regex.test(password);
    }
    

function setError(input, message){
    const inputControl = input.parentNode;
          inputControl.classList.add("error");
          inputControl.classList.remove("success");
          inputControl.querySelector('small').textContent = message;
          input.parentNode.style.padding="0 0 1.25rem 0";
}

function setSuccess(input){
        const inputControl = input.parentNode;
              inputControl.classList.add('success');
              inputControl.classList.remove('error');
              input.parentNode.style.padding="0";
}

function validateInputs(){
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if(firstName === ""){
         setError(firstNameInput, 'First Name cannot be empty');
    }
    else{
         setSuccess(firstNameInput);
    }

    if(lastName === ""){
        setError(lastNameInput, 'Last name cannot be empty');
    }
    else{
        setSuccess(lastNameInput);
    }

    if(email === ""){
        setError(emailInput, 'Email cannot be empty');
    }

    else if(!(validateEmail(email))){
        setError(emailInput, 'Looks like NOT valid email');  
    }
    else{
        setSuccess(emailInput);
    }
    
    if(password === ""){
        setError(passwordInput, 'Password cannot be empty');
        passwordInput.parentNode.childNodes[3].style.bottom = '47%';
    }
    else if(!(validatePassword(password))){
        
        setError(passwordInput, 'Password must be minimally 8 characters long containing at least one uppercase, lowecase, digit and special character');
        passwordInput.parentNode.style.padding = "0 0 2.5rem 0";
        passwordInput.parentNode.childNodes[3].style.bottom = '58%';
       console.log(passwordInput.parentNode.childNodes[3]);
    }

    else{
         setSuccess(passwordInput);
    }
}

form.addEventListener("submit", (e)=>{
        e.preventDefault();  
        validateInputs();
}); 





