var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
//        slide滑动方向，可设置水平或垂直...
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    mousewheelControl: true,
    hashnav: true,
    speed: 800,
    onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function (swiper) {
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});
//box3
//$('.box3_two ul li').hover(
//    function () {
//       $(this).addClass('')
//   }
//)
//导航条 hover效果
$('.head .head_right ul li').on('mouseenter',function(){
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
});
$('.head .head_right ul li').on('mouseleave',function(){
    $(this).removeClass('hover'),
        $('.head .head_right ul .head_right_first').addClass('hover');
})


//浏览器低版本处理
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
};
//BrowserDetect.init();
//if(test.BrowserDetect.version <= 8 && test.BrowserDetect.browser == "Explorer"){
//    alert("IE版本小于8，请更新！");
//}



//预加载 start
// 等待所有加载
$(window).load(function(){
    $('.box1_jia').remove();
    //console.log(1);
});
//预加载 end

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

var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F6f78563c84d8cf1a727be5b1bfc0291c' type='text/javascript'%3E%3C/script%3E"));