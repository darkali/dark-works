$(document).ready(function() {
  // $('body').panelSnap();
  // Section 1 on load, do the stuff
  var phoneApp = $(".nav li:nth-child(1) a");

  $(phoneApp).addClass('active').offsetParent().siblings().children().removeClass('active');
  $('#section1bg').show().addClass('fadeInUp').parent().parent().siblings().find('#section').hide().removeClass('animated');
       
  setTimeout(function() {
      $('.section1').show().addClass('animated fadeIn');
  }, 1000);
  console.log('load!');

  //Smooth Scroll and nav highlight on active
  $(".nav li a").click(function(event) {
    
    var hash = $(this).attr('href');

    // Make sure this.hash has a value before overriding default behavior
    if (hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
        //Make the active nav look active
        $(this).addClass('active').offsetParent().siblings().children().removeClass('active');

      // Store hash
      // var hash = this.hash;
      // console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (200) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
     } // End if    
    });

    //Tooltip functions
    $('.btn-left').hover(function(){
        $('.btn-left img').css('visibility', 'visible');
        $('#section1Android').show().removeClass('fadeOut').addClass('fadeIn');
        $('#section2Android').show().removeClass('fadeOut').addClass('fadeIn');
        $('#section5Android').show().removeClass('fadeOut').addClass('fadeIn');
    });
    $('.btn-left').mouseleave(function(){
        $('.btn-left img').css('visibility', 'hidden');
        $('#section1Android').removeClass('fadeIn').addClass('fadeOut');        
        $('#section2Android').removeClass('fadeIn').addClass('fadeOut');        
        $('#section5Android').removeClass('fadeIn').addClass('fadeOut');        
    });
    $('.btn-right').hover(function(){
        $('.btn-right img').css('visibility', 'visible');
        $('#section1iPhone').show().removeClass('fadeOut').addClass('fadeIn');
        $('#section2iPhone').show().removeClass('fadeOut').addClass('fadeIn');
        $('#section5iPhone').show().removeClass('fadeOut').addClass('fadeIn');
    });
    $('.btn-right').mouseleave(function(){
        $('.btn-right img').css('visibility', 'hidden');
        $('#section1iPhone').removeClass('fadeIn').addClass('fadeOut');
        $('#section2iPhone').removeClass('fadeIn').addClass('fadeOut');
        $('#section5iPhone').removeClass('fadeIn').addClass('fadeOut');
    });
    
    //Scroll functions -- revisit
    $(window).scroll(function(){
        var scrollPosition = $(window).scrollTop();
        var phoneApp = $(".nav li:nth-child(1) a");
        var mobileWeb = $(".nav li:nth-child(2) a");
        var pcClient = $(".nav li:nth-child(3) a");
        var domainVer = $(".nav li:nth-child(4) a");
        var dns = $(".nav li:nth-child(5) a");
        console.log(scrollPosition);

        //Section 1 uli
        if (scrollPosition >= 0 && scrollPosition < 1024) {
            $(phoneApp).addClass('active')
            .offsetParent().siblings().children().removeClass('active');
        }

        //Section 2
        else if (scrollPosition >= 1024 && scrollPosition < 2048) {
            $(mobileWeb).addClass('active')
            .offsetParent().siblings().children().removeClass('active');
            $('#section2bg').show().addClass('fadeInRight')
            .parent().parent().siblings().find('#section').hide().removeClass('animated');
            $('.section2').css('display','inline-block').addClass('animated fadeInLeft');
        }

        //Section 3
        else if (scrollPosition >= 2048 && scrollPosition < 3072) {
            $(pcClient).addClass('active')
            .offsetParent().siblings().children().removeClass('active');
            $('#section3bg').show().addClass('fadeInUp')
            .parent().parent().siblings().find('#section').hide().removeClass('animated');
            $('.section3').show().addClass('fadeInDown');
        }

        //Section 4
        else if (scrollPosition >= 3072 && scrollPosition < 4096) {
            $(domainVer).addClass('active')
            .offsetParent().siblings().children().removeClass('active');
            $('#sectionDomainVerify').show().addClass('swing')
            .parent().parent().siblings().find('#section').hide().removeClass('animated');
            $('.section4').show().addClass('animated flipInY');
        }

        //Section 5
        else if (scrollPosition >= 4096) {
            $(dns).addClass('active')
            .offsetParent().siblings().children().removeClass('active');
        }
        return false;

    });

    //Copy from textbox
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

});