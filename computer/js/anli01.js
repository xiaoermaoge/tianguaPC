/**
 * Created by Administrator on 2017/3/29.
 */
//�ֲ���Ŀչʾ
$(function(){
    //Ĭ��״̬�����ҹ���
    $("#s1").xslider({
        unitdisplayed:3,
        movelength:1,
        unitlen:302,
        autoscroll:null,
    });
})
//head
$('.head .head_right ul li').on('mouseenter',function(){
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
});
$('.head .head_right ul li').on('mouseleave',function(){
    $(this).removeClass('hover'),
        $('.head .head_right ul .head_right_second').addClass('hover');
})

//�б����Ч��
$(document).ready(function() {
    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled:true
            }
        });
    });
});

//浏览器返回事件
if (window.history && window.history.pushState) {

    $(window).on('popstate', function() {
        var hashLocation = location.hash;
        var hashSplit = hashLocation.split("#!/");
        var hashName = hashSplit[1];

        if (hashName !== '') {
            var hash = window.location.hash;
            if (hash === '') {
                // console.log(1);
                // document.body.scrollTop = 0;
                // alert(document.body.scrollTop);
                // alert(111);
            }
        }
    });

    window.history.pushState('forward', null, './#forward');
}