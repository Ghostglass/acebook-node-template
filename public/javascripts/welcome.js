/* eslint-disable no-undef */
$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
});
$(document).ready(function(){

    $('ul.switcher li').click(function(){
        var tab_id = $(this).attr('data-tab');
        
        $('li').removeClass('active');
    $('div.tab-pane').removeClass('active');
    
        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })

})
