const btn=document.querySelector(".center");
    const throttleFunction=(func, delay)=>{

      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        console.log(now-prev, delay);
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      }
    }
    btn.addEventListener("mousemove", throttleFunction((details)=>{
     let div=document.createElement('div');
     document.body.appendChild(div)
     div.classList.add('imgdiv')
     div.style.left = details.clientX + 'px'
     div.style.top = details.clientY + 'px'

     var img = document.createElement('img');
     img.setAttribute("src","https://plus.unsplash.com/premium_photo-1695290019168-0fc22fd264ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")
     div.appendChild(img)

     setTimeout(function(){
        div.remove();
     },1000)



    }, 100));
