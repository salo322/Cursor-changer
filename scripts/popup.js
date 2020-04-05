$( document).ready(function() {
    let  images =  document.getElementsByClassName('image');
    for( let img of images){
     img.addEventListener('click',function(){
         let imgCursor = img.src;
         chrome.storage.local.set({Image: imgCursor});
         
         console.log(imgCursor)
    })
 } 
})




