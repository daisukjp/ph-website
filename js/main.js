document.addEventListener('DOMContentLoaded', function () {
    const hero = new heroSlider('.swiper');
    hero.start({delay: 2000});

    setTimeout(() => {
        hero.stop();
    }, 5000);

    // /scroll
    const cb = function (el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }
    const so = new ScrollObserber('.tween-animate-title', cb);

    const _inviewAnimation = function(el, inview) {
        if(inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    const so2 = new ScrollObserber('.cover-slide', _inviewAnimation);

    const header = document.querySelector('.header');
    const _navAnimation = function(el, inview) {
        if(inview) {
            header.classList.remove('triggered');
        } else {
            header.classList.add('triggered');
        }
    }

    const so3 = new ScrollObserber('.nav-trigger', _navAnimation, {once:false});
    
    new MobileMenu();
});


