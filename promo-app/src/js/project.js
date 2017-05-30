$(document).ready(function() {
  $(this).scrollTop(0);
  // Section Snapper  
  var panelSnapMain = {
      $menu: $('.nav'),
      easing: 'swing',
      panelSelector: '.panelSection',
      slideSpeed: 300,
      directionThreshold: 0,
      navigation: {
          buttons: {
              $nextButton: $('.next'),
              $prevButton: false,
          },
          wrapAround: true
      }
      };
  $('body').panelSnap(panelSnapMain);
  // End Snapper

  // Load contents of first page
    $('#section1bg').show().addClass('animated');
    $('.section1').show().addClass('animated');
    $('#section2bg').hide().removeClass('animated');
    $('#section3bg').hide().removeClass('animated');
    $('#sectionDomainVerify').hide().removeClass('animated');
    
  // Section on scroll, load and animate elements, initialize elements again so it will animate again on next scroll
    $(window).scroll(function() {
        var top_of_section = $("#phoneApp").offset().top + 68;
        var bottom_of_section = $("#phoneApp").offset().top + $("#phoneApp").outerHeight();
        var top_of_section2 = $("#mobileWeb").offset().top +68;
        var bottom_of_section2 = $("#mobileWeb").offset().top + $("#mobileWeb").outerHeight();
        var top_of_section3 = $('#pcClient').offset().top + 68;
        var bottom_of_section3 = $('#pcClient').offset().top + $('#pcClient').outerHeight();
        var top_of_section4 = $('#domainVer').offset().top + 68;
        var bottom_of_section4 = $('#domainVer').offset().top + $('#domainVer').outerHeight();
        var top_of_section5 = $('#dns').offset().top + 68;
        var bottom_of_section5 = $('#dns').offset().top + $('#dns').outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).height();
        var top_of_screen = $(window).scrollTop();

        if((bottom_of_screen > top_of_section) && (top_of_screen < bottom_of_section)){
            // The element is visible, do something
            $('#section1bg').show().addClass('animated fadeInDown').removeClass('fadeOut');
            $('.section1').show().addClass('animated').removeClass('fadeOut');
            $('#section2bg').addClass('animated fadeOut');
            $('#section3bg').addClass('animated fadeOut');
            $('#sectionDomainVerify').addClass('animated fadeOut');
            $('.section2').addClass('animated fadeOut');
            $('.section3').addClass('animated fadeOut');
            $('.section4').addClass('animated fadeOut').removeClass('flipInY');
            $('.next').css('background-image', 'url(img/arrow-down.png)');
        }
        else if ((bottom_of_screen > top_of_section2) && (top_of_screen < bottom_of_section2)) {
            $('#section2bg').show().addClass('animated').removeClass('fadeOut');
            $('.section2').css('display','inline-block').addClass('animated').removeClass('fadeOut');
            $('#section1bg').addClass('animated fadeOut').removeClass('fadeInDown');
            $('#section3bg').addClass('animated fadeOut');
            $('#sectionDomainVerify').addClass('animated fadeOut');
            $('.section1').addClass('animated fadeOut');
            $('.section3').addClass('animated fadeOut');
            $('.section4').addClass('animated fadeOut').removeClass('flipInY');
            $('.next').css('background-image', 'url(img/arrow-down.png)');
        }
        else if ((bottom_of_screen > top_of_section3) && (top_of_screen < bottom_of_section3)) {
            $('#section3bg').show().addClass('animated').removeClass('fadeOut');
            $('.section3').show().addClass('animated').removeClass('fadeOut');
            $('#section1bg').addClass('animated fadeOut');
            $('#section2bg').addClass('animated fadeOut');
            $('#sectionDomainVerify').addClass('animated fadeOut');
            $('.section1').addClass('animated fadeOut');
            $('.section2').addClass('animated fadeOut');
            $('.section4').addClass('animated fadeOut').removeClass('flipInY');
            $('.next').css('background-image', 'url(img/arrow-down.png)');
       }
        else if ((bottom_of_screen > top_of_section4) && (top_of_screen < bottom_of_section4)) {
            $('#sectionDomainVerify').show().addClass('animated').removeClass('fadeOut');
            $('.section4').css('display','inline-block').addClass('animated flipInY').removeClass('fadeOut');
            $('#section1bg').addClass('animated fadeOut');
            $('#section2bg').addClass('animated fadeOut');
            $('#section3bg').addClass('animated fadeOut');
            $('.section1').addClass('animated fadeOut');
            $('.section2').addClass('animated fadeOut');
            $('.section3').addClass('animated fadeOut');
            $('.next').css('background-image', 'url(img/arrow-down.png)');
        }
        else if ((bottom_of_screen > top_of_section5) && (top_of_screen < bottom_of_section5)) {
            // The element is not visible, do something else
            $('.movingElement').addClass('animated fadeOut');
            $('.section4').addClass('animated fadeOut').removeClass('flipInY');
            $('.next').css('background-image', 'url(img/arrow-up.png)');
        }
    });

  // End Section on scroll, load and animate elements
  

  //Tooltip functions
    $('.btn-left').hover(function(){
        $('.btn-left img').css('visibility', 'visible');
        $('#section1Android').show();
        $('#section2Android').show();
        $('#section5Android').show();
    });
    $('.btn-left').mouseleave(function(){
        $('.btn-left img').css('visibility', 'hidden');
        $('#section1Android').hide();        
        $('#section2Android').hide();        
        $('#section5Android').hide();        
    });
    $('.btn-right').hover(function(){
        $('.btn-right img').css('visibility', 'visible');
        $('#section1iPhone').show();
        $('#section2iPhone').show();
        $('#section5iPhone').show();
    });
    $('.btn-right').mouseleave(function(){
        $('.btn-right img').css('visibility', 'hidden');
        $('#section1iPhone').hide();
        $('#section2iPhone').hide();
        $('#section5iPhone').hide();
    });

    //End Tooltip functions

    // Copy from textbox
    document.getElementById("copyButton").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget"));
    });

    function copyToClipboard(elem) {
        // create hidden text element, if it doesn't already exist
        var targetId = "_hiddenCopyText_";
        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        var origSelectionStart, origSelectionEnd;
        if (isInput) {
            // can just use the original source element for the selection and copy
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            // must use a temporary form element for the selection and copy
            target = document.getElementById(targetId);
            if (!target) {
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }
            target.textContent = elem.textContent;
        }
        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);
        
        // copy the selection
        var succeed;
        try {
            succeed = document.execCommand("copy");
            alert(target.value + ' 网址复制到剪贴板');
        } catch(e) {
            succeed = false;
        }
        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }
        
        if (isInput) {
            // restore prior selection
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            // clear temporary content
            target.textContent = "";
        }
        return succeed;
    }
    // End Copy from textbox

    // Highlight copy button 
    $('#copyButton').hover(function(){
        $(this).toggleClass('hover');
    })

});