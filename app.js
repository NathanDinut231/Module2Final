
document.addEventListener('DOMContentLoaded', function() {
    const btnLoader = document.querySelector('.btn-warning');
    const gifLoader = document.querySelector('.img');
    const divText = document.querySelector('.text');
    divText.textContent = 'Try To Sign in';
    divText.style.display = 'none';

    btnLoader.addEventListener('click', function() {
      gifLoader.style.display = 'block';
      divText.style.display = 'block';

      setTimeout(function() {
        gifLoader.style.display = 'none';
        divText.style.display = 'none';
      }, 3000);
    });
  });
  
const form = document.querySelector('.uP-Form');
const inputUserName = document.querySelector('#exampleInputUsername');
const inputPassword = document.querySelector('#exampleInputPassword');
const submitBtn = document.querySelector('.btnSubmit');

loadAllEventListeners();

function loadAllEventListeners(){
  form.addEventListener('submit', enterCredentials);
  }

function enterCredentials(e){
  e.preventDefault();
  const usernameLogin = 'username';
  const passwordLogin = 'password';

  if(inputUserName.value === usernameLogin && inputPassword.value === passwordLogin){
    
      const btnLoader = document.querySelector('.btn-warning');
      const gifLoader = document.querySelector('.img');
    
      
        gifLoader.style.display = 'block';
        
        setTimeout(function() {

          gifLoader.style.display = 'none';
          window.location.href = './index.html';
        }, 3000);
  } else{
    alert('Incorrect Credentials');
  }

  
}