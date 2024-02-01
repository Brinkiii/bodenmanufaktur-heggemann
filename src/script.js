var rellax = new Rellax('.rellax', {
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
requestAnimationFrame(raf)

let scrollClass = function() {
    var pageNavi = document.getElementById('navigation');
    if(window.scrollY > 1){
        pageNavi.classList.add('scroll');
    }
    window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;

    if (scrollTop > 1) {
     pageNavi.classList.add('scroll');
    }

    else if (scrollTop < 1) {
      pageNavi.classList.remove('scroll');
    }
    });
}

scrollClass();