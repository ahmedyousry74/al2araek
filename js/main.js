$(document).ready(function() {
    //Navbar
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    //WooW
    new WOW().init();

    //Counter
    $('.counter-value').each(function(){
       $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },
        {
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });


    //owl testimonails
    $('.owl-carousel.owl-testimonails').owlCarousel({
        loop:true,                                                                                             
        margin:10,
        autoplayTimeout:2000,
        autoplay:true,                                 
        autoplayHoverPause:true,
        center:true,                                        
        nav:false,                                                           
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }) 

    //owl project details
    $('.owl-carousel.owl-project-details').owlCarousel({
        loop:true,
        margin:10,
        autoplayTimeout:2000,
        autoplay:true,                                  
        autoplayHoverPause:true,
        nav:true,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    //owl-sponsers
    $('.owl-carousel.owl-sponsers').owlCarousel({
        loop:true,                                                                                             
        margin:10,
        autoplayTimeout:2000,
        autoplay:true,                                 
        autoplayHoverPause:true,
        center:true,                                        
        nav:false,                                                           
        rtl:true,
        responsive:{
            0:{
                items:2
            },
            700:{
                items:3
            },
            1300:{
                items:4
            },
            1600:{
                items:5
            }
        }
    });

    //WOW
    new WOW().init();

});