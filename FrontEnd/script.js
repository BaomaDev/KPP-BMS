/*
// Register ScrollTrigger 
gsap.registerPlugin(ScrollTrigger);

//GSAP timeline
const tl = gsap.timeline({
  ease: "none"
});

//animation
tl.fromTo("#image", {
  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
  x: "0%",
}, {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Remove polygon
  scale: 2, 
  duration: 1,
  transformOrigin: "center center",
  x: "-50%", // gerak ke kiri
}).to("#image", {
  y: "50%", // Center vertical
});

// Create ScrollTrigger
ScrollTrigger.create({
  trigger: "#image", 
  start: "top top", // when the animation starts (element top reaches the top of the viewport)
  end: "+=50", // when the animation ends (element moves 200% of its height)
  pin: true, // pin the element during the animation
  animation: tl, // use the timeline created above
  scrub: 0.78, // smooth scrolling effect
  pinSpacing: false // don't maintain spacing while pinned
});
*/