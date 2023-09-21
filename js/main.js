$(function () {
  var swiper = new Swiper(".mainSwiper", {
    speed: 400,
    spaceBetween: 100,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: false,
    autoplayStopOnLast: false, // loop false also
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: -300,
    //
    slidesPerView: 1,
    //
    centeredSlides: true,
    //
    slidesOffsetBefore: 0,
    //
    // grabCursor: true,

    breakpoints: {
      961: {
        slidesPerView: 2,
      },
    },

  });

  // $(window).resize(function(){
  //   if (window.outerWidth < 961) {
  //     slidesPerView: 1,
  //   }
  // });





  function dateTime() {
    let date = new Date();

    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    // let week = date.getDay();
    // let weekDay = ['일', '월', '화', '수', '목', '금', '토'];

    let todayYear = document.querySelector('.year');
    let todayMonth = document.querySelector('.month');
    let todayDay = document.querySelector('.day');
    // let todayWeek = document.querySelector('.week');

    todayYear.innerHTML = year;
    todayMonth.innerHTML = month;
    todayDay.innerHTML = day;
    // todayWeek.innerHTML = weekDay[week];

    let time = document.querySelector('.time');

    let hour = String(date.getHours()).padStart(2, '0');
    let min = String(date.getMinutes()).padStart(2, '0');
    // let sec = String(date.getSeconds()).padStart(2, '0');

    time.innerHTML = hour + ':' + min/*  + ':' + sec; */

  };// dateTime()

  dateTime();
  setInterval(dateTime, 1000);





  $('.chart .art > figure img').attr({
    'src': $('.chart .rightList .item.on').find('.invisible img').attr('src'),
    'alt': $('.chart .rightList .item.on').find('.invisible img').attr('alt')
  });

  $('.chart .rightList .item').mouseenter(function () {
    $('.chart .album > span').removeClass('on');
    $('.chart .rightList .item').removeClass('on');
    $('.chart .album > span').eq($(this).index()).addClass('on');
    $(this).addClass('on');

    $('.chart .art > figure img').attr({
      'src': $(this).find('.invisible img').attr('src'),
      'alt': $(this).find('.invisible img').attr('alt')
    });

  });

  $('.chart .art').mouseenter(function () {
    $('.chart .back h3').text($('.rightList .item.on .song h3').text());
    $('.chart .back p').text($('.rightList .item.on > p').text());
    $('.chart .back span').text($('.rightList .item.on .invisible span').text());
  });





  $('.update .title ul li').eq(0).click(function () {
    $('.update .title ul li').removeClass('on');
    $(this).addClass('on');

    $('.update .contSwiperB').removeClass('on');
    $('.update .contSwiperA').addClass('on');

  });

  $('.update .title ul li').eq(1).click(function () {
    $('.update .title ul li').removeClass('on');
    $(this).addClass('on');

    $('.update .contSwiperA').removeClass('on');
    $('.update .contSwiperB').addClass('on');

  });

  var swiperA = new Swiper(".contSwiperA", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    rewind: true,
    // mousewheel: true,
    keyboard: true,
    grabCursor: true,
  });

  var swiperB = new Swiper(".contSwiperB", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    rewind: true,
    // mousewheel: true,
    keyboard: true,
    grabCursor: true,
  });

  $('.update .contSwiperA .swiper-slide').mouseenter(function () {
    swiperA.autoplay.stop();
  });
  $('.update .contSwiperA .swiper-slide').mouseleave(function () {
    swiperA.autoplay.start();
  });
  $('.update .contSwiperB .swiper-slide').mouseenter(function () {
    swiperB.autoplay.stop();
  });
  $('.update .contSwiperB .swiper-slide').mouseleave(function () {
    swiperB.autoplay.start();
  });





  $('.video .title ul li').eq(0).click(function () {
    $('.video .title ul li').removeClass('on');
    $(this).addClass('on');

    $('.video .listB').removeClass('on');
    $('.video .listA').addClass('on');

  });

  $('.video .title ul li').eq(1).click(function () {
    $('.video .title ul li').removeClass('on');
    $(this).addClass('on');

    $('.video .listA').removeClass('on');
    $('.video .listB').addClass('on');

  });





  // if ($(window).width() < 960) {
  //   $('.video .listA .item').eq(2).removeClass('on');
  // }





  if ($(window).width() > 960) {
    let videoRow = 3;
    let i = 0;
    let videoItemA = $('.video .listA .item');
    let currentA = $('.video .listA .num_current');
    let allA = $('.video .listA .num_all');
    let prevA = $('.video .listA .prev');
    let nextA = $('.video .listA .next');

    allA.text(videoItemA.length / videoRow);

    prevA.click(function () {
      i--;
      if (i < 0) {
        i = videoItemA.length / videoRow - 1;
      };
      currentA.text(i + 1);
      videoItemA.removeClass('on');
      videoItemA.eq(i * videoRow).addClass('on');
      videoItemA.eq(i * videoRow + 1).addClass('on');
      videoItemA.eq(i * videoRow + 2).addClass('on');
    });
    nextA.click(function () {
      i++;
      if (i >= videoItemA.length / videoRow) {
        i = 0;
      };
      currentA.text(i + 1);
      videoItemA.removeClass('on');
      videoItemA.eq(i * videoRow).addClass('on');
      videoItemA.eq(i * videoRow + 1).addClass('on');
      videoItemA.eq(i * videoRow + 2).addClass('on');
    });

    let j = 0;
    let videoItemB = $('.video .listB .item');
    let currentB = $('.video .listB .num_current');
    let allB = $('.video .listB .num_all');
    let prevB = $('.video .listB .prev');
    let nextB = $('.video .listB .next');

    allB.text(videoItemB.length / videoRow);

    prevB.click(function () {
      j--;
      if (j < 0) {
        j = videoItemB.length / videoRow - 1;
      };
      currentB.text(j + 1);
      videoItemB.removeClass('on');
      videoItemB.eq(j * videoRow).addClass('on');
      videoItemB.eq(j * videoRow + 1).addClass('on');
      videoItemB.eq(j * videoRow + 2).addClass('on');
    });
    nextB.click(function () {
      j++;
      if (j >= videoItemB.length / videoRow) {
        j = 0;
      };
      currentB.text(j + 1);
      videoItemB.removeClass('on');
      videoItemB.eq(j * videoRow).addClass('on');
      videoItemB.eq(j * videoRow + 1).addClass('on');
      videoItemB.eq(j * videoRow + 2).addClass('on');
    });





    let editorRow = 4;
    let editorItem = $('.editor .item');
    let view = $('.editor .view');

    view.click(function () {
      if (view.text() == '추천 더보기 ∨') {
        view.text('접기 ∧');
        editorItem.addClass('on');
      } else {
        view.text('추천 더보기 ∨');
        editorItem.eq(editorRow).removeClass('on');
        editorItem.eq(editorRow + 1).removeClass('on');
        editorItem.eq(editorRow + 2).removeClass('on');
        editorItem.eq(editorRow + 3).removeClass('on');
      };
    });

  } else {
      // $('.video .listA .item').eq(2).removeClass('on');

      let videoRow = 2;
      let i = 0;
      let videoItemA = $('.video .listA .item');
      let currentA = $('.video .listA .num_current');
      let allA = $('.video .listA .num_all');
      let prevA = $('.video .listA .prev');
      let nextA = $('.video .listA .next');

      videoItemA.eq(videoRow).removeClass('on');

      allA.text(videoItemA.length / videoRow);

      prevA.click(function () {
        i--;
        if (i < 0) {
          i = videoItemA.length / videoRow - 1;
        };
        currentA.text(i + 1);
        videoItemA.removeClass('on');
        videoItemA.eq(i * videoRow).addClass('on');
        videoItemA.eq(i * videoRow + 1).addClass('on');
      });
      nextA.click(function () {
        i++;
        if (i >= videoItemA.length / videoRow) {
          i = 0;
        };
        currentA.text(i + 1);
        videoItemA.removeClass('on');
        videoItemA.eq(i * videoRow).addClass('on');
        videoItemA.eq(i * videoRow + 1).addClass('on');
      });

      let j = 0;
      let videoItemB = $('.video .listB .item');
      let currentB = $('.video .listB .num_current');
      let allB = $('.video .listB .num_all');
      let prevB = $('.video .listB .prev');
      let nextB = $('.video .listB .next');

      videoItemB.eq(videoRow).removeClass('on');

      allB.text(videoItemB.length / videoRow);

      prevB.click(function () {
        j--;
        if (j < 0) {
          j = videoItemB.length / videoRow - 1;
        };
        currentB.text(j + 1);
        videoItemB.removeClass('on');
        videoItemB.eq(j * videoRow).addClass('on');
        videoItemB.eq(j * videoRow + 1).addClass('on');
      });
      nextB.click(function () {
        j++;
        if (j >= videoItemB.length / videoRow) {
          j = 0;
        };
        currentB.text(j + 1);
        videoItemB.removeClass('on');
        videoItemB.eq(j * videoRow).addClass('on');
        videoItemB.eq(j * videoRow + 1).addClass('on');
      });





      let editorRow = 3;
      let editorItem = $('.editor .item');
      let view = $('.editor .view');

      editorItem.eq(editorRow).removeClass('on');

      view.click(function () {
        if (view.text() == '추천 더보기 ∨') {
          view.text('접기 ∧');
          editorItem.eq(editorRow).addClass('on');
          editorItem.eq(editorRow + 1).addClass('on');
          editorItem.eq(editorRow + 2).addClass('on');
        } else {
          view.text('추천 더보기 ∨');
          editorItem.eq(editorRow).removeClass('on');
          editorItem.eq(editorRow + 1).removeClass('on');
          editorItem.eq(editorRow + 2).removeClass('on');
        };
      });

  }





  $(window).resize(function () {
    if (window.outerWidth > 960) {
      let videoRow = 3;
      let i = 0;
      let videoItemA = $('.video .listA .item');
      let currentA = $('.video .listA .num_current');
      let allA = $('.video .listA .num_all');
      let prevA = $('.video .listA .prev');
      let nextA = $('.video .listA .next');

      allA.text(videoItemA.length / videoRow);

      prevA.click(function () {
        i--;
        if (i < 0) {
          i = videoItemA.length / videoRow - 1;
        };
        currentA.text(i + 1);
        videoItemA.removeClass('on');
        videoItemA.eq(i * videoRow).addClass('on');
        videoItemA.eq(i * videoRow + 1).addClass('on');
        videoItemA.eq(i * videoRow + 2).addClass('on');
      });
      nextA.click(function () {
        i++;
        if (i >= videoItemA.length / videoRow) {
          i = 0;
        };
        currentA.text(i + 1);
        videoItemA.removeClass('on');
        videoItemA.eq(i * videoRow).addClass('on');
        videoItemA.eq(i * videoRow + 1).addClass('on');
        videoItemA.eq(i * videoRow + 2).addClass('on');
      });

      let j = 0;
      let videoItemB = $('.video .listB .item');
      let currentB = $('.video .listB .num_current');
      let allB = $('.video .listB .num_all');
      let prevB = $('.video .listB .prev');
      let nextB = $('.video .listB .next');

      allB.text(videoItemB.length / videoRow);

      prevB.click(function () {
        j--;
        if (j < 0) {
          j = videoItemB.length / videoRow - 1;
        };
        currentB.text(j + 1);
        videoItemB.removeClass('on');
        videoItemB.eq(j * videoRow).addClass('on');
        videoItemB.eq(j * videoRow + 1).addClass('on');
        videoItemB.eq(j * videoRow + 2).addClass('on');
      });
      nextB.click(function () {
        j++;
        if (j >= videoItemB.length / videoRow) {
          j = 0;
        };
        currentB.text(j + 1);
        videoItemB.removeClass('on');
        videoItemB.eq(j * videoRow).addClass('on');
        videoItemB.eq(j * videoRow + 1).addClass('on');
        videoItemB.eq(j * videoRow + 2).addClass('on');
      });





      let editorRow = 4;
      let editorItem = $('.editor .item');
      let view = $('.editor .view');

      view.click(function () {
        if (view.text() == '추천 더보기 ∨') {
          view.text('접기 ∧');
          editorItem.addClass('on');
        } else {
          view.text('추천 더보기 ∨');
          editorItem.eq(editorRow).removeClass('on');
          editorItem.eq(editorRow + 1).removeClass('on');
          editorItem.eq(editorRow + 2).removeClass('on');
          editorItem.eq(editorRow + 3).removeClass('on');
        };
      });

    } else {
        let videoRow = 2;
        let i = 0;
        let videoItemA = $('.video .listA .item');
        let currentA = $('.video .listA .num_current');
        let allA = $('.video .listA .num_all');
        let prevA = $('.video .listA .prev');
        let nextA = $('.video .listA .next');

        allA.text(videoItemA.length / videoRow);

        prevA.click(function () {
          i--;
          if (i < 0) {
            i = videoItemA.length / videoRow - 1;
          };
          currentA.text(i + 1);
          videoItemA.removeClass('on');
          videoItemA.eq(i * videoRow).addClass('on');
          videoItemA.eq(i * videoRow + 1).addClass('on');
        });
        nextA.click(function () {
          i++;
          if (i >= videoItemA.length / videoRow) {
            i = 0;
          };
          currentA.text(i + 1);
          videoItemA.removeClass('on');
          videoItemA.eq(i * videoRow).addClass('on');
          videoItemA.eq(i * videoRow + 1).addClass('on');
        });

        let j = 0;
        let videoItemB = $('.video .listB .item');
        let currentB = $('.video .listB .num_current');
        let allB = $('.video .listB .num_all');
        let prevB = $('.video .listB .prev');
        let nextB = $('.video .listB .next');

        allB.text(videoItemB.length / videoRow);

        prevB.click(function () {
          j--;
          if (j < 0) {
            j = videoItemB.length / videoRow - 1;
          };
          currentB.text(j + 1);
          videoItemB.removeClass('on');
          videoItemB.eq(j * videoRow).addClass('on');
          videoItemB.eq(j * videoRow + 1).addClass('on');
        });
        nextB.click(function () {
          j++;
          if (j >= videoItemB.length / videoRow) {
            j = 0;
          };
          currentB.text(j + 1);
          videoItemB.removeClass('on');
          videoItemB.eq(j * videoRow).addClass('on');
          videoItemB.eq(j * videoRow + 1).addClass('on');
        });





        let editorRow = 3;
        let editorItem = $('.editor .item');
        let view = $('.editor .view');

        view.click(function () {
          if (view.text() == '추천 더보기 ∨') {
            view.text('접기 ∧');
            editorItem.eq(editorRow).addClass('on');
            editorItem.eq(editorRow + 1).addClass('on');
            editorItem.eq(editorRow + 2).addClass('on');
          } else {
            view.text('추천 더보기 ∨');
            editorItem.eq(editorRow).removeClass('on');
            editorItem.eq(editorRow + 1).removeClass('on');
            editorItem.eq(editorRow + 2).removeClass('on');
          };
        });

    }

  });

});// jquery end