const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let tl = gsap.timeline();

tl
    .to("#page1", {
        y: "100vh",
        scale: 0.6,
        duraton: 0
    })
    .to("#page1", {
        y: "20vh",
        duration: 1,
        delay: 1
    })
    .to("#page1", {
        rotate: 360,
        y: "0vh",
        scale: 1,
        duration: 0.8
    })