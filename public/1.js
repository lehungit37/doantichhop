$(function () {
  //slide
  $(".btn__next").click(function (e) {
    e.preventDefault();
    var nextSlide = $(".active__slide").next();
    var indexDot = $(".active__dot").index() + 1;

    if (nextSlide.length !== 0) {
      $(".active__slide").addClass("undisplay");
      $(".active__slide").one("webkitAnimationEnd", () => {
        $(".undisplay").removeClass("active__slide").removeClass("undisplay");
      });

      nextSlide
        .addClass("active__slide")
        .addClass("display")
        .one("webkitAnimationEnd", () => {
          $(".display").removeClass("display");
        });
      $(".active__dot").removeClass("active__dot");
      $(".dot__item:nth-child(" + (indexDot + 1) + ")").addClass("active__dot");
      $(".slide__item .intro").removeClass("active__intro");
      $(".slide__item:nth-child(" + (indexDot + 1) + ") .intro").addClass(
        "active__intro"
      );
    } else {
      $(".active__slide").addClass("undisplay");
      $(".active__slide").one("webkitAnimationEnd", () => {
        $(".undisplay").removeClass("active__slide").removeClass("undisplay");
      });

      $(".slide__item:first-child")
        .addClass("active__slide")
        .addClass("display")
        .one("webkitAnimationEnd", () => {
          $(".display").removeClass("display");
        });
      $(".active__dot").removeClass("active__dot");
      $(".dot__item:first-child").addClass("active__dot");
      $(".slide__item .intro").removeClass("active__intro");
      $(".slide__item:first-child .intro").addClass("active__intro");
    }
  });
  $(".btn__prev").click(function (e) {
    e.preventDefault();
    var prevSlide = $(".active__slide").prev();
    var indexDot = $(".active__dot").index() + 1;

    if (prevSlide.length !== 0) {
      $(".active__slide").addClass("undisplay");
      $(".active__slide").one("webkitAnimationEnd", () => {
        $(".undisplay").removeClass("active__slide").removeClass("undisplay");
      });

      prevSlide
        .addClass("active__slide")
        .addClass("display")
        .one("webkitAnimationEnd", () => {
          $(".display").removeClass("display");
        });
      $(".active__dot").removeClass("active__dot");
      $(".dot__item:nth-child(" + (indexDot + 1) + ")").addClass("active__dot");
      $(".slide__item .intro").removeClass("active__intro");
      $(".slide__item:nth-child(" + (indexDot + 1) + ") .intro").addClass(
        "active__intro"
      );
    } else {
      $(".active__slide").addClass("undisplay");
      $(".active__slide").one("webkitAnimationEnd", () => {
        $(".undisplay").removeClass("active__slide").removeClass("undisplay");
      });

      $(".slide__item:last-child")
        .addClass("active__slide")
        .addClass("display")
        .one("webkitAnimationEnd", () => {
          $(".display").removeClass("display");
        });
      $(".active__dot").removeClass("active__dot");
      $(".dot__item:last-child").addClass("active__dot");
      $(".slide__item .intro").removeClass("active__intro");
      $(".slide__item:last-child .intro").addClass("active__intro");
    }
  });

  //setTime
  setInterval(() => {
    $(".btn__next").trigger("click");
  }, 6000);

  //get position scroll
  $(window).scroll(() => {
    var y = $(window).scrollTop();
    // console.log(y);
    if (y > 300) {
      $(".menu").addClass("sticky");
    } else {
      $(".menu").removeClass("sticky");
    }
    if (y >= 400) {
      $(".btn__scrollTop").addClass("active__scrollTop");
    } else {
      $(".btn__scrollTop").removeClass("active__scrollTop");
    }
  });

  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  //scrollTop 0
  $(".btn__scrollTop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  $(".btn__handle").hover(
    function () {
      // over
      $(this).addClass("active__btn");
    },
    function () {
      // out
      $(this).removeClass("active__btn");
    }
  );
  $(".product__item")
    .mouseover(function () {
      // console.log(mouseover)
      $(this).find(".product__handle").addClass("active__hover");
    })
    .mouseout(function () {
      $(this).find(".product__handle").removeClass("active__hover");
    });

  // $('.multiple-items').slick({
  //     infinite: true,
  //     slidesToShow: 4,
  //     slidesToScroll: 2,
  //     arrows: true
  // });

  // $('.multiple-items').unslick();

  $(".small__menu__item").click(function (e) {
    e.preventDefault();
    // console.log("cicked")
    $(".small__menu__item").removeClass("active__small__menu");
    $(this).addClass("active__small__menu");
    var id_tab = $(this).attr("id");
    console.log(id_tab);

    $(".trend__block").removeClass("active__tab");
    $(id_tab).addClass("active__tab");
  });

  $("#cart").click(() => {
    $(".opacity__body").addClass("active__opacity");
    $(".list__cart").addClass("active__listcart");
  });
  $(".btn__close").click(() => {
    $(".opacity__body").removeClass("active__opacity");
    $(".list__cart").removeClass("active__listcart");
  });
  $(".opacity__body").click(() => {
    $(".opacity__body").removeClass("active__opacity");
    $(".list__cart").removeClass("active__listcart");
  });

  // defalut value range text
  var valInputRange = $("#my-input").val();
  $(".range__price").text(valInputRange);

  $("#my-input").on("change", () => {
    var valInputRange = $("#my-input").val();
    $(".range__price").text(valInputRange);
  });

  $(".img-item").on("click", function () {
    var child_img = $(this).children().attr("src");

    $(".product__img-main").children().attr("src", child_img);
  });

  $(".size-item").click(function (e) {
    e.preventDefault();
    var size = $(this).attr("title");
    $("#size").text(size);
    $(".size-item").removeClass("active__size");
    $(this).addClass("active__size");
  });

  $(".minus").click(() => {
    var value = $("#quantity").val();
    console.log(value);

    if (value == 1) {
      alert("Số lượng đặt hàng không ít hơn 1");
    } else {
      value -= 1;
      $("#quantity").val(value);
    }
  });
  $(".plus").click(() => {
    var value = $("#quantity").val();
    var numQuan = parseInt(value);

    if (numQuan == 10) {
      alert("Số lượng đặt hàng không lớn hơn 10");
    } else {
      numQuan += 1;
      $("#quantity").val(numQuan);
    }
  });

  //change tab detai-product.html

  $(".control__tab").on("click", function () {
    $(".control__tab").removeClass("active__control__tab");
    $(this).addClass("active__control__tab");

    var idTab = $(this).attr("id");

    $(".tab").removeClass("active__tab");
    $(idTab).addClass("active__tab");
  });
});
