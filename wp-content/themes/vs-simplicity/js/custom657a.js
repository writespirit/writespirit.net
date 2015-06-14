jQuery(function($){
$(document).ready(function() {

//build Navigation menu dropdown
$("<select />").appendTo("#primary-navigation .menu-header");

// Create default option
$("<option />", {
"selected": "selected",
"value": "",
"text": "Navigate:" //Change default text
}).appendTo("#primary-navigation .menu-header select");

// Populate dropdowns with dash for child pages
$("#primary-navigation .menu-header a").each(function() {
var el = $(this);
var padding = "";
for (var i = 0; i < el.parentsUntil('div > ul').length - 1; i++)
padding += "&ndash;";
$("<option />", {
"value": el.attr("href"),
"html": padding + el.text(),
}).appendTo("#primary-navigation .menu-header select");
});

$("#menu-secondary-menu a").each(function() {
var el = $(this);
var padding = "";
for (var i = 0; i < el.parentsUntil('div > ul').length - 1; i++)
padding += "&ndash;";
$("<option />", {
"value": el.attr("href"),
"html": padding + el.text(),
}).appendTo("#primary-navigation .menu-header select");
});

//make responsive dropdown menu actually work
$("#primary-navigation .menu-header select").change(function() {
window.location = $(this).find("option:selected").val();
});

/* Most images on mobile sites lose their float and are centred
  However some images are too small for this and still look better floated */
$("img").each(function() {
   width = $(this).width();

   if (width < 160 && $(this).hasClass('alignleft')) {
     $(this).removeClass('alignleft').addClass('alignleft-width320');
   }
   if (width < 160 && $(this).hasClass('alignright')) {
     $(this).removeClass('alignright').addClass('alignright-width320');
   }
   if (width < 240 && $(this).hasClass('alignleft')) {
     $(this).removeClass('alignleft').addClass('alignleft-width480');
   }
   if (width < 240 && $(this).hasClass('alignright')) {
     $(this).removeClass('alignright').addClass('alignright-width480');
   }
   if (width < 320 && $(this).hasClass('alignleft')) {
     $(this).removeClass('alignleft').addClass('alignleft-width650');
   }
   if (width < 320 && $(this).hasClass('alignright')) {
     $(this).removeClass('alignright').addClass('alignright-width650');
   }
});

bannerwidth = $('#site-title img').width(); 
if(bannerwidth < 650) { $('#site-title img').addClass('smallbanner') }


 set3ColHeights =function() {    
         theight = Math.max($(this).height(), $(this).prev().height(), $(this).prev().prev().height() );
         $(this).css('min-height', theight + 'px');
         $(this).prev().css('min-height', theight + 'px');
         $(this).prev().prev().css('min-height', theight + 'px');  
    };  
    
  setHeights = function() {
       $('#front-featured-inside .widget-area:nth-child(3n)').css('min-height', '0px'); 
        
       if ( $( window ).width() > 650 ) {
         $('#front-featured-inside .widget-area:nth-child(3n)').each(set3ColHeights);
       }  
  }  
  
  setHeights();
  $( window ).resize( setHeights );    


/* setHeights = function() {
  
    var sliderheight, slideheight, maxslideheight = 0;
    if( $( window ).width() > 360) {

      $('.wpss_slide').each(function() {
        slideheight = Math.max($(this).children('.wpss_content_half').height(), $(this).children('.wpss_img_half').height());
        if (slideheight > maxslideheight) { maxslideheight = slideheight; } 
      });

    } else {
        
      $('.wpss_slide').each(function() {
          slideheight = $(this).children('.wpss_content_half').height() + $(this).children('.wpss_img_half').height(); 
          if (slideheight > maxslideheight) { maxslideheight = slideheight; } 
      });

    }  
    
    sliderheight = Math.min(maxslideheight, $( window ).height() );
    $('.wpss_slideshow_').css('min-height', sliderheight + 'px');
    $('#wpss_slideshow-front-page').css('min-height', sliderheight + 'px');    
    $('.wpss_slide').css('min-height', sliderheight + 'px');

  }; 
  
  setHeights();
  $( window ).resize( setHeights ); */

});  }); /* Double brackets in order to namespace $ */

