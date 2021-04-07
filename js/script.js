$(function () {
    let interval;
    let img = $('.slides img');
    let imgArray = [];
    img.each(function () {
        imgArray.push($(this).attr('src'));
    });
    let imgPosition = 0;
    img.attr('src', imgArray[imgPosition]);
    function startSliding(counter) {
        interval = setInterval(function () {

            img.attr('src', imgArray[counter]);
            imgPosition = counter;
            counter++;
            if (counter > imgArray.length - 1) {
                counter = 0;
            };
        }, 2000);
    }
    startSliding(imgPosition);

    $('.prev').click(function () {
        clearInterval(interval);
        imgPosition = imgPosition - 1;
        if (imgPosition < 0) {
            imgPosition = imgArray.length - 1;
        }
        img.attr('src', imgArray[imgPosition]);
        startSliding(imgPosition + 1);
    });

    $('.next').click(function () {
        clearInterval(interval);
        imgPosition = imgPosition + 1;
        if (imgPosition > imgArray.length - 1) {
            imgPosition = 0;
        }
        img.attr('src', imgArray[imgPosition]);
        startSliding(imgPosition + 1);
    });

    $('.slides').on('mouseenter', function () {
        clearInterval(interval);

    });

    $('.slides').on('mouseleave', function () {
        startSliding(imgPosition);
    });

    $("#star li").mouseover(function () {
        const current = $(this).index();
        $('#star li').each(function (index) {
            $(this).addClass('hovered-stars');
            if (index === current) {
                return false;
            }
        });
    });

    $("#star li").mouseleave(function () {
        $('#star li').removeClass('hovered-stars');
    });

    $('#star li').click(function () {
        $('#star li').removeClass('clicked-stars');
        $('.hovered-stars').addClass('clicked-stars');
        $('#star li').removeClass('hovered-stars');
        $('#message').html('Hvala Vam! Vasa ocjena je ' + $('.clicked-stars').length);
    });
});