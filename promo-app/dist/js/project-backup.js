$(document).ready(function(){function e(e){var s,a,n="INPUT"===e.tagName||"TEXTAREA"===e.tagName;if(n)t=e,s=e.selectionStart,a=e.selectionEnd;else{if(!(t=document.getElementById("_hiddenCopyText_"))){var t=document.createElement("textarea");t.style.position="absolute",t.style.left="-9999px",t.style.top="0",t.id="_hiddenCopyText_",document.body.appendChild(t)}t.textContent=e.textContent}var i=document.activeElement;t.focus(),t.setSelectionRange(0,t.value.length);var d;try{d=document.execCommand("copy")}catch(e){d=!1}return i&&"function"==typeof i.focus&&i.focus(),n?e.setSelectionRange(s,a):t.textContent="",d}var s=$(".nav li:nth-child(1) a");$(s).addClass("active").offsetParent().siblings().children().removeClass("active"),$("#section1bg").show().addClass("fadeInUp").parent().parent().siblings().find("#section").hide().removeClass("animated"),setTimeout(function(){$(".section1").show().addClass("animated fadeIn")},1e3),console.log("load!"),$(".nav li a").click(function(e){var s=$(this).attr("href");""!==s&&(e.preventDefault(),$(this).addClass("active").offsetParent().siblings().children().removeClass("active"),$("html, body").stop().animate({scrollTop:$(s).offset().top},200,function(){}))}),$(".btn-left").hover(function(){$(".btn-left img").css("visibility","visible"),$("#section1Android").show().removeClass("fadeOut").addClass("fadeIn"),$("#section2Android").show().removeClass("fadeOut").addClass("fadeIn"),$("#section5Android").show().removeClass("fadeOut").addClass("fadeIn")}),$(".btn-left").mouseleave(function(){$(".btn-left img").css("visibility","hidden"),$("#section1Android").removeClass("fadeIn").addClass("fadeOut"),$("#section2Android").removeClass("fadeIn").addClass("fadeOut"),$("#section5Android").removeClass("fadeIn").addClass("fadeOut")}),$(".btn-right").hover(function(){$(".btn-right img").css("visibility","visible"),$("#section1iPhone").show().removeClass("fadeOut").addClass("fadeIn"),$("#section2iPhone").show().removeClass("fadeOut").addClass("fadeIn"),$("#section5iPhone").show().removeClass("fadeOut").addClass("fadeIn")}),$(".btn-right").mouseleave(function(){$(".btn-right img").css("visibility","hidden"),$("#section1iPhone").removeClass("fadeIn").addClass("fadeOut"),$("#section2iPhone").removeClass("fadeIn").addClass("fadeOut"),$("#section5iPhone").removeClass("fadeIn").addClass("fadeOut")}),$(window).scroll(function(){var e=$(window).scrollTop(),s=$(".nav li:nth-child(1) a"),a=$(".nav li:nth-child(2) a"),n=$(".nav li:nth-child(3) a"),t=$(".nav li:nth-child(4) a"),i=$(".nav li:nth-child(5) a");return console.log(e),e>=0&&e<1024?$(s).addClass("active").offsetParent().siblings().children().removeClass("active"):e>=1024&&e<2048?($(a).addClass("active").offsetParent().siblings().children().removeClass("active"),$("#section2bg").show().addClass("fadeInRight").parent().parent().siblings().find("#section").hide().removeClass("animated"),$(".section2").css("display","inline-block").addClass("animated fadeInLeft")):e>=2048&&e<3072?($(n).addClass("active").offsetParent().siblings().children().removeClass("active"),$("#section3bg").show().addClass("fadeInUp").parent().parent().siblings().find("#section").hide().removeClass("animated"),$(".section3").show().addClass("fadeInDown")):e>=3072&&e<4096?($(t).addClass("active").offsetParent().siblings().children().removeClass("active"),$("#sectionDomainVerify").show().addClass("swing").parent().parent().siblings().find("#section").hide().removeClass("animated"),$(".section4").show().addClass("animated flipInY")):e>=4096&&$(i).addClass("active").offsetParent().siblings().children().removeClass("active"),!1}),document.getElementById("copyButton").addEventListener("click",function(){e(document.getElementById("copyTarget"))})});