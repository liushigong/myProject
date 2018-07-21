/* 
*page plugin 1.0
*/
(function ($) {
    //默认参数
    var defaults = {
        totalPages: 9,//总页数
        liNum: 9,//分页的数字按钮数(建议取奇数)
        activeClass: 'active',//active类
        firstPage: '首页',//首页按钮名称
        lastPage: '末页',//末页按钮名称
        prv: '«',//前一页按钮名称
        next: '»',//后一页按钮名称
        hasFirstPage: true,//是否有首页按钮
        hasLastPage: true,//是否有末页按钮
        hasPrv: true,//是否有前一页按钮
        hasNext: true,//是否有后一页按钮
        callBack: function (page) {
            //回调函数 （参数）：page选中页数
        }
    };

    //插件名称
    $.fn.Page = function (options) {
        //覆盖默认参数
        var opts = $.extend(defaults, options);
        //主函数
        return this.each(function () {
            var obj = $(this);
            /* 总页数 */
            var totalPages = opts.totalPages;
            /* 定义展示多少页数 */
            var n = opts.liNum;
            /* 选中的样式 */
            var active = opts.activeClass;
            /* 选中的页数 */
            var pageNo = opts.pageNo;
            /* 第二页及后面的页码 */
            var str = '';
            /* 第一页页码 */
            var str1 = validate(pageNo);


            /**
             * 整体数据拼接
             * @type {string}
             */
            var dataHtml = '';
            if (opts.hasNext) {
                dataHtml += '<div class="next fr">' + opts.next + '</div>';
            }

            if (opts.hasLastPage) {
                dataHtml += '<div class="last fr">' + opts.lastPage + '</div>';
            }

            dataHtml += '<ul class="pagingUl">' + str1 + str + '</ul>';

            if (opts.hasFirstPage) {
                dataHtml += '<div class="first fr">' + opts.firstPage + '</div>';
            }

            if (opts.hasPrv) {
                dataHtml += '<div class="prv fr">' + opts.prv + '</div>';
            }

            obj.html(dataHtml).off("click");//防止插件重复调用时，重复绑定事件

            obj.on('click', '.next', function () {
                var selectVal = parseInt($('.' + active).html());
                if (selectVal >= totalPages) {
                    return;
                }
                opts.callBack(selectVal + 1);
            });

            obj.on('click', '.prv', function () {
                var selectVal = parseInt($('.' + active).html());
                if (selectVal <= 1) {
                    return;
                }
                opts.callBack(selectVal - 1);
            });

            obj.on('click', '.first', function () {
                var selectVal = parseInt($('.' + active).html());
                if (selectVal <= 1) {
                    return
                }//当前第一页
                opts.callBack(1);
            });

            obj.on('click', '.last', function () {
                var selectVal = parseInt($('.' + active).html());
                if (selectVal >= totalPages) {
                    return;
                }//当前最后一页
                opts.callBack(totalPages);
            });

            obj.on('click', 'li', function () {
                var $this = $(this);
                var pageShow = parseInt($this.find('a').html());
                opts.callBack(pageShow);
            });

            //判断liNum的奇偶性
            function parity(n) {
                var a = n % 2;
                if (a == 0) {
                    //偶数
                    return n;
                } else if (a == 1) {
                    //奇数
                    return (n + 1);
                }
            }

            /*校验当前页码*/
            function validate(pn) {
                if (pn == undefined || pn == null || pn == '' || pn == NaN || pn == '1' || pn == 1) {
                    /* 第二页开始页码数据拼接 */
                    if (totalPages > 1 && totalPages < n + 1) {
                        for (var i = 2; i < totalPages + 1; i++) {
                            str += handle(pn, i);
                        }
                    } else if (totalPages > n) {
                        for (var i = 2; i < n + 1; i++) {
                            str += handle(pn, i);
                        }
                    }
                    return '<li><a href="javascript:" class="activeP">1</a></li>';
                } else if (pn > 1) {
                    return pageShow(pn);
                } else {
                    /* 第二页开始页码数据拼接 */
                    if (totalPages > 1 && totalPages < n + 1) {
                        for (var i = 2; i < totalPages + 1; i++) {
                            str += handle(pn, i);
                        }
                    } else if (totalPages > n) {
                        for (var i = 2; i < n + 1; i++) {
                            str += handle(pn, i);
                        }
                    }
                    return '<li><a href="javascript:">1</a></li>'
                }
            }

            /* 校验当前选中的页码 */
            function handle(pn, i) {
                if (pn == i) {
                    return '<li><a href="javascript:" class="activeP">' + i + '</a></li>';
                } else {
                    return '<li><a href="javascript:">' + i + '</a></li>';
                }
            }

            /* 初始化展示的页码 */
            function pageShow(activePage) {
                var pageStart = calc(activePage);
                var str1 = '';
                for (var i = 0; i < n; i++) {
                    if ((pageStart + i) <= totalPages) {
                        if (activePage == (pageStart + i)) {
                            str1 += '<li><a href="javascript:" class="activeP">' + (pageStart + i) + '</a></li>'
                        } else {
                            str1 += '<li><a href="javascript:" class="">' + (pageStart + i) + '</a></li>'
                        }
                    }
                }
                return str1;
            }

            /* 计算首页与末页时，展示选中的左右两侧的页码 */
            function calc(activePage) {
                debugger
                var num = parity(n);
                var pageStartNum = activePage - (num / 2 - 1);
                if (pageStartNum < 1) {
                    pageStartNum += ((num / 2 - 1) - activePage + 1);
                } else {
                    if (totalPages > n && (totalPages - activePage) < (num / 2 - 1)) {
                        pageStartNum -= ((num / 2 - 1) - (totalPages - activePage));
                    }
                }
                return pageStartNum;
            }

        });
    }
})(jQuery);