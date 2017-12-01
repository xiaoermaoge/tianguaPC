/**
 * Created by Administrator on 2017/3/30.
 */
//head
$('.head .head_right ul li').on('mouseenter',function(){
    $(this).addClass('hover_head_right');
    $(this).siblings().removeClass('hover_head_right');
});
$('.head .head_right ul li').on('mouseleave',function(){
    $(this).removeClass('hover_head_right'),
        $('.head .head_right ul .head_right_thrid').addClass('hover_head_right');
})


//轮播
var mySwiper = new Swiper('.swiper-container',{
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    pagination : '.swiper-pagination',
    paginationClickable :true,
    updateOnImagesReady : true,
    autoplay:5000,
})

//���һ��div
$('.xian_box:last').css(
    'padding-bottom','70px'
)

//懒加载图片
$(function () {
    $("img.lazy").lazyload({
        event: "sporty"
    });
});
$(window).bind("load", function () {
    var timeout = setTimeout(function () {
        $("img.lazy").trigger("sporty");
    }, 3000);
});

var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F6f78563c84d8cf1a727be5b1bfc0291c' type='text/javascript'%3E%3C/script%3E"));