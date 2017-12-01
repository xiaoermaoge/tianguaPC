/**
 * Created by Administrator on 2017/3/22.
 */
$('.body_left li a').click(function(){
   //$('.body_left li').addClass('active').siblings().hasClass('active').removeClass('active');
    //$(this).siblings().removeClass('active');
    $('.body_left li a').next().toggleClass('active').siblings().removeClass('active');
})
//head
$('.head_right ul li').on('mouseenter',function(){
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
});
$('.head_right ul li').on('mouseleave',function(){
    $(this).removeClass('hover'),
        $('.head .head_right ul .head_right_fourth').addClass('hover');
})


//$("[data-toggle='title']").click(function(){
//    //将当前title的下一个兄弟，切换in class, 再选择其余兄弟中class为content的div，移除in
//    $(this).next()
//        .toggleClass("in")
//        .siblings(".content")
//        .removeClass("in");
//})

