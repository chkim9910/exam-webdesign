$(function () {
  // setInterval(() => {
  //   slide();
  // }, 3000);
  // // setInterval(function () {
  // //   slide();
  // // }, 3000);

  // let now = 1;
  // const slideWrap = $(".slide-wrap");
  // const slideCount = $(".slide-wrap .slide-el").length;

  // function slide() {
  //   if (now < slideCount) {
  //     // slideWrap.animate({
  //     //   left: now * -100 + "%",
  //     // });
  //     slideWrap.css({ left: now * -100 + "%", transition: "all 0.3s" });
  //     now += 1;
  //   } else {
  //     // slideWrap.animate({
  //     //   left: 0,
  //     // });
  //     slideWrap.css("left", 0);
  //     now = 1;
  //   }
  // }

  // slide
  let now = 0;
  const slideWrap = $(".slide-wrap");
  const slideCount = $(".slide-wrap .slide-el").length;

  setInterval(() => {
    now = (now + 1) % slideCount;
    slideWrap.css({ left: now * -100 + "%", transition: "all 0.3s" });
  }, 3000);

  // tab
  tabItem = $(".tab-item");
  tabItem.first().parents(".tab").addClass("active");
  tabItem.on("click", function (event) {
    // 클릭 이벤트 방지
    event.preventDefault();

    tabItem.parents(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });

  // modal
  const firstCont = $(".bbs ul li:first-child a");
  const modalBtn = $("#modal button");
  const modal = $("#modal");

  modal.hide();
  firstCont.on("click", function () {
    modal.show();
  });
  modalBtn.on("click", function () {
    modal.hide();
  });
});
