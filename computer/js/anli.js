/**
 * Created by Administrator on 2017/3/27.
 */
//$('.head .head_right ul li').on("mouseenter", function () {
//    $(this).next().toggleClass('hover').siblings().removeClass('hover');
//}).on("mouseleave", function () {
//    $('.head_right_second').addClass("hover");
//}
//head
$('.head .head_right ul li').on('mouseenter',function(){
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
});
$('.head .head_right ul li').on('mouseleave',function(){
    $(this).removeClass('hover'),
    $('.head .head_right ul .head_right_second').addClass('hover');
})

$('#nav_scroll ul:first').css(
    'height','993'
)

//滚动添加数据
$(document).ready(function(){
    var range = 480;             //距下边界长度/单位px
    var elemt = 500;           //插入元素高度/单位px
    var maxnum = 4;            //设置加载最多次数
    var num = 1;
    var totalheight = 0;
    var main = $("#nav_ul");                     //主体元素

    $(window).scroll(function(){
         var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
        // console.log(srollPos);
         var srollPob = $(document).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
        // console.log(srollPob+'one');

        //console.log("滚动条到顶部的垂直高度: "+$(document).scrollTop());
        // console.log("页面的文档高度 ："+$(document).height());
        //console.log('浏览器的高度：'+$(window).height());


        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
        if(($(document).height()-range) <= totalheight  && num != maxnum) {
            console.log(num);
            console.log(maxnum);
               $('#nav_scroll').append(
                   `
                   <ul id="nav_ul">
                        <li>
                        <div class="nav_one_li01da">
                            <div class="nav_one_li01">
                                <img src="images/anli-444.png" alt=""/>
                            </div>
                        </div>

                        <div class="nav_one_li02">
                            <img src="images/anli-11.png" alt=""/>
                        </div>
                        <div class="nav_one_li03">
                            <div class="nav_one_li03_text01">
                                COCO快信
                            </div>
                            <div class="nav_one_li03_text02">
                                1234324产品介绍产
                            </div>
                            <div class="nav_one_li04"></div>
                            <div class="nav_one_li05">
                                查看
                            </div>
                        </div>
                        <a href="anli01.html"></a>
                    </li>
                    <li>
                        <div class="nav_one_li01da">
                            <div class="nav_one_li01">
                                <img src="images/anli-444.png" alt=""/>
                            </div>
                        </div>

                        <div class="nav_one_li02">
                            <img src="images/anli-11.png" alt=""/>
                        </div>
                        <div class="nav_one_li03">
                            <div class="nav_one_li03_text01">
                                COCO快信
                            </div>
                            <div class="nav_one_li03_text02">
                                1234324产品介绍产
                            </div>
                            <div class="nav_one_li04"></div>
                            <div class="nav_one_li05">
                                查看
                            </div>
                        </div>
                        <a href="anli01.html"></a>
                    </li>
                    <li>
                        <div class="nav_one_li01da">
                            <div class="nav_one_li01">
                                <img src="images/anli-444.png" alt=""/>
                            </div>
                        </div>

                        <div class="nav_one_li02">
                            <img src="images/anli-11.png" alt=""/>
                        </div>
                        <div class="nav_one_li03">
                            <div class="nav_one_li03_text01">
                                COCO快信
                            </div>
                            <div class="nav_one_li03_text02">
                                1234324产品介绍产
                            </div>
                            <div class="nav_one_li04"></div>
                            <div class="nav_one_li05">
                                查看
                            </div>
                        </div>
                        <a href="anli01.html"></a>
                    </li>
                    <li>
                        <div class="nav_one_li01da">
                            <div class="nav_one_li01">
                                <img src="images/anli-444.png" alt=""/>
                            </div>
                        </div>

                        <div class="nav_one_li02">
                            <img src="images/anli-11.png" alt=""/>
                        </div>
                        <div class="nav_one_li03">
                            <div class="nav_one_li03_text01">
                                COCO快信
                            </div>
                            <div class="nav_one_li03_text02">
                                1234324产品介绍产
                            </div>
                            <div class="nav_one_li04"></div>
                            <div class="nav_one_li05">
                                查看
                            </div>
                        </div>
                        <a href="anli01.html"></a>
                    </li>
                    <li>
                        <div class="nav_one_li01da">
                            <div class="nav_one_li01">
                                <img src="images/anli-444.png" alt=""/>
                            </div>
                        </div>

                        <div class="nav_one_li02">
                            <img src="images/anli-11.png" alt=""/>
                        </div>
                        <div class="nav_one_li03">
                            <div class="nav_one_li03_text01">
                                COCO快信
                            </div>
                            <div class="nav_one_li03_text02">
                                1234324产品介绍产
                            </div>
                            <div class="nav_one_li04"></div>
                            <div class="nav_one_li05">
                                查看
                            </div>
                        </div>
                        <a href="anli01.html"></a>
                    </li>
                    <li>
                        <div class="nav_one_li01da">
                            <div class="nav_one_li01">
                                <img src="images/anli-444.png" alt=""/>
                            </div>
                        </div>

                        <div class="nav_one_li02">
                            <img src="images/anli-11.png" alt=""/>
                        </div>
                        <div class="nav_one_li03">
                            <div class="nav_one_li03_text01">
                                COCO快信
                            </div>
                            <div class="nav_one_li03_text02">
                                1234324产品介绍产
                            </div>
                            <div class="nav_one_li04"></div>
                            <div class="nav_one_li05">
                                查看
                            </div>
                        </div>
                        <a href="anli01.html"></a>
                    </li>
                    <li>
                        <div class="nav_one_li01da">
                            <div class="nav_one_li01">
                                <img src="images/anli-444.png" alt=""/>
                            </div>
                        </div>

                        <div class="nav_one_li02">
                            <img src="images/anli-11.png" alt=""/>
                        </div>
                        <div class="nav_one_li03">
                            <div class="nav_one_li03_text01">
                                COCO快信
                            </div>
                            <div class="nav_one_li03_text02">
                                1234324产品介绍产
                            </div>
                            <div class="nav_one_li04"></div>
                            <div class="nav_one_li05">
                                查看
                            </div>
                        </div>
                        <a href="anli01.html"></a>
                    </li>
                    </ul>
                 `
               );
            num++;
             console.log(num);
             alert(num);
            var last_ul=document.querySelectorAll('#nav_scroll ul:last-child');
            //console.log(last_ul);
            var children=$(last_ul).children('li').length;
            if(children<=3){
                $(last_ul).css(
                    'height','502'
                )
            }else{
                $(last_ul).css(
                    'height','993'
                )
            }

        }
        if(maxnum==4){
            $('#nav_paging').attr(
                'style','display:block'
            )
        }
    });
});

//懒加载图片
$(function () {
    $("img.lazy").lazyload({
        event: "sporty"
    });
});
$(window).bind("load", function () {
    var timeout = setTimeout(function () {
        $("img.lazy").trigger("sporty");
    }, 1000);
});





