function navEffect() {
    let bufScroll = 0;
    let lineProgress = document.querySelector('.header__line-progress');
    let nav = document.querySelector('.header');
    nav.classList.toggle('active', window.scrollY > 0)
    window.addEventListener('scroll', () => {
        if (window.scrollY <= 100) {
            nav.classList.remove('disable');
            nav.classList.toggle('active', window.scrollY > 0)
            lineProgress.style.width = ((window.scrollY * 100)
                / (document.documentElement.offsetHeight - window.innerHeight)) + '%';
        } else {
            (bufScroll > window.scrollY) ? nav.classList.remove('disable') : nav.classList.add('disable');
            bufScroll = window.scrollY;
            nav.classList.toggle('active', window.scrollY > 0)
            lineProgress.style.width = ((window.scrollY * 100)
                / (document.documentElement.offsetHeight - window.innerHeight)) + '%';
        }
    })
}

navEffect();

function triggerMenu() {
    let burg = document.querySelector('.open-menu-js');
    let menu = document.querySelector('.nav-md');
    let header = document.querySelector('.header');
    let close = document.querySelector('.close-menu-js');


    menu.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-md__inner')) {
            closeMenu();
        }
    })
    burg.addEventListener('click', openMenu)
    close.addEventListener('click', closeMenu)

    function closeMenu() {
        menu.classList.remove('active')
        document.body.classList.remove('page-close', 'page-offset');
        header.classList.remove('active-mob');
    }

    function openMenu() {
        menu.classList.add('active')
        document.body.classList.add('page-close', 'page-offset');
        header.classList.add('active-mob');
    }

}

triggerMenu();


function anim(duration) {
    var temp;
    return function (sel) {
        cancelAnimationFrame(temp);
        var start = performance.now();
        var from = window.pageYOffset || document.documentElement.scrollTop,
            to = document.querySelector(sel).getBoundingClientRect().top;
        requestAnimationFrame(function step(timestamp) {
            var progress = (timestamp - start) / duration;
            1 <= progress && (progress = 1);
            window.scrollTo(0, from + to * progress | 0);
            1 > progress && (temp = requestAnimationFrame(step))
        })
    }
};

document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A') return;
    if ((e.target.href && e.target.href.indexOf('#') != -1) && ((e.target.pathname == location.pathname) || ('/' + e.target.pathname == location.pathname)) && (e.target.search == location.search)) {
        e.preventDefault()
        scrollMenu(e.target.getAttribute('href'))
    }

});
var scrollMenu = anim(1000)

