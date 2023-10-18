$(function(){
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.chart').offset().top / 2) {
          $('.top').show();
        } else {
          $('.top').hide();
        };
      });
    
      $('.top').click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 0);
      });
    
    
    
    
    
      $('header input[type="text"]').click(function () {
        // $('body').addClass('on');
        $('header .search_tab').addClass('on');
      });
    
      // $('body.on').click(function () {
      //   $('header .search_tab').removeClass('on');
      //   $('body').removeClass('on');
      // });

      $('header .search_close').click(function () {
        $('header .search_tab').removeClass('on');
        // $('body').removeClass('on');
      });

      // body 클릭 시 search_tab 닫기
      $(document).mouseup(function (e) {
        if ($('header .search_tab').has(e.target).length === 0) {
          $('header .search_tab').removeClass('on');
        };
      });
    
      $('header .search_tab > ul li').click(function () {
        $('header .search_tab > ul li').removeClass('on');
        $(this).addClass('on');
    
        $('header .search_tab > div').removeClass('on');
        $('header .search_tab > div').eq($(this).index()).addClass('on');
    
      });
    
    
    
    
    
      $('header .menu_open').click(function () {
        $('nav').addClass('on');
      });
    
      $('nav .menu_close').click(function () {
        $('nav').removeClass('on');
      });
    
      $('nav a').click(function () {
        $('nav').removeClass('on');
      });





      $('.icon_search').click(function(){
        $('.search').stop().slideToggle();
      });

      $(window).resize(function () {
        if (window.outerWidth > 960) {
          $('.search').show();
        };
      });

});// jquery end