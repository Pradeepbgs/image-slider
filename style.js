const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');

const allimgEl = document.querySelectorAll('img');
const imgContainerEl  = document.querySelector('.image-container');

 let currentImg = 1;
nextEl.addEventListener('click',()=>{
    currentImg++;
    updateImg();
})

function updateImg(){
    if(currentImg > allimgEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = allimgEl.length;
    }
        imgContainerEl.style.transform = `translateX(-${(currentImg -1) * 500}px)`;
}

prevEl.addEventListener('click',()=>{
    currentImg--;
   updateImg();
})