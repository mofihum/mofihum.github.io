// fade in #back-top
// Hides and shows the "Back to top" button depending on whether the page is scrollable or not. 
// If not scrollabe, don't show the back to top button. If scrollable, show the back to top button. 
$(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop()) {
        if (!$('footer').hasClass('show-footer')){
          $('footer').addClass('show-footer');
        }
      } else {
        $('footer').removeClass('show-footer');
      }
  });
});

// Runs when "Print this page?" button is clicked on resume page. 
function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}


// Modified the default bootstrap carousel to change which section of the website is being displayed. 
$('.carousel').on('slide.bs.carousel', function (e) {
    var id = $('.nav li a').eq(e.to).attr("href"); 
    id = id.replace("#",""); 
    $('footer').removeClass('show-footer');
    var box = document.getElementById(id); 
    var current_section = document.getElementsByClassName('display-section')[0];
    current_section.classList.remove('transition-section'); 
    current_section.addEventListener('transitionend', function(e) {
      current_section.classList.remove('display-section'); 
      box.classList.add('display-section');  
      setTimeout(function () {
        box.classList.add('transition-section');
      }, 20);
    }, {
      capture: false,
      once: true,
      passive: false
    });
      
    $('.nav li')
    .removeClass('nav-active')
    .eq(e.to)
    .addClass('nav-active');
  });
  

