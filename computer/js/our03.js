/**
 * Created by Administrator on 2017/3/23.
 */
$('.body .body_left ul li a').click(function(){
    //$('.body .body_left ul li').addClass('active');
    //$(this).siblings().removeClass('active');
    $('.body_left li a').next().toggleClass('active').siblings().removeClass('active');
})
//head
//head
$('.head_right ul li').on('mouseenter',function(){
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
});
$('.head_right ul li').on('mouseleave',function(){
    $(this).removeClass('hover'),
        $('.head .head_right ul .head_right_fourth').addClass('hover');
})