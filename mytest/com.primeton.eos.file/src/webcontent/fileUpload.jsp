<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" session="false" %>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<!-- 
  - Author(s): caiyubo
  - Date: 2018-08-02 14:47:53
  - Description:
-->
<head>
<title>fileUpload</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <script src="<%= request.getContextPath() %>/common/nui/nui.js" type="text/javascript"></script>  
</head>
<body>

	<form action=<%= request.getContextPath() %>/FileUpServlet  method="post" enctype="multipart/form-data" >
		选择文件:<input name = "file" type = "file" ><br>
		<input type="submit" value="提交">	
	</form>
	<script type="text/javascript">
    	nui.parse();
    </script>
</body>
</html>