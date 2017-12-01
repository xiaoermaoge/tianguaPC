/**
 * Created by Administrator on 2017/3/30.
 */
//head
$('.head .head_right ul li').on('mouseenter',function(){
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
});
$('.head .head_right ul li').on('mouseleave',function(){
    $(this).removeClass('hover'),
        $('.head .head_right ul .head_right_thrid').addClass('hover');
})