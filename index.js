// below code is a stand alone loader activated by a button and message prompting you to Sign in
// below code for index.html page
document.addEventListener('DOMContentLoaded', function() {
    const btnLoader = document.querySelector('.btn-warning');
    const gifLoader = document.querySelector('.loader-img');
    const divText = document.querySelector('.text');
    divText.textContent = 'Please Try To Sign in';
    divText.style.fontSize = '40px';
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


// below code for picture slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
