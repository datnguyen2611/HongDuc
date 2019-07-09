$(function () {
    var addStickySidebar = function() {
        var menuSidebar = $('#sidebar-wrap').offset().top;
        if ($(window).width() > 991) {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= menuSidebar)  {
                    $("#sidebar-wrap").addClass('sticky-sidebar');
                } else {
                    $("#sidebar-wrap").removeClass('sticky-sidebar');
                }
                
            });
        } else {
            return false;
        }
        
    };
    addStickySidebar();
    $(window).resize(function() {
        addStickySidebar();
    });
    
});