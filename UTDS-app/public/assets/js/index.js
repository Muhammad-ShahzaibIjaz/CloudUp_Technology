window.addEventListener('scroll', function() {
    var aside = document.getElementById('aside');
    var right_container = document.getElementById('right_container');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 16) {
        aside.style.position="fixed";
        aside.classList.add("top-0");
        aside.classList.add("w-227");
        right_container.classList.add("ml-251");
    } else {
        aside.classList.remove("w-227");
        aside.style.position = 'relative';
        right_container.classList.remove("ml-251");
    }
});



var aside_li = document.querySelectorAll(".nav .nav-item a");
for (var i = 0, length = aside_li.length; i < length; i++) {
    aside_li[i].onclick = function(){
        var b = document.querySelector(".nav .nav-item a.active");
        if (b) b.classList.remove("active");
        this.classList.add('active');
    }
}