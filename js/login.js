
document.getElementById('login-submit').addEventListener('click',function(){
    // console.log('button has been fucking called');

    // input email field value
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
   
    // input password filed value
    const passwordField= document.getElementById('user-password');
    const userPassword=passwordField.value;

   
    // check email and password
    if (userEmail == 'sontan@baap.com' && userPassword =='secret'){
        // console.log('valid');
        window.location.href = "banking.html";
    }
    if (userEmail != 'sontan@baap.com' || userPassword !='secret'){
        // console.log('valid');
        alert('please enter valid email & paaword');
    }
    
});

