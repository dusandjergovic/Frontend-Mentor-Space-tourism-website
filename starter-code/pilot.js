$(document).ready(function() {
    $("#hamburger").click(function() {
        $(this).hide();
        $("#close").show()
        $("#toggleNavBar").show()
        $("#explore").css({
            'filter': 'blur(5px)'
        })
    })
    $("#close").click(function() {
        $(this).hide();
        $("#toggleNavBar").hide()
        $("#hamburger").show()
        $("#explore").css({
            'filter': 'blur(0px)'
        })
    })

    let selectedRate = null;

    $(".miniBullet").click(function(){
        $(this).toggleClass('active')
        $("#defaultBtn").removeClass('active')

        if(selectedRate !== null) {
            selectedRate.removeClass('active');
        }
        $(this).addClass('active');
        selectedRate = $(this);
    })
})