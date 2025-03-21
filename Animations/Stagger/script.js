gsap.set(".box",{
    borderRadius: 0,
})

gsap.to(".box",{
    borderRadius: 100,
    duration: 1,
    scale: 0.1,
    y: 100,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    stagger:{
        grid: [7,15],
    from: "end",
    ease: "power3.inOut",
    amount: 1.5 
    }
})