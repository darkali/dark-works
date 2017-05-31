$("input").focus(function(){
    $(this).next().css('visibility', 'hidden');
});

$("input").blur(function(){
    $(this).next().css('visibility', 'visible');
});

$(function() {
    var headerHeight = $('header')[0].offsetHeight;
    var mainHeight = $('#main')[0].offsetHeight;

    console.log(headerHeight);
    console.log(mainHeight);

    console.log(parseInt(headerHeight) + parseInt(mainHeight));
    console.log(screen.height);

    $('#main').css({
        'height' : screen.height - headerHeight
    });

    if (screen.height == 568) {
        $('header').addClass('ip5header');
        $('#main').addClass('ip5main');
    }

    else if (screen.height == 640) {
        $('header').addClass('galaxys5header');
        $('#main').addClass('galaxys5main');
    }

    else if (screen.height == 667) {
        $('header').addClass('ip6header');
        $('#main').addClass('ip6main');
    }
    
    else if (screen.height == 732) {
        $('header').addClass('nexusheader');
        $('#main').addClass('nexusmain');
    }

    else if (screen.height == 736) {
        $('header').addClass('ip6plusheader');
        $('#main').addClass('ip6plusmain');
    }

    console.log($('#main')[0].offsetHeight);
});