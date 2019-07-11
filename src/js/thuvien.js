$(document).ready(function () {
    var addStickySidebar = function () {
        var menuSidebar = $('#sidebar-wrap');
        if (menuSidebar.length > 0) {
            menuSidebar = menuSidebar.offset().top;
            if ($(window).width() > 991) {
                $(window).scroll(function () {
                    var scrollTop = $(window).scrollTop();
                    var topSideBar = menuSidebar
                    if (scrollTop >= topSideBar) {
                        $("#sidebar-wrap").addClass('sticky-sidebar');
                    } else {
                        $("#sidebar-wrap").removeClass('sticky-sidebar');
                    }
                });
            } else {
                return false;
            }
        }
    };
    addStickySidebar();
    $(window).resize(function () {
        addStickySidebar();
    });
});