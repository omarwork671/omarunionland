$(document).ready(function(){

    //حركة التأثير عتد أرتفاع الصفحة
    $(".go-slowly").on('click', function(event) {
        event.preventDefault();
        var el = this.hash;
        $('html, body').animate({
          scrollTop: $(el).offset().top
        }, 1500);
    });



    $(window).scroll(function(){
        if($(this).scrollTop()>=500){
            $("#navBar").addClass("noTransparrent");
        }
        else{
            $("#navBar").removeClass("noTransparrent")
        }
    });

    $('.timer').countTo();

    $(function() {
        $("#commentForm").validate();
    })

})



