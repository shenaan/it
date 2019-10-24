function sceneInit() {
    var sceneInit = new TimelineMax({
        repeat: 0,
        ease: Power3.easeInOut
    });
    var logoLg = $('.landing__logo.is-loading'),
        logoSm = $('.landing__logo--main'),
        reserveList = $('.reserve-list'),
        reserveItem = $('.reserve-list__item'),
        reserveItemSide = $('.reserve-list__item-side'),
        copyright = $('.landing-copyright');

    sceneInit
    // .to(elemItems1, 0, {className: '-=not-animated'})
        .to(logoLg, 1, {opacity: 1})
        .to(logoLg, 0.9, {scale: 0.35})
        .to(logoLg, 1, {top: 200, opacity: 0,})
        // .to(logoLg, 0.8, {top: 0, translateY: 0, opacity: 0, visibility: 'hidden', zIndex: '-1'})
        .to(logoLg, 0.3, { visibility: 'hidden', zIndex: '-1'})
        // .to(logoLg, 0, {className: '+=has-loaded'})
        // .to (logoSm, 0.3, {opacity: 1})
        .to(logoSm, 0.2, {scale: 1, opacity: 1}, 2.7)
        .to(reserveList, 0.2, {opacity: 1})
        .staggerTo(reserveItem, 0.9, {opacity: 1}, 0.4)
        .staggerTo(reserveItemSide, 0.8, {scaleX: 1, scaleY: 1}, 'side')
        .to(copyright, 0.6, {opacity: 1});
}


$(window).on('load', function () {
    sceneInit();
});