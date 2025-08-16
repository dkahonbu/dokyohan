// spinner();
    function spinner() {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    }

    // $(window).on("load resize", function() {
    //     if (this.matchMedia("(min-width: 992px)").matches) {
    //         $dropdown.hover(
    //         function() {
    //             const $this = $(this);
    //             $this.addClass(showClass);
    //             $this.find($dropdownToggle).attr("aria-expanded", "true");
    //             $this.find($dropdownMenu).addClass(showClass);
    //         },
    //         function() {
    //             const $this = $(this);
    //             $this.removeClass(showClass);
    //             $this.find($dropdownToggle).attr("aria-expanded", "false");
    //             $this.find($dropdownMenu).removeClass(showClass);
    //         }
    //         );
    //     } else {
    //         $dropdown.off("mouseenter mouseleave");
    //     }
    // });

    function type() {
         var typed = new Typed('.typed-words', {
        "strings": ["Association", "Association", "Association"],
        "typeSpeed": 90,
        "loop": true,
        "backSpeed": 90,
        "backDelay": 800
    });
    }
   
    var myIndex = 0;
    // carousel();

    function carousel() {
        var i;
        var slides = $('.slides')
        , images = slides.find('img');

        images.each(function(i) {
            $(this).attr('data-id', i + 1);
        })
        myIndex++;
        if (myIndex > images.length) {
            myIndex = 1
        }

        $('.slides img').removeClass('active');
        $('.slides img[data-id="' + myIndex + '"]').addClass('active');
        setTimeout(carousel, 5000);
    }
