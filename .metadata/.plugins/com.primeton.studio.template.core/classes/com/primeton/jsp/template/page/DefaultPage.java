package com.primeton.jsp.template.page;

import java.util.HashMap;

public class DefaultPage
{
  protected static String nl;
  public static synchronized DefaultPage create(String lineSeparator)
  {
    nl = lineSeparator;
    DefaultPage result = new DefaultPage();
    nl = null;
    return result;
  }

  public final String NL = nl == null ? (System.getProperties().getProperty("line.separator")) : nl;
  protected final String TEXT_1 = "<%@ page language=\"java\" contentType=\"text/html; charset=UTF-8\"" + NL + "\tpageEncoding=\"UTF-8\" session=\"false\" %>" + NL + "\t" + NL + "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">" + NL + "<html>" + NL + "<!-- " + NL + "  - Author(s): ";
  protected final String TEXT_2 = NL + "  - Date: ";
  protected final String TEXT_3 = " ";
  protected final String TEXT_4 = NL + "  - Description:" + NL + "-->" + NL + "<head>" + NL + "<title>";
  protected final String TEXT_5 = "</title>" + NL + "    <meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" />" + NL + "    <script src=\"<%= request.getContextPath() %>/common/nui/nui.js\" type=\"text/javascript\"></script>" + NL + "    " + NL + "</head>" + NL + "<body>" + NL + "" + NL + "" + NL + "" + NL + "\t<script type=\"text/javascript\">" + NL + "    \tnui.parse();" + NL + "    </script>" + NL + "</body>" + NL + "</html>";

  public String generate(Object argument)
  {
    final StringBuffer stringBuffer = new StringBuffer();
    
HashMap map = (HashMap)argument;
String fileTitle = (String)map.get("title");
String author = (String)map.get("author");
String date = (String)map.get("date");
String time = (String)map.get("time");

    stringBuffer.append(TEXT_1);
    stringBuffer.append(author);
    stringBuffer.append(TEXT_2);
    stringBuffer.append(date);
    stringBuffer.append(TEXT_3);
    stringBuffer.append(time);
    stringBuffer.append(TEXT_4);
    stringBuffer.append(fileTitle);
    stringBuffer.append(TEXT_5);
    return stringBuffer.toString();
  }
}
