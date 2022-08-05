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
    
});


