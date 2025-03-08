// document.getElementById('image-btn').addEventListener('click', function(){
//         console.log('hello')
//     })
const indexBtn =document.getElementById('image-btn');
if(indexBtn){
  indexBtn.addEventListener('click',function(){
    window.location.href="quesion.html"
  })
}


const buttons =document.getElementById('homeBtn');
if(buttons){
  buttons.addEventListener('click',function(){
    window.location.href="index.html"
    
  })
}
