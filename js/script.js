$(window).on('load', function() {
    $('.loader .inner').fadeOut(1500, function() {
        $('.loader').fadeOut(450);
    })

})

$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,


    });
    var typed = new Typed('.typed', {
        strings: ['WhoAmI', 'Novice-Developer'],
        loop: true,
        typeSpeed: 40,
        backSpeed: 40
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: { items: 2 },
            768: { items: 3 },
            938: { items: 4 }
        }
    });
    const skillsTopOffset = $("#skills").offset().top;
    console.log(skillsTopOffset);
    $(window).scroll(function() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: '#3d3d3d',
                trackColor: false,
                scaleColor: false,
                size: 200,
                lineWidth: 4,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                }
            });

        }
    });

    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

            {

                duration: 2000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });



    });
    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");
        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

});