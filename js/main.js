// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'restart pause reverse none',
  // markers: true
})
// You can use a ScrollTrigger in a tween or timeline
gsap.to(".a", {
  x: 400,
  rotation: 360,
  scrollTrigger: {
    trigger: ".b",
    start: '-200px 80%',
    end: 'top 400px',
    id: "LETTER A"
  }
});

gsap.to(".b", {
  x: 300,
  rotation: 360,
  scrollTrigger: {
    trigger: ".b",
    start: 'center center',
    scrub: true,
    pin:true,
    onEnter: () => console.log("Enter"),
    onEnterBack: () => console.log("Enter BACK"),
    onLeave: () => console.log("LEAVE"),
    onLeaveBack: () => console.log("ALL...THE...WAY..."),
    toggleClass: 'active',
    id: "B HERE"
  }
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".c",
    id: 'ANIMATION SCRUB'
  }
})
tl.to(".c", {
  x: 300,
  y:-500,
  rotation: 360,
  ease:'none',
}).to(".c", {
  backgroundColor: 'red',
  duration:3,
}).to(".c", {
  backgroundColor: 'orange',
  duration:3,
  x:100
});

gsap.to(".img", {
  x: -1900,
  y:-50,
  rotation: 360,
  scrollTrigger: {
    trigger: ".c",
    delay:1,
    start: '200px 80%',
    end: 'top 400px',
    duration:6,
    scrub: true,
    pin:true,
  }
});


