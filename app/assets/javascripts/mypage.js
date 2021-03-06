jQuery(document).ready(function(){
  $(".wrapper__main__information").show();
  $(".wrapper__main__logout").hide();
  $(".wrapper__main__card").hide();
  // $(".wrapper__main__destinasions").hide();
});



$(function() {

  $('.wrapper__main__list__nav__box__text__home').on('click', function(){
    console.log("マイページに切り替えられました");
    $('html, body').animate({scrollTop:0},'fast');
    $(".wrapper__main__information").show();
    $(".wrapper__main__logout").hide();
    $(".wrapper__main__card").hide();
    // $(".wrapper__main__destinasions").hide();
  });

  $('.wrapper__main__list__nav__box__text__logout').on('click', function(){
    console.log("ログアウトページに切り替えられました");
    $('html, body').animate({scrollTop:0},'fast');
    $(".wrapper__main__information").hide();
    $(".wrapper__main__logout").show();
    $(".wrapper__main__card").hide();
    // $(".wrapper__main__destinasions").hide();
  });

  $('.wrapper__main__list__nav__box__text__card').on('click', function(){
    console.log("カードページに切り替えられました");
    $('html, body').animate({scrollTop:0},'fast');
    $(".wrapper__main__information").hide();
    $(".wrapper__main__logout").hide();
    $(".wrapper__main__card").show();
    // $(".wrapper__main__destinasions").hide();
  });

  // $('.wrapper__main__list__nav__box__text__description').on('click', function(){
  //   console.log("発送元・お届け先住所変更に切り替えられました");
  //   $('html, body').animate({scrollTop:0},'fast');
  //   $(".wrapper__main__information").hide();
  //   $(".wrapper__main__logout").hide();
  //   $(".wrapper__main__card").hide();
  //   $(".wrapper__main__destinasions").show();
  // });

  $('.wrapper__main__list__nav__box__text')
    .on('mouseenter', function(){
      $(this).css({
        "fontWeight": "bold",
        "backgroundColor": "gray"
      });
    })
    .on('mouseleave', function(){
      $(this).css({
        "fontWeight": "normal",
        "backgroundColor": "gray"
      });
    });

    $('.wrapper__main__list__nav__box__text__home')
    .on('mouseenter', function(){
      $(this).css({
        "fontWeight": "bold",
        "backgroundColor": "#f5f5f5"
      });
    })
    .on('mouseleave', function(){
      $(this).css({
        "fontWeight": "normal",
        "backgroundColor": "white"
      });
    });

    $('.wrapper__main__list__nav__box__text__card')
    .on('mouseenter', function(){
      $(this).css({
        "fontWeight": "bold",
        "backgroundColor": "#f5f5f5"
      });
    })
    .on('mouseleave', function(){
      $(this).css({
        "fontWeight": "normal",
        "backgroundColor": "white"
      });
    });

    $('.wrapper__main__list__nav__box__text__logout')
    .on('mouseover', function(){
      $(this).css({
        "fontWeight": "bold",
        "backgroundColor": "#f5f5f5"
      });
    })
    .on('mouseleave', function(){
      $(this).css({
        "fontWeight": "normal",
        "backgroundColor": "white"
      });
    });

    $('.wrapper__main__list__nav__box__text__description')
    .on('mouseenter', function(){
      $(this).css({
        "fontWeight": "bold",
        "backgroundColor": "#f5f5f5"
      });
    })
    .on('mouseleave', function(){
      $(this).css({
        "fontWeight": "normal",
        "backgroundColor": "white"
      });
    });

    $('.wrapper__main__list__nav__box__text__show')
    .on('mouseenter', function(){
      $(this).css({
        "fontWeight": "bold",
        "backgroundColor": "#f5f5f5"
      });
    })
    .on('mouseleave', function(){
      $(this).css({
        "fontWeight": "normal",
        "backgroundColor": "white"
      });
    });

    
    $('.wrapper__main__list__nav__box__text__sell')
    .on('mouseenter', function(){
      $(this).css({
        "fontWeight": "bold",
        "backgroundColor": "#f5f5f5"
      });
    })
    .on('mouseleave', function(){
      $(this).css({
        "fontWeight": "normal",
        "backgroundColor": "white"
      });
    });
});

