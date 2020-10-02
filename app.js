let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})

function on() {
   document.getElementById("overlay").style.display = "block";
 }
 
 function off() {
   document.getElementById("overlay").style.display = "none";
 }
