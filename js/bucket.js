$(document).ready(function(){

  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content", collapsible: true, active: false
    });
  } );

  $('.carousel-control-prev').click(function() {
    $('#myCarousel').carousel('prev');
  });

  $('.carousel-control-next').click(function() {
    $('#myCarousel').carousel('next');
  });

});
