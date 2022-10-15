const tl = gsap.timeline({ defaults: { duration: 0.75 } })

tl.fromTo('.cookie-container', { scale: 0 }, { scale: 1, duration: 1.5, ease: "elastic.out(1, 0.4)" })
tl.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-45deg' }, { opacity: 1, x: 0, rotation: '0deg' }, '<50%')
tl.fromTo('.text', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<')


//Cookie jump
tl.fromTo('.cookie', { y: 0, rotation: '0deg' }, { y: -20, rotation: '-25deg', yoyo: true, repeat: -1 })
tl.fromTo('#crumbes', { y: 0, rotation: '0deg' }, { y: -20, rotation: '-25deg', yoyo: true, repeat: -1 })


button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.cookie-container', { opacity: 0, y: 100, duration: 0.75 })
})