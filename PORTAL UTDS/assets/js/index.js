window.addEventListener('scroll', function() {
    var aside = document.getElementById('aside');
    var right_container = document.getElementById('right_container');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 10 ) {
        aside.style.position="fixed";
        aside.classList.add("top-0");
        aside.classList.add("w-17");
        right_container.classList.add("ml-245");
    } else {
        aside.classList.remove("w-17");
        aside.style.position = 'relative';
        right_container.classList.remove("ml-245");
    }
}); 