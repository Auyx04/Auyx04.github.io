let heroY = document.getElementById("hero").offsetTop;
let foodSectionY = document.getElementById("food-section").offsetTop;

window.onscroll = function() {
    if (document.body.scrollTop >= heroY || document.documentElement.scrollTop >= heroY){
        document.getElementsByClassName('hero')[0].classList.add("hero-ani")
      }
    if (document.body.scrollTop >= heroY || document.documentElement.scrollTop >= heroY && window.innerWidth >= 900){
      document.getElementById('hero-title').classList.add("hero-animation-title")
      document.getElementById('hero-paragraph').classList.add("hero-animation-paragraph")
    }
    if (document.body.scrollTop >= foodSectionY || document.documentElement.scrollTop >= foodSectionY && window.innerWidth >= 900){ 
      document.getElementsByClassName('food-image')[0].classList.add("food-image-animation")
      document.getElementsByClassName('food-image')[1].classList.add("food-image-animation")
      document.getElementsByClassName('food-image')[2].classList.add("food-image-animation")
    }
    
}