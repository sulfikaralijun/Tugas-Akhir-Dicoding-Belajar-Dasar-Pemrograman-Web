const navBtn = document.querySelector(".nav-btn"),
  navElement = document.querySelector("nav"),
  headerElement = document.querySelector('header'),
  imgBox = document.querySelector('.img-box');

navBtn.addEventListener("click", () => {
  if(navElement.classList.contains("active")){
    navElement.classList.remove("active")
    navBtn.classList.remove('active')
  }else {
    navElement.classList.add("active");
    navBtn.classList.add("active");
  }
});

const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color')

window.addEventListener('scroll', () => {
  if(window.scrollY >= 100){
    headerElement.style.backgroundColor = 'transparent'
    console.log(window.scrollY);
  }else {
    headerElement.style.backgroundColor = secondaryColor
  }
})

const isMobile = 'ontouchstart' in window;

const handleAnimation = (action) => {
  document.body.classList[action]('profile-animation')
}

if(isMobile){
  imgBox.addEventListener('mouseenter', () => handleAnimation('add'))
  imgBox.addEventListener('mouseleave', () => handleAnimation('remove'))
}else {
  imgBox.addEventListener('click', () => handleAnimation('toggle'))
}
