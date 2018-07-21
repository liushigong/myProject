<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/common/taglibs.jsp" %>
<html>
<body>
<div>
    <div style="text-align: center">
        <form id="pageForm" method="post">
            <input type="hidden" id="pageNo" name="pageNo">
            <label style="font-size: small;color: #6D7781;">code:</label>
            <input type="text" id="code" name="code" value="${city.code}">
            <input type="submit" value="查询" onclick="return page()">
        </form>
    </div>
    <div>
        <table style="width:50%;margin: auto">
            <tbody>
            <tr>
                <th height="38" width="33%">id</th>
                <th width="33%">code</th>
                <th width="33%">name</th>
            </tr>
            <c:forEach items="${cityList}" var="item" varStatus="status">
                <tr>
                    <td style="text-align: center">${item.id}</td>
                    <td style="text-align: center">${item.code}</td>
                    <td style="text-align: center">${item.name}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
    <%@include file="/common/pageBase.jsp" %>
</div>

</body>
</html>
