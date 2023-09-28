import gsap from 'gsap';

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline();
    {/*First movement*/}
    tl.to(position, {
        x: 0.860,
        y: 6.633,
        z: 0.012,
        scrollTrigger: {
            trigger: '#driver-one',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    tl.to(target, {
        x: -0.272,
        y: -0.554,
        z: 0.004,
        scrollTrigger: {
            trigger: '#driver-one',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
    })
    {/*second movement*/}
    tl.to(position, {
        x: 0.856,
        y: 1.447,
        z: 4.651,
        scrollTrigger: {
            trigger: '#driver-insights',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    tl.to(target, {
        x: -0.199,
        y: -0.348,
        z: 0.267,
        scrollTrigger: {
            trigger: '#driver-insights',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
    })
}