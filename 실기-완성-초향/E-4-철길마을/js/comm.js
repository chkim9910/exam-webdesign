$(function () {
  // slide
  let now = 0;
  const slideWrap = $(".slide-wrap");
  const slideCount = $(".slide-el").length;
  setInterval(function () {
    now = (now + 1) % slideCount;
    slideWrap.css("left", now * -100 + "%");
  }, 3000);

  //   tab
  const tabEl = $(".tab-el");
  tabEl.first().addClass("active");
  tabEl.on("click", function () {
    tabEl.removeClass("active");
    $(this).addClass("active");
  });

  //   modal
  const modal = $(".modal");
  const close = $(".modal button");
  const noticeCont = $(".notice-wrap li:first-child");
  modal.hide();
  noticeCont.on("click", function () {
    modal.show();
  });
  close.on("click", function () {
    modal.hide();
  });
});
