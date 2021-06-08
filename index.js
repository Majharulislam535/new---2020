 let btn =document.getElementById('cta-btn');
 let overly =document.getElementById('overly');
 btn.addEventListener('click',()=>{
     overly.style.display="grid";
     overly.classList.add('animated-overly');
 })