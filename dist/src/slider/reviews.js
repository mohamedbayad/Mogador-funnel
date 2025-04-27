new Glide(".reviews-glide", {
    type: 'carousel', 
    focusAt: 'center',
    perView: 3.5,   
    gap: 20,        
    autoplay: 3000, 
    hoverpause: true, 
    bound: true,       
    animationDuration: 1000,
    animationTimingFunc: "ease-in-out",
    breakpoints: {     
        800: {
            perView: 2.2
        },
        480: {
            perView: 1.3,
            gap: 10
        }
    }
}).mount();