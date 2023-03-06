gsap.set('#gifts', { y: 140})
gsap.set('#present-top', { y: 140})
gsap.set([, '#blast-inner', '#blast-outer'], { scale: 0, transformOrigin: "50% 50%"})
gsap.set('#stars > *', { scale: 0})

tlm = new gsap.timeline({ repeat: -1, paused: true });

tlm
.to('#present-top', { y: 0, ease:'elastic.inOut(1,1)', duration: 1.5 })
.to('#shade', { scaleY: 0, ease:'elastic.inOut(1,1)', duration: 1.5 }, 0)
.to('#present-top', { rotate: 2, x: 5, duration: 0.9, repeat: 1, yoyo: true, transformOrigin: "50% 50%" }, '-=0.5')
.to('#present-top', { rotate: -2, x: -5, duration: 0.9, repeat: 1, yoyo: true, transformOrigin: "50% 50%" })
.to('#present-layer', { scale: 0.9, transformOrigin: "50% 50%", ease:'elastic.inOut(1,1)' }, 0.4)
.to('#car', { y: -160}, 0.5)
.to('#blast-inner', { scale: 1, transformOrigin: "50% 50%", rotate: 180, ease: 'power1.out', duration: 1}, 0.4)
.to('#blast-outer', { scale: 1, transformOrigin: "50% 50%", rotate: -180, ease: 'power1.out', duration: 1}, 0.4)
.to('#blast', { opacity: 0 }, 1.2)
.to('#car', { y: 0, ease: 'elastic.inOut(1,1)', duration: 2}, 0.8)
.to('#shirt', { y: -140, ease: 'elastic.out(1,1)', duration: 2}, 1.6)
.to('#stars > *', {scale: 1.1, stagger: 0.1, duration: 1, ease: 'elastic.inOut(1,1)', transformOrigin: "50% 50%"}, 1.1)
.to('#stars > *', {scale: 0, stagger: 0.1, duration: 1, ease: 'elastic.inOut(1,1)', transformOrigin: "50% 50%"}, 1.9)
.to('#shirt', { y: 0, ease: 'elastic.inOut(1,1)', duration: 2}, 2)
.to('#controller', { y: -140, ease: 'elastic.out(1,1)', duration: 2}, 2.8)
.to('#controller', { y: 0, ease: 'elastic.inOut(1,1)', duration: 2}, 3.2)
.to('#present-top', { y: 140, ease:'elastic.inOut(2.1,1)', duration: 2 }, 3.2)
.to('#shade', { scaleY: 1, ease:'elastic.out(2.1,1)', duration: 1.5 }, 4.1)
.to('#present-layer', { scale: 1, transformOrigin: "50% 50%", ease:'elastic.inOut(1,1)' }, 4)

tlm.duration(3);
tlm.play();