/**
 * Created by Administrator on 2017/4/12.
 */
/**
 *	ͼƬ�ӳټ��ز��
 *   @author ydx
 *   2015.5.19
 */
(function(window, $){
    //ͼƬ�ӳټ���ʵ�ֺ���
    var YdxLazyLoad = function(window, $) {
        //Ĭ�ϲ���
        var defaultOption = {
            threshold: 0, //������
            failure_limit : 0,
            event: "scroll resize", //�����¼�
            effect: "fadeIn", //��ʾģʽ��֧��jquery������ʾ��ʽ
            container: window, //����
            effectTime: 300, //ͼƬ��ʾʱ��
            callback: null //ͼƬ��ʾ��ִ�еĻص�����
        };

        //option����������
        var optionHandel = {
            //���ò�������
            setOption : function(element, opt) {
                return element.data("_YdxLazyLoadOption_", opt);
            },

            //��ȡ��������
            getOption : function(element) {
                return element.data("_YdxLazyLoadOption_");
            },

            //ɾ���������
            removeOption : function(element) {
                return element.removeData("_YdxLazyLoadOption_");

            }
        };


        //�ж�ͼƬԪ��λ��
        var checkPosition = {
            ////�ж��Ƿ������������֮��
            above : function(element) {
                var fold,
                    $window = $(window),
                    option = optionHandel.getOption(element);

                if (option.container === undefined || option.container === window) {
                    fold = $window.height() + $window.scrollTop();
                } else {
                    fold = $(option.container).offset().top + $(option.container).height();
                }

                return fold >= $(element).offset().top + option.threshold;
            },

            //�ж��Ƿ������������֮��
            below : function(element) {
                var fold,
                    $window = $(window),
                    option = optionHandel.getOption(element);

                if (option.container === undefined || option.container === window) {
                    fold = $window.height() + $window.scrollTop();
                } else {
                    fold = $(option.container).offset().top + $(option.container).height();
                }

                return fold <= $(element).offset().top - option.threshold;
            },

            //�ж��Ƿ��ں�����������
            left : function(element) {
                var fold,
                    $window = $(window),
                    option = optionHandel.getOption(element);

                if (option.container === undefined || option.container === window) {
                    fold = $window.width() + $window.scrollLeft();
                } else {
                    fold = $(option.container).offset().left + $(option.container).width();
                }

                return fold >= $(element).offset().left + option.threshold;
            },

            //�ж��Ƿ��ں���������Ҳ�
            right : function(element) {
                var fold,
                    $window = $(window),
                    option = optionHandel.getOption(element);

                if (option.container === undefined || option.container === window) {
                    fold = $window.width() + $window.scrollLeft();
                } else {
                    fold = $(option.container).offset().left + $(option.container).width();
                }

                return fold <= $(element).offset().left - option.threshold;
            },

            flag : function(element) {
                var option = optionHandel.getOption(element);
                return !$.rightoffold(element, element) && !$.leftofbegin(element, element) &&
                    !$.belowthefold(element, element) && !$.abovethetop(element, element);
            }
        };

        function showImg() {
            var $this = $(this),
                opt = optionHandel.getOption($this);
            if (!opt.isLoad) {
                var currentImgSrc = opt.src || $this.attr("lazyLoadSrc");
                $(new Image()).attr("src", currentImgSrc).load([opt, $this], function(e) {
                    var para = e.data,
                        opt = para[0],
                        element = para[1];
                    element.attr("src", currentImgSrc).hide()[opt.effect](opt.effectTime);
                    opt.isLoad = true;
                    opt.callback && opt.callback.call(element, currentImgSrc);
                    $(this).unbind("load");
                    opt.onShow && opt.onShow.call(element);
                });
            }
        }

        //��ʼ���ؼ�
        function init() {
            //Ĭ����lazyLoadSrc���ԵĶ�����ӳټ���
            $("[lazyLoadSrc]:visible").each(function(i, element) {
                add($(element));
            });
        }

        /**
         * ����ӳټ��ذ�
         * @���� element: ���󶨵�Ԫ��
         *		opt: ���ò���
         */
        function add(element, opt) {
            if (optionHandel.getOption(element)) {
                return;
            }
            //element.load([opt],function(e) {
            //var opt = e.data[0],
            //	element = $(this);
            //�ϲ�����
            opt = $.extend(true, {}, defaultOption, opt);

            //���������浽data�У�ͬʱ����ʾͼƬ�¼�
            optionHandel.setOption(element, opt).bind("showImg", showImg);

            var $container = $(opt.container),
                containerData = {elementMap : {}, num : 0};
            //��ʼ�������Ĵ洢����
            if (!$container.data("_YdxLazyLoad_container_")) {
                $container.data("_YdxLazyLoad_container_", containerData);
            } else {
                containerData = $container.data("_YdxLazyLoad_container_");
            }

            //��Ԫ�ر��浽�����洢������
            opt._index = containerData.num;
            containerData.elementMap[containerData.num++] = element;

            //�ж������Ƿ��Ѱ��¼�
            if (!containerData.isBind || containerData.event !== opt.event) {
                $container.bind(opt.event, function(e){
                    var data = $(this).data("_YdxLazyLoad_container_"),
                        elementMap = data.elementMap;

                    //ѭ���ж�Ԫ���Ƿ�������ʾҪ��
                    $.each(elementMap, function(key, el) {
                        if (el.data("_YdxLazyLoadOption_")) {
                            if (checkPosition.above(el) && checkPosition.left(el)) {
                                el.trigger("showImg");
                                delete elementMap[key];
                            }
                        } else {
                            delete elementMap[key];
                            el.remove();
                        }
                    });
                    return false;
                });
                //��ʶ�����Ѱ��¼�
                containerData.isBind = true;
                containerData.event = opt.event;
            }
            //�ֶ�����һ�ΰ��¼�
            $.each(opt.event.split(" "), function(i, event) {
                if (event === 'scroll') {
                    var e = $.Event(event, {scrollTop: $('body').scrollTop()});
                    $container.trigger(e);
                    return;
                }
                $container.trigger(event);
            });

            //ɾ��load��
            //element.unbind("load");
            //})
        }

        /**
         * ɾ���ӳټ��ذ�
         * @���� element: ���󶨵�Ԫ��
         */
        function remove(element) {
            var opt = optionHandel.getOption(element);
            //ɾ����Ӧ�����е�ӳ���ϵ
            delete $(opt.container).data("_YdxLazyLoad_container_").elementMap[opt._index];
            //ɾ��Ԫ���е�_YdxLazyLoadOption_����
            optionHandel.removeOption(element);
        }

        return {
            init : init,
            add : add,
            remove : remove
        };

    }(window, $);


    //
    $.fn.YdxLazyLoad = function(opt) {
        return this.each(function() {
            switch($.type(opt)) {
                //�������������Ϊjson���������add����
                case "undefined":
                case "object":
                    YdxLazyLoad.add($(this), opt);
                    break;
                //�������Ϊstring���ͣ����ж�Ϊ��������
                case "string":
                    var args = Array.prototype.slice.call(arguments, 1);
                    args.unshift($(this));
                    YdxLazyLoad[opt].call(YdxLazyLoad, args);
                    break;
            }
        });
    };
})(window, jQuery)


