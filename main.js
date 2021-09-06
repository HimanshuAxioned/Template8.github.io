console.log('Hello World');

let hamburger =  document.querySelector('.hamburger');
let navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', function(){
  navList.classList.toggle('rsp')
})
