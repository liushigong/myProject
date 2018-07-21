<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/common/taglibs.jsp" %>
<script src="${static_ctx}/page/jquery.min.js"></script>
<script type="text/javascript" src="${static_ctx}/page/jquery.page.js"></script>
<link rel="stylesheet" href="${static_ctx}/page/jquery.page.css">
<script type="text/javascript">
    $(function () {
        $("#page").Page({
            totalPages: ${page.totalPage},//分页总数
            liNum: 7,//分页的数字按钮数(建议取奇数)
            activeClass: 'activeP', //active 类样式定义
            pageNo: ${page.pageNo},
            callBack: function (page) {
                $("#pageNo").val(page);
                $("#pageForm").submit();
            }
        });
    });

    function page(){
        $("#pageNo").val(1)
    }
</script>
<div id="page" style="margin-top:20px ">

</div>


