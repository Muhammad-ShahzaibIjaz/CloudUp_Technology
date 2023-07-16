let navBtn = document.querySelector('#navBtn');
if(navBtn){
    navBtn.addEventListener('click', function(){
        let line1 = document.querySelector('#line-1');
        let line2 = document.querySelector('#line-2');
        let line3 = document.querySelector('#line-3');
        line1.classList.toggle('animation-line1');
        line2.classList.toggle('animation-line2');
        line3.classList.toggle('animation-line3');
        let navDiv = document.querySelector('.custom-nav-div');
        navDiv.classList.toggle('width-effect');
    });
}

let showBtn = document.querySelector('#showBtn');
console.log(showBtn);
if(showBtn){
    showBtn.addEventListener('click',function(){
        let selectMenu = document.querySelector('#select-menu');
        let searchBtn = document.querySelector('#searchBtn-div');
        selectMenu.classList.toggle('div-hidden');
        showBtn.classList.toggle('rotate-btn');
        searchBtn.classList.toggle('translate-80');
    });
}

