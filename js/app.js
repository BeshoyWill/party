/* function dropdown() {
    document.querySelector("#submenu").classList.toggle("hidden");
    document.querySelector("#arrow").classList.toggle("rotate-0");
  }
  dropdown();

  function openSidebar() {
    document.querySelector(".sidebar").classList.show();
  }*/

$(document).ready(function () {
  // *==========> Navbar JQuery Section
  $(".menu-btn").click(function () {
    $(".sidebar").toggleClass("show").addClass("duration-300");
    $(".menu-btn").toggleClass("active").addClass("duration-300");
  });

  $(".menu-exit").click(function () {
    $(".sidebar").removeClass("show").addClass("duration-300");
    $(".menu-btn").removeClass("active").addClass("duration-300");
  });

  // *>==========> Accordion JQuery Section
  $(".accordion-header").click(function () {
    //self click
    if ($(this).next(".accordion-body").hasClass("active")) {
      $(this).next(".accordion-body").removeClass("active").slideUp();
    } else {
      $(".accordion-item .accordion-body").slideUp();
      $(this).next(".accordion-body").addClass("active").slideDown();
    }
  });

  // *>==========> Countdown JQuery Section
  $('#countdowntimer').countdown('2024/10/13', function(event) {
  $('.box-day').html(event.strftime('%D'));
  $('.box-hour').html(event.strftime('%H'));
  $('.box-minute').html(event.strftime('%M'))
  $('.box-second').html(event.strftime('%S'));
  });

  // *>==========> Message Character Remaining JQuery Section

    $('#chars').html($('textarea').attr('maxlength') + ' characters remaining');

    $('textarea').on('keyup', countChar);
    
    function countChar() {
        var textLength = $('textarea').val().length;
        var textRemaining = $('textarea').attr('maxlength') - textLength;
        $('#chars').html(textRemaining + ' characters remaining');
    };
});
