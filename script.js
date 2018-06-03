$(document).ready(function() {
    
    // Colour changer
    var colors = Array(
        '#68BDEA', 
        '#6DC9C7', 
        '#76C371', 
        '#DBE11F', 
        '#FAA72C', 
        '#EF3F35', 
        '#E2489A', 
        '#475AA8', 
        '#695CA8', 
        '#5064AE', 
        '#569CD5'
    );		
  		
    var i = 1;
    setInterval(function(){		

        $('.bg').css('background', colors[i]);
        $('.button').css('color', colors[i]);
        $('.footerButton').css('background', colors[i]);
        $('.footerLogo svg').css('fill', colors[i]);

        if(i == (colors.length - 1)) {
            i = 0
        } else {
            i++;				
        }

    }, 8000);

    
    // Full screen toggle
    function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {  
                document.documentElement.requestFullScreen();  
            } else if (document.documentElement.mozRequestFullScreen) {  
                document.documentElement.mozRequestFullScreen();  
            } else if (document.documentElement.webkitRequestFullScreen) {  
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
            }  
        } else {  
            if (document.cancelFullScreen) {  
                document.cancelFullScreen();  
            } else if (document.mozCancelFullScreen) {  
                document.mozCancelFullScreen();  
            } else if (document.webkitCancelFullScreen) {  
                document.webkitCancelFullScreen();  
            }  
        }  
    } 
    
    // Timer
    $('.time').stopwatch().stopwatch('start');
   
    // Stop transitions until page loaded
    $(".cssTransitionsAfterPageLoad").each(function (index, element) {
        setTimeout(function () { $(element).removeClass("cssTransitionsAfterPageLoad") }, 10);
    });
    
    // Google Analytics Events
    $("#fullscreenButton").click( function() {
        ga('send', 'event', 'Button', 'Fullscreen');
        console.log('Fullscreen toggled');
    });

    $("#playButton").click( function() {
        ga('send', 'event', 'Button', 'Audio Toggle');
        console.log('Audio toggled');
    });

    $("#appButton").click( function() {
        ga('send', 'event', 'Button', 'App Link');
        console.log('App link clicked');
    });
    
    // iOS Web App settings
    if((window.navigator.standalone === true)) {
        ga('send', 'event', 'Load', 'Load from Homescreen');
        
        $('.foot').hide();
        $(document).bind()('touchmove', function(e) { 
            e.preventDefault(); 
        }); 
    }
    
    
    // Audio play button
    document.getElementById("playButton").addEventListener("click", function () {
        var myAudio = document.getElementById('linkAudio');
        
        if (myAudio.duration > 0 && !myAudio.paused) {
            document.getElementById("linkAudio").pause();
            $('#audio').html('Play Audio');
        } else {
            document.getElementById("linkAudio").play();
            $('#audio').html('Pause Audio');
        }
    });
    
});














