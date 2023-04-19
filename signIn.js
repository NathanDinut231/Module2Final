  // Hard coded Log-in credentials below w/ loader and redirects you to a different page if correct
  // Below code for signIn.html page
  const form = document.querySelector('.uP-Form');
  const inputUserName = document.querySelector('#exampleInputUsername');
  const inputPassword = document.querySelector('#exampleInputPassword');
  const submitBtn = document.querySelector('.btnSubmit');
  
  loadAllEventListeners();
  
  function loadAllEventListeners(){
    form.addEventListener('submit', enterCredentials);
    console.log(form.addEventListener('submit', enterCredentials));
    }
  
  function enterCredentials(e){
    e.preventDefault();
    const usernameLogin = 'username';
    const passwordLogin = 'password';
  
    if(inputUserName.value === usernameLogin && inputPassword.value === passwordLogin){
      
        const btnLoader = document.querySelector('.btn-warning');
        const gifLoader = document.querySelector('.loader-img');
        
      
        
          gifLoader.style.display = 'block';
          
          setTimeout(function() {
  
            gifLoader.style.display = 'none';
            window.location.href = './index.html';
          }, 3000);
    } else{
      alert('Incorrect Credentials');
    }
  
    
  }