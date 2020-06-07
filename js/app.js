
// mobile-viewport
if(screen.width<=400){
            $('head').append('<meta name="viewport" content="width=400">');
        } else {
            $('head').append('<meta name="viewport" content="width=device-width">');
        }
        $(window).on("orientationchange",function(){
          if(window.orientation == 0) // Portrait 
          {
            $('head').append('<meta name="viewport" content="width=device-width">');
          } else // Landscape 
          {
            $('head').append('<meta name="viewport" content="width=640">');
          }
});

 $(document).ready(function() {
    $('.single-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });


 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });



     $('.single-items2').slick({
         dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
         autoplay: true,
  autoplaySpeed: 2000,
           responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, 

{
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
  autoplaySpeed: 2000,
            }
        }, 
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 autoplay: true,
  autoplaySpeed: 2000,
            }
        }]
        
      
    });
      
    
});



window.onload=function(){
 $('.slider-slt').css("opacity", "1");
}






$(document).ready(function() {
  $('#video-modal').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });
    });




    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };



