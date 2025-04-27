document.addEventListener("DOMContentLoaded", () => {
  const glide = new Glide(".glide", {
    type: 'carousel', // Use carousel for infinite loop and previews
      focusAt: 'center', // Center the active slide
      perView: 3.5,      // Show 3 full slide and parts of the next/prev. Adjust this value!
      gap: 20,           // Space between slides (adjust as needed)
      autoplay: 3000, // Optional: uncomment for autoplay
      hoverpause: true, // Optional: pause autoplay on hover
      bound: true,       // Optional: prevents empty spaces at ends if not looping infinitely (useful if type was 'slider')
      animationDuration: 1000,
      animationTimingFunc: "ease-in-out",
      breakpoints: {     // Optional: Adjust perView for smaller screens
          800: {
              perView: 2.2
          },
          480: {
              perView: 1.3,
              gap: 10
          }
      }
});

  glide.mount();
});
