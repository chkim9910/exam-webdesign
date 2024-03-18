$(function () {
  slideLength = $(".slide-el").length;
  slideBox = $(".slide-box");
  slide = $(".slide-el");
  console.log(slideLength);

  let now = 1;

  if (now % slideLength < slideLength) {
    console.log(now % slideLength);
    slideBox.css({ left: -100 * now + "%" });
    now += 1;
  } else {
    now = 0;
  }
});
