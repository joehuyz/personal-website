$(document).ready(function(){
  
  var $scrollVal = $(window).scrollTop();
  var $windowWidthVal = $(window).width();
  var $skillScrollVal = $('#skill').offset().top;
  var $windowHeightVal = $(window).height();

  $(window).scroll(function(){
    $scrollVal = $(this).scrollTop();
    showNavBar ($scrollVal);
    skillPlay ($scrollVal);
    navBarTrack ();
    console.log($scrollVal ,$windowWidthVal ,$skillScrollVal);
  });

  $(window).resize(function(){
    $windowWidthVal = $(this).width();
    $skillScrollVal = $('#skill').offset().top;
    $windowHeightVal = $(this).height();
  });

  $('.menu-link').click(function(e){
    e.preventDefault(); 
    var $target = $(this).attr('href'); 
    var $targetPos = $($target).offset().top;
    $('html, body').animate({scrollTop: $targetPos + 1}, 1000); 
  });

  $(window).on('load', function() {
    maskingZoomIn($scrollVal, 500);
    faded ();
  });

  function navBarTrack () {
    $('.menu-link').each(function() {
      var $target = $(this).attr('href'); 
      var $targetPos = $($target).offset().top;
      var $targetHeight = $($target).outerHeight();
      if ($targetPos <= $scrollVal && $scrollVal < ($targetPos + $targetHeight) ) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }

  function headerStrMove () {
    $('.my-header-subs').css('top', $scrollVal);
  }

  function faded () {
    $('.loading-page').css('opacity', '0');
    setTimeout (function () {
      $('.loading-page').addClass('d-none');
    }, 1000)
  }

  function showNavBar (scrollVal) {
    if ($windowWidthVal >= 992) {
      if (scrollVal > 15) {
        $('.navigation').addClass('nav-bg-color');
      } else {
        $('.navigation').removeClass('nav-bg-color');
      }
    }
  }
  
  function maskingZoomIn (val, waitTimes) {
    setTimeout (function () {
      if (val >= 0) {
        $('.mask').addClass('visible');
        $('.my-header').addClass('zoom-in');
      }
    }, waitTimes)
  }

  function typeStr (strId, velocity) {
    var $myString = $(strId).text();
    var cursor = "<span>|</span>";
    var counter = 1;
    $(strId).text("|")
    $(strId).css('opacity', '1');
    var i = setInterval(function() {
      $(strId).text(function() {
        return $myString.slice(0, counter);
      })
      counter++;
      if (counter === $myString.length + 1) {
        clearInterval(i);
        if (strId === '#my-header-string_3') {
          $(strId).append(cursor);
        }
      }
    }, velocity);
  }

  function typeTimes(stringId, waitTimes, velocity) {
    setTimeout (function () {
      typeStr(stringId, velocity);
    }, waitTimes)
  }

  function play () {
    var myStrId1 = '#my-header-string_1';
    var myStrId2 = '#my-header-string_2';
    var myStrId3 = '#my-header-string_3';
    typeTimes (myStrId1, 2500, 100);
    typeTimes (myStrId2, 2800, 80);
    typeTimes (myStrId3, 3700, 60);
  }

  function skillPlay (scrollVal) {
    if (scrollVal >= $skillScrollVal - 150) {
      $('.wave').removeClass('wave').addClass('wave-new');
      $('.skill-percent').addClass('visible');
      setTimeout(function(){
        $('.wave-1').addClass('wave-p')
      }, 3000 * 90 / 100);
      setTimeout(function(){
        $('.wave-2').addClass('wave-p')
      }, 3000 * 70 / 100);
      setTimeout(function(){
        $('.wave-3').addClass('wave-p')
      }, 3000 * 80 / 100)
      setTimeout(function(){
        $('.wave-4').addClass('wave-p')
      }, 3000 * 50 / 100)
      setTimeout(function(){
        $('.wave-5').addClass('wave-p')
      }, 3000 * 20 / 100)
      setTimeout(function(){
        $('.wave-6').addClass('wave-p')
      }, 3000 * 60 / 100)
    }
  }
  play();
  showNavBar ($scrollVal);
  skillPlay ($scrollVal);
  navBarTrack ();
  
})