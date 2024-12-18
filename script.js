const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });


const news11 = document.querySelector("#title11");
const des11 = document.querySelector("#description11");
const news21 = document.querySelector("#title21");
const des21 = document.querySelector("#description21");
const news31 = document.querySelector("#title31");
const des31 = document.querySelector("#description31");
const news41 = document.querySelector("#title41");
const des41 = document.querySelector("#description41");
const news12 = document.querySelector("#title12");
const des12 = document.querySelector("#description12");
const news22 = document.querySelector("#title22");
const des22 = document.querySelector("#description22");
const news32 = document.querySelector("#title32");
const des32 = document.querySelector("#description32");
const news42 = document.querySelector("#title42");
const des42 = document.querySelector("#description42");
const news = document.querySelector("#news1")
const domains = document.querySelector('.domain')
const url =`https://newsdata.io/api/1/latest?apikey=pub_496717bedb641029d4be124fcb24ce74be212&domain=`
const domainBtn  = document.querySelectorAll('.domain-btn')
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

const button = Array.from(domainBtn).map(elem => elem.textContent)
async function domain(){
    let channel = ''
    domains.addEventListener('click' , (e)=>{
      const val =  e.target.innerText
      switch(val){
        case 'The Hindu':
         channel = 'the%20hindu'
        

         break;
        case 'Hindustan Times':
            channel = 'hindustan%20times'
            break;
        case 'Times of India':
            channel = 'toi'
            break;
        case 'Dainik Bhaskar':
            channel = 'bhaskar_hindi'
            break;
         case 'BBC News':
            channel = 'bbc'
            break; 

      }
    
      domainBtn.forEach(elem => {
      
      if(val ===elem.textContent ){
        elem.classList.add('active')

      }else{
        elem.classList.remove('active')
      }
       
      })
     
      fetchData(channel)
    })

}
domain()

gsap.from("#page1 h1",{
    opacity:0,
    duration:2,
    delay:0.2,
    y:"50"
})

gsap.to("#marque",{
    transform: 'translateX(-100%)',
    duration:0.7,
    repeat:-1,
    ease:"none"
})

async function fetchData(channel) {
  var clutter =''
  try {

    const response = await fetch(url+channel)
    const data = await response.json()
    console.log(data.results)
    data.results.forEach((elem)=>{
      let truncatedTitle = elem.title.length > 50 ? elem.title.slice(0, 50) + '...' : elem.title;
   clutter+=  `  <div class="card">
                    <div class="card-image">
                      <img class="card-image" src="${elem.image_url}" alt="">
                  </div>
                    <div class="category"> ${elem.category} </div>
                    <div class="heading"> ${elem.title}
                   </div>   
                </div>`
      
    })
    document.querySelector('.news-container').innerHTML = clutter


  } catch (e) {
    console.log(e)
  }


}
async function TrendingNews() {
  var clutter =''
  try {

    const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_496717bedb641029d4be124fcb24ce74be212&language=en')
    const data = await response.json()
    console.log(data.results)
    data.results.forEach((elem)=>{
      let truncatedTitle = elem.title
   clutter+=  ` <div class="card">
                  <div class="card-image">
                    <img class="card-image" src="${elem.image_url}" alt="">
                  </div>
                  <div class="category"> ${elem.category} </div>
                  <div class="heading"> ${truncatedTitle}
                  </div>   
                </div>`
      
    })
    document.querySelector('.news-container').innerHTML = clutter

  } catch (e) {
    console.log(e)
  }
}

TrendingNews()
