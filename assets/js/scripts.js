$(document).ready(function () {    
   

    // HEADER STICKY
    ///////////////////////////////////////////////
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("navigation1");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    //ODOMETER 
    ////////////////////////////////////////////////
    if ($(".odometer").length) {
      $('.odometer').appear();
      $(document.body).on('appear', '.odometer', function(e) {
          var odo = $(".odometer");
          odo.each(function() {
              var countNumber = $(this).attr("data-count");
              $(this).html(countNumber);
          });
      });
    };

    // BANNER PANEL
    /////////////////////////////////////////////////////
    $('.banner-fade').slick({
      dots: false,
      arrows: false,
      infinite: true,
      // autoplay: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });

    

    // CLIENT SLIDER
    /////////////////////////////////////////////////
    $('.client-slider').slick({
      infinite: true,      
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 3,
      arrows: false,
      dots: false,
      autoplay: true,
      speed: 500
    });
    
    // PORTFOLIO SLIDER
    ///////////////////////////////////////////////
    $('.portfolio-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      variableWidth: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // BLOG SLIDER
    ///////////////////////////////////////////////
    $('.blog-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      variableWidth: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // TEAM SLIDER
    ///////////////////////////////////////////////
    $('.team-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      variableWidth: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });    

    // TESTIMONIAL SLIDER
    ///////////////////////////////////////////////
    $('.testimonial-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });    
});