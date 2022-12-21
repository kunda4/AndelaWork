const form = document.getElementById('form');
const yourname= document.getElementById('name');
const username= document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const yournameValue = yourname.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();

    
    if(yournameValue === ''){
        setErrorFor(yourname, 'Names can not be blank');
    }
    else{
        setSuccessFor(yourname);
    }
    if(usernameValue === ''){
        setErrorFor(username, 'Username can not be blank');
    }
    else{
        setSuccessFor(username);
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email can not be blank');
    } 
    else if (!email(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }
    if(passwordValue === ''){
        setErrorFor(password, 'Password can be blank');
    }else{
        setSuccessFor(password);
    }
    if(passwordValue2 === ''){
        setErrorFor(password2, 'Password2 can be blank');
    }
    else if (passwordValue !== passwordValue2){
        setErrorFor(password2, 'Password does not match');
    }
    else
    {
        setSuccessFor(password2);
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class 
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}
