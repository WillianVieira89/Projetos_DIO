$('.owl-carousel').owlCarousel({
    loop:true,
    margin:13,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function redirecionar(){
    window.open("https://netflix.com");
}