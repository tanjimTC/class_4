;(function($) {


    // Menu Handler
    $(document).on('click', '.main-menu ul li .responsive-icon', function(e) {
        $(".main-menu ul li").removeClass('active');
        $(this).parents().addClass('active');
    })
    $(document).on('click', '.main-menu ul li.active .responsive-icon', function(e) {
        $(".main-menu ul li").removeClass('active');
    })
    $(document).on('click', '.responsive-show-nav-menu', function() {
        $(".main-menu").addClass('active');
    })
    $(document).on('click', '.main-menu .close-nav-menu', function() {
        $(".main-menu").removeClass('active');
    })


})(jQuery)