
/* 메뉴 슬라이드 */
$('#header .mainNav > ul > li').mouseover(function(){
   $(this).find('.mainNavSub').stop().slideDown(350);
});
$('#header .mainNav > ul > li').mouseleave(function(){
   $(this).find('.mainNavSub').stop().slideUp(350);
});

/* 이미지 슬라이드 플러그인 */
$('.imgSlide').slick({
   dots: false,
   autoplay: true,
   autoplaySpeed: 3000,
   arrows: false,
});

$('.imgSlide2').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2500,
 });