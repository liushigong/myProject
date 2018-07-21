<%@ page contentType="text/html;charset=UTF-8" trimDirectiveWhitespaces="true" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/> <%-- 上下文路径，用于页面中的请求 --%>
<c:set var="static_ctx" value="${pageContext.request.contextPath}"/> <%-- 静态资源上下文路径，用于图片、js、css等静态资源 --%>
