//  sticky nav bar
 window.addEventListener('scroll',function(e){
    var header=document.querySelector('#header');  
    header.classList.toggle('sticky',scrollY>0);
  });

// animate element when scroll

