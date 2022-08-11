document.addEventListener('DOMContentLoaded', function () {

    // /scroll
    // const cb = function (el, inview) {
    //     if(inview) {
    //         const ta = new TweenTextAnimation(el);
    //         ta.animate();
    //     }
    // }
    // const so = new ScrollObserber('.tween-animate-title', cb);

    // const _inviewAnimation = function(el, inview) {
    //     if(inview) {
    //         el.classList.add('inview');
    //     } else {
    //         el.classList.remove('inview');
    //     }
    // }

  

    // const header = document.querySelector('.header');
    // const _navAnimation = function(el, inview) {
    //     if(inview) {
    //         header.classList.remove('triggered');
    //     } else {
    //         header.classList.add('triggered');
    //     }
    // }

    // const so3 = new ScrollObserber('.nav-trigger', _navAnimation, {once:false});
    
    new MobileMenu();
    new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this._observers = [];
        this._init();
    }

    _init() {
        this.hero = new heroSlider('.swiper');
        this._scrollInit();
    }

    _inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _toggleSlideAnimation() {
        
    }

    _scrollInit() {
        this._observers.push(
            new ScrollObserber('.nav-trigger', this._navAnimation.bind(this), {once:false})
        );
        this._observers.push(
            new ScrollObserber('.cover-slide', this._inviewAnimation)
        );
        this._observers.push(
            new ScrollObserber('.tween-animate-title', this._textAnimation)
            hero.start({delay: 2000});
        );
        n
        
    }
}