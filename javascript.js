//  sticky nav bar
 window.addEventListener('scroll',function(e){
    var header=document.querySelector('#header');  
    header.classList.toggle('sticky',scrollY>0);
  });

//loader by vanella javaScript
window.addEventListener('load',function(e){
  var loader=document.getElementById('loader');
  loader.classList.add('hidden');
  
})
// arrow up 
window.addEventListener('scroll',function(e){
  var arrow=document.querySelector('#arrow');  
  arrow.classList.toggle('hidden',scrollY<0);
});

var arrow=document.querySelector('#arrow'); 
arrow.addEventListener('click',function(e){
  var rootElement = document.documentElement
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}) 

