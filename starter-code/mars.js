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

    $.ajax({
        url: 'data.json',
        METHOD: 'GET',
        success: function(response) {
            console.log(response);
            $(".planetName").text(response.destinations[1].name)
            $('#distanceKm').text(response.destinations[1].distance)
            $('#avgTime').text(response.destinations[1].travel)
        }
    })

})