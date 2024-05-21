const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('confirm password')

form.addEventListener('submit' , e=> {
    e.preventDefault();

    validateInputs();
});

const setError=(element,message) =>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
const setSuccess=element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs=() => {
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();


    if (usernameValue==='') {
        setError(username, 'Username is required');
    }
    else
    {
        setSuccess(username)
    }
};



