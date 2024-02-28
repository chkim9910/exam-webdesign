$(function () {
  setInterval(function () {
    slide();
  }, 3000);

  let now = 1;
  const slideWrap = $(".slide-wrap");

  function slide() {
    if (now < 3) {
      slideWrap.animate({
        left: now * -100 + "%",
      });
      now += 1;
    } else {
      slideWrap.animate({
        left: 0,
      });
      now = 1;
    }
  }
});
