document.addEventListener('DOMContentLoaded', function () {
    const here = new HereSlider('.swiper');
    here.start({delay: 2000});

    setTimeout(() => {
        here.stop();
    }, 5000);
});

