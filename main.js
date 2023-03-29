const container = document.querySelector('.container');
window.addEventListener('scroll', ()=>{
    if(scrollY > container.offsetHeight + 150){
        container.classList.add('active');

    }else{
        container.classList.remove('active')
    }
    console.log(container)
    // console.log(container.clientHeight, container.offsetHeight)
})