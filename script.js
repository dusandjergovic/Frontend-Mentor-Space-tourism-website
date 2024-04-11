$(document).ready(function() {

    $("#hamburger").click(function() {
        $(this).hide();
        // $("#navForTabletAndDesktop").hide()
        $("#close").show()
        $("#toggleNavBar").show()
        $("#explore").css({
            'filter': 'blur(5px)'
        })
    })

    $(window).resize(function() {
        if($(this).innerWidth() > 445) {
            $("#toggleNavBar").hide()
            $("#hamburger").hide()
            $("#explore").css({
                'filter': 'blur(0px)'
            })
        } else if($(this).innerWidth() < 445) {
            $("#hamburger").show()
        }
    })

    $(window).resize(function() {
        if($(this).innerWidth() >= 900) {
            $("#navLine").show();
        } else {
            $("#navLine").hide();
        }
    })



    $("#close").click(function() {
        $(this).hide();
        $("#toggleNavBar").hide()
        $("#hamburger").show()
        $("#explore").css({
            'filter': 'blur(0px)'
        })
    })
})