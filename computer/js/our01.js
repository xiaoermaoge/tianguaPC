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
//    //����ǰtitle����һ���ֵܣ��л�in class, ��ѡ�������ֵ���classΪcontent��div���Ƴ�in
//    $(this).next()
//        .toggleClass("in")
//        .siblings(".content")
//        .removeClass("in");
//})

