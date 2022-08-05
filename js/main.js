document.addEventListener('DOMContentLoaded', function () {
    const here = new HereSlider('.swiper');
    here.start({delay: 2000});

    setTimeout(() => {
        here.stop();
    }, 5000);

    // /scroll
    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }
    const so = new ScrollObserber('.tween-animate-title', cb);
    
});


