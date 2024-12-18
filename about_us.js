const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main1"),
    smooth: true
});

const menu = document.querySelector('.ri-menu-5-line')
const menuItem =  document.querySelector('.mobile-nav')
const close = document.querySelector('.ri-close-large-line')

let flag =true
menu.addEventListener('click', ()=>{
    if(flag){
  
      menuItem.style.display = 'block'
      flag = !flag
    }
   
})
  
close.addEventListener('click', ()=>{
  
    menuItem.style.display = 'none'
    flag = !flag
})
