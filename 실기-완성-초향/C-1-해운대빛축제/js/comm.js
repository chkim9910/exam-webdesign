$(function () {
    let now = 0
    const slideLength = $('.slide-el').length
    const slideBox = $('.slide-box')
    console.log(slideLength)

    // 슬라이드 페이드인아웃
    setInterval(function () {
        next = (now + 1) % slideLength
        slideBox.find('li').eq(now).fadeOut(400)
        slideBox.find('li').eq(next).fadeIn(400)
        now = next
    }, 3000)

    // 슬라이드 상하
    // setInterval(function () {
    //     now = (now + 1) % slideLength
    //     slideBox.css({ top: now * -100 + '%', transition: 'all, 0.3s' })
    // }, 3000)
})
