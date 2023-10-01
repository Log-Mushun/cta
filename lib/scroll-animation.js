import gsap from 'gsap';

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline();
    const experienceFooter = document.querySelector('.experience_footer');
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
      {/*third movement*/}
      tl.to(position, {
        x: 6.758,
        y: 0.589,
        z: 0.192,
        scrollTrigger: {
            trigger: '#driverone-functions',
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,
        },
        onUpdate
    })
    tl.to(target, {
        x: -0.119,
        y: -0.731,
        z: 0.018,
        scrollTrigger: {
            trigger: '#driverone-functions',
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,
        },
    })


    {/*Fade outs*/}
    gsap.to(experienceFooter, {
        opacity: 0,
        scrollTrigger: {
            trigger: '#driver-one',
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    })

    gsap.to('.scrolldown', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#driver-one',
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    })

    gsap.to('.experience_title', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#driver-one',
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    })

    gsap.to('.functions-text', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#guardian-concept',
            start: 'top bottom',
            end: 'top-=400 top',
            scrub: true
        }
    })

    {/*fade out 3d viewer*/}
    gsap.to('.webgi-viewer-class', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#guardian-concept',
            start: 'top bottom',
            end: 'top-=500 top',
            scrub: true
        },
    })

    {/*fade ins*/}

    gsap.to('.plus-button1', {
        opacity: 1,
        zIndex: 30,
        scrollTrigger: {
            trigger: '#driver-one',
            start: 'top+=400 bottom',
            end: 'top top',
            scrub: true
        },
    })

    gsap.to('.driver-title', {
        opacity: 1,
        scrollTrigger: {
            trigger: '#driver-one',
            start: 'top+=200 bottom',
            end: 'top top',
            scrub: true
        }
    })

    gsap.to('.driver-insightsclass', {
        opacity: 1,
        scrollTrigger: {
            trigger: '#driver-insights',
            start: 'top+=200 bottom',
            end: 'top top',
            scrub: true
        }
    })

}