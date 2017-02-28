$(document).ready(function() {
  
  $('.mob-menu-btn').on('click', function(){
    $('body').toggleClass('open');
    $('.mobile-menu-wrap').toggleClass('open');
  });
  
  $('.sub-menu-itm-m').on('click', function(){
    $(this).siblings('.sub-menu-m').slideToggle();
  });
  
  $('.select-stl li').on('click', function(){
    $(this).parentsUntil('.select-stl')
      .siblings('.selected')
      .css('color', '#323232')
      .text($(this).text());
  });
  
  if($('#map').length > 0){
    initMap();
  }
  
  function initMap() {
    var LatLng = {lat: 59.9080318, lng: 10.7579472};
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: LatLng,
        disableDefaultUI: true,
        scrollwheel: false
    });
    
    var marker = new google.maps.Marker({
      position: LatLng,
      map: map
    });
  }
  
  $(document).scroll(function(){
    if($('#dotBlocksWrap').length > 0 && $(window).width() > 750){
      if($(document).scrollTop() >= $('#dotBlock-1').offset().top && $(document).scrollTop() < ($('#dotBlock-1').offset().top + $('#dotBlock-1').outerHeight()/2)) {
        $('.dot').removeClass('to-show');
        $('#dotBlock-1').find('.dot').addClass('to-show');
      }else if($(document).scrollTop() >= ($('#dotBlock-1').offset().top + $('#dotBlock-1').outerHeight()/2) && $(document).scrollTop() < ($('#dotBlock-2').offset().top + $('#dotBlock-2').outerHeight()/2)){
        $('.dot').removeClass('to-show');
        $('#dotBlock-2').find('.dot').addClass('to-show');
      }else if($(document).scrollTop() >= ($('#dotBlock-2').offset().top + $('#dotBlock-2').outerHeight()/2) && $(document).scrollTop() < ($('#dotBlock-3').offset().top + $('#dotBlock-3').outerHeight()/2)){
        $('.dot').removeClass('to-show');
        $('#dotBlock-3').find('.dot').addClass('to-show');
      }else if($(document).scrollTop() >= ($('#dotBlock-3').offset().top + $('#dotBlock-3').outerHeight()/2) && $(document).scrollTop() < ($('#dotBlock-4').offset().top + $('#dotBlock-4').outerHeight()/2)){
        $('.dot').removeClass('to-show');
        $('#dotBlock-4').find('.dot').addClass('to-show');
      }
    }
  });
   
});