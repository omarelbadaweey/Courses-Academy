// variabels
var open_nav = document.getElementById('open_nav');
var close_nav = document.getElementById('close_nav');
var main = document.getElementById('main');
var menu = document.getElementById('menu');
var content = document.getElementById('content');
// start events 
// 1- open Nav
open_nav.addEventListener('click', () => {
    menu.style.display = "block";
    close_nav.classList.remove('!hidden');
    open_nav.style.display  = "none"
    content.style.display = "none";
});
// 2- close Nav
close_nav.addEventListener('click', () => {
    close_nav.classList.add('!hidden');
    open_nav.style.display  = "block";
    menu.style.display = "none";
    content.style.display = "flex";
});
// 3- caretColor تغيير لون المؤشر 
const heading = document.getElementById("myHeading").style.caretColor = "red";
// Event-5 scrollTopBtn
window.addEventListener('scroll' , () =>{
  if (window.scrollY > 150) {
    scrollTopBtn.style.display = "block"
  } else {
      scrollTopBtn.style.display = "none"
  }
  scrollTopBtn.addEventListener('click' , () =>{
      window.scroll({top:0 , behavior : "smooth"})
  })
})