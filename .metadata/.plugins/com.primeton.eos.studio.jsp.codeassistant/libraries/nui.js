nui = {};
/**
 * @constructor
 */
nui.prototype = {};

 /**
  * 
  * function parse()
  * @memberOf nui
  * @static
  * @see nui
  */
nui.parse = function(){};

 /**
  * 把JS对象序列化为字符串<br/>
  * function encode(Object)
  * @memberOf nui
  * @param  Object
  * @returns {String}
  * @static
  * @see nui
  */
nui.encode = function(Object){return "";};

 /**
  * 把字符串反序列化为JS对象<br/>
  * function decode(String)
  * @memberOf nui
  * @param  String
  * @returns {Object}
  * @static
  * @see nui
  */
nui.decode = function(String){return new Object();};

 /**
  * 把字符串转换成Date类型对象。<br/>
  * function parseDate(String)
  * @memberOf nui
  * @param  String
  * @returns {Date}
  * @static
  * @see nui
  */
nui.parseDate = function(String){return new Date();};

 /**
  * 把Date类型转换为字符串<br/>
  * function formatDate(Date, String)
  * @memberOf nui
  * @param  Date
  * @param  String
  * @returns {String}
  * @static
  * @see nui
  */
nui.formatDate = function(Date, String){return "";};

 /**
  * 提示框<br/>
  * function alert(message, title, callback)
  * @memberOf nui
  * @param  message
  * @param  title
  * @param  callback
  * @static
  * @see nui
  */
nui.alert = function(message, title, callback){};

 /**
  * 选择提示框<br/>
  * function confirm(message, title, callback)
  * @memberOf nui
  * @param  message
  * @param  title
  * @param  callback
  * @static
  * @see nui
  */
nui.confirm = function(message, title, callback){};

 /**
  * 文本输入提示框<br/>
  * function prompt(message, title, callback, multi)
  * @memberOf nui
  * @param  message
  * @param  title
  * @param  callback
  * @param  multi
  * @static
  * @see nui
  */
nui.prompt = function(message, title, callback, multi){};

 /**
  * 加载提示框<br/>
  * function loading(message, title)
  * @memberOf nui
  * @param  message
  * @param  title
  * @static
  * @see nui
  */
nui.loading = function(message, title){};

 /**
  * 显示提示框<br/>
  * function showMessageBox(options)
  * @memberOf nui
  * @param  options
  * @static
  * @see nui
  */
nui.showMessageBox = function(options){};

 /**
  * 隐藏提示框<br/>
  * function hideMessageBox(messageId)
  * @memberOf nui
  * @param  messageId
  * @static
  * @see nui
  */
nui.hideMessageBox = function(messageId){};

 /**
  * 弹出子页面<br/>
  * function open(options)
  * @memberOf nui
  * @param  options
  * @static
  * @see nui
  */
nui.open = function(options){};

 /**
  * 执行异步 HTTP (Ajax) 请求。<br/>
  * function ajax(options)
  * @memberOf nui
  * @param  options
  * @static
  * @see nui
  */
nui.ajax = function(options){};

 /**
  * 当 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。<br/>
  * function ajaxComplete(fn)
  * @memberOf nui
  * @param  fn
  * @static
  * @see nui
  */
nui.ajaxComplete = function(fn){};

 /**
  * 当 Ajax 请求完成且出现错误时注册要调用的处理程序。这是一个 Ajax 事件。<br/>
  * function ajaxError(fn)
  * @memberOf nui
  * @param  fn
  * @static
  * @see nui
  */
nui.ajaxError = function(fn){};

 /**
  * 在 Ajax 请求发送之前显示一条消息。<br/>
  * function ajaxSend(fn)
  * @memberOf nui
  * @param  fn
  * @static
  * @see nui
  */
nui.ajaxSend = function(fn){};

 /**
  * 设置将来的 Ajax 请求的默认值。<br/>
  * function ajaxSetup(options)
  * @memberOf nui
  * @param  options
  * @static
  * @see nui
  */
nui.ajaxSetup = function(options){};

 /**
  * 当首个 Ajax 请求完成开始时注册要调用的处理程序。这是一个 Ajax 事件。<br/>
  * function ajaxStart(fn)
  * @memberOf nui
  * @param  fn
  * @static
  * @see nui
  */
nui.ajaxStart = function(fn){};

 /**
  * 当所有 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。<br/>
  * function ajaxStop(fn)
  * @memberOf nui
  * @param  fn
  * @static
  * @see nui
  */
nui.ajaxStop = function(fn){};

 /**
  * 当 Ajax 请求成功完成时显示一条消息。<br/>
  * function ajaxSuccess(fn)
  * @memberOf nui
  * @param  fn
  * @static
  * @see nui
  */
nui.ajaxSuccess = function(fn){};

 /**
  * 使用 HTTP GET 请求从服务器加载数据。<br/>
  * function get(options)
  * @memberOf nui
  * @param  options
  * @static
  * @see nui
  */
nui.get = function(options){};

 /**
  * 使用 HTTP GET 请求从服务器加载 JSON 编码数据。<br/>
  * function getJSON(options)
  * @memberOf nui
  * @param  options
  * @static
  * @see nui
  */
nui.getJSON = function(options){};

 /**
  * 使用 HTTP GET 请求从服务器加载 JavaScript 文件，然后执行该文件。<br/>
  * function getScript(options)
  * @memberOf nui
  * @param  options
  * @static
  * @see nui
  */
nui.getScript = function(options){};

 /**
  * 从服务器加载数据，然后把返回到 HTML 放入匹配元素。<br/>
  * function load(options)
  * @memberOf nui
  * @param  options
  * @static
  * @see nui
  */
nui.load = function(options){};

 /**
  * 创建数组或对象的序列化表示，适合在 URL 查询字符串或 Ajax 请求中使用。<br/>
  * function param(obj, traditional)
  * @memberOf nui
  * @param  obj
  * @param  traditional
  * @returns {String}
  * @static
  * @see nui
  */
nui.param = function(obj, traditional){return "";};

 /**
  * 使用 HTTP POST 请求从服务器加载数据。<br/>
  * function post(options)
  * @memberOf nui
  * @param  options
  * @static
  * @see nui
  */
nui.post = function(options){};

/**
 * 获取DataBinding控件<br/>
 * function getDataBinding(id)
 * @param  id
 * @static
 * @returns {nui.DataBinding}
 * @see nui
 */ 
nui.getDataBinding = function(id){return new nui.DataBinding();};

/**
 * 获取Form控件<br/>
 * function getForm(id)
 * @param  id
 * @static
 * @returns {nui.Form}
 * @see nui
 */ 
nui.getForm = function(id){return new nui.Form();};

/**
 * 获取AutoComplete控件<br/>
 * function getAutoComplete(id)
 * @param  id
 * @static
 * @returns {nui.AutoComplete}
 * @see nui
 */ 
nui.getAutoComplete = function(id){return new nui.AutoComplete();};

/**
 * 获取TextBoxList控件<br/>
 * function getTextBoxList(id)
 * @param  id
 * @static
 * @returns {nui.TextBoxList}
 * @see nui
 */ 
nui.getTextBoxList = function(id){return new nui.TextBoxList();};

/**
 * 获取Button控件<br/>
 * function getButton(id)
 * @param  id
 * @static
 * @returns {nui.Button}
 * @see nui
 */ 
nui.getButton = function(id){return new nui.Button();};

/**
 * 获取MenuButton控件<br/>
 * function getMenuButton(id)
 * @param  id
 * @static
 * @returns {nui.MenuButton}
 * @see nui
 */ 
nui.getMenuButton = function(id){return new nui.MenuButton();};

/**
 * 获取CheckBox控件<br/>
 * function getCheckBox(id)
 * @param  id
 * @static
 * @returns {nui.CheckBox}
 * @see nui
 */ 
nui.getCheckBox = function(id){return new nui.CheckBox();};

/**
 * 获取ListBox控件<br/>
 * function getListBox(id)
 * @param  id
 * @static
 * @returns {nui.ListBox}
 * @see nui
 */ 
nui.getListBox = function(id){return new nui.ListBox();};

/**
 * 获取CheckBoxList控件<br/>
 * function getCheckBoxList(id)
 * @param  id
 * @static
 * @returns {nui.CheckBoxList}
 * @see nui
 */ 
nui.getCheckBoxList = function(id){return new nui.CheckBoxList();};

/**
 * 获取RadioButtonList控件<br/>
 * function getRadioButtonList(id)
 * @param  id
 * @static
 * @returns {nui.RadioButtonList}
 * @see nui
 */ 
nui.getRadioButtonList = function(id){return new nui.RadioButtonList();};

/**
 * 获取Calendar控件<br/>
 * function getCalendar(id)
 * @param  id
 * @static
 * @returns {nui.Calendar}
 * @see nui
 */ 
nui.getCalendar = function(id){return new nui.Calendar();};

/**
 * 获取ButtonEdit控件<br/>
 * function getButtonEdit(id)
 * @param  id
 * @static
 * @returns {nui.ButtonEdit}
 * @see nui
 */ 
nui.getButtonEdit = function(id){return new nui.ButtonEdit();};

/**
 * 获取PopupEdit控件<br/>
 * function getPopupEdit(id)
 * @param  id
 * @static
 * @returns {nui.PopupEdit}
 * @see nui
 */ 
nui.getPopupEdit = function(id){return new nui.PopupEdit();};

/**
 * 获取TextBox控件<br/>
 * function getTextBox(id)
 * @param  id
 * @static
 * @returns {nui.TextBox}
 * @see nui
 */ 
nui.getTextBox = function(id){return new nui.TextBox();};

/**
 * 获取Password控件<br/>
 * function getPassword(id)
 * @param  id
 * @static
 * @returns {nui.Password}
 * @see nui
 */ 
nui.getPassword = function(id){return new nui.Password();};

/**
 * 获取TextArea控件<br/>
 * function getTextArea(id)
 * @param  id
 * @static
 * @returns {nui.TextArea}
 * @see nui
 */ 
nui.getTextArea = function(id){return new nui.TextArea();};

/**
 * 获取ComboBox控件<br/>
 * function getComboBox(id)
 * @param  id
 * @static
 * @returns {nui.ComboBox}
 * @see nui
 */ 
nui.getComboBox = function(id){return new nui.ComboBox();};

/**
 * 获取DatePicker控件<br/>
 * function getDatePicker(id)
 * @param  id
 * @static
 * @returns {nui.DatePicker}
 * @see nui
 */ 
nui.getDatePicker = function(id){return new nui.DatePicker();};

/**
 * 获取Spinner控件<br/>
 * function getSpinner(id)
 * @param  id
 * @static
 * @returns {nui.Spinner}
 * @see nui
 */ 
nui.getSpinner = function(id){return new nui.Spinner();};

/**
 * 获取TimeSpinner控件<br/>
 * function getTimeSpinner(id)
 * @param  id
 * @static
 * @returns {nui.TimeSpinner}
 * @see nui
 */ 
nui.getTimeSpinner = function(id){return new nui.TimeSpinner();};

/**
 * 获取TreeSelect控件<br/>
 * function getTreeSelect(id)
 * @param  id
 * @static
 * @returns {nui.TreeSelect}
 * @see nui
 */ 
nui.getTreeSelect = function(id){return new nui.TreeSelect();};

/**
 * 获取Lookup控件<br/>
 * function getLookup(id)
 * @param  id
 * @static
 * @returns {nui.Lookup}
 * @see nui
 */ 
nui.getLookup = function(id){return new nui.Lookup();};

/**
 * 获取HtmlFile控件<br/>
 * function getHtmlFile(id)
 * @param  id
 * @static
 * @returns {nui.HtmlFile}
 * @see nui
 */ 
nui.getHtmlFile = function(id){return new nui.HtmlFile();};

/**
 * 获取FileUpload控件<br/>
 * function getFileUpload(id)
 * @param  id
 * @static
 * @returns {nui.FileUpload}
 * @see nui
 */ 
nui.getFileUpload = function(id){return new nui.FileUpload();};

/**
 * 获取Hidden控件<br/>
 * function getHidden(id)
 * @param  id
 * @static
 * @returns {nui.Hidden}
 * @see nui
 */ 
nui.getHidden = function(id){return new nui.Hidden();};

/**
 * 获取RichText控件<br/>
 * function getRichText(id)
 * @param  id
 * @static
 * @returns {nui.RichText}
 * @see nui
 */ 
nui.getRichText = function(id){return new nui.RichText();};

/**
 * 获取Dict控件<br/>
 * function getDict(id)
 * @param  id
 * @static
 * @returns {nui.Dict}
 * @see nui
 */ 
nui.getDict = function(id){return new nui.Dict();};

/**
 * 获取DataGrid控件<br/>
 * function getDataGrid(id)
 * @param  id
 * @static
 * @returns {nui.DataGrid}
 * @see nui
 */ 
nui.getDataGrid = function(id){return new nui.DataGrid();};

/**
 * 获取Tree控件<br/>
 * function getTree(id)
 * @param  id
 * @static
 * @returns {nui.Tree}
 * @see nui
 */ 
nui.getTree = function(id){return new nui.Tree();};

/**
 * 获取TreeGrid控件<br/>
 * function getTreeGrid(id)
 * @param  id
 * @static
 * @returns {nui.TreeGrid}
 * @see nui
 */ 
nui.getTreeGrid = function(id){return new nui.TreeGrid();};

/**
 * 获取Fit控件<br/>
 * function getFit(id)
 * @param  id
 * @static
 * @returns {nui.Fit}
 * @see nui
 */ 
nui.getFit = function(id){return new nui.Fit();};

/**
 * 获取Panel控件<br/>
 * function getPanel(id)
 * @param  id
 * @static
 * @returns {nui.Panel}
 * @see nui
 */ 
nui.getPanel = function(id){return new nui.Panel();};

/**
 * 获取Window控件<br/>
 * function getWindow(id)
 * @param  id
 * @static
 * @returns {nui.Window}
 * @see nui
 */ 
nui.getWindow = function(id){return new nui.Window();};

/**
 * 获取Splitter控件<br/>
 * function getSplitter(id)
 * @param  id
 * @static
 * @returns {nui.Splitter}
 * @see nui
 */ 
nui.getSplitter = function(id){return new nui.Splitter();};

/**
 * 获取Layout控件<br/>
 * function getLayout(id)
 * @param  id
 * @static
 * @returns {nui.Layout}
 * @see nui
 */ 
nui.getLayout = function(id){return new nui.Layout();};

/**
 * 获取Pager控件<br/>
 * function getPager(id)
 * @param  id
 * @static
 * @returns {nui.Pager}
 * @see nui
 */ 
nui.getPager = function(id){return new nui.Pager();};

/**
 * 获取OutlookBar控件<br/>
 * function getOutlookBar(id)
 * @param  id
 * @static
 * @returns {nui.OutlookBar}
 * @see nui
 */ 
nui.getOutlookBar = function(id){return new nui.OutlookBar();};

/**
 * 获取OutlookMenu控件<br/>
 * function getOutlookMenu(id)
 * @param  id
 * @static
 * @returns {nui.OutlookMenu}
 * @see nui
 */ 
nui.getOutlookMenu = function(id){return new nui.OutlookMenu();};

/**
 * 获取OutlookTree控件<br/>
 * function getOutlookTree(id)
 * @param  id
 * @static
 * @returns {nui.OutlookTree}
 * @see nui
 */ 
nui.getOutlookTree = function(id){return new nui.OutlookTree();};

/**
 * 获取Tabs控件<br/>
 * function getTabs(id)
 * @param  id
 * @static
 * @returns {nui.Tabs}
 * @see nui
 */ 
nui.getTabs = function(id){return new nui.Tabs();};

/**
 * 获取Menu控件<br/>
 * function getMenu(id)
 * @param  id
 * @static
 * @returns {nui.Menu}
 * @see nui
 */ 
nui.getMenu = function(id){return new nui.Menu();};

/**
 * 获取MenuItem控件<br/>
 * function getMenuItem(id)
 * @param  id
 * @static
 * @returns {nui.MenuItem}
 * @see nui
 */ 
nui.getMenuItem = function(id){return new nui.MenuItem();};

/**
 * 获取ToolBar控件<br/>
 * function getToolBar(id)
 * @param  id
 * @static
 * @returns {nui.ToolBar}
 * @see nui
 */ 
nui.getToolBar = function(id){return new nui.ToolBar();};

/**
 * @constructor
 */
nui.Control.prototype = new  Object();

 /**
  * 获取控件DOM元素<br/>
  * function getEl()
  * @memberOf nui.Control
  * @see nui.Control
  */
nui.Control.prototype.getEl = function(){};

 /**
  * 监听事件。 例如：<br/>control.on("click", function(e){<br/>    //...<br/>});<br/>
  * function on(type, fn, scope)
  * @memberOf nui.Control
  * @param  type
  * @param  fn
  * @param  scope
  * @see nui.Control
  */
nui.Control.prototype.on = function(type, fn, scope){};

 /**
  * 取消监听事件<br/>
  * function un(type, fn, scope)
  * @memberOf nui.Control
  * @param  type
  * @param  fn
  * @param  scope
  * @see nui.Control
  */
nui.Control.prototype.un = function(type, fn, scope){};

 /**
  * 批量设置属性和事件，例如：<br/>control.set({<br/>visible: false,<br/>width: 200,<br/>onclick: functoin(e){<br/>//...<br/>}<br/>});<br/>
  * function set(options)
  * @memberOf nui.Control
  * @param  options
  * @see nui.Control
  */
nui.Control.prototype.set = function(options){};

 /**
  * 控件加入DOM元素呈现，如：<br/>control.render(document.body)<br/><br/>
  * function render(Element)
  * @memberOf nui.Control
  * @param  Element
  * @see nui.Control
  */
nui.Control.prototype.render = function(Element){};

 /**
  * 销毁控件<br/>
  * function destroy()
  * @memberOf nui.Control
  * @see nui.Control
  */
nui.Control.prototype.destroy = function(){};

 /**
  * 获取控件高度<br/>
  * function getHeight()
  * @memberOf nui.Control
  * @returns {Number}
  * @see nui.Control
  */
nui.Control.prototype.getHeight = function(){return 0;};

 /**
  * 显示控件<br/>
  * function show()
  * @memberOf nui.Control
  * @see nui.Control
  */
nui.Control.prototype.show = function(){};

 /**
  * 隐藏控件<br/>
  * function hide()
  * @memberOf nui.Control
  * @see nui.Control
  */
nui.Control.prototype.hide = function(){};

 /**
  * 启用控件<br/>
  * function enable()
  * @memberOf nui.Control
  * @see nui.Control
  */
nui.Control.prototype.enable = function(){};

 /**
  * 禁用控件<br/>
  * function disable()
  * @memberOf nui.Control
  * @see nui.Control
  */
nui.Control.prototype.disable = function(){};

 /**
  * 获取焦点<br/>
  * function focus()
  * @memberOf nui.Control
  * @see nui.Control
  */
nui.Control.prototype.focus = function(){};

 /**
  * 失去焦点<br/>
  * function blur()
  * @memberOf nui.Control
  * @see nui.Control
  */
nui.Control.prototype.blur = function(){};

 /**
  * 调整控件布局<br/>
  * function doLayout()
  * @memberOf nui.Control
  * @see nui.Control
  */
nui.Control.prototype.doLayout = function(){};

 /**
  * 增加样式类。<br/>
  * function addCls(String)
  * @memberOf nui.Control
  * @param  String
  * @see nui.Control
  */
nui.Control.prototype.addCls = function(String){};

 /**
  * 去除样式类<br/>
  * function removeCls(String)
  * @memberOf nui.Control
  * @param  String
  * @see nui.Control
  */
nui.Control.prototype.removeCls = function(String){};

 /**
  * 
  * function getId()
  * @memberOf nui.Control
  * @returns {String}
  * @see nui.Control
  */
nui.Control.prototype.getId = function(){return "";};

 /**
  * 
  * function setId(id)
  * @memberOf nui.Control
  * @param {String} id
  * @see nui.Control
  */
nui.Control.prototype.setId = function(id){};

 /**
  * 
  * function getName()
  * @memberOf nui.Control
  * @returns {String}
  * @see nui.Control
  */
nui.Control.prototype.getName = function(){return "";};

 /**
  * 
  * function setName(name)
  * @memberOf nui.Control
  * @param {String} name
  * @see nui.Control
  */
nui.Control.prototype.setName = function(name){};

 /**
  * 
  * function getVisible()
  * @memberOf nui.Control
  * @returns {Boolean}
  * @see nui.Control
  */
nui.Control.prototype.getVisible = function(){return true;};

 /**
  * 
  * function setVisible(visible)
  * @memberOf nui.Control
  * @param {Boolean} visible
  * @see nui.Control
  */
nui.Control.prototype.setVisible = function(visible){};

 /**
  * 
  * function getEnabled()
  * @memberOf nui.Control
  * @returns {Boolean}
  * @see nui.Control
  */
nui.Control.prototype.getEnabled = function(){return true;};

 /**
  * 
  * function setEnabled(enabled)
  * @memberOf nui.Control
  * @param {Boolean} enabled
  * @see nui.Control
  */
nui.Control.prototype.setEnabled = function(enabled){};

 /**
  * 
  * function getCls()
  * @memberOf nui.Control
  * @returns {String}
  * @see nui.Control
  */
nui.Control.prototype.getCls = function(){return "";};

 /**
  * 
  * function setCls(cls)
  * @memberOf nui.Control
  * @param {String} cls
  * @see nui.Control
  */
nui.Control.prototype.setCls = function(cls){};

 /**
  * 
  * function getStyle()
  * @memberOf nui.Control
  * @returns {String}
  * @see nui.Control
  */
nui.Control.prototype.getStyle = function(){return "";};

 /**
  * 
  * function setStyle(style)
  * @memberOf nui.Control
  * @param {String} style
  * @see nui.Control
  */
nui.Control.prototype.setStyle = function(style){};

 /**
  * 
  * function getBorderStyle()
  * @memberOf nui.Control
  * @returns {String}
  * @see nui.Control
  */
nui.Control.prototype.getBorderStyle = function(){return "";};

 /**
  * 
  * function setBorderStyle(borderStyle)
  * @memberOf nui.Control
  * @param {String} borderStyle
  * @see nui.Control
  */
nui.Control.prototype.setBorderStyle = function(borderStyle){};

 /**
  * 
  * function getWidth()
  * @memberOf nui.Control
  * @returns {Number}
  * @see nui.Control
  */
nui.Control.prototype.getWidth = function(){return 0;};

 /**
  * 
  * function setWidth(width)
  * @memberOf nui.Control
  * @param {Number} width
  * @see nui.Control
  */
nui.Control.prototype.setWidth = function(width){};

 /**
  * 
  * function getHeight()
  * @memberOf nui.Control
  * @returns {Number}
  * @see nui.Control
  */
nui.Control.prototype.getHeight = function(){return 0;};

 /**
  * 
  * function setHeight(height)
  * @memberOf nui.Control
  * @param {Number} height
  * @see nui.Control
  */
nui.Control.prototype.setHeight = function(height){};

 /**
  * 
  * function getTooltip()
  * @memberOf nui.Control
  * @returns {String}
  * @see nui.Control
  */
nui.Control.prototype.getTooltip = function(){return "";};

 /**
  * 
  * function setTooltip(tooltip)
  * @memberOf nui.Control
  * @param {String} tooltip
  * @see nui.Control
  */
nui.Control.prototype.setTooltip = function(tooltip){};

/**
 * @constructor
 */
nui.DataBinding.prototype = new nui.Control();

 /**
  * 绑定表格与表单<br/>
  * function bindForm(form, grid)
  * @memberOf nui.DataBinding
  * @param  form
  * @param  grid
  * @returns {Object}
  * @see nui.DataBinding
  */
nui.DataBinding.prototype.bindForm = function(form, grid){return new Object();};

 /**
  * 绑定表格与单个控件<br/>
  * function bindField(control, grid, field)
  * @memberOf nui.DataBinding
  * @param  control
  * @param  grid
  * @param  field
  * @see nui.DataBinding
  */
nui.DataBinding.prototype.bindField = function(control, grid, field){};

/**
 * @constructor
 */
nui.Form.prototype = new nui.Control();

 /**
  * 获取表单数据<br/>
  * function getData(formatter, deep)
  * @memberOf nui.Form
  * @param  formatter
  * @param  deep
  * @returns {Object}
  * @see nui.Form
  */
nui.Form.prototype.getData = function(formatter, deep){return new Object();};

 /**
  * 设置表单数据<br/>
  * function setData(Object)
  * @memberOf nui.Form
  * @param  Object
  * @see nui.Form
  */
nui.Form.prototype.setData = function(Object){};

 /**
  * 重置表单<br/>
  * function reset()
  * @memberOf nui.Form
  * @see nui.Form
  */
nui.Form.prototype.reset = function(){};

 /**
  * 清空表单<br/>
  * function clear()
  * @memberOf nui.Form
  * @see nui.Form
  */
nui.Form.prototype.clear = function(){};

 /**
  * 验证表单<br/>
  * function validate()
  * @memberOf nui.Form
  * @see nui.Form
  */
nui.Form.prototype.validate = function(){};

 /**
  * 表单是否验证通过<br/>
  * function isValid()
  * @memberOf nui.Form
  * @returns {Boolean}
  * @see nui.Form
  */
nui.Form.prototype.isValid = function(){return true;};

 /**
  * 设置数据验证结果<br/>
  * function setIsValid()
  * @memberOf nui.Form
  * @see nui.Form
  */
nui.Form.prototype.setIsValid = function(){};

 /**
  * 获取错误文本数组<br/>
  * function getErrorTexts()
  * @memberOf nui.Form
  * @returns {Array}
  * @see nui.Form
  */
nui.Form.prototype.getErrorTexts = function(){return [];};

 /**
  * 获取验证错误的控件数组<br/>
  * function getErrors()
  * @memberOf nui.Form
  * @returns {Array}
  * @see nui.Form
  */
nui.Form.prototype.getErrors = function(){return [];};

 /**
  * 加载遮罩表单区域<br/>
  * function loading()
  * @memberOf nui.Form
  * @see nui.Form
  */
nui.Form.prototype.loading = function(){};

 /**
  * 取消遮罩<br/>
  * function unmask()
  * @memberOf nui.Form
  * @see nui.Form
  */
nui.Form.prototype.unmask = function(){};

 /**
  * 设置是否变动<br/>
  * function setChanged(Boolean)
  * @memberOf nui.Form
  * @param  Boolean
  * @see nui.Form
  */
nui.Form.prototype.setChanged = function(Boolean){};

 /**
  * 判断是否变动<br/>
  * function isChanged()
  * @memberOf nui.Form
  * @returns {Boolean}
  * @see nui.Form
  */
nui.Form.prototype.isChanged = function(){return true;};

 /**
  * 设置是否禁用只读<br/>
  * function setEnabled(Boolean)
  * @memberOf nui.Form
  * @param  Boolean
  * @see nui.Form
  */
nui.Form.prototype.setEnabled = function(Boolean){};

 /**
  * 获取表单组件数组<br/>
  * function getFields()
  * @memberOf nui.Form
  * @returns {Array}
  * @see nui.Form
  */
nui.Form.prototype.getFields = function(){return [];};

/**
 * @constructor
 */
nui.AutoComplete.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.AutoComplete
  * @param  value
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.AutoComplete
  * @returns {String}
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.getValue = function(){return "";};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.AutoComplete
  * @returns {String}
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.getFormValue = function(){return "";};

 /**
  * 弹出下拉选择框，并自动检索填充数据。<br/>
  * function doQuery()
  * @memberOf nui.AutoComplete
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.doQuery = function(){};

 /**
  * 
  * function getValueField()
  * @memberOf nui.AutoComplete
  * @returns {String}
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.getValueField = function(){return "";};

 /**
  * 
  * function setValueField(valueField)
  * @memberOf nui.AutoComplete
  * @param {String} valueField
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.setValueField = function(valueField){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.AutoComplete
  * @returns {String}
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.AutoComplete
  * @param {String} textField
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.setTextField = function(textField){};

 /**
  * 
  * function getSearchField()
  * @memberOf nui.AutoComplete
  * @returns {String}
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.getSearchField = function(){return "";};

 /**
  * 
  * function setSearchField(searchField)
  * @memberOf nui.AutoComplete
  * @param {String} searchField
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.setSearchField = function(searchField){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.AutoComplete
  * @returns {String}
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.AutoComplete
  * @param {String} url
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.setUrl = function(url){};

 /**
  * 
  * function getColumns()
  * @memberOf nui.AutoComplete
  * @returns {Array}
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.getColumns = function(){return [];};

 /**
  * 
  * function setColumns(columns)
  * @memberOf nui.AutoComplete
  * @param {Array} columns
  * @see nui.AutoComplete
  */
nui.AutoComplete.prototype.setColumns = function(columns){};

/**
 * @constructor
 */
nui.TextBoxList.prototype = new nui.Control();

 /**
  * 设置数据获取地址<br/>
  * function setUrl(value)
  * @memberOf nui.TextBoxList
  * @param  value
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setUrl = function(value){};

 /**
  * 设置文本，比如："中国,美国,加拿大"。<br/>
  * function setText(value)
  * @memberOf nui.TextBoxList
  * @param  value
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setText = function(value){};

 /**
  * 设置值，比如："cn,usa,ca"。<br/>
  * function setValue(value)
  * @memberOf nui.TextBoxList
  * @param  value
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.TextBoxList
  * @returns {String}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getValue = function(){return "";};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.TextBoxList
  * @returns {String}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getFormValue = function(){return "";};

 /**
  * 验证控件值<br/>
  * function validate()
  * @memberOf nui.TextBoxList
  * @returns {Boolean}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.validate = function(){return true;};

 /**
  * 是否通过验证<br/>
  * function isValid()
  * @memberOf nui.TextBoxList
  * @returns {Boolean}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.isValid = function(){return true;};

 /**
  * 设置验证结果<br/>
  * function setIsValid(Boolean)
  * @memberOf nui.TextBoxList
  * @param  Boolean
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setIsValid = function(Boolean){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.TextBoxList
  * @returns {String}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getUrl = function(){return "";};

 /**
  * 
  * function getText()
  * @memberOf nui.TextBoxList
  * @returns {String}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getText = function(){return "";};

 /**
  * 
  * function getValueField()
  * @memberOf nui.TextBoxList
  * @returns {String}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getValueField = function(){return "";};

 /**
  * 
  * function setValueField(valueField)
  * @memberOf nui.TextBoxList
  * @param {String} valueField
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setValueField = function(valueField){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.TextBoxList
  * @returns {String}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.TextBoxList
  * @param {String} textField
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setTextField = function(textField){};

 /**
  * 
  * function getSearchField()
  * @memberOf nui.TextBoxList
  * @returns {String}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getSearchField = function(){return "";};

 /**
  * 
  * function setSearchField(searchField)
  * @memberOf nui.TextBoxList
  * @param {String} searchField
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setSearchField = function(searchField){};

 /**
  * 
  * function getAllowInput()
  * @memberOf nui.TextBoxList
  * @returns {Boolean}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getAllowInput = function(){return true;};

 /**
  * 
  * function setAllowInput(allowInput)
  * @memberOf nui.TextBoxList
  * @param {Boolean} allowInput
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setAllowInput = function(allowInput){};

 /**
  * 
  * function getRequired()
  * @memberOf nui.TextBoxList
  * @returns {Boolean}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getRequired = function(){return true;};

 /**
  * 
  * function setRequired(required)
  * @memberOf nui.TextBoxList
  * @param {Boolean} required
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setRequired = function(required){};

 /**
  * 
  * function getErrorMode()
  * @memberOf nui.TextBoxList
  * @returns {String}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getErrorMode = function(){return "";};

 /**
  * 
  * function setErrorMode(errorMode)
  * @memberOf nui.TextBoxList
  * @param {String} errorMode
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setErrorMode = function(errorMode){};

 /**
  * 
  * function getValidateOnChanged()
  * @memberOf nui.TextBoxList
  * @returns {Boolean}
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.getValidateOnChanged = function(){return true;};

 /**
  * 
  * function setValidateOnChanged(validateOnChanged)
  * @memberOf nui.TextBoxList
  * @param {Boolean} validateOnChanged
  * @see nui.TextBoxList
  */
nui.TextBoxList.prototype.setValidateOnChanged = function(validateOnChanged){};

/**
 * @constructor
 */
nui.Button.prototype = new nui.Control();

 /**
  * 
  * function getText()
  * @memberOf nui.Button
  * @returns {String}
  * @see nui.Button
  */
nui.Button.prototype.getText = function(){return "";};

 /**
  * 
  * function setText(text)
  * @memberOf nui.Button
  * @param {String} text
  * @see nui.Button
  */
nui.Button.prototype.setText = function(text){};

 /**
  * 
  * function getIconCls()
  * @memberOf nui.Button
  * @returns {String}
  * @see nui.Button
  */
nui.Button.prototype.getIconCls = function(){return "";};

 /**
  * 
  * function setIconCls(iconCls)
  * @memberOf nui.Button
  * @param {String} iconCls
  * @see nui.Button
  */
nui.Button.prototype.setIconCls = function(iconCls){};

 /**
  * 
  * function getIconStyle()
  * @memberOf nui.Button
  * @returns {String}
  * @see nui.Button
  */
nui.Button.prototype.getIconStyle = function(){return "";};

 /**
  * 
  * function setIconStyle(iconStyle)
  * @memberOf nui.Button
  * @param {String} iconStyle
  * @see nui.Button
  */
nui.Button.prototype.setIconStyle = function(iconStyle){};

 /**
  * 
  * function getIconPosition()
  * @memberOf nui.Button
  * @returns {String}
  * @see nui.Button
  */
nui.Button.prototype.getIconPosition = function(){return "";};

 /**
  * 
  * function setIconPosition(iconPosition)
  * @memberOf nui.Button
  * @param {String} iconPosition
  * @see nui.Button
  */
nui.Button.prototype.setIconPosition = function(iconPosition){};

 /**
  * 
  * function getHref()
  * @memberOf nui.Button
  * @returns {String}
  * @see nui.Button
  */
nui.Button.prototype.getHref = function(){return "";};

 /**
  * 
  * function setHref(href)
  * @memberOf nui.Button
  * @param {String} href
  * @see nui.Button
  */
nui.Button.prototype.setHref = function(href){};

 /**
  * 
  * function getTarget()
  * @memberOf nui.Button
  * @returns {String}
  * @see nui.Button
  */
nui.Button.prototype.getTarget = function(){return "";};

 /**
  * 
  * function setTarget(target)
  * @memberOf nui.Button
  * @param {String} target
  * @see nui.Button
  */
nui.Button.prototype.setTarget = function(target){};

 /**
  * 
  * function getPlain()
  * @memberOf nui.Button
  * @returns {Boolean}
  * @see nui.Button
  */
nui.Button.prototype.getPlain = function(){return true;};

 /**
  * 
  * function setPlain(plain)
  * @memberOf nui.Button
  * @param {Boolean} plain
  * @see nui.Button
  */
nui.Button.prototype.setPlain = function(plain){};

 /**
  * 
  * function getChecked()
  * @memberOf nui.Button
  * @returns {Boolean}
  * @see nui.Button
  */
nui.Button.prototype.getChecked = function(){return true;};

 /**
  * 
  * function setChecked(checked)
  * @memberOf nui.Button
  * @param {Boolean} checked
  * @see nui.Button
  */
nui.Button.prototype.setChecked = function(checked){};

 /**
  * 
  * function getCheckOnClick()
  * @memberOf nui.Button
  * @returns {Boolean}
  * @see nui.Button
  */
nui.Button.prototype.getCheckOnClick = function(){return true;};

 /**
  * 
  * function setCheckOnClick(checkOnClick)
  * @memberOf nui.Button
  * @param {Boolean} checkOnClick
  * @see nui.Button
  */
nui.Button.prototype.setCheckOnClick = function(checkOnClick){};

 /**
  * 
  * function getGroupName()
  * @memberOf nui.Button
  * @returns {String}
  * @see nui.Button
  */
nui.Button.prototype.getGroupName = function(){return "";};

 /**
  * 
  * function setGroupName(groupName)
  * @memberOf nui.Button
  * @param {String} groupName
  * @see nui.Button
  */
nui.Button.prototype.setGroupName = function(groupName){};

/**
 * @constructor
 */
nui.MenuButton.prototype = new nui.Control();

 /**
  * 
  * function setMenu(menu)
  * @memberOf nui.MenuButton
  * @param {Object} menu
  * @see nui.MenuButton
  */
nui.MenuButton.prototype.setMenu = function(menu){};

/**
 * @constructor
 */
nui.CheckBox.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.CheckBox
  * @param  value
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.CheckBox
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.getValue = function(){};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.CheckBox
  * @returns {String}
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.getFormValue = function(){return "";};

 /**
  * 
  * function getText()
  * @memberOf nui.CheckBox
  * @returns {String}
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.getText = function(){return "";};

 /**
  * 
  * function setText(text)
  * @memberOf nui.CheckBox
  * @param {String} text
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.setText = function(text){};

 /**
  * 
  * function getChecked()
  * @memberOf nui.CheckBox
  * @returns {Boolean}
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.getChecked = function(){return true;};

 /**
  * 
  * function setChecked(checked)
  * @memberOf nui.CheckBox
  * @param {Boolean} checked
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.setChecked = function(checked){};

 /**
  * 
  * function getTrueValue()
  * @memberOf nui.CheckBox
  * @returns {Object}
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.getTrueValue = function(){return new Object();};

 /**
  * 
  * function setTrueValue(trueValue)
  * @memberOf nui.CheckBox
  * @param {Object} trueValue
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.setTrueValue = function(trueValue){};

 /**
  * 
  * function getFalseValue()
  * @memberOf nui.CheckBox
  * @returns {Object}
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.getFalseValue = function(){return new Object();};

 /**
  * 
  * function setFalseValue(falseValue)
  * @memberOf nui.CheckBox
  * @param {Object} falseValue
  * @see nui.CheckBox
  */
nui.CheckBox.prototype.setFalseValue = function(falseValue){};

/**
 * @constructor
 */
nui.ListBox.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.ListBox
  * @param  value
  * @see nui.ListBox
  */
nui.ListBox.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.ListBox
  * @returns {String}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getValue = function(){return "";};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.ListBox
  * @returns {String}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getFormValue = function(){return "";};

 /**
  * 加载数据<br/>
  * function load(url)
  * @memberOf nui.ListBox
  * @param  url
  * @see nui.ListBox
  */
nui.ListBox.prototype.load = function(url){};

 /**
  * 加载数据<br/>
  * function loadData(Array)
  * @memberOf nui.ListBox
  * @param  Array
  * @see nui.ListBox
  */
nui.ListBox.prototype.loadData = function(Array){};

 /**
  * 获取总项数<br/>
  * function getCount()
  * @memberOf nui.ListBox
  * @returns {Number}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getCount = function(){return 0;};

 /**
  * 获取索引处对象<br/>
  * function getAt(Number)
  * @memberOf nui.ListBox
  * @param  Number
  * @see nui.ListBox
  */
nui.ListBox.prototype.getAt = function(Number){};

 /**
  * 获取对象索引号<br/>
  * function indexOf(Object)
  * @memberOf nui.ListBox
  * @param  Object
  * @returns {Number}
  * @see nui.ListBox
  */
nui.ListBox.prototype.indexOf = function(Object){return 0;};

 /**
  * 根据值获取项数组<br/>
  * function findItems(value)
  * @memberOf nui.ListBox
  * @param  value
  * @returns {Array}
  * @see nui.ListBox
  */
nui.ListBox.prototype.findItems = function(value){return [];};

 /**
  * 更新项<br/>
  * function updateItem(Object, options)
  * @memberOf nui.ListBox
  * @param  Object
  * @param  options
  * @see nui.ListBox
  */
nui.ListBox.prototype.updateItem = function(Object, options){};

 /**
  * 删除所有项<br/>
  * function removeAll()
  * @memberOf nui.ListBox
  * @see nui.ListBox
  */
nui.ListBox.prototype.removeAll = function(){};

 /**
  * 加入多个项<br/>
  * function addItems(Array, Number)
  * @memberOf nui.ListBox
  * @param  Array
  * @param  Number
  * @see nui.ListBox
  */
nui.ListBox.prototype.addItems = function(Array, Number){};

 /**
  * 加入单个项<br/>
  * function addItem(Object, Number)
  * @memberOf nui.ListBox
  * @param  Object
  * @param  Number
  * @see nui.ListBox
  */
nui.ListBox.prototype.addItem = function(Object, Number){};

 /**
  * 删除多个项<br/>
  * function removeItems(Array)
  * @memberOf nui.ListBox
  * @param  Array
  * @see nui.ListBox
  */
nui.ListBox.prototype.removeItems = function(Array){};

 /**
  * 移动项到新索引位置<br/>
  * function moveItem(Object, Number)
  * @memberOf nui.ListBox
  * @param  Object
  * @param  Number
  * @see nui.ListBox
  */
nui.ListBox.prototype.moveItem = function(Object, Number){};

 /**
  * 是否选中项<br/>
  * function isSelected(Object)
  * @memberOf nui.ListBox
  * @param  Object
  * @returns {Boolean}
  * @see nui.ListBox
  */
nui.ListBox.prototype.isSelected = function(Object){return true;};

 /**
  * 获取选中项集合<br/>
  * function getSelecteds()
  * @memberOf nui.ListBox
  * @returns {Array}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getSelecteds = function(){return [];};

 /**
  * 获取当前选中项<br/>
  * function getSelected()
  * @memberOf nui.ListBox
  * @returns {Object}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getSelected = function(){return new Object();};

 /**
  * 选中项<br/>
  * function select(Object)
  * @memberOf nui.ListBox
  * @param  Object
  * @see nui.ListBox
  */
nui.ListBox.prototype.select = function(Object){};

 /**
  * 取消选中项<br/>
  * function deselect(Object)
  * @memberOf nui.ListBox
  * @param  Object
  * @see nui.ListBox
  */
nui.ListBox.prototype.deselect = function(Object){};

 /**
  * 选中多个项<br/>
  * function selects(Array)
  * @memberOf nui.ListBox
  * @param  Array
  * @see nui.ListBox
  */
nui.ListBox.prototype.selects = function(Array){};

 /**
  * 取消选中多个项<br/>
  * function deselects(Array)
  * @memberOf nui.ListBox
  * @param  Array
  * @see nui.ListBox
  */
nui.ListBox.prototype.deselects = function(Array){};

 /**
  * 选中所有项<br/>
  * function selectAll()
  * @memberOf nui.ListBox
  * @see nui.ListBox
  */
nui.ListBox.prototype.selectAll = function(){};

 /**
  * 取消选中所有项<br/>
  * function deselectAll()
  * @memberOf nui.ListBox
  * @see nui.ListBox
  */
nui.ListBox.prototype.deselectAll = function(){};

 /**
  * 取消选中所有项<br/>
  * function clearSelect()
  * @memberOf nui.ListBox
  * @see nui.ListBox
  */
nui.ListBox.prototype.clearSelect = function(){};

 /**
  * 
  * function getColumns()
  * @memberOf nui.ListBox
  * @returns {Array}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getColumns = function(){return [];};

 /**
  * 
  * function setColumns(columns)
  * @memberOf nui.ListBox
  * @param {Array} columns
  * @see nui.ListBox
  */
nui.ListBox.prototype.setColumns = function(columns){};

 /**
  * 
  * function getData()
  * @memberOf nui.ListBox
  * @returns {Array}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getData = function(){return [];};

 /**
  * 
  * function setData(data)
  * @memberOf nui.ListBox
  * @param {Array} data
  * @see nui.ListBox
  */
nui.ListBox.prototype.setData = function(data){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.ListBox
  * @returns {String}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.ListBox
  * @param {String} url
  * @see nui.ListBox
  */
nui.ListBox.prototype.setUrl = function(url){};

 /**
  * 
  * function getValueField()
  * @memberOf nui.ListBox
  * @returns {String}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getValueField = function(){return "";};

 /**
  * 
  * function setValueField(valueField)
  * @memberOf nui.ListBox
  * @param {String} valueField
  * @see nui.ListBox
  */
nui.ListBox.prototype.setValueField = function(valueField){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.ListBox
  * @returns {String}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.ListBox
  * @param {String} textField
  * @see nui.ListBox
  */
nui.ListBox.prototype.setTextField = function(textField){};

 /**
  * 
  * function getShowCheckBox()
  * @memberOf nui.ListBox
  * @returns {Boolean}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getShowCheckBox = function(){return true;};

 /**
  * 
  * function setShowCheckBox(showCheckBox)
  * @memberOf nui.ListBox
  * @param {Boolean} showCheckBox
  * @see nui.ListBox
  */
nui.ListBox.prototype.setShowCheckBox = function(showCheckBox){};

 /**
  * 
  * function getShowAllCheckBox()
  * @memberOf nui.ListBox
  * @returns {Boolean}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getShowAllCheckBox = function(){return true;};

 /**
  * 
  * function setShowAllCheckBox(showAllCheckBox)
  * @memberOf nui.ListBox
  * @param {Boolean} showAllCheckBox
  * @see nui.ListBox
  */
nui.ListBox.prototype.setShowAllCheckBox = function(showAllCheckBox){};

 /**
  * 
  * function getMultiSelect()
  * @memberOf nui.ListBox
  * @returns {Boolean}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getMultiSelect = function(){return true;};

 /**
  * 
  * function setMultiSelect(multiSelect)
  * @memberOf nui.ListBox
  * @param {Boolean} multiSelect
  * @see nui.ListBox
  */
nui.ListBox.prototype.setMultiSelect = function(multiSelect){};

 /**
  * 
  * function getShowNullItem()
  * @memberOf nui.ListBox
  * @returns {Boolean}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getShowNullItem = function(){return true;};

 /**
  * 
  * function setShowNullItem(showNullItem)
  * @memberOf nui.ListBox
  * @param {Boolean} showNullItem
  * @see nui.ListBox
  */
nui.ListBox.prototype.setShowNullItem = function(showNullItem){};

 /**
  * 
  * function getNullItemText()
  * @memberOf nui.ListBox
  * @returns {String}
  * @see nui.ListBox
  */
nui.ListBox.prototype.getNullItemText = function(){return "";};

 /**
  * 
  * function setNullItemText(nullItemText)
  * @memberOf nui.ListBox
  * @param {String} nullItemText
  * @see nui.ListBox
  */
nui.ListBox.prototype.setNullItemText = function(nullItemText){};

/**
 * @constructor
 */
nui.CheckBoxList.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.CheckBoxList
  * @param  value
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.CheckBoxList
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.getValue = function(){};

 /**
  * 
  * function getMultiSelect()
  * @memberOf nui.CheckBoxList
  * @returns {Boolean}
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.getMultiSelect = function(){return true;};

 /**
  * 
  * function setMultiSelect(multiSelect)
  * @memberOf nui.CheckBoxList
  * @param {Boolean} multiSelect
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.setMultiSelect = function(multiSelect){};

 /**
  * 
  * function getRepeatLayout()
  * @memberOf nui.CheckBoxList
  * @returns {String}
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.getRepeatLayout = function(){return "";};

 /**
  * 
  * function setRepeatLayout(repeatLayout)
  * @memberOf nui.CheckBoxList
  * @param {String} repeatLayout
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.setRepeatLayout = function(repeatLayout){};

 /**
  * 
  * function getRepeatDirection()
  * @memberOf nui.CheckBoxList
  * @returns {String}
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.getRepeatDirection = function(){return "";};

 /**
  * 
  * function setRepeatDirection(repeatDirection)
  * @memberOf nui.CheckBoxList
  * @param {String} repeatDirection
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.setRepeatDirection = function(repeatDirection){};

 /**
  * 
  * function getRepeatItems()
  * @memberOf nui.CheckBoxList
  * @returns {Number}
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.getRepeatItems = function(){return 0;};

 /**
  * 
  * function setRepeatItems(repeatItems)
  * @memberOf nui.CheckBoxList
  * @param {Number} repeatItems
  * @see nui.CheckBoxList
  */
nui.CheckBoxList.prototype.setRepeatItems = function(repeatItems){};

/**
 * @constructor
 */
nui.RadioButtonList.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.RadioButtonList
  * @param  value
  * @see nui.RadioButtonList
  */
nui.RadioButtonList.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.RadioButtonList
  * @see nui.RadioButtonList
  */
nui.RadioButtonList.prototype.getValue = function(){};

/**
 * @constructor
 */
nui.Calendar.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.Calendar
  * @param  value
  * @see nui.Calendar
  */
nui.Calendar.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.Calendar
  * @see nui.Calendar
  */
nui.Calendar.prototype.getValue = function(){};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.Calendar
  * @returns {String}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getFormValue = function(){return "";};

 /**
  * 
  * function getColumns()
  * @memberOf nui.Calendar
  * @returns {Number}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getColumns = function(){return 0;};

 /**
  * 
  * function setColumns(columns)
  * @memberOf nui.Calendar
  * @param {Number} columns
  * @see nui.Calendar
  */
nui.Calendar.prototype.setColumns = function(columns){};

 /**
  * 
  * function getRows()
  * @memberOf nui.Calendar
  * @returns {Number}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getRows = function(){return 0;};

 /**
  * 
  * function setRows(rows)
  * @memberOf nui.Calendar
  * @param {Number} rows
  * @see nui.Calendar
  */
nui.Calendar.prototype.setRows = function(rows){};

 /**
  * 
  * function getViewDate()
  * @memberOf nui.Calendar
  * @returns {Date}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getViewDate = function(){return new Date();};

 /**
  * 
  * function setViewDate(viewDate)
  * @memberOf nui.Calendar
  * @param {Date} viewDate
  * @see nui.Calendar
  */
nui.Calendar.prototype.setViewDate = function(viewDate){};

 /**
  * 
  * function getShowTime()
  * @memberOf nui.Calendar
  * @returns {Boolean}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getShowTime = function(){return true;};

 /**
  * 
  * function setShowTime(showTime)
  * @memberOf nui.Calendar
  * @param {Boolean} showTime
  * @see nui.Calendar
  */
nui.Calendar.prototype.setShowTime = function(showTime){};

 /**
  * 
  * function getTimeFormat()
  * @memberOf nui.Calendar
  * @returns {String}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getTimeFormat = function(){return "";};

 /**
  * 
  * function setTimeFormat(timeFormat)
  * @memberOf nui.Calendar
  * @param {String} timeFormat
  * @see nui.Calendar
  */
nui.Calendar.prototype.setTimeFormat = function(timeFormat){};

 /**
  * 
  * function getShowHeader()
  * @memberOf nui.Calendar
  * @returns {Boolean}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getShowHeader = function(){return true;};

 /**
  * 
  * function setShowHeader(showHeader)
  * @memberOf nui.Calendar
  * @param {Boolean} showHeader
  * @see nui.Calendar
  */
nui.Calendar.prototype.setShowHeader = function(showHeader){};

 /**
  * 
  * function getShowFooter()
  * @memberOf nui.Calendar
  * @returns {Boolean}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getShowFooter = function(){return true;};

 /**
  * 
  * function setShowFooter(showFooter)
  * @memberOf nui.Calendar
  * @param {Boolean} showFooter
  * @see nui.Calendar
  */
nui.Calendar.prototype.setShowFooter = function(showFooter){};

 /**
  * 
  * function getShowWeekNumber()
  * @memberOf nui.Calendar
  * @returns {Boolean}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getShowWeekNumber = function(){return true;};

 /**
  * 
  * function setShowWeekNumber(showWeekNumber)
  * @memberOf nui.Calendar
  * @param {Boolean} showWeekNumber
  * @see nui.Calendar
  */
nui.Calendar.prototype.setShowWeekNumber = function(showWeekNumber){};

 /**
  * 
  * function getShowDaysHeader()
  * @memberOf nui.Calendar
  * @returns {Boolean}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getShowDaysHeader = function(){return true;};

 /**
  * 
  * function setShowDaysHeader(showDaysHeader)
  * @memberOf nui.Calendar
  * @param {Boolean} showDaysHeader
  * @see nui.Calendar
  */
nui.Calendar.prototype.setShowDaysHeader = function(showDaysHeader){};

 /**
  * 
  * function getShowMonthButtons()
  * @memberOf nui.Calendar
  * @returns {Boolean}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getShowMonthButtons = function(){return true;};

 /**
  * 
  * function setShowMonthButtons(showMonthButtons)
  * @memberOf nui.Calendar
  * @param {Boolean} showMonthButtons
  * @see nui.Calendar
  */
nui.Calendar.prototype.setShowMonthButtons = function(showMonthButtons){};

 /**
  * 
  * function getShowYearButtons()
  * @memberOf nui.Calendar
  * @returns {Boolean}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getShowYearButtons = function(){return true;};

 /**
  * 
  * function setShowYearButtons(showYearButtons)
  * @memberOf nui.Calendar
  * @param {Boolean} showYearButtons
  * @see nui.Calendar
  */
nui.Calendar.prototype.setShowYearButtons = function(showYearButtons){};

 /**
  * 
  * function getShowTodayButton()
  * @memberOf nui.Calendar
  * @returns {Boolean}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getShowTodayButton = function(){return true;};

 /**
  * 
  * function setShowTodayButton(showTodayButton)
  * @memberOf nui.Calendar
  * @param {Boolean} showTodayButton
  * @see nui.Calendar
  */
nui.Calendar.prototype.setShowTodayButton = function(showTodayButton){};

 /**
  * 
  * function getShowClearButton()
  * @memberOf nui.Calendar
  * @returns {Boolean}
  * @see nui.Calendar
  */
nui.Calendar.prototype.getShowClearButton = function(){return true;};

 /**
  * 
  * function setShowClearButton(showClearButton)
  * @memberOf nui.Calendar
  * @param {Boolean} showClearButton
  * @see nui.Calendar
  */
nui.Calendar.prototype.setShowClearButton = function(showClearButton){};

/**
 * @constructor
 */
nui.ButtonEdit.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.ButtonEdit
  * @param  value
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.ButtonEdit
  * @returns {String}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getValue = function(){return "";};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.ButtonEdit
  * @returns {String}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getFormValue = function(){return "";};

 /**
  * 验证控件值<br/>
  * function validate()
  * @memberOf nui.ButtonEdit
  * @returns {Boolean}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.validate = function(){return true;};

 /**
  * 是否通过验证<br/>
  * function isValid()
  * @memberOf nui.ButtonEdit
  * @returns {Boolean}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.isValid = function(){return true;};

 /**
  * 设置验证结果<br/>
  * function setIsValid(Boolean)
  * @memberOf nui.ButtonEdit
  * @param  Boolean
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setIsValid = function(Boolean){};

 /**
  * 
  * function getText()
  * @memberOf nui.ButtonEdit
  * @returns {String}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getText = function(){return "";};

 /**
  * 
  * function setText(text)
  * @memberOf nui.ButtonEdit
  * @param {String} text
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setText = function(text){};

 /**
  * 
  * function getTextName()
  * @memberOf nui.ButtonEdit
  * @returns {String}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getTextName = function(){return "";};

 /**
  * 
  * function setTextName(textName)
  * @memberOf nui.ButtonEdit
  * @param {String} textName
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setTextName = function(textName){};

 /**
  * 
  * function getSelectOnFocus()
  * @memberOf nui.ButtonEdit
  * @returns {Boolean}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getSelectOnFocus = function(){return true;};

 /**
  * 
  * function setSelectOnFocus(selectOnFocus)
  * @memberOf nui.ButtonEdit
  * @param {Boolean} selectOnFocus
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setSelectOnFocus = function(selectOnFocus){};

 /**
  * 
  * function getMaxLength()
  * @memberOf nui.ButtonEdit
  * @returns {Number}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getMaxLength = function(){return 0;};

 /**
  * 
  * function setMaxLength(maxLength)
  * @memberOf nui.ButtonEdit
  * @param {Number} maxLength
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setMaxLength = function(maxLength){};

 /**
  * 
  * function getMinLength()
  * @memberOf nui.ButtonEdit
  * @returns {Number}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getMinLength = function(){return 0;};

 /**
  * 
  * function setMinLength(minLength)
  * @memberOf nui.ButtonEdit
  * @param {Number} minLength
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setMinLength = function(minLength){};

 /**
  * 
  * function getAllowInput()
  * @memberOf nui.ButtonEdit
  * @returns {Boolean}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getAllowInput = function(){return true;};

 /**
  * 
  * function setAllowInput(allowInput)
  * @memberOf nui.ButtonEdit
  * @param {Boolean} allowInput
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setAllowInput = function(allowInput){};

 /**
  * 
  * function getRequired()
  * @memberOf nui.ButtonEdit
  * @returns {Boolean}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getRequired = function(){return true;};

 /**
  * 
  * function setRequired(required)
  * @memberOf nui.ButtonEdit
  * @param {Boolean} required
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setRequired = function(required){};

 /**
  * 
  * function getErrorMode()
  * @memberOf nui.ButtonEdit
  * @returns {String}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getErrorMode = function(){return "";};

 /**
  * 
  * function setErrorMode(errorMode)
  * @memberOf nui.ButtonEdit
  * @param {String} errorMode
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setErrorMode = function(errorMode){};

 /**
  * 
  * function getValidateOnChanged()
  * @memberOf nui.ButtonEdit
  * @returns {Boolean}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getValidateOnChanged = function(){return true;};

 /**
  * 
  * function setValidateOnChanged(validateOnChanged)
  * @memberOf nui.ButtonEdit
  * @param {Boolean} validateOnChanged
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setValidateOnChanged = function(validateOnChanged){};

 /**
  * 
  * function getShowClose()
  * @memberOf nui.ButtonEdit
  * @returns {Boolean}
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.getShowClose = function(){return true;};

 /**
  * 
  * function setShowClose(showClose)
  * @memberOf nui.ButtonEdit
  * @param {Boolean} showClose
  * @see nui.ButtonEdit
  */
nui.ButtonEdit.prototype.setShowClose = function(showClose){};

/**
 * @constructor
 */
nui.PopupEdit.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.PopupEdit
  * @param  value
  * @see nui.PopupEdit
  */
nui.PopupEdit.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.PopupEdit
  * @see nui.PopupEdit
  */
nui.PopupEdit.prototype.getValue = function(){};

 /**
  * 
  * function getPopupWidth()
  * @memberOf nui.PopupEdit
  * @returns {String}
  * @see nui.PopupEdit
  */
nui.PopupEdit.prototype.getPopupWidth = function(){return "";};

 /**
  * 
  * function setPopupWidth(popupWidth)
  * @memberOf nui.PopupEdit
  * @param {String} popupWidth
  * @see nui.PopupEdit
  */
nui.PopupEdit.prototype.setPopupWidth = function(popupWidth){};

 /**
  * 
  * function getPopupHeight()
  * @memberOf nui.PopupEdit
  * @returns {String}
  * @see nui.PopupEdit
  */
nui.PopupEdit.prototype.getPopupHeight = function(){return "";};

 /**
  * 
  * function setPopupHeight(popupHeight)
  * @memberOf nui.PopupEdit
  * @param {String} popupHeight
  * @see nui.PopupEdit
  */
nui.PopupEdit.prototype.setPopupHeight = function(popupHeight){};

 /**
  * 
  * function getPopup()
  * @memberOf nui.PopupEdit
  * @returns {String}
  * @see nui.PopupEdit
  */
nui.PopupEdit.prototype.getPopup = function(){return "";};

 /**
  * 
  * function setPopup(popup)
  * @memberOf nui.PopupEdit
  * @param {String} popup
  * @see nui.PopupEdit
  */
nui.PopupEdit.prototype.setPopup = function(popup){};

/**
 * @constructor
 */
nui.TextBox.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.TextBox
  * @param  value
  * @see nui.TextBox
  */
nui.TextBox.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.TextBox
  * @see nui.TextBox
  */
nui.TextBox.prototype.getValue = function(){};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getFormValue = function(){return "";};

 /**
  * 验证控件值<br/>
  * function validate()
  * @memberOf nui.TextBox
  * @returns {Boolean}
  * @see nui.TextBox
  */
nui.TextBox.prototype.validate = function(){return true;};

 /**
  * 是否通过验证<br/>
  * function isValid()
  * @memberOf nui.TextBox
  * @returns {Boolean}
  * @see nui.TextBox
  */
nui.TextBox.prototype.isValid = function(){return true;};

 /**
  * 设置验证结果<br/>
  * function setIsValid(Boolean)
  * @memberOf nui.TextBox
  * @param  Boolean
  * @see nui.TextBox
  */
nui.TextBox.prototype.setIsValid = function(Boolean){};

 /**
  * 
  * function getEmptyText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getEmptyText = function(){return "";};

 /**
  * 
  * function setEmptyText(emptyText)
  * @memberOf nui.TextBox
  * @param {String} emptyText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setEmptyText = function(emptyText){};

 /**
  * 
  * function getAllowInput()
  * @memberOf nui.TextBox
  * @returns {Boolean}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getAllowInput = function(){return true;};

 /**
  * 
  * function setAllowInput(allowInput)
  * @memberOf nui.TextBox
  * @param {Boolean} allowInput
  * @see nui.TextBox
  */
nui.TextBox.prototype.setAllowInput = function(allowInput){};

 /**
  * 
  * function getSelectOnFocus()
  * @memberOf nui.TextBox
  * @returns {Boolean}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getSelectOnFocus = function(){return true;};

 /**
  * 
  * function setSelectOnFocus(selectOnFocus)
  * @memberOf nui.TextBox
  * @param {Boolean} selectOnFocus
  * @see nui.TextBox
  */
nui.TextBox.prototype.setSelectOnFocus = function(selectOnFocus){};

 /**
  * 
  * function getMaxLength()
  * @memberOf nui.TextBox
  * @returns {Number}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getMaxLength = function(){return 0;};

 /**
  * 
  * function setMaxLength(maxLength)
  * @memberOf nui.TextBox
  * @param {Number} maxLength
  * @see nui.TextBox
  */
nui.TextBox.prototype.setMaxLength = function(maxLength){};

 /**
  * 
  * function getErrorMode()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getErrorMode = function(){return "";};

 /**
  * 
  * function setErrorMode(errorMode)
  * @memberOf nui.TextBox
  * @param {String} errorMode
  * @see nui.TextBox
  */
nui.TextBox.prototype.setErrorMode = function(errorMode){};

 /**
  * 
  * function getValidateOnChanged()
  * @memberOf nui.TextBox
  * @returns {Boolean}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getValidateOnChanged = function(){return true;};

 /**
  * 
  * function setValidateOnChanged(validateOnChanged)
  * @memberOf nui.TextBox
  * @param {Boolean} validateOnChanged
  * @see nui.TextBox
  */
nui.TextBox.prototype.setValidateOnChanged = function(validateOnChanged){};

 /**
  * 
  * function getValidateOnLeave()
  * @memberOf nui.TextBox
  * @returns {Boolean}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getValidateOnLeave = function(){return true;};

 /**
  * 
  * function setValidateOnLeave(validateOnLeave)
  * @memberOf nui.TextBox
  * @param {Boolean} validateOnLeave
  * @see nui.TextBox
  */
nui.TextBox.prototype.setValidateOnLeave = function(validateOnLeave){};

 /**
  * 
  * function getRequired()
  * @memberOf nui.TextBox
  * @returns {Boolean}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getRequired = function(){return true;};

 /**
  * 
  * function setRequired(required)
  * @memberOf nui.TextBox
  * @param {Boolean} required
  * @see nui.TextBox
  */
nui.TextBox.prototype.setRequired = function(required){};

 /**
  * 
  * function getRequiredErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getRequiredErrorText = function(){return "";};

 /**
  * 
  * function setRequiredErrorText(requiredErrorText)
  * @memberOf nui.TextBox
  * @param {String} requiredErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setRequiredErrorText = function(requiredErrorText){};

 /**
  * 
  * function getVtype()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getVtype = function(){return "";};

 /**
  * 
  * function setVtype(vtype)
  * @memberOf nui.TextBox
  * @param {String} vtype
  * @see nui.TextBox
  */
nui.TextBox.prototype.setVtype = function(vtype){};

 /**
  * 
  * function getEmailErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getEmailErrorText = function(){return "";};

 /**
  * 
  * function setEmailErrorText(emailErrorText)
  * @memberOf nui.TextBox
  * @param {String} emailErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setEmailErrorText = function(emailErrorText){};

 /**
  * 
  * function getUrlErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getUrlErrorText = function(){return "";};

 /**
  * 
  * function setUrlErrorText(urlErrorText)
  * @memberOf nui.TextBox
  * @param {String} urlErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setUrlErrorText = function(urlErrorText){};

 /**
  * 
  * function getFloatErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getFloatErrorText = function(){return "";};

 /**
  * 
  * function setFloatErrorText(floatErrorText)
  * @memberOf nui.TextBox
  * @param {String} floatErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setFloatErrorText = function(floatErrorText){};

 /**
  * 
  * function getIntErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getIntErrorText = function(){return "";};

 /**
  * 
  * function setIntErrorText(intErrorText)
  * @memberOf nui.TextBox
  * @param {String} intErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setIntErrorText = function(intErrorText){};

 /**
  * 
  * function getDateErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getDateErrorText = function(){return "";};

 /**
  * 
  * function setDateErrorText(dateErrorText)
  * @memberOf nui.TextBox
  * @param {String} dateErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setDateErrorText = function(dateErrorText){};

 /**
  * 
  * function getMaxLengthErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getMaxLengthErrorText = function(){return "";};

 /**
  * 
  * function setMaxLengthErrorText(maxLengthErrorText)
  * @memberOf nui.TextBox
  * @param {String} maxLengthErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setMaxLengthErrorText = function(maxLengthErrorText){};

 /**
  * 
  * function getMinLengthErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getMinLengthErrorText = function(){return "";};

 /**
  * 
  * function setMinLengthErrorText(minLengthErrorText)
  * @memberOf nui.TextBox
  * @param {String} minLengthErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setMinLengthErrorText = function(minLengthErrorText){};

 /**
  * 
  * function getMaxErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getMaxErrorText = function(){return "";};

 /**
  * 
  * function setMaxErrorText(maxErrorText)
  * @memberOf nui.TextBox
  * @param {String} maxErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setMaxErrorText = function(maxErrorText){};

 /**
  * 
  * function getMinErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getMinErrorText = function(){return "";};

 /**
  * 
  * function setMinErrorText(minErrorText)
  * @memberOf nui.TextBox
  * @param {String} minErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setMinErrorText = function(minErrorText){};

 /**
  * 
  * function getRangeLengthErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getRangeLengthErrorText = function(){return "";};

 /**
  * 
  * function setRangeLengthErrorText(rangeLengthErrorText)
  * @memberOf nui.TextBox
  * @param {String} rangeLengthErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setRangeLengthErrorText = function(rangeLengthErrorText){};

 /**
  * 
  * function getRangeErrorText()
  * @memberOf nui.TextBox
  * @returns {String}
  * @see nui.TextBox
  */
nui.TextBox.prototype.getRangeErrorText = function(){return "";};

 /**
  * 
  * function setRangeErrorText(rangeErrorText)
  * @memberOf nui.TextBox
  * @param {String} rangeErrorText
  * @see nui.TextBox
  */
nui.TextBox.prototype.setRangeErrorText = function(rangeErrorText){};

/**
 * @constructor
 */
nui.Password.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.Password
  * @param  value
  * @see nui.Password
  */
nui.Password.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.Password
  * @see nui.Password
  */
nui.Password.prototype.getValue = function(){};

/**
 * @constructor
 */
nui.TextArea.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.TextArea
  * @param  value
  * @see nui.TextArea
  */
nui.TextArea.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.TextArea
  * @see nui.TextArea
  */
nui.TextArea.prototype.getValue = function(){};

/**
 * @constructor
 */
nui.ComboBox.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.ComboBox
  * @param  value
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.ComboBox
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getValue = function(){};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.ComboBox
  * @returns {String}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getFormValue = function(){return "";};

 /**
  * 加载数据<br/>
  * function load(url)
  * @memberOf nui.ComboBox
  * @param  url
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.load = function(url){};

 /**
  * 选择项<br/>
  * function select(Number)
  * @memberOf nui.ComboBox
  * @param  Number
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.select = function(Number){};

 /**
  * 
  * function getValueField()
  * @memberOf nui.ComboBox
  * @returns {String}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getValueField = function(){return "";};

 /**
  * 
  * function setValueField(valueField)
  * @memberOf nui.ComboBox
  * @param {String} valueField
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setValueField = function(valueField){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.ComboBox
  * @returns {String}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.ComboBox
  * @param {String} textField
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setTextField = function(textField){};

 /**
  * 
  * function getMultiSelect()
  * @memberOf nui.ComboBox
  * @returns {Boolean}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getMultiSelect = function(){return true;};

 /**
  * 
  * function setMultiSelect(multiSelect)
  * @memberOf nui.ComboBox
  * @param {Boolean} multiSelect
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setMultiSelect = function(multiSelect){};

 /**
  * 
  * function getData()
  * @memberOf nui.ComboBox
  * @returns {Array}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getData = function(){return [];};

 /**
  * 
  * function setData(data)
  * @memberOf nui.ComboBox
  * @param {Array} data
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setData = function(data){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.ComboBox
  * @returns {String}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.ComboBox
  * @param {String} url
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setUrl = function(url){};

 /**
  * 
  * function getColumns()
  * @memberOf nui.ComboBox
  * @returns {Array}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getColumns = function(){return [];};

 /**
  * 
  * function setColumns(columns)
  * @memberOf nui.ComboBox
  * @param {Array} columns
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setColumns = function(columns){};

 /**
  * 
  * function getShowNullItem()
  * @memberOf nui.ComboBox
  * @returns {Boolean}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getShowNullItem = function(){return true;};

 /**
  * 
  * function setShowNullItem(showNullItem)
  * @memberOf nui.ComboBox
  * @param {Boolean} showNullItem
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setShowNullItem = function(showNullItem){};

 /**
  * 
  * function getNullItemText()
  * @memberOf nui.ComboBox
  * @returns {String}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getNullItemText = function(){return "";};

 /**
  * 
  * function setNullItemText(nullItemText)
  * @memberOf nui.ComboBox
  * @param {String} nullItemText
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setNullItemText = function(nullItemText){};

 /**
  * 
  * function getValueFromSelect()
  * @memberOf nui.ComboBox
  * @returns {Boolean}
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.getValueFromSelect = function(){return true;};

 /**
  * 
  * function setValueFromSelect(valueFromSelect)
  * @memberOf nui.ComboBox
  * @param {Boolean} valueFromSelect
  * @see nui.ComboBox
  */
nui.ComboBox.prototype.setValueFromSelect = function(valueFromSelect){};

/**
 * @constructor
 */
nui.DatePicker.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.DatePicker
  * @param  value
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.DatePicker
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getValue = function(){};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.DatePicker
  * @returns {String}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getFormValue = function(){return "";};

 /**
  * 
  * function getFormat()
  * @memberOf nui.DatePicker
  * @returns {String}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getFormat = function(){return "";};

 /**
  * 
  * function setFormat(format)
  * @memberOf nui.DatePicker
  * @param {String} format
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setFormat = function(format){};

 /**
  * 
  * function getTimeFormat()
  * @memberOf nui.DatePicker
  * @returns {String}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getTimeFormat = function(){return "";};

 /**
  * 
  * function setTimeFormat(timeFormat)
  * @memberOf nui.DatePicker
  * @param {String} timeFormat
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setTimeFormat = function(timeFormat){};

 /**
  * 
  * function getViewDate()
  * @memberOf nui.DatePicker
  * @returns {Date}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getViewDate = function(){return new Date();};

 /**
  * 
  * function setViewDate(viewDate)
  * @memberOf nui.DatePicker
  * @param {Date} viewDate
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setViewDate = function(viewDate){};

 /**
  * 
  * function getMinDate()
  * @memberOf nui.DatePicker
  * @returns {Date}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getMinDate = function(){return new Date();};

 /**
  * 
  * function setMinDate(minDate)
  * @memberOf nui.DatePicker
  * @param {Date} minDate
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setMinDate = function(minDate){};

 /**
  * 
  * function getMaxDate()
  * @memberOf nui.DatePicker
  * @returns {Date}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getMaxDate = function(){return new Date();};

 /**
  * 
  * function setMaxDate(maxDate)
  * @memberOf nui.DatePicker
  * @param {Date} maxDate
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setMaxDate = function(maxDate){};

 /**
  * 
  * function getShowTime()
  * @memberOf nui.DatePicker
  * @returns {Boolean}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getShowTime = function(){return true;};

 /**
  * 
  * function setShowTime(showTime)
  * @memberOf nui.DatePicker
  * @param {Boolean} showTime
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setShowTime = function(showTime){};

 /**
  * 
  * function getShowTodayButton()
  * @memberOf nui.DatePicker
  * @returns {Boolean}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getShowTodayButton = function(){return true;};

 /**
  * 
  * function setShowTodayButton(showTodayButton)
  * @memberOf nui.DatePicker
  * @param {Boolean} showTodayButton
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setShowTodayButton = function(showTodayButton){};

 /**
  * 
  * function getShowOkButton()
  * @memberOf nui.DatePicker
  * @returns {Boolean}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getShowOkButton = function(){return true;};

 /**
  * 
  * function setShowOkButton(showOkButton)
  * @memberOf nui.DatePicker
  * @param {Boolean} showOkButton
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setShowOkButton = function(showOkButton){};

 /**
  * 
  * function getShowClearButton()
  * @memberOf nui.DatePicker
  * @returns {Boolean}
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.getShowClearButton = function(){return true;};

 /**
  * 
  * function setShowClearButton(showClearButton)
  * @memberOf nui.DatePicker
  * @param {Boolean} showClearButton
  * @see nui.DatePicker
  */
nui.DatePicker.prototype.setShowClearButton = function(showClearButton){};

/**
 * @constructor
 */
nui.Spinner.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.Spinner
  * @param  value
  * @see nui.Spinner
  */
nui.Spinner.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.Spinner
  * @see nui.Spinner
  */
nui.Spinner.prototype.getValue = function(){};

 /**
  * 
  * function getMinValue()
  * @memberOf nui.Spinner
  * @returns {Number}
  * @see nui.Spinner
  */
nui.Spinner.prototype.getMinValue = function(){return 0;};

 /**
  * 
  * function setMinValue(minValue)
  * @memberOf nui.Spinner
  * @param {Number} minValue
  * @see nui.Spinner
  */
nui.Spinner.prototype.setMinValue = function(minValue){};

 /**
  * 
  * function getMaxValue()
  * @memberOf nui.Spinner
  * @returns {Number}
  * @see nui.Spinner
  */
nui.Spinner.prototype.getMaxValue = function(){return 0;};

 /**
  * 
  * function setMaxValue(maxValue)
  * @memberOf nui.Spinner
  * @param {Number} maxValue
  * @see nui.Spinner
  */
nui.Spinner.prototype.setMaxValue = function(maxValue){};

 /**
  * 
  * function getIncrement()
  * @memberOf nui.Spinner
  * @returns {Number}
  * @see nui.Spinner
  */
nui.Spinner.prototype.getIncrement = function(){return 0;};

 /**
  * 
  * function setIncrement(increment)
  * @memberOf nui.Spinner
  * @param {Number} increment
  * @see nui.Spinner
  */
nui.Spinner.prototype.setIncrement = function(increment){};

 /**
  * 
  * function getDecimalPlaces()
  * @memberOf nui.Spinner
  * @returns {Number}
  * @see nui.Spinner
  */
nui.Spinner.prototype.getDecimalPlaces = function(){return 0;};

 /**
  * 
  * function setDecimalPlaces(decimalPlaces)
  * @memberOf nui.Spinner
  * @param {Number} decimalPlaces
  * @see nui.Spinner
  */
nui.Spinner.prototype.setDecimalPlaces = function(decimalPlaces){};

/**
 * @constructor
 */
nui.TimeSpinner.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.TimeSpinner
  * @param  value
  * @see nui.TimeSpinner
  */
nui.TimeSpinner.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.TimeSpinner
  * @see nui.TimeSpinner
  */
nui.TimeSpinner.prototype.getValue = function(){};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.TimeSpinner
  * @returns {String}
  * @see nui.TimeSpinner
  */
nui.TimeSpinner.prototype.getFormValue = function(){return "";};

 /**
  * 获取格式化后的值<br/>
  * function getFormattedValue()
  * @memberOf nui.TimeSpinner
  * @returns {String}
  * @see nui.TimeSpinner
  */
nui.TimeSpinner.prototype.getFormattedValue = function(){return "";};

 /**
  * 
  * function getFormat()
  * @memberOf nui.TimeSpinner
  * @returns {String}
  * @see nui.TimeSpinner
  */
nui.TimeSpinner.prototype.getFormat = function(){return "";};

 /**
  * 
  * function setFormat(format)
  * @memberOf nui.TimeSpinner
  * @param {String} format
  * @see nui.TimeSpinner
  */
nui.TimeSpinner.prototype.setFormat = function(format){};

/**
 * @constructor
 */
nui.TreeSelect.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.TreeSelect
  * @param  value
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.TreeSelect
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getValue = function(){};

 /**
  * 获取表单值<br/>
  * function getFormValue()
  * @memberOf nui.TreeSelect
  * @returns {String}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getFormValue = function(){return "";};

 /**
  * 加载数据<br/>
  * function load(url)
  * @memberOf nui.TreeSelect
  * @param  url
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.load = function(url){};

 /**
  * 
  * function getData()
  * @memberOf nui.TreeSelect
  * @returns {Array}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getData = function(){return [];};

 /**
  * 
  * function setData(data)
  * @memberOf nui.TreeSelect
  * @param {Array} data
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setData = function(data){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.TreeSelect
  * @returns {String}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.TreeSelect
  * @param {String} url
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setUrl = function(url){};

 /**
  * 
  * function getValueField()
  * @memberOf nui.TreeSelect
  * @returns {String}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getValueField = function(){return "";};

 /**
  * 
  * function setValueField(valueField)
  * @memberOf nui.TreeSelect
  * @param {String} valueField
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setValueField = function(valueField){};

 /**
  * 
  * function getParentField()
  * @memberOf nui.TreeSelect
  * @returns {String}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getParentField = function(){return "";};

 /**
  * 
  * function setParentField(parentField)
  * @memberOf nui.TreeSelect
  * @param {String} parentField
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setParentField = function(parentField){};

 /**
  * 
  * function getResultAsTree()
  * @memberOf nui.TreeSelect
  * @returns {Boolean}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getResultAsTree = function(){return true;};

 /**
  * 
  * function setResultAsTree(resultAsTree)
  * @memberOf nui.TreeSelect
  * @param {Boolean} resultAsTree
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setResultAsTree = function(resultAsTree){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.TreeSelect
  * @returns {String}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.TreeSelect
  * @param {String} textField
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setTextField = function(textField){};

 /**
  * 
  * function getMultiSelect()
  * @memberOf nui.TreeSelect
  * @returns {Boolean}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getMultiSelect = function(){return true;};

 /**
  * 
  * function setMultiSelect(multiSelect)
  * @memberOf nui.TreeSelect
  * @param {Boolean} multiSelect
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setMultiSelect = function(multiSelect){};

 /**
  * 
  * function getCheckRecursive()
  * @memberOf nui.TreeSelect
  * @returns {Boolean}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getCheckRecursive = function(){return true;};

 /**
  * 
  * function setCheckRecursive(checkRecursive)
  * @memberOf nui.TreeSelect
  * @param {Boolean} checkRecursive
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setCheckRecursive = function(checkRecursive){};

 /**
  * 
  * function getShowTreeIcon()
  * @memberOf nui.TreeSelect
  * @returns {Boolean}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getShowTreeIcon = function(){return true;};

 /**
  * 
  * function setShowTreeIcon(showTreeIcon)
  * @memberOf nui.TreeSelect
  * @param {Boolean} showTreeIcon
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setShowTreeIcon = function(showTreeIcon){};

 /**
  * 
  * function getShowTreeLines()
  * @memberOf nui.TreeSelect
  * @returns {Boolean}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getShowTreeLines = function(){return true;};

 /**
  * 
  * function setShowTreeLines(showTreeLines)
  * @memberOf nui.TreeSelect
  * @param {Boolean} showTreeLines
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setShowTreeLines = function(showTreeLines){};

 /**
  * 
  * function getAutoCheckParent()
  * @memberOf nui.TreeSelect
  * @returns {Boolean}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getAutoCheckParent = function(){return true;};

 /**
  * 
  * function setAutoCheckParent(autoCheckParent)
  * @memberOf nui.TreeSelect
  * @param {Boolean} autoCheckParent
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setAutoCheckParent = function(autoCheckParent){};

 /**
  * 
  * function getExpandOnLoad()
  * @memberOf nui.TreeSelect
  * @returns {Boolean}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getExpandOnLoad = function(){return true;};

 /**
  * 
  * function setExpandOnLoad(expandOnLoad)
  * @memberOf nui.TreeSelect
  * @param {Boolean} expandOnLoad
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setExpandOnLoad = function(expandOnLoad){};

 /**
  * 
  * function getValueFromSelect()
  * @memberOf nui.TreeSelect
  * @returns {Boolean}
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.getValueFromSelect = function(){return true;};

 /**
  * 
  * function setValueFromSelect(valueFromSelect)
  * @memberOf nui.TreeSelect
  * @param {Boolean} valueFromSelect
  * @see nui.TreeSelect
  */
nui.TreeSelect.prototype.setValueFromSelect = function(valueFromSelect){};

/**
 * @constructor
 */
nui.Lookup.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.Lookup
  * @param  value
  * @see nui.Lookup
  */
nui.Lookup.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.Lookup
  * @see nui.Lookup
  */
nui.Lookup.prototype.getValue = function(){};

 /**
  * 清除所有选中<br/>
  * function deselectAll()
  * @memberOf nui.Lookup
  * @see nui.Lookup
  */
nui.Lookup.prototype.deselectAll = function(){};

 /**
  * 
  * function getValueField()
  * @memberOf nui.Lookup
  * @returns {String}
  * @see nui.Lookup
  */
nui.Lookup.prototype.getValueField = function(){return "";};

 /**
  * 
  * function setValueField(valueField)
  * @memberOf nui.Lookup
  * @param {String} valueField
  * @see nui.Lookup
  */
nui.Lookup.prototype.setValueField = function(valueField){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.Lookup
  * @returns {String}
  * @see nui.Lookup
  */
nui.Lookup.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.Lookup
  * @param {String} textField
  * @see nui.Lookup
  */
nui.Lookup.prototype.setTextField = function(textField){};

 /**
  * 
  * function getGrid()
  * @memberOf nui.Lookup
  * @returns {String}
  * @see nui.Lookup
  */
nui.Lookup.prototype.getGrid = function(){return "";};

 /**
  * 
  * function setGrid(grid)
  * @memberOf nui.Lookup
  * @param {String} grid
  * @see nui.Lookup
  */
nui.Lookup.prototype.setGrid = function(grid){};

 /**
  * 
  * function getPopup()
  * @memberOf nui.Lookup
  * @returns {String}
  * @see nui.Lookup
  */
nui.Lookup.prototype.getPopup = function(){return "";};

 /**
  * 
  * function setPopup(popup)
  * @memberOf nui.Lookup
  * @param {String} popup
  * @see nui.Lookup
  */
nui.Lookup.prototype.setPopup = function(popup){};

/**
 * @constructor
 */
nui.HtmlFile.prototype = new nui.Control();

 /**
  * 
  * function getButtonText()
  * @memberOf nui.HtmlFile
  * @returns {String}
  * @see nui.HtmlFile
  */
nui.HtmlFile.prototype.getButtonText = function(){return "";};

 /**
  * 
  * function setButtonText(buttonText)
  * @memberOf nui.HtmlFile
  * @param {String} buttonText
  * @see nui.HtmlFile
  */
nui.HtmlFile.prototype.setButtonText = function(buttonText){};

 /**
  * 
  * function getLimitType()
  * @memberOf nui.HtmlFile
  * @returns {String}
  * @see nui.HtmlFile
  */
nui.HtmlFile.prototype.getLimitType = function(){return "";};

 /**
  * 
  * function setLimitType(limitType)
  * @memberOf nui.HtmlFile
  * @param {String} limitType
  * @see nui.HtmlFile
  */
nui.HtmlFile.prototype.setLimitType = function(limitType){};

/**
 * @constructor
 */
nui.FileUpload.prototype = new nui.Control();

 /**
  * 上传文件<br/>
  * function startUpload()
  * @memberOf nui.FileUpload
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.startUpload = function(){};

 /**
  * 
  * function getButtonText()
  * @memberOf nui.FileUpload
  * @returns {String}
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.getButtonText = function(){return "";};

 /**
  * 
  * function setButtonText(buttonText)
  * @memberOf nui.FileUpload
  * @param {String} buttonText
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.setButtonText = function(buttonText){};

 /**
  * 
  * function getLimitType()
  * @memberOf nui.FileUpload
  * @returns {String}
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.getLimitType = function(){return "";};

 /**
  * 
  * function setLimitType(limitType)
  * @memberOf nui.FileUpload
  * @param {String} limitType
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.setLimitType = function(limitType){};

 /**
  * 
  * function getLimitSize()
  * @memberOf nui.FileUpload
  * @returns {String}
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.getLimitSize = function(){return "";};

 /**
  * 
  * function setLimitSize(limitSize)
  * @memberOf nui.FileUpload
  * @param {String} limitSize
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.setLimitSize = function(limitSize){};

 /**
  * 
  * function getUploadUrl()
  * @memberOf nui.FileUpload
  * @returns {String}
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.getUploadUrl = function(){return "";};

 /**
  * 
  * function setUploadUrl(uploadUrl)
  * @memberOf nui.FileUpload
  * @param {String} uploadUrl
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.setUploadUrl = function(uploadUrl){};

 /**
  * 
  * function getFlashUrl()
  * @memberOf nui.FileUpload
  * @returns {String}
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.getFlashUrl = function(){return "";};

 /**
  * 
  * function setFlashUrl(flashUrl)
  * @memberOf nui.FileUpload
  * @param {String} flashUrl
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.setFlashUrl = function(flashUrl){};

 /**
  * 
  * function getUploadOnSelect()
  * @memberOf nui.FileUpload
  * @returns {Boolean}
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.getUploadOnSelect = function(){return true;};

 /**
  * 
  * function setUploadOnSelect(uploadOnSelect)
  * @memberOf nui.FileUpload
  * @param {Boolean} uploadOnSelect
  * @see nui.FileUpload
  */
nui.FileUpload.prototype.setUploadOnSelect = function(uploadOnSelect){};

/**
 * @constructor
 */
nui.Hidden.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.Hidden
  * @param  value
  * @see nui.Hidden
  */
nui.Hidden.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.Hidden
  * @see nui.Hidden
  */
nui.Hidden.prototype.getValue = function(){};

/**
 * @constructor
 */
nui.RichText.prototype = new nui.Control();

 /**
  * 设置值<br/>
  * function setValue(value)
  * @memberOf nui.RichText
  * @param  value
  * @see nui.RichText
  */
nui.RichText.prototype.setValue = function(value){};

 /**
  * 获取值<br/>
  * function getValue()
  * @memberOf nui.RichText
  * @returns {String}
  * @see nui.RichText
  */
nui.RichText.prototype.getValue = function(){return "";};

 /**
  * 设置文本框提交数据<br/>
  * function setSubmitData(data)
  * @memberOf nui.RichText
  * @param  data
  * @see nui.RichText
  */
nui.RichText.prototype.setSubmitData = function(data){};

 /**
  * 获取文本框提交数据<br/>
  * function getSubmitData()
  * @memberOf nui.RichText
  * @returns {String}
  * @see nui.RichText
  */
nui.RichText.prototype.getSubmitData = function(){return "";};

 /**
  * 设置文本框为只读属性<br/>
  * function setReadOnly(Boolean)
  * @memberOf nui.RichText
  * @param  Boolean
  * @see nui.RichText
  */
nui.RichText.prototype.setReadOnly = function(Boolean){};

 /**
  * 获取文本框为只读属性<br/>
  * function getReadOnly()
  * @memberOf nui.RichText
  * @returns {Boolean}
  * @see nui.RichText
  */
nui.RichText.prototype.getReadOnly = function(){return true;};

 /**
  * 
  * function getWidth()
  * @memberOf nui.RichText
  * @returns {Number}
  * @see nui.RichText
  */
nui.RichText.prototype.getWidth = function(){return 0;};

 /**
  * 
  * function setWidth(width)
  * @memberOf nui.RichText
  * @param {Number} width
  * @see nui.RichText
  */
nui.RichText.prototype.setWidth = function(width){};

 /**
  * 
  * function getHeight()
  * @memberOf nui.RichText
  * @returns {Number}
  * @see nui.RichText
  */
nui.RichText.prototype.getHeight = function(){return 0;};

 /**
  * 
  * function setHeight(height)
  * @memberOf nui.RichText
  * @param {Number} height
  * @see nui.RichText
  */
nui.RichText.prototype.setHeight = function(height){};

/**
 * @constructor
 */
nui.Dict.prototype = new nui.Control();

 /**
  * 设置业务字典值<br/>
  * function getDictText(dictTypeId, dictKey)
  * @memberOf nui.Dict
  * @param  dictTypeId
  * @param  dictKey
  * @returns {String}
  * @see nui.Dict
  */
nui.Dict.prototype.getDictText = function(dictTypeId, dictKey){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.Dict
  * @param {String} textField
  * @see nui.Dict
  */
nui.Dict.prototype.setTextField = function(textField){};

 /**
  * 
  * function setValueField(valueField)
  * @memberOf nui.Dict
  * @param {String} valueField
  * @see nui.Dict
  */
nui.Dict.prototype.setValueField = function(valueField){};

/**
 * @constructor
 */
nui.DataGrid.prototype = new nui.Control();

 /**
  * 加载数据。 比如，grid.load({key: "普元"})。 后台接收如下信息：<br/>{<br/>key: "普元",  //自定义<br/>pageIndex: 0,<br/>pageSize: 10,<br/>sortField: "",<br/>sortOrder: "asc"<br/>}<br/>使用：String key = request.<br/><br/>
  * function load(params, success, fail)
  * @memberOf nui.DataGrid
  * @param  params
  * @param  success
  * @param  fail
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.load = function(params, success, fail){};

 /**
  * 重新加载数据。<br/>
  * function reload()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.reload = function(){};

 /**
  * 跳转页码。<br/>
  * function gotoPage(index, size)
  * @memberOf nui.DataGrid
  * @param  index
  * @param  size
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.gotoPage = function(index, size){};

 /**
  * 排序字段<br/>
  * function sortBy(sortField, sortOrder)
  * @memberOf nui.DataGrid
  * @param  sortField
  * @param  sortOrder
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.sortBy = function(sortField, sortOrder){};

 /**
  * 取消排序。<br/>
  * function clearSort()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.clearSort = function(){};

 /**
  * 分组。比如：grid.groupBy("city", "desc")<br/>
  * function groupBy(field, dir)
  * @memberOf nui.DataGrid
  * @param  field
  * @param  dir
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.groupBy = function(field, dir){};

 /**
  * 显示加载遮罩。<br/>
  * function loading()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.loading = function(){};

 /**
  * 取消遮罩。<br/>
  * function unmask()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.unmask = function(){};

 /**
  * 锁定列。比如：grid.frozenColumns(0, 2)<br/>
  * function frozenColumns(start, end)
  * @memberOf nui.DataGrid
  * @param  start
  * @param  end
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.frozenColumns = function(start, end){};

 /**
  * 取消锁定列。<br/>
  * function unFrozenColumns()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.unFrozenColumns = function(){};

 /**
  * 取消分组。<br/>
  * function clearGroup()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.clearGroup = function(){};

 /**
  * 折叠所有分组。<br/>
  * function collapseGroups()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.collapseGroups = function(){};

 /**
  * 展开所有分组。<br/>
  * function expandGroups()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.expandGroups = function(){};

 /**
  * 合并单元格。比如：<br/>var cells = [<br/>{ rowIndex: 1, columnIndex: 0, rowSpan: 1, colSpan: 2 },<br/>{ rowIndex: 3, columnIndex: 0, rowSpan: 4, colSpan: 3 }<br/>];<br/>grid.margeCells(marges);<br/><br/>
  * function mergeCells(cells)
  * @memberOf nui.DataGrid
  * @param  cells
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.mergeCells = function(cells){};

 /**
  * 自动合并相同值单元格。比如：<br/>grid.margeColumns(["company"]);//company是某列的name<br/><br/>
  * function mergeColumns(columns)
  * @memberOf nui.DataGrid
  * @param  columns
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.mergeColumns = function(columns){};

 /**
  * 设置当前选中单元格。<br/>
  * function setCurrentCell(cell)
  * @memberOf nui.DataGrid
  * @param  cell
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setCurrentCell = function(cell){};

 /**
  * 获取当前选中单元格。<br/>
  * function getCurrentCell()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getCurrentCell = function(){};

 /**
  * 获取增加、删除、修改后的数据集合。row._state为added/modified/removed。<br/>
  * function getChanges()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getChanges = function(){};

 /**
  * 对当前选中单元格启动编辑。<br/>
  * function beginEditCell()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.beginEditCell = function(){};

 /**
  * 取消所有行编辑。<br/>
  * function cancelEdit()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.cancelEdit = function(){};

 /**
  * 提交指定行编辑。<br/>
  * function commitEditRow(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.commitEditRow = function(row){};

 /**
  * 提交所有行编辑。<br/>
  * function commitEdit()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.commitEdit = function(){};

 /**
  * 启动行编辑。<br/>
  * function beginEditRow(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.beginEditRow = function(row){};

 /**
  * 取消指定行编辑。<br/>
  * function cancelEditRow(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.cancelEditRow = function(row){};

 /**
  * 是否有行编辑。<br/>
  * function isEditing()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.isEditing = function(){return true;};

 /**
  * 指定行是否处于编辑状态。<br/>
  * function isEditingRow(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.isEditingRow = function(row){return true;};

 /**
  * 获取指定列和行的编辑器控件对象。<br/>
  * function getCellEditor(column, row)
  * @memberOf nui.DataGrid
  * @param  column
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getCellEditor = function(column, row){};

 /**
  * 获取编辑器属于哪一行对象<br/>
  * function getEditorOwnerRow(editor)
  * @memberOf nui.DataGrid
  * @param  editor
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getEditorOwnerRow = function(editor){};

 /**
  * 更新行(JavaScript)<br/>
  * function updateRow(row, rowData)
  * @memberOf nui.DataGrid
  * @param  row
  * @param  rowData
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.updateRow = function(row, rowData){};

 /**
  * 删除行(JavaScript)。autoSelect为true，则删除记录后，自动选择下一条记录。<br/>
  * function removeRow(row, autoSelect)
  * @memberOf nui.DataGrid
  * @param  row
  * @param  autoSelect
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.removeRow = function(row, autoSelect){};

 /**
  * 删除多行(JavaScript)。autoSelect为true，则删除记录后，自动选择下一条记录。<br/>
  * function removeRows(rows, autoSelect)
  * @memberOf nui.DataGrid
  * @param  rows
  * @param  autoSelect
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.removeRows = function(rows, autoSelect){};

 /**
  * 增加多行(Javascript)<br/>
  * function addRows(rows, index)
  * @memberOf nui.DataGrid
  * @param  rows
  * @param  index
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.addRows = function(rows, index){};

 /**
  * 增加行(Javascript)<br/>
  * function addRow(row, index)
  * @memberOf nui.DataGrid
  * @param  row
  * @param  index
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.addRow = function(row, index){};

 /**
  * 移动行(Javascript)<br/>
  * function moveRow(row, index)
  * @memberOf nui.DataGrid
  * @param  row
  * @param  index
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.moveRow = function(row, index){};

 /**
  * 上移<br/>
  * function moveUp(Array)
  * @memberOf nui.DataGrid
  * @param  Array
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.moveUp = function(Array){};

 /**
  * 下移<br/>
  * function moveDown(Array)
  * @memberOf nui.DataGrid
  * @param  Array
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.moveDown = function(Array){};

 /**
  * 清除所有行(Javascript)<br/>
  * function clearRows()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.clearRows = function(){};

 /**
  * 清除所有行修改痕迹。<br/>
  * function accept()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.accept = function(){};

 /**
  * 清除指定行修改痕迹。<br/>
  * function acceptRecord(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.acceptRecord = function(row){};

 /**
  * 获取行索引号<br/>
  * function indexOf(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.indexOf = function(row){};

 /**
  * 是否选中行<br/>
  * function isSelected(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.isSelected = function(row){};

 /**
  * 获取所有选中的行<br/>
  * function getSelecteds()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getSelecteds = function(){};

 /**
  * 获取当前选中行<br/>
  * function getSelected()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getSelected = function(){};

 /**
  * 设置当前选中行<br/>
  * function setSelected(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setSelected = function(row){};

 /**
  * 选中行<br/>
  * function select(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.select = function(row){};

 /**
  * 取消选中行<br/>
  * function deselect(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.deselect = function(row){};

 /**
  * 选中所有行<br/>
  * function selectAll()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.selectAll = function(){};

 /**
  * 取消选中所有行<br/>
  * function deselectAll()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.deselectAll = function(){};

 /**
  * 取消选中所有行<br/>
  * function clearSelect()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.clearSelect = function(){};

 /**
  * 选中多行<br/>
  * function selects(rows)
  * @memberOf nui.DataGrid
  * @param  rows
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.selects = function(rows){};

 /**
  * 取消选中多行<br/>
  * function deselects(rows)
  * @memberOf nui.DataGrid
  * @param  rows
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.deselects = function(rows){};

 /**
  * 显示所有行详细<br/>
  * function showAllRowDetail()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.showAllRowDetail = function(){};

 /**
  * 隐藏所有行详细<br/>
  * function hideAllRowDetail()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.hideAllRowDetail = function(){};

 /**
  * 显示行详细<br/>
  * function showRowDetail(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.showRowDetail = function(row){};

 /**
  * 隐藏行详细<br/>
  * function hideRowDetail(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.hideRowDetail = function(row){};

 /**
  * 是否显示了行详细<br/>
  * function isShowRowDetail(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.isShowRowDetail = function(row){};

 /**
  * 获取行详细DOM对象<br/>
  * function getRowDetailCellEl(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getRowDetailCellEl = function(row){};

 /**
  * 隐藏列<br/>
  * function hideColumn(column)
  * @memberOf nui.DataGrid
  * @param  column
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.hideColumn = function(column){};

 /**
  * 显示列<br/>
  * function showColumn(column)
  * @memberOf nui.DataGrid
  * @param  column
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.showColumn = function(column){};

 /**
  * 设置列宽<br/>
  * function setColumnWidth(column, Number)
  * @memberOf nui.DataGrid
  * @param  column
  * @param  Number
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setColumnWidth = function(column, Number){};

 /**
  * 更新列内容。例如：grid.updateColumn("name", {header: "姓名"});<br/>
  * function updateColumn(column, Object)
  * @memberOf nui.DataGrid
  * @param  column
  * @param  Object
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.updateColumn = function(column, Object){};

 /**
  * 获取行对象<br/>
  * function getRow(index)
  * @memberOf nui.DataGrid
  * @param  index
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getRow = function(index){};

 /**
  * 通过查询函数获取行对象。如：<br/>var row = grid.findRow(function(row){<br/>if(row.name == "张三") return true;<br/>});<br/><br/>
  * function findRow(Function)
  * @memberOf nui.DataGrid
  * @param  Function
  * @returns {Object}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.findRow = function(Function){return new Object();};

 /**
  * 通过查询函数获取行对象数组。如：<br/>var rows = grid.findRows(function(row){<br/>if(row.age > 20) return true;<br/>});<br/>
  * function findRows(Function)
  * @memberOf nui.DataGrid
  * @param  Function
  * @returns {Array}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.findRows = function(Function){return [];};

 /**
  * 获取列对象<br/>
  * function getColumn(index)
  * @memberOf nui.DataGrid
  * @param  index
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getColumn = function(index){};

 /**
  * 增加行样式<br/>
  * function addRowCls(row, cls)
  * @memberOf nui.DataGrid
  * @param  row
  * @param  cls
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.addRowCls = function(row, cls){};

 /**
  * 删除行样式<br/>
  * function removeRowCls(row, cls)
  * @memberOf nui.DataGrid
  * @param  row
  * @param  cls
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.removeRowCls = function(row, cls){};

 /**
  * 获取过滤行单元格DOM对象<br/>
  * function getFilterCellEl(column)
  * @memberOf nui.DataGrid
  * @param  column
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getFilterCellEl = function(column){};

 /**
  * 获取汇总行单元格DOM对象<br/>
  * function getSummaryCellEl(column)
  * @memberOf nui.DataGrid
  * @param  column
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getSummaryCellEl = function(column){};

 /**
  * 验证表格所有单元格<br/>
  * function validate()
  * @memberOf nui.DataGrid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.validate = function(){};

 /**
  * 是否验证通过<br/>
  * function isValid()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.isValid = function(){return true;};

 /**
  * 定位滚动条到行<br/>
  * function scrollIntoView(row)
  * @memberOf nui.DataGrid
  * @param  row
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.scrollIntoView = function(row){};

 /**
  * 
  * function getData()
  * @memberOf nui.DataGrid
  * @returns {Array}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getData = function(){return [];};

 /**
  * 
  * function setData(data)
  * @memberOf nui.DataGrid
  * @param {Array} data
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setData = function(data){};

 /**
  * 
  * function getColumns()
  * @memberOf nui.DataGrid
  * @returns {Array}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getColumns = function(){return [];};

 /**
  * 
  * function setColumns(columns)
  * @memberOf nui.DataGrid
  * @param {Array} columns
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setColumns = function(columns){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.DataGrid
  * @param {String} url
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setUrl = function(url){};

 /**
  * 
  * function getIdField()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getIdField = function(){return "";};

 /**
  * 
  * function setIdField(idField)
  * @memberOf nui.DataGrid
  * @param {String} idField
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setIdField = function(idField){};

 /**
  * 
  * function getVirtualScroll()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getVirtualScroll = function(){return true;};

 /**
  * 
  * function setVirtualScroll(virtualScroll)
  * @memberOf nui.DataGrid
  * @param {Boolean} virtualScroll
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setVirtualScroll = function(virtualScroll){};

 /**
  * 
  * function getPageIndex()
  * @memberOf nui.DataGrid
  * @returns {Number}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getPageIndex = function(){return 0;};

 /**
  * 
  * function setPageIndex(pageIndex)
  * @memberOf nui.DataGrid
  * @param {Number} pageIndex
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setPageIndex = function(pageIndex){};

 /**
  * 
  * function getPageSize()
  * @memberOf nui.DataGrid
  * @returns {Number}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getPageSize = function(){return 0;};

 /**
  * 
  * function setPageSize(pageSize)
  * @memberOf nui.DataGrid
  * @param {Number} pageSize
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setPageSize = function(pageSize){};

 /**
  * 
  * function getSizeList()
  * @memberOf nui.DataGrid
  * @returns {Array}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getSizeList = function(){return [];};

 /**
  * 
  * function setSizeList(sizeList)
  * @memberOf nui.DataGrid
  * @param {Array} sizeList
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setSizeList = function(sizeList){};

 /**
  * 
  * function getSortField()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getSortField = function(){return "";};

 /**
  * 
  * function setSortField(sortField)
  * @memberOf nui.DataGrid
  * @param {String} sortField
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setSortField = function(sortField){};

 /**
  * 
  * function getSortOrder()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getSortOrder = function(){return "";};

 /**
  * 
  * function setSortOrder(sortOrder)
  * @memberOf nui.DataGrid
  * @param {String} sortOrder
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setSortOrder = function(sortOrder){};

 /**
  * 
  * function getTotalCount()
  * @memberOf nui.DataGrid
  * @returns {Number}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getTotalCount = function(){return 0;};

 /**
  * 
  * function setTotalCount(totalCount)
  * @memberOf nui.DataGrid
  * @param {Number} totalCount
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setTotalCount = function(totalCount){};

 /**
  * 
  * function getColumnWidth()
  * @memberOf nui.DataGrid
  * @returns {Number}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getColumnWidth = function(){return 0;};

 /**
  * 
  * function getShowHeader()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowHeader = function(){return true;};

 /**
  * 
  * function setShowHeader(showHeader)
  * @memberOf nui.DataGrid
  * @param {Boolean} showHeader
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowHeader = function(showHeader){};

 /**
  * 
  * function getShowPager()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowPager = function(){return true;};

 /**
  * 
  * function setShowPager(showPager)
  * @memberOf nui.DataGrid
  * @param {Boolean} showPager
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowPager = function(showPager){};

 /**
  * 
  * function getShowFooter()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowFooter = function(){return true;};

 /**
  * 
  * function setShowFooter(showFooter)
  * @memberOf nui.DataGrid
  * @param {Boolean} showFooter
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowFooter = function(showFooter){};

 /**
  * 
  * function getShowHGridLines()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowHGridLines = function(){return true;};

 /**
  * 
  * function setShowHGridLines(showHGridLines)
  * @memberOf nui.DataGrid
  * @param {Boolean} showHGridLines
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowHGridLines = function(showHGridLines){};

 /**
  * 
  * function getShowVGridLines()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowVGridLines = function(){return true;};

 /**
  * 
  * function setShowVGridLines(showVGridLines)
  * @memberOf nui.DataGrid
  * @param {Boolean} showVGridLines
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowVGridLines = function(showVGridLines){};

 /**
  * 
  * function getShowFilterRow()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowFilterRow = function(){return true;};

 /**
  * 
  * function setShowFilterRow(showFilterRow)
  * @memberOf nui.DataGrid
  * @param {Boolean} showFilterRow
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowFilterRow = function(showFilterRow){};

 /**
  * 
  * function getShowSummaryRow()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowSummaryRow = function(){return true;};

 /**
  * 
  * function setShowSummaryRow(showSummaryRow)
  * @memberOf nui.DataGrid
  * @param {Boolean} showSummaryRow
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowSummaryRow = function(showSummaryRow){};

 /**
  * 
  * function getAllowCellWrap()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowCellWrap = function(){return true;};

 /**
  * 
  * function setAllowCellWrap(allowCellWrap)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowCellWrap
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowCellWrap = function(allowCellWrap){};

 /**
  * 
  * function getAllowHeaderWrap()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowHeaderWrap = function(){return true;};

 /**
  * 
  * function setAllowHeaderWrap(allowHeaderWrap)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowHeaderWrap
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowHeaderWrap = function(allowHeaderWrap){};

 /**
  * 
  * function getAllowSortColumn()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowSortColumn = function(){return true;};

 /**
  * 
  * function setAllowSortColumn(allowSortColumn)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowSortColumn
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowSortColumn = function(allowSortColumn){};

 /**
  * 
  * function getAllowMoveColumn()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowMoveColumn = function(){return true;};

 /**
  * 
  * function setAllowMoveColumn(allowMoveColumn)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowMoveColumn
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowMoveColumn = function(allowMoveColumn){};

 /**
  * 
  * function getAllowResizeColumn()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowResizeColumn = function(){return true;};

 /**
  * 
  * function setAllowResizeColumn(allowResizeColumn)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowResizeColumn
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowResizeColumn = function(allowResizeColumn){};

 /**
  * 
  * function getEnableHotTrack()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getEnableHotTrack = function(){return true;};

 /**
  * 
  * function setEnableHotTrack(enableHotTrack)
  * @memberOf nui.DataGrid
  * @param {Boolean} enableHotTrack
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setEnableHotTrack = function(enableHotTrack){};

 /**
  * 
  * function getAllowCellSelect()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowCellSelect = function(){return true;};

 /**
  * 
  * function setAllowCellSelect(allowCellSelect)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowCellSelect
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowCellSelect = function(allowCellSelect){};

 /**
  * 
  * function getAllowCellEdit()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowCellEdit = function(){return true;};

 /**
  * 
  * function setAllowCellEdit(allowCellEdit)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowCellEdit
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowCellEdit = function(allowCellEdit){};

 /**
  * 
  * function getEditNextOnEnterKey()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getEditNextOnEnterKey = function(){return true;};

 /**
  * 
  * function setEditNextOnEnterKey(editNextOnEnterKey)
  * @memberOf nui.DataGrid
  * @param {Boolean} editNextOnEnterKey
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setEditNextOnEnterKey = function(editNextOnEnterKey){};

 /**
  * 
  * function getCellEditAction()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getCellEditAction = function(){return "";};

 /**
  * 
  * function setCellEditAction(cellEditAction)
  * @memberOf nui.DataGrid
  * @param {String} cellEditAction
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setCellEditAction = function(cellEditAction){};

 /**
  * 
  * function getAllowCellValid()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowCellValid = function(){return true;};

 /**
  * 
  * function setAllowCellValid(allowCellValid)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowCellValid
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowCellValid = function(allowCellValid){};

 /**
  * 
  * function getAllowRowSelect()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowRowSelect = function(){return true;};

 /**
  * 
  * function setAllowRowSelect(allowRowSelect)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowRowSelect
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowRowSelect = function(allowRowSelect){};

 /**
  * 
  * function getMultiSelect()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getMultiSelect = function(){return true;};

 /**
  * 
  * function setMultiSelect(multiSelect)
  * @memberOf nui.DataGrid
  * @param {Boolean} multiSelect
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setMultiSelect = function(multiSelect){};

 /**
  * 
  * function getAllowUnselect()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowUnselect = function(){return true;};

 /**
  * 
  * function setAllowUnselect(allowUnselect)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowUnselect
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowUnselect = function(allowUnselect){};

 /**
  * 
  * function getAllowAlternating()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowAlternating = function(){return true;};

 /**
  * 
  * function setAllowAlternating(allowAlternating)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowAlternating
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowAlternating = function(allowAlternating){};

 /**
  * 
  * function getFrozenStartColumn()
  * @memberOf nui.DataGrid
  * @returns {Number}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getFrozenStartColumn = function(){return 0;};

 /**
  * 
  * function setFrozenStartColumn(frozenStartColumn)
  * @memberOf nui.DataGrid
  * @param {Number} frozenStartColumn
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setFrozenStartColumn = function(frozenStartColumn){};

 /**
  * 
  * function getFrozenEndColumn()
  * @memberOf nui.DataGrid
  * @returns {Number}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getFrozenEndColumn = function(){return 0;};

 /**
  * 
  * function setFrozenEndColumn(frozenEndColumn)
  * @memberOf nui.DataGrid
  * @param {Number} frozenEndColumn
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setFrozenEndColumn = function(frozenEndColumn){};

 /**
  * 
  * function getShowPageIndex()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowPageIndex = function(){return true;};

 /**
  * 
  * function setShowPageIndex(showPageIndex)
  * @memberOf nui.DataGrid
  * @param {Boolean} showPageIndex
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowPageIndex = function(showPageIndex){};

 /**
  * 
  * function getShowPageSize()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowPageSize = function(){return true;};

 /**
  * 
  * function setShowPageSize(showPageSize)
  * @memberOf nui.DataGrid
  * @param {Boolean} showPageSize
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowPageSize = function(showPageSize){};

 /**
  * 
  * function getShowTotalCount()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowTotalCount = function(){return true;};

 /**
  * 
  * function setShowTotalCount(showTotalCount)
  * @memberOf nui.DataGrid
  * @param {Boolean} showTotalCount
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowTotalCount = function(showTotalCount){};

 /**
  * 
  * function getShowLoading()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowLoading = function(){return true;};

 /**
  * 
  * function setShowLoading(showLoading)
  * @memberOf nui.DataGrid
  * @param {Boolean} showLoading
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowLoading = function(showLoading){};

 /**
  * 
  * function getAllowResize()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAllowResize = function(){return true;};

 /**
  * 
  * function setAllowResize(allowResize)
  * @memberOf nui.DataGrid
  * @param {Boolean} allowResize
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAllowResize = function(allowResize){};

 /**
  * 
  * function getSelectOnLoad()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getSelectOnLoad = function(){return true;};

 /**
  * 
  * function setSelectOnLoad(selectOnLoad)
  * @memberOf nui.DataGrid
  * @param {Boolean} selectOnLoad
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setSelectOnLoad = function(selectOnLoad){};

 /**
  * 
  * function getCollapseGroupOnLoad()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getCollapseGroupOnLoad = function(){return true;};

 /**
  * 
  * function setCollapseGroupOnLoad(collapseGroupOnLoad)
  * @memberOf nui.DataGrid
  * @param {Boolean} collapseGroupOnLoad
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setCollapseGroupOnLoad = function(collapseGroupOnLoad){};

 /**
  * 
  * function getShowEmptyText()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowEmptyText = function(){return true;};

 /**
  * 
  * function setShowEmptyText(showEmptyText)
  * @memberOf nui.DataGrid
  * @param {Boolean} showEmptyText
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowEmptyText = function(showEmptyText){};

 /**
  * 
  * function getEmptyText()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getEmptyText = function(){return "";};

 /**
  * 
  * function setEmptyText(emptyText)
  * @memberOf nui.DataGrid
  * @param {String} emptyText
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setEmptyText = function(emptyText){};

 /**
  * 
  * function getPageIndexField()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getPageIndexField = function(){return "";};

 /**
  * 
  * function setPageIndexField(pageIndexField)
  * @memberOf nui.DataGrid
  * @param {String} pageIndexField
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setPageIndexField = function(pageIndexField){};

 /**
  * 
  * function getPageSizeField()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getPageSizeField = function(){return "";};

 /**
  * 
  * function setPageSizeField(pageSizeField)
  * @memberOf nui.DataGrid
  * @param {String} pageSizeField
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setPageSizeField = function(pageSizeField){};

 /**
  * 
  * function getSortFieldField()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getSortFieldField = function(){return "";};

 /**
  * 
  * function setSortFieldField(sortFieldField)
  * @memberOf nui.DataGrid
  * @param {String} sortFieldField
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setSortFieldField = function(sortFieldField){};

 /**
  * 
  * function getSortOrderField()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getSortOrderField = function(){return "";};

 /**
  * 
  * function setSortOrderField(sortOrderField)
  * @memberOf nui.DataGrid
  * @param {String} sortOrderField
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setSortOrderField = function(sortOrderField){};

 /**
  * 
  * function getTotalField()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getTotalField = function(){return "";};

 /**
  * 
  * function setTotalField(totalField)
  * @memberOf nui.DataGrid
  * @param {String} totalField
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setTotalField = function(totalField){};

 /**
  * 
  * function getDataField()
  * @memberOf nui.DataGrid
  * @returns {String}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getDataField = function(){return "";};

 /**
  * 
  * function setDataField(dataField)
  * @memberOf nui.DataGrid
  * @param {String} dataField
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setDataField = function(dataField){};

 /**
  * 
  * function getShowPageInfo()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowPageInfo = function(){return true;};

 /**
  * 
  * function setShowPageInfo(showPageInfo)
  * @memberOf nui.DataGrid
  * @param {Boolean} showPageInfo
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowPageInfo = function(showPageInfo){};

 /**
  * 
  * function getShowReloadButton()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowReloadButton = function(){return true;};

 /**
  * 
  * function setShowReloadButton(showReloadButton)
  * @memberOf nui.DataGrid
  * @param {Boolean} showReloadButton
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowReloadButton = function(showReloadButton){};

 /**
  * 
  * function getAutoHideRowDetail()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getAutoHideRowDetail = function(){return true;};

 /**
  * 
  * function setAutoHideRowDetail(autoHideRowDetail)
  * @memberOf nui.DataGrid
  * @param {Boolean} autoHideRowDetail
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setAutoHideRowDetail = function(autoHideRowDetail){};

 /**
  * 
  * function getShowModified()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowModified = function(){return true;};

 /**
  * 
  * function setShowModified(showModified)
  * @memberOf nui.DataGrid
  * @param {Boolean} showModified
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowModified = function(showModified){};

 /**
  * 
  * function getShowColumnsMenu()
  * @memberOf nui.DataGrid
  * @returns {Boolean}
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.getShowColumnsMenu = function(){return true;};

 /**
  * 
  * function setShowColumnsMenu(showColumnsMenu)
  * @memberOf nui.DataGrid
  * @param {Boolean} showColumnsMenu
  * @see nui.DataGrid
  */
nui.DataGrid.prototype.setShowColumnsMenu = function(showColumnsMenu){};

/**
 * @constructor
 */
nui.Tree.prototype = new nui.Control();

 /**
  * 加载数据。<br/>
  * function load(url)
  * @memberOf nui.Tree
  * @param  url
  * @see nui.Tree
  */
nui.Tree.prototype.load = function(url){};

 /**
  * 加载树形数据。<br/>
  * function loadData(Array)
  * @memberOf nui.Tree
  * @param  Array
  * @see nui.Tree
  */
nui.Tree.prototype.loadData = function(Array){};

 /**
  * 加载列表数据。比如：tree.loadList(list, "id", "pid")<br/>
  * function loadList(Array, idField, parentField)
  * @memberOf nui.Tree
  * @param  Array
  * @param  idField
  * @param  parentField
  * @see nui.Tree
  */
nui.Tree.prototype.loadList = function(Array, idField, parentField){};

 /**
  * 懒加载节点下一级数据。<br/>
  * function loadNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.loadNode = function(node){};

 /**
  * 获取根节点。<br/>
  * function getRootNode()
  * @memberOf nui.Tree
  * @returns {Object}
  * @see nui.Tree
  */
nui.Tree.prototype.getRootNode = function(){return new Object();};

 /**
  * 获得父节点<br/>
  * function getParentNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @returns {Object}
  * @see nui.Tree
  */
nui.Tree.prototype.getParentNode = function(node){return new Object();};

 /**
  * 获得子节点集合。<br/>
  * function getChildNodes(node)
  * @memberOf nui.Tree
  * @param  node
  * @returns {Array}
  * @see nui.Tree
  */
nui.Tree.prototype.getChildNodes = function(node){return [];};

 /**
  * 获得所有子节点集合。<br/>
  * function getAllChildNodes(node)
  * @memberOf nui.Tree
  * @param  node
  * @returns {Array}
  * @see nui.Tree
  */
nui.Tree.prototype.getAllChildNodes = function(node){return [];};

 /**
  * pnode是否是node的父级节点。<br/>
  * function isAncestor(pnode, node)
  * @memberOf nui.Tree
  * @param  pnode
  * @param  node
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.isAncestor = function(pnode, node){return true;};

 /**
  * 是否叶子节点。<br/>
  * function isLeaf(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.isLeaf = function(node){};

 /**
  * 获得节点层级。<br/>
  * function getLevel(node)
  * @memberOf nui.Tree
  * @param  node
  * @returns {Number}
  * @see nui.Tree
  */
nui.Tree.prototype.getLevel = function(node){return 0;};

 /**
  * 是否展开节点。<br/>
  * function isExpandedNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.isExpandedNode = function(node){return true;};

 /**
  * 是否Check选中的节点。<br/>
  * function isCheckedNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.isCheckedNode = function(node){return true;};

 /**
  * 是否显示节点。<br/>
  * function isVisibleNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.isVisibleNode = function(node){return true;};

 /**
  * 是否启用节点。<br/>
  * function isEnabledNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.isEnabledNode = function(node){return true;};

 /**
  * 由当前节点开始一直上溯到根节点，调用fn，直到fn返回false为止。<br/>
  * function bubbleParent(node, fn, scope)
  * @memberOf nui.Tree
  * @param  node
  * @param  fn
  * @param  scope
  * @returns {Object}
  * @see nui.Tree
  */
nui.Tree.prototype.bubbleParent = function(node, fn, scope){return new Object();};

 /**
  * 遍历所有层次的子节点, 直到返回false<br/>
  * function cascadeChild(node, fn, scope)
  * @memberOf nui.Tree
  * @param  node
  * @param  fn
  * @param  scope
  * @see nui.Tree
  */
nui.Tree.prototype.cascadeChild = function(node, fn, scope){};

 /**
  * 遍历下一级子节点<br/>
  * function eachChild(node, fn, scope)
  * @memberOf nui.Tree
  * @param  node
  * @param  fn
  * @param  scope
  * @see nui.Tree
  */
nui.Tree.prototype.eachChild = function(node, fn, scope){};

 /**
  * 删除多个节点<br/>
  * function removeNodes(nodes)
  * @memberOf nui.Tree
  * @param  nodes
  * @see nui.Tree
  */
nui.Tree.prototype.removeNodes = function(nodes){};

 /**
  * 删除节点<br/>
  * function removeNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.removeNode = function(node){};

 /**
  * 增加多个节点<br/>
  * function addNodes(nodes, parentNode)
  * @memberOf nui.Tree
  * @param  nodes
  * @param  parentNode
  * @see nui.Tree
  */
nui.Tree.prototype.addNodes = function(nodes, parentNode){};

 /**
  * 加入节点<br/>
  * function addNode(node, index, parentNode)
  * @memberOf nui.Tree
  * @param  node
  * @param  index
  * @param  parentNode
  * @see nui.Tree
  */
nui.Tree.prototype.addNode = function(node, index, parentNode){};

 /**
  * 更新节点内容。比如：tree.updateNode(node, {text: "abc"});<br/>
  * function updateNode(node, options)
  * @memberOf nui.Tree
  * @param  node
  * @param  options
  * @see nui.Tree
  */
nui.Tree.prototype.updateNode = function(node, options){};

 /**
  * 移动节点。action值：before|after|add。<br/>
  * function moveNode(node, targetNode, action)
  * @memberOf nui.Tree
  * @param  node
  * @param  targetNode
  * @param  action
  * @see nui.Tree
  */
nui.Tree.prototype.moveNode = function(node, targetNode, action){};

 /**
  * 设置节点文本<br/>
  * function setNodeText(node, String)
  * @memberOf nui.Tree
  * @param  node
  * @param  String
  * @see nui.Tree
  */
nui.Tree.prototype.setNodeText = function(node, String){};

 /**
  * 设置节点图标<br/>
  * function setNodeIconCls(node, String)
  * @memberOf nui.Tree
  * @param  node
  * @param  String
  * @see nui.Tree
  */
nui.Tree.prototype.setNodeIconCls = function(node, String){};

 /**
  * 根据值获取节点对象<br/>
  * function getNode(value)
  * @memberOf nui.Tree
  * @param  value
  * @see nui.Tree
  */
nui.Tree.prototype.getNode = function(value){};

 /**
  * 隐藏节点<br/>
  * function hideNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.hideNode = function(node){};

 /**
  * 显示节点<br/>
  * function showNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.showNode = function(node){};

 /**
  * 启用节点<br/>
  * function enableNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.enableNode = function(node){};

 /**
  * 禁用节点<br/>
  * function disableNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.disableNode = function(node){};

 /**
  * 查找节点数据。如：<br/>var nodes = tree.findNodes(function(node){<br/>if(node.name.indexOf("abc") != -1) return true;<br/>});<br/>
  * function findNodes(fn, scope)
  * @memberOf nui.Tree
  * @param  fn
  * @param  scope
  * @see nui.Tree
  */
nui.Tree.prototype.findNodes = function(fn, scope){};

 /**
  * 过滤。如：<br/>tree.filter(function(node){<br/>if(node.name.indexOf("abc") != -1) return true;<br/>});<br/>
  * function filter(fn, scope)
  * @memberOf nui.Tree
  * @param  fn
  * @param  scope
  * @see nui.Tree
  */
nui.Tree.prototype.filter = function(fn, scope){};

 /**
  * 取消过滤<br/>
  * function clearFilter()
  * @memberOf nui.Tree
  * @see nui.Tree
  */
nui.Tree.prototype.clearFilter = function(){};

 /**
  * 展开节点<br/>
  * function expandNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.expandNode = function(node){};

 /**
  * 收缩节点<br/>
  * function collapseNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.collapseNode = function(node){};

 /**
  * 展开层次节点<br/>
  * function expandLevel(Number)
  * @memberOf nui.Tree
  * @param  Number
  * @see nui.Tree
  */
nui.Tree.prototype.expandLevel = function(Number){};

 /**
  * 折叠层次节点<br/>
  * function collapseLevel(Number)
  * @memberOf nui.Tree
  * @param  Number
  * @see nui.Tree
  */
nui.Tree.prototype.collapseLevel = function(Number){};

 /**
  * 展开节点路径<br/>
  * function expandPath(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.expandPath = function(node){};

 /**
  * 折叠节点路径<br/>
  * function collapsePath(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.collapsePath = function(node){};

 /**
  * 展开所有节点<br/>
  * function expandAll()
  * @memberOf nui.Tree
  * @see nui.Tree
  */
nui.Tree.prototype.expandAll = function(){};

 /**
  * 收缩所有节点<br/>
  * function collapseAll()
  * @memberOf nui.Tree
  * @see nui.Tree
  */
nui.Tree.prototype.collapseAll = function(){};

 /**
  * 视图滚动至节点<br/>
  * function scrollIntoView(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.scrollIntoView = function(node){};

 /**
  * 选中节点<br/>
  * function selectNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.selectNode = function(node){};

 /**
  * 获取选中的节点<br/>
  * function getSelectedNode()
  * @memberOf nui.Tree
  * @see nui.Tree
  */
nui.Tree.prototype.getSelectedNode = function(){};

 /**
  * Check多选节点<br/>
  * function checkNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.checkNode = function(node){};

 /**
  * 取消Check多选节点<br/>
  * function uncheckNode(node)
  * @memberOf nui.Tree
  * @param  node
  * @see nui.Tree
  */
nui.Tree.prototype.uncheckNode = function(node){};

 /**
  * Check多选多个节点<br/>
  * function checkNodes(nodes)
  * @memberOf nui.Tree
  * @param  nodes
  * @see nui.Tree
  */
nui.Tree.prototype.checkNodes = function(nodes){};

 /**
  * 取消Check多选多个节点<br/>
  * function uncheckNodes(nodes)
  * @memberOf nui.Tree
  * @param  nodes
  * @see nui.Tree
  */
nui.Tree.prototype.uncheckNodes = function(nodes){};

 /**
  * Check多选所有节点<br/>
  * function checkAllNodes()
  * @memberOf nui.Tree
  * @see nui.Tree
  */
nui.Tree.prototype.checkAllNodes = function(){};

 /**
  * 取消Check多选所有节点<br/>
  * function uncheckAllNodes()
  * @memberOf nui.Tree
  * @see nui.Tree
  */
nui.Tree.prototype.uncheckAllNodes = function(){};

 /**
  * 获取Check选中的多个节点<br/>
  * function getCheckedNodes(haveParent)
  * @memberOf nui.Tree
  * @param  haveParent
  * @see nui.Tree
  */
nui.Tree.prototype.getCheckedNodes = function(haveParent){};

 /**
  * 获取Check选中的节点值<br/>
  * function getValue(haveParent)
  * @memberOf nui.Tree
  * @param  haveParent
  * @see nui.Tree
  */
nui.Tree.prototype.getValue = function(haveParent){};

 /**
  * 
  * function getData()
  * @memberOf nui.Tree
  * @returns {Array}
  * @see nui.Tree
  */
nui.Tree.prototype.getData = function(){return [];};

 /**
  * 
  * function setData(data)
  * @memberOf nui.Tree
  * @param {Array} data
  * @see nui.Tree
  */
nui.Tree.prototype.setData = function(data){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.Tree
  * @param {String} url
  * @see nui.Tree
  */
nui.Tree.prototype.setUrl = function(url){};

 /**
  * 
  * function getValue()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getValue = function(){return "";};

 /**
  * 
  * function setValue(value)
  * @memberOf nui.Tree
  * @param {String} value
  * @see nui.Tree
  */
nui.Tree.prototype.setValue = function(value){};

 /**
  * 
  * function getIdField()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getIdField = function(){return "";};

 /**
  * 
  * function setIdField(idField)
  * @memberOf nui.Tree
  * @param {String} idField
  * @see nui.Tree
  */
nui.Tree.prototype.setIdField = function(idField){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.Tree
  * @param {String} textField
  * @see nui.Tree
  */
nui.Tree.prototype.setTextField = function(textField){};

 /**
  * 
  * function getIconField()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getIconField = function(){return "";};

 /**
  * 
  * function setIconField(iconField)
  * @memberOf nui.Tree
  * @param {String} iconField
  * @see nui.Tree
  */
nui.Tree.prototype.setIconField = function(iconField){};

 /**
  * 
  * function getNodesField()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getNodesField = function(){return "";};

 /**
  * 
  * function setNodesField(nodesField)
  * @memberOf nui.Tree
  * @param {String} nodesField
  * @see nui.Tree
  */
nui.Tree.prototype.setNodesField = function(nodesField){};

 /**
  * 
  * function getParentField()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getParentField = function(){return "";};

 /**
  * 
  * function setParentField(parentField)
  * @memberOf nui.Tree
  * @param {String} parentField
  * @see nui.Tree
  */
nui.Tree.prototype.setParentField = function(parentField){};

 /**
  * 
  * function getResultAsTree()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getResultAsTree = function(){return true;};

 /**
  * 
  * function setResultAsTree(resultAsTree)
  * @memberOf nui.Tree
  * @param {Boolean} resultAsTree
  * @see nui.Tree
  */
nui.Tree.prototype.setResultAsTree = function(resultAsTree){};

 /**
  * 
  * function getCheckRecursive()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getCheckRecursive = function(){return true;};

 /**
  * 
  * function setCheckRecursive(checkRecursive)
  * @memberOf nui.Tree
  * @param {Boolean} checkRecursive
  * @see nui.Tree
  */
nui.Tree.prototype.setCheckRecursive = function(checkRecursive){};

 /**
  * 
  * function getAutoCheckParent()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getAutoCheckParent = function(){return true;};

 /**
  * 
  * function setAutoCheckParent(autoCheckParent)
  * @memberOf nui.Tree
  * @param {Boolean} autoCheckParent
  * @see nui.Tree
  */
nui.Tree.prototype.setAutoCheckParent = function(autoCheckParent){};

 /**
  * 
  * function getExpandOnLoad()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getExpandOnLoad = function(){return "";};

 /**
  * 
  * function setExpandOnLoad(expandOnLoad)
  * @memberOf nui.Tree
  * @param {String} expandOnLoad
  * @see nui.Tree
  */
nui.Tree.prototype.setExpandOnLoad = function(expandOnLoad){};

 /**
  * 
  * function getShowTreeIcon()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getShowTreeIcon = function(){return true;};

 /**
  * 
  * function setShowTreeIcon(showTreeIcon)
  * @memberOf nui.Tree
  * @param {Boolean} showTreeIcon
  * @see nui.Tree
  */
nui.Tree.prototype.setShowTreeIcon = function(showTreeIcon){};

 /**
  * 
  * function getShowTreeLines()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getShowTreeLines = function(){return true;};

 /**
  * 
  * function setShowTreeLines(showTreeLines)
  * @memberOf nui.Tree
  * @param {Boolean} showTreeLines
  * @see nui.Tree
  */
nui.Tree.prototype.setShowTreeLines = function(showTreeLines){};

 /**
  * 
  * function getAllowSelect()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getAllowSelect = function(){return true;};

 /**
  * 
  * function setAllowSelect(allowSelect)
  * @memberOf nui.Tree
  * @param {Boolean} allowSelect
  * @see nui.Tree
  */
nui.Tree.prototype.setAllowSelect = function(allowSelect){};

 /**
  * 
  * function getShowCheckBox()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getShowCheckBox = function(){return true;};

 /**
  * 
  * function setShowCheckBox(showCheckBox)
  * @memberOf nui.Tree
  * @param {Boolean} showCheckBox
  * @see nui.Tree
  */
nui.Tree.prototype.setShowCheckBox = function(showCheckBox){};

 /**
  * 
  * function getShowFolderCheckBox()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getShowFolderCheckBox = function(){return true;};

 /**
  * 
  * function setShowFolderCheckBox(showFolderCheckBox)
  * @memberOf nui.Tree
  * @param {Boolean} showFolderCheckBox
  * @see nui.Tree
  */
nui.Tree.prototype.setShowFolderCheckBox = function(showFolderCheckBox){};

 /**
  * 
  * function getShowExpandButtons()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getShowExpandButtons = function(){return true;};

 /**
  * 
  * function setShowExpandButtons(showExpandButtons)
  * @memberOf nui.Tree
  * @param {Boolean} showExpandButtons
  * @see nui.Tree
  */
nui.Tree.prototype.setShowExpandButtons = function(showExpandButtons){};

 /**
  * 
  * function getEnableHotTrack()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getEnableHotTrack = function(){return true;};

 /**
  * 
  * function setEnableHotTrack(enableHotTrack)
  * @memberOf nui.Tree
  * @param {Boolean} enableHotTrack
  * @see nui.Tree
  */
nui.Tree.prototype.setEnableHotTrack = function(enableHotTrack){};

 /**
  * 
  * function getExpandOnDblClick()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getExpandOnDblClick = function(){return true;};

 /**
  * 
  * function setExpandOnDblClick(expandOnDblClick)
  * @memberOf nui.Tree
  * @param {Boolean} expandOnDblClick
  * @see nui.Tree
  */
nui.Tree.prototype.setExpandOnDblClick = function(expandOnDblClick){};

 /**
  * 
  * function getExpandOnNodeClick()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getExpandOnNodeClick = function(){return true;};

 /**
  * 
  * function setExpandOnNodeClick(expandOnNodeClick)
  * @memberOf nui.Tree
  * @param {Boolean} expandOnNodeClick
  * @see nui.Tree
  */
nui.Tree.prototype.setExpandOnNodeClick = function(expandOnNodeClick){};

 /**
  * 
  * function getRemoveOnCollapse()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getRemoveOnCollapse = function(){return true;};

 /**
  * 
  * function setRemoveOnCollapse(removeOnCollapse)
  * @memberOf nui.Tree
  * @param {Boolean} removeOnCollapse
  * @see nui.Tree
  */
nui.Tree.prototype.setRemoveOnCollapse = function(removeOnCollapse){};

 /**
  * 
  * function getAllowLeafDropIn()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getAllowLeafDropIn = function(){return true;};

 /**
  * 
  * function setAllowLeafDropIn(allowLeafDropIn)
  * @memberOf nui.Tree
  * @param {Boolean} allowLeafDropIn
  * @see nui.Tree
  */
nui.Tree.prototype.setAllowLeafDropIn = function(allowLeafDropIn){};

 /**
  * 
  * function getAllowDrag()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getAllowDrag = function(){return true;};

 /**
  * 
  * function setAllowDrag(allowDrag)
  * @memberOf nui.Tree
  * @param {Boolean} allowDrag
  * @see nui.Tree
  */
nui.Tree.prototype.setAllowDrag = function(allowDrag){};

 /**
  * 
  * function getAllowDrop()
  * @memberOf nui.Tree
  * @returns {Boolean}
  * @see nui.Tree
  */
nui.Tree.prototype.getAllowDrop = function(){return true;};

 /**
  * 
  * function setAllowDrop(allowDrop)
  * @memberOf nui.Tree
  * @param {Boolean} allowDrop
  * @see nui.Tree
  */
nui.Tree.prototype.setAllowDrop = function(allowDrop){};

 /**
  * 
  * function getDragGroupName()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getDragGroupName = function(){return "";};

 /**
  * 
  * function setDragGroupName(dragGroupName)
  * @memberOf nui.Tree
  * @param {String} dragGroupName
  * @see nui.Tree
  */
nui.Tree.prototype.setDragGroupName = function(dragGroupName){};

 /**
  * 
  * function getDropGroupName()
  * @memberOf nui.Tree
  * @returns {String}
  * @see nui.Tree
  */
nui.Tree.prototype.getDropGroupName = function(){return "";};

 /**
  * 
  * function setDropGroupName(dropGroupName)
  * @memberOf nui.Tree
  * @param {String} dropGroupName
  * @see nui.Tree
  */
nui.Tree.prototype.setDropGroupName = function(dropGroupName){};

/**
 * @constructor
 */
nui.TreeGrid.prototype = new nui.Control();

 /**
  * 
  * function getTreeColumn()
  * @memberOf nui.TreeGrid
  * @returns {String}
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.getTreeColumn = function(){return "";};

 /**
  * 
  * function setTreeColumn(treeColumn)
  * @memberOf nui.TreeGrid
  * @param {String} treeColumn
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.setTreeColumn = function(treeColumn){};

 /**
  * 
  * function getColumns()
  * @memberOf nui.TreeGrid
  * @returns {Array}
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.getColumns = function(){return [];};

 /**
  * 
  * function setColumns(columns)
  * @memberOf nui.TreeGrid
  * @param {Array} columns
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.setColumns = function(columns){};

 /**
  * 
  * function getAllowMoveColumn()
  * @memberOf nui.TreeGrid
  * @returns {Boolean}
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.getAllowMoveColumn = function(){return true;};

 /**
  * 
  * function setAllowMoveColumn(allowMoveColumn)
  * @memberOf nui.TreeGrid
  * @param {Boolean} allowMoveColumn
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.setAllowMoveColumn = function(allowMoveColumn){};

 /**
  * 
  * function getAllowResizeColumn()
  * @memberOf nui.TreeGrid
  * @returns {Boolean}
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.getAllowResizeColumn = function(){return true;};

 /**
  * 
  * function setAllowResizeColumn(allowResizeColumn)
  * @memberOf nui.TreeGrid
  * @param {Boolean} allowResizeColumn
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.setAllowResizeColumn = function(allowResizeColumn){};

 /**
  * 
  * function getAllowResize()
  * @memberOf nui.TreeGrid
  * @returns {Boolean}
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.getAllowResize = function(){return true;};

 /**
  * 
  * function setAllowResize(allowResize)
  * @memberOf nui.TreeGrid
  * @param {Boolean} allowResize
  * @see nui.TreeGrid
  */
nui.TreeGrid.prototype.setAllowResize = function(allowResize){};

/**
 * @constructor
 */
nui.Fit.prototype = new nui.Control();

/**
 * @constructor
 */
nui.Panel.prototype = new nui.Control();

 /**
  * 获取头部DOM对象<br/>
  * function getHeaderEl()
  * @memberOf nui.Panel
  * @returns {Object}
  * @see nui.Panel
  */
nui.Panel.prototype.getHeaderEl = function(){return new Object();};

 /**
  * 获取工具栏DOM对象<br/>
  * function getToolbarEl()
  * @memberOf nui.Panel
  * @returns {Object}
  * @see nui.Panel
  */
nui.Panel.prototype.getToolbarEl = function(){return new Object();};

 /**
  * 获取底部DOM对象<br/>
  * function getFooterEl()
  * @memberOf nui.Panel
  * @returns {Object}
  * @see nui.Panel
  */
nui.Panel.prototype.getFooterEl = function(){return new Object();};

 /**
  * 获取内容区对象<br/>
  * function getBodyEl()
  * @memberOf nui.Panel
  * @returns {Object}
  * @see nui.Panel
  */
nui.Panel.prototype.getBodyEl = function(){return new Object();};

 /**
  * 获取内容IFrame对象<br/>
  * function getIFrameEl()
  * @memberOf nui.Panel
  * @returns {Object}
  * @see nui.Panel
  */
nui.Panel.prototype.getIFrameEl = function(){return new Object();};

 /**
  * 加载内容区域<br/>
  * function load(url, onLoad, onDestroy)
  * @memberOf nui.Panel
  * @param  url
  * @param  onLoad
  * @param  onDestroy
  * @see nui.Panel
  */
nui.Panel.prototype.load = function(url, onLoad, onDestroy){};

 /**
  * 把DOM元素加入内容区<br/>
  * function setBody(Element)
  * @memberOf nui.Panel
  * @param  Element
  * @see nui.Panel
  */
nui.Panel.prototype.setBody = function(Element){};

 /**
  * 把DOM元素加入工具栏<br/>
  * function setToolbar(Element)
  * @memberOf nui.Panel
  * @param  Element
  * @see nui.Panel
  */
nui.Panel.prototype.setToolbar = function(Element){};

 /**
  * 把DOM元素加入底部<br/>
  * function setFooter(Element)
  * @memberOf nui.Panel
  * @param  Element
  * @see nui.Panel
  */
nui.Panel.prototype.setFooter = function(Element){};

 /**
  * 
  * function getTitle()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getTitle = function(){return "";};

 /**
  * 
  * function setTitle(title)
  * @memberOf nui.Panel
  * @param {String} title
  * @see nui.Panel
  */
nui.Panel.prototype.setTitle = function(title){};

 /**
  * 
  * function getIconCls()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getIconCls = function(){return "";};

 /**
  * 
  * function setIconCls(iconCls)
  * @memberOf nui.Panel
  * @param {String} iconCls
  * @see nui.Panel
  */
nui.Panel.prototype.setIconCls = function(iconCls){};

 /**
  * 
  * function getIconStyle()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getIconStyle = function(){return "";};

 /**
  * 
  * function setIconStyle(iconStyle)
  * @memberOf nui.Panel
  * @param {String} iconStyle
  * @see nui.Panel
  */
nui.Panel.prototype.setIconStyle = function(iconStyle){};

 /**
  * 
  * function getShowHeader()
  * @memberOf nui.Panel
  * @returns {Boolean}
  * @see nui.Panel
  */
nui.Panel.prototype.getShowHeader = function(){return true;};

 /**
  * 
  * function setShowHeader(showHeader)
  * @memberOf nui.Panel
  * @param {Boolean} showHeader
  * @see nui.Panel
  */
nui.Panel.prototype.setShowHeader = function(showHeader){};

 /**
  * 
  * function getShowToolbar()
  * @memberOf nui.Panel
  * @returns {Boolean}
  * @see nui.Panel
  */
nui.Panel.prototype.getShowToolbar = function(){return true;};

 /**
  * 
  * function setShowToolbar(showToolbar)
  * @memberOf nui.Panel
  * @param {Boolean} showToolbar
  * @see nui.Panel
  */
nui.Panel.prototype.setShowToolbar = function(showToolbar){};

 /**
  * 
  * function getShowFooter()
  * @memberOf nui.Panel
  * @returns {Boolean}
  * @see nui.Panel
  */
nui.Panel.prototype.getShowFooter = function(){return true;};

 /**
  * 
  * function setShowFooter(showFooter)
  * @memberOf nui.Panel
  * @param {Boolean} showFooter
  * @see nui.Panel
  */
nui.Panel.prototype.setShowFooter = function(showFooter){};

 /**
  * 
  * function getShowCloseButton()
  * @memberOf nui.Panel
  * @returns {Boolean}
  * @see nui.Panel
  */
nui.Panel.prototype.getShowCloseButton = function(){return true;};

 /**
  * 
  * function setShowCloseButton(showCloseButton)
  * @memberOf nui.Panel
  * @param {Boolean} showCloseButton
  * @see nui.Panel
  */
nui.Panel.prototype.setShowCloseButton = function(showCloseButton){};

 /**
  * 
  * function getShowCollapseButton()
  * @memberOf nui.Panel
  * @returns {Boolean}
  * @see nui.Panel
  */
nui.Panel.prototype.getShowCollapseButton = function(){return true;};

 /**
  * 
  * function setShowCollapseButton(showCollapseButton)
  * @memberOf nui.Panel
  * @param {Boolean} showCollapseButton
  * @see nui.Panel
  */
nui.Panel.prototype.setShowCollapseButton = function(showCollapseButton){};

 /**
  * 
  * function getHeaderStyle()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getHeaderStyle = function(){return "";};

 /**
  * 
  * function setHeaderStyle(headerStyle)
  * @memberOf nui.Panel
  * @param {String} headerStyle
  * @see nui.Panel
  */
nui.Panel.prototype.setHeaderStyle = function(headerStyle){};

 /**
  * 
  * function getHeaderCls()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getHeaderCls = function(){return "";};

 /**
  * 
  * function setHeaderCls(headerCls)
  * @memberOf nui.Panel
  * @param {String} headerCls
  * @see nui.Panel
  */
nui.Panel.prototype.setHeaderCls = function(headerCls){};

 /**
  * 
  * function getBodyStyle()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getBodyStyle = function(){return "";};

 /**
  * 
  * function setBodyStyle(bodyStyle)
  * @memberOf nui.Panel
  * @param {String} bodyStyle
  * @see nui.Panel
  */
nui.Panel.prototype.setBodyStyle = function(bodyStyle){};

 /**
  * 
  * function getBodyCls()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getBodyCls = function(){return "";};

 /**
  * 
  * function setBodyCls(bodyCls)
  * @memberOf nui.Panel
  * @param {String} bodyCls
  * @see nui.Panel
  */
nui.Panel.prototype.setBodyCls = function(bodyCls){};

 /**
  * 
  * function getFooterStyle()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getFooterStyle = function(){return "";};

 /**
  * 
  * function setFooterStyle(footerStyle)
  * @memberOf nui.Panel
  * @param {String} footerStyle
  * @see nui.Panel
  */
nui.Panel.prototype.setFooterStyle = function(footerStyle){};

 /**
  * 
  * function getFooterCls()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getFooterCls = function(){return "";};

 /**
  * 
  * function setFooterCls(footerCls)
  * @memberOf nui.Panel
  * @param {String} footerCls
  * @see nui.Panel
  */
nui.Panel.prototype.setFooterCls = function(footerCls){};

 /**
  * 
  * function getToolbarStyle()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getToolbarStyle = function(){return "";};

 /**
  * 
  * function setToolbarStyle(toolbarStyle)
  * @memberOf nui.Panel
  * @param {String} toolbarStyle
  * @see nui.Panel
  */
nui.Panel.prototype.setToolbarStyle = function(toolbarStyle){};

 /**
  * 
  * function getToolbarCls()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getToolbarCls = function(){return "";};

 /**
  * 
  * function setToolbarCls(toolbarCls)
  * @memberOf nui.Panel
  * @param {String} toolbarCls
  * @see nui.Panel
  */
nui.Panel.prototype.setToolbarCls = function(toolbarCls){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.Panel
  * @returns {String}
  * @see nui.Panel
  */
nui.Panel.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.Panel
  * @param {String} url
  * @see nui.Panel
  */
nui.Panel.prototype.setUrl = function(url){};

 /**
  * 
  * function getRefreshOnExpand()
  * @memberOf nui.Panel
  * @returns {Boolean}
  * @see nui.Panel
  */
nui.Panel.prototype.getRefreshOnExpand = function(){return true;};

 /**
  * 
  * function setRefreshOnExpand(refreshOnExpand)
  * @memberOf nui.Panel
  * @param {Boolean} refreshOnExpand
  * @see nui.Panel
  */
nui.Panel.prototype.setRefreshOnExpand = function(refreshOnExpand){};

 /**
  * 
  * function getMaskOnLoad()
  * @memberOf nui.Panel
  * @returns {Boolean}
  * @see nui.Panel
  */
nui.Panel.prototype.getMaskOnLoad = function(){return true;};

 /**
  * 
  * function setMaskOnLoad(maskOnLoad)
  * @memberOf nui.Panel
  * @param {Boolean} maskOnLoad
  * @see nui.Panel
  */
nui.Panel.prototype.setMaskOnLoad = function(maskOnLoad){};

 /**
  * 
  * function getExpanded()
  * @memberOf nui.Panel
  * @returns {Boolean}
  * @see nui.Panel
  */
nui.Panel.prototype.getExpanded = function(){return true;};

 /**
  * 
  * function setExpanded(expanded)
  * @memberOf nui.Panel
  * @param {Boolean} expanded
  * @see nui.Panel
  */
nui.Panel.prototype.setExpanded = function(expanded){};

/**
 * @constructor
 */
nui.Window.prototype = new nui.Control();

 /**
  * 弹出显示面板<br/>
  * function showAtPos(left, top)
  * @memberOf nui.Window
  * @param  left
  * @param  top
  * @see nui.Window
  */
nui.Window.prototype.showAtPos = function(left, top){};

 /**
  * 弹出显示面板<br/>
  * function show(left, top)
  * @memberOf nui.Window
  * @param  left
  * @param  top
  * @see nui.Window
  */
nui.Window.prototype.show = function(left, top){};

 /**
  * 定位元素弹出显示<br/>
  * function showAtEl(el, options)
  * @memberOf nui.Window
  * @param  el
  * @param  options
  * @see nui.Window
  */
nui.Window.prototype.showAtEl = function(el, options){};

 /**
  * 隐藏面板<br/>
  * function hide()
  * @memberOf nui.Window
  * @see nui.Window
  */
nui.Window.prototype.hide = function(){};

 /**
  * 最大化<br/>
  * function max()
  * @memberOf nui.Window
  * @see nui.Window
  */
nui.Window.prototype.max = function(){};

 /**
  * 还原<br/>
  * function restore()
  * @memberOf nui.Window
  * @see nui.Window
  */
nui.Window.prototype.restore = function(){};

 /**
  * 
  * function getAllowDrag()
  * @memberOf nui.Window
  * @returns {Boolean}
  * @see nui.Window
  */
nui.Window.prototype.getAllowDrag = function(){return true;};

 /**
  * 
  * function setAllowDrag(allowDrag)
  * @memberOf nui.Window
  * @param {Boolean} allowDrag
  * @see nui.Window
  */
nui.Window.prototype.setAllowDrag = function(allowDrag){};

 /**
  * 
  * function getAllowResize()
  * @memberOf nui.Window
  * @returns {Boolean}
  * @see nui.Window
  */
nui.Window.prototype.getAllowResize = function(){return true;};

 /**
  * 
  * function setAllowResize(allowResize)
  * @memberOf nui.Window
  * @param {Boolean} allowResize
  * @see nui.Window
  */
nui.Window.prototype.setAllowResize = function(allowResize){};

 /**
  * 
  * function getShowCloseButton()
  * @memberOf nui.Window
  * @returns {Boolean}
  * @see nui.Window
  */
nui.Window.prototype.getShowCloseButton = function(){return true;};

 /**
  * 
  * function setShowCloseButton(showCloseButton)
  * @memberOf nui.Window
  * @param {Boolean} showCloseButton
  * @see nui.Window
  */
nui.Window.prototype.setShowCloseButton = function(showCloseButton){};

 /**
  * 
  * function getShowMaxButton()
  * @memberOf nui.Window
  * @returns {Boolean}
  * @see nui.Window
  */
nui.Window.prototype.getShowMaxButton = function(){return true;};

 /**
  * 
  * function setShowMaxButton(showMaxButton)
  * @memberOf nui.Window
  * @param {Boolean} showMaxButton
  * @see nui.Window
  */
nui.Window.prototype.setShowMaxButton = function(showMaxButton){};

 /**
  * 
  * function getShowModal()
  * @memberOf nui.Window
  * @returns {Boolean}
  * @see nui.Window
  */
nui.Window.prototype.getShowModal = function(){return true;};

 /**
  * 
  * function setShowModal(showModal)
  * @memberOf nui.Window
  * @param {Boolean} showModal
  * @see nui.Window
  */
nui.Window.prototype.setShowModal = function(showModal){};

 /**
  * 
  * function getShowShadow()
  * @memberOf nui.Window
  * @returns {Boolean}
  * @see nui.Window
  */
nui.Window.prototype.getShowShadow = function(){return true;};

 /**
  * 
  * function setShowShadow(showShadow)
  * @memberOf nui.Window
  * @param {Boolean} showShadow
  * @see nui.Window
  */
nui.Window.prototype.setShowShadow = function(showShadow){};

/**
 * @constructor
 */
nui.Splitter.prototype = new nui.Control();

 /**
  * 设置面板配置数组。<br/>
  * function setPanes(panes)
  * @memberOf nui.Splitter
  * @param  panes
  * @see nui.Splitter
  */
nui.Splitter.prototype.setPanes = function(panes){};

 /**
  * 更新面板对象。<br/>
  * function updatePane(index, options)
  * @memberOf nui.Splitter
  * @param  index
  * @param  options
  * @see nui.Splitter
  */
nui.Splitter.prototype.updatePane = function(index, options){};

 /**
  * 获取面板对象。<br/>
  * function getPane(index)
  * @memberOf nui.Splitter
  * @param  index
  * @see nui.Splitter
  */
nui.Splitter.prototype.getPane = function(index){};

 /**
  * 获取面板对象DOM元素。<br/>
  * function getPaneEl(index)
  * @memberOf nui.Splitter
  * @param  index
  * @see nui.Splitter
  */
nui.Splitter.prototype.getPaneEl = function(index){};

 /**
  * 展开面板。<br/>
  * function expandPane(index)
  * @memberOf nui.Splitter
  * @param  index
  * @see nui.Splitter
  */
nui.Splitter.prototype.expandPane = function(index){};

 /**
  * 收缩面板。<br/>
  * function collapsePane(index)
  * @memberOf nui.Splitter
  * @param  index
  * @see nui.Splitter
  */
nui.Splitter.prototype.collapsePane = function(index){};

 /**
  * 显示面板。<br/>
  * function showPane(index)
  * @memberOf nui.Splitter
  * @param  index
  * @see nui.Splitter
  */
nui.Splitter.prototype.showPane = function(index){};

 /**
  * 隐藏面板。<br/>
  * function hidePane(index)
  * @memberOf nui.Splitter
  * @param  index
  * @see nui.Splitter
  */
nui.Splitter.prototype.hidePane = function(index){};

 /**
  * 
  * function getVertical()
  * @memberOf nui.Splitter
  * @returns {Boolean}
  * @see nui.Splitter
  */
nui.Splitter.prototype.getVertical = function(){return true;};

 /**
  * 
  * function setVertical(vertical)
  * @memberOf nui.Splitter
  * @param {Boolean} vertical
  * @see nui.Splitter
  */
nui.Splitter.prototype.setVertical = function(vertical){};

 /**
  * 
  * function getAllowResize()
  * @memberOf nui.Splitter
  * @returns {Boolean}
  * @see nui.Splitter
  */
nui.Splitter.prototype.getAllowResize = function(){return true;};

 /**
  * 
  * function setAllowResize(allowResize)
  * @memberOf nui.Splitter
  * @param {Boolean} allowResize
  * @see nui.Splitter
  */
nui.Splitter.prototype.setAllowResize = function(allowResize){};

 /**
  * 
  * function getHandlerSize()
  * @memberOf nui.Splitter
  * @returns {Number}
  * @see nui.Splitter
  */
nui.Splitter.prototype.getHandlerSize = function(){return 0;};

 /**
  * 
  * function setHandlerSize(handlerSize)
  * @memberOf nui.Splitter
  * @param {Number} handlerSize
  * @see nui.Splitter
  */
nui.Splitter.prototype.setHandlerSize = function(handlerSize){};

/**
 * @constructor
 */
nui.Layout.prototype = new nui.Control();

 /**
  * 设置Regoin对象数组<br/>
  * function setRegions(Array)
  * @memberOf nui.Layout
  * @param  Array
  * @see nui.Layout
  */
nui.Layout.prototype.setRegions = function(Array){};

 /**
  * 增加region。<br/>
  * function addRegion(Object, index)
  * @memberOf nui.Layout
  * @param  Object
  * @param  index
  * @see nui.Layout
  */
nui.Layout.prototype.addRegion = function(Object, index){};

 /**
  * 删除region面板。<br/>
  * function removeRegion(String)
  * @memberOf nui.Layout
  * @param  String
  * @see nui.Layout
  */
nui.Layout.prototype.removeRegion = function(String){};

 /**
  * 更新region面板<br/>
  * function updateRegion(String, options)
  * @memberOf nui.Layout
  * @param  String
  * @param  options
  * @see nui.Layout
  */
nui.Layout.prototype.updateRegion = function(String, options){};

 /**
  * 展开regoin对象。<br/>
  * function expandRegion(String)
  * @memberOf nui.Layout
  * @param  String
  * @see nui.Layout
  */
nui.Layout.prototype.expandRegion = function(String){};

 /**
  * 收缩regoin对象。<br/>
  * function collapseRegion(String)
  * @memberOf nui.Layout
  * @param  String
  * @see nui.Layout
  */
nui.Layout.prototype.collapseRegion = function(String){};

 /**
  * 显示regoin对象。<br/>
  * function showRegion(String)
  * @memberOf nui.Layout
  * @param  String
  * @see nui.Layout
  */
nui.Layout.prototype.showRegion = function(String){};

 /**
  * 隐藏regoin对象。<br/>
  * function hideRegion(String)
  * @memberOf nui.Layout
  * @param  String
  * @see nui.Layout
  */
nui.Layout.prototype.hideRegion = function(String){};

 /**
  * 是否展开region。<br/>
  * function isExpandRegion(String)
  * @memberOf nui.Layout
  * @param  String
  * @see nui.Layout
  */
nui.Layout.prototype.isExpandRegion = function(String){};

 /**
  * 是否显示region。<br/>
  * function isVisibleRegion(String)
  * @memberOf nui.Layout
  * @param  String
  * @see nui.Layout
  */
nui.Layout.prototype.isVisibleRegion = function(String){};

 /**
  * 获取Regoin对象。<br/>
  * function getRegion(String)
  * @memberOf nui.Layout
  * @param  String
  * @see nui.Layout
  */
nui.Layout.prototype.getRegion = function(String){};

 /**
  * 获取region面板对象内容区DOM元素<br/>
  * function getRegionBodyEl(String)
  * @memberOf nui.Layout
  * @param  String
  * @see nui.Layout
  */
nui.Layout.prototype.getRegionBodyEl = function(String){};

 /**
  * 
  * function getSplitSize()
  * @memberOf nui.Layout
  * @returns {Number}
  * @see nui.Layout
  */
nui.Layout.prototype.getSplitSize = function(){return 0;};

 /**
  * 
  * function setSplitSize(splitSize)
  * @memberOf nui.Layout
  * @param {Number} splitSize
  * @see nui.Layout
  */
nui.Layout.prototype.setSplitSize = function(splitSize){};

/**
 * @constructor
 */
nui.Pager.prototype = new nui.Control();

 /**
  * 更新分页控件状态。<br/>
  * function update(index, size, total)
  * @memberOf nui.Pager
  * @param  index
  * @param  size
  * @param  total
  * @see nui.Pager
  */
nui.Pager.prototype.update = function(index, size, total){};

 /**
  * 获取总页数。<br/>
  * function getTotalPage()
  * @memberOf nui.Pager
  * @returns {Number}
  * @see nui.Pager
  */
nui.Pager.prototype.getTotalPage = function(){return 0;};

 /**
  * 
  * function getPageIndex()
  * @memberOf nui.Pager
  * @returns {Number}
  * @see nui.Pager
  */
nui.Pager.prototype.getPageIndex = function(){return 0;};

 /**
  * 
  * function setPageIndex(pageIndex)
  * @memberOf nui.Pager
  * @param {Number} pageIndex
  * @see nui.Pager
  */
nui.Pager.prototype.setPageIndex = function(pageIndex){};

 /**
  * 
  * function getPageSize()
  * @memberOf nui.Pager
  * @returns {Number}
  * @see nui.Pager
  */
nui.Pager.prototype.getPageSize = function(){return 0;};

 /**
  * 
  * function setPageSize(pageSize)
  * @memberOf nui.Pager
  * @param {Number} pageSize
  * @see nui.Pager
  */
nui.Pager.prototype.setPageSize = function(pageSize){};

 /**
  * 
  * function getTotalCount()
  * @memberOf nui.Pager
  * @returns {Number}
  * @see nui.Pager
  */
nui.Pager.prototype.getTotalCount = function(){return 0;};

 /**
  * 
  * function setTotalCount(totalCount)
  * @memberOf nui.Pager
  * @param {Number} totalCount
  * @see nui.Pager
  */
nui.Pager.prototype.setTotalCount = function(totalCount){};

 /**
  * 
  * function getSizeList()
  * @memberOf nui.Pager
  * @returns {Array}
  * @see nui.Pager
  */
nui.Pager.prototype.getSizeList = function(){return [];};

 /**
  * 
  * function setSizeList(sizeList)
  * @memberOf nui.Pager
  * @param {Array} sizeList
  * @see nui.Pager
  */
nui.Pager.prototype.setSizeList = function(sizeList){};

 /**
  * 
  * function getShowPageIndex()
  * @memberOf nui.Pager
  * @returns {Boolean}
  * @see nui.Pager
  */
nui.Pager.prototype.getShowPageIndex = function(){return true;};

 /**
  * 
  * function setShowPageIndex(showPageIndex)
  * @memberOf nui.Pager
  * @param {Boolean} showPageIndex
  * @see nui.Pager
  */
nui.Pager.prototype.setShowPageIndex = function(showPageIndex){};

 /**
  * 
  * function getShowPageSize()
  * @memberOf nui.Pager
  * @returns {Boolean}
  * @see nui.Pager
  */
nui.Pager.prototype.getShowPageSize = function(){return true;};

 /**
  * 
  * function setShowPageSize(showPageSize)
  * @memberOf nui.Pager
  * @param {Boolean} showPageSize
  * @see nui.Pager
  */
nui.Pager.prototype.setShowPageSize = function(showPageSize){};

 /**
  * 
  * function getShowPageInfo()
  * @memberOf nui.Pager
  * @returns {Boolean}
  * @see nui.Pager
  */
nui.Pager.prototype.getShowPageInfo = function(){return true;};

 /**
  * 
  * function setShowPageInfo(showPageInfo)
  * @memberOf nui.Pager
  * @param {Boolean} showPageInfo
  * @see nui.Pager
  */
nui.Pager.prototype.setShowPageInfo = function(showPageInfo){};

 /**
  * 
  * function getShowReloadButton()
  * @memberOf nui.Pager
  * @returns {Boolean}
  * @see nui.Pager
  */
nui.Pager.prototype.getShowReloadButton = function(){return true;};

 /**
  * 
  * function setShowReloadButton(showReloadButton)
  * @memberOf nui.Pager
  * @param {Boolean} showReloadButton
  * @see nui.Pager
  */
nui.Pager.prototype.setShowReloadButton = function(showReloadButton){};

/**
 * @constructor
 */
nui.OutlookBar.prototype = new nui.Control();

 /**
  * 设置groups数组<br/>
  * function setGroups(Array)
  * @memberOf nui.OutlookBar
  * @param  Array
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.setGroups = function(Array){};

 /**
  * 增加group。<br/>
  * function addGroup(Object, index)
  * @memberOf nui.OutlookBar
  * @param  Object
  * @param  index
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.addGroup = function(Object, index){};

 /**
  * 删除group面板。<br/>
  * function removeGroup(name)
  * @memberOf nui.OutlookBar
  * @param  name
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.removeGroup = function(name){};

 /**
  * 删除所有子Group。<br/>
  * function removeAll()
  * @memberOf nui.OutlookBar
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.removeAll = function(){};

 /**
  * 移动group面板到新位置<br/>
  * function moveGroup(group, index)
  * @memberOf nui.OutlookBar
  * @param  group
  * @param  index
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.moveGroup = function(group, index){};

 /**
  * 更新group面板<br/>
  * function updateGroup(group, options)
  * @memberOf nui.OutlookBar
  * @param  group
  * @param  options
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.updateGroup = function(group, options){};

 /**
  * 获取group面板对象<br/>
  * function getGroup(index)
  * @memberOf nui.OutlookBar
  * @param  index
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.getGroup = function(index){};

 /**
  * 获取group面板对象内容区DOM元素<br/>
  * function getGroupBodyEl(index)
  * @memberOf nui.OutlookBar
  * @param  index
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.getGroupBodyEl = function(index){};

 /**
  * 
  * function getActiveIndex()
  * @memberOf nui.OutlookBar
  * @returns {Number}
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.getActiveIndex = function(){return 0;};

 /**
  * 
  * function setActiveIndex(activeIndex)
  * @memberOf nui.OutlookBar
  * @param {Number} activeIndex
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.setActiveIndex = function(activeIndex){};

 /**
  * 
  * function getAutoCollapse()
  * @memberOf nui.OutlookBar
  * @returns {Boolean}
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.getAutoCollapse = function(){return true;};

 /**
  * 
  * function setAutoCollapse(autoCollapse)
  * @memberOf nui.OutlookBar
  * @param {Boolean} autoCollapse
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.setAutoCollapse = function(autoCollapse){};

 /**
  * 
  * function getExpandOnLoad()
  * @memberOf nui.OutlookBar
  * @returns {Boolean}
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.getExpandOnLoad = function(){return true;};

 /**
  * 
  * function setExpandOnLoad(expandOnLoad)
  * @memberOf nui.OutlookBar
  * @param {Boolean} expandOnLoad
  * @see nui.OutlookBar
  */
nui.OutlookBar.prototype.setExpandOnLoad = function(expandOnLoad){};

/**
 * @constructor
 */
nui.OutlookMenu.prototype = new nui.Control();

 /**
  * 加载树形数据。<br/>
  * function load(Array)
  * @memberOf nui.OutlookMenu
  * @param  Array
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.load = function(Array){};

 /**
  * 获取选中项。<br/>
  * function getSelected()
  * @memberOf nui.OutlookMenu
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.getSelected = function(){};

 /**
  * 选中节点<br/>
  * function selectNode(node)
  * @memberOf nui.OutlookMenu
  * @param  node
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.selectNode = function(node){};

 /**
  * 加载列表数据。比如：tree.loadList(list, "id", "pid")<br/>
  * function loadList(Array, idField, parentField)
  * @memberOf nui.OutlookMenu
  * @param  Array
  * @param  idField
  * @param  parentField
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.loadList = function(Array, idField, parentField){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.OutlookMenu
  * @returns {String}
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.OutlookMenu
  * @param {String} url
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.setUrl = function(url){};

 /**
  * 
  * function getIdField()
  * @memberOf nui.OutlookMenu
  * @returns {String}
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.getIdField = function(){return "";};

 /**
  * 
  * function setIdField(idField)
  * @memberOf nui.OutlookMenu
  * @param {String} idField
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.setIdField = function(idField){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.OutlookMenu
  * @returns {String}
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.OutlookMenu
  * @param {String} textField
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.setTextField = function(textField){};

 /**
  * 
  * function getIconField()
  * @memberOf nui.OutlookMenu
  * @returns {String}
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.getIconField = function(){return "";};

 /**
  * 
  * function setIconField(iconField)
  * @memberOf nui.OutlookMenu
  * @param {String} iconField
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.setIconField = function(iconField){};

 /**
  * 
  * function getParentField()
  * @memberOf nui.OutlookMenu
  * @returns {String}
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.getParentField = function(){return "";};

 /**
  * 
  * function setParentField(parentField)
  * @memberOf nui.OutlookMenu
  * @param {String} parentField
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.setParentField = function(parentField){};

 /**
  * 
  * function getResultAsTree()
  * @memberOf nui.OutlookMenu
  * @returns {Boolean}
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.getResultAsTree = function(){return true;};

 /**
  * 
  * function setResultAsTree(resultAsTree)
  * @memberOf nui.OutlookMenu
  * @param {Boolean} resultAsTree
  * @see nui.OutlookMenu
  */
nui.OutlookMenu.prototype.setResultAsTree = function(resultAsTree){};

/**
 * @constructor
 */
nui.OutlookTree.prototype = new nui.Control();

 /**
  * 加载树形数据。<br/>
  * function load(Array)
  * @memberOf nui.OutlookTree
  * @param  Array
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.load = function(Array){};

 /**
  * 加载列表数据。比如：tree.loadList(list, "id", "pid")<br/>
  * function loadList(Array, idField, parentField)
  * @memberOf nui.OutlookTree
  * @param  Array
  * @param  idField
  * @param  parentField
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.loadList = function(Array, idField, parentField){};

 /**
  * 获取选中节点。<br/>
  * function getSelected()
  * @memberOf nui.OutlookTree
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.getSelected = function(){};

 /**
  * 根据值获取节点对象<br/>
  * function getNode(value)
  * @memberOf nui.OutlookTree
  * @param  value
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.getNode = function(value){};

 /**
  * 展开节点路径<br/>
  * function expandPath(node)
  * @memberOf nui.OutlookTree
  * @param  node
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.expandPath = function(node){};

 /**
  * 选中节点<br/>
  * function selectNode(node)
  * @memberOf nui.OutlookTree
  * @param  node
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.selectNode = function(node){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.OutlookTree
  * @returns {String}
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.OutlookTree
  * @param {String} url
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.setUrl = function(url){};

 /**
  * 
  * function getIdField()
  * @memberOf nui.OutlookTree
  * @returns {String}
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.getIdField = function(){return "";};

 /**
  * 
  * function setIdField(idField)
  * @memberOf nui.OutlookTree
  * @param {String} idField
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.setIdField = function(idField){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.OutlookTree
  * @returns {String}
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.OutlookTree
  * @param {String} textField
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.setTextField = function(textField){};

 /**
  * 
  * function getIconField()
  * @memberOf nui.OutlookTree
  * @returns {String}
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.getIconField = function(){return "";};

 /**
  * 
  * function setIconField(iconField)
  * @memberOf nui.OutlookTree
  * @param {String} iconField
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.setIconField = function(iconField){};

 /**
  * 
  * function getParentField()
  * @memberOf nui.OutlookTree
  * @returns {String}
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.getParentField = function(){return "";};

 /**
  * 
  * function setParentField(parentField)
  * @memberOf nui.OutlookTree
  * @param {String} parentField
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.setParentField = function(parentField){};

 /**
  * 
  * function getResultAsTree()
  * @memberOf nui.OutlookTree
  * @returns {Boolean}
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.getResultAsTree = function(){return true;};

 /**
  * 
  * function setResultAsTree(resultAsTree)
  * @memberOf nui.OutlookTree
  * @param {Boolean} resultAsTree
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.setResultAsTree = function(resultAsTree){};

 /**
  * 
  * function getExpandOnLoad()
  * @memberOf nui.OutlookTree
  * @returns {Boolean}
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.getExpandOnLoad = function(){return true;};

 /**
  * 
  * function setExpandOnLoad(expandOnLoad)
  * @memberOf nui.OutlookTree
  * @param {Boolean} expandOnLoad
  * @see nui.OutlookTree
  */
nui.OutlookTree.prototype.setExpandOnLoad = function(expandOnLoad){};

/**
 * @constructor
 */
nui.Tabs.prototype = new nui.Control();

 /**
  * 设置tabs数组。tab对象。<br/>
  * function setTabs(Array)
  * @memberOf nui.Tabs
  * @param  Array
  * @see nui.Tabs
  */
nui.Tabs.prototype.setTabs = function(Array){};

 /**
  * 增加tab。<br/>
  * function addTab(Object, index)
  * @memberOf nui.Tabs
  * @param  Object
  * @param  index
  * @see nui.Tabs
  */
nui.Tabs.prototype.addTab = function(Object, index){};

 /**
  * 删除tab面板。<br/>
  * function removeTab(name)
  * @memberOf nui.Tabs
  * @param  name
  * @see nui.Tabs
  */
nui.Tabs.prototype.removeTab = function(name){};

 /**
  * 删除所有子tab。<br/>
  * function removeAll(butTab)
  * @memberOf nui.Tabs
  * @param  butTab
  * @see nui.Tabs
  */
nui.Tabs.prototype.removeAll = function(butTab){};

 /**
  * 移动tab面板到新位置<br/>
  * function moveTab(tab, index)
  * @memberOf nui.Tabs
  * @param  tab
  * @param  index
  * @see nui.Tabs
  */
nui.Tabs.prototype.moveTab = function(tab, index){};

 /**
  * 更新tab面板<br/>
  * function updateTab(tab, options)
  * @memberOf nui.Tabs
  * @param  tab
  * @param  options
  * @see nui.Tabs
  */
nui.Tabs.prototype.updateTab = function(tab, options){};

 /**
  * 选中tab面板<br/>
  * function activeTab(tab)
  * @memberOf nui.Tabs
  * @param  tab
  * @see nui.Tabs
  */
nui.Tabs.prototype.activeTab = function(tab){};

 /**
  * 获取面板对象<br/>
  * function getTab(index)
  * @memberOf nui.Tabs
  * @param  index
  * @see nui.Tabs
  */
nui.Tabs.prototype.getTab = function(index){};

 /**
  * 加载Tabs的JSON数组<br/>
  * function load(url)
  * @memberOf nui.Tabs
  * @param  url
  * @see nui.Tabs
  */
nui.Tabs.prototype.load = function(url){};

 /**
  * 加载指定tab的内容区域<br/>
  * function loadTab(url, tab, onTabLoad, onTabDestroy)
  * @memberOf nui.Tabs
  * @param  url
  * @param  tab
  * @param  onTabLoad
  * @param  onTabDestroy
  * @see nui.Tabs
  */
nui.Tabs.prototype.loadTab = function(url, tab, onTabLoad, onTabDestroy){};

 /**
  * 重新加载tab。<br/>
  * function reloadTab(tab)
  * @memberOf nui.Tabs
  * @param  tab
  * @see nui.Tabs
  */
nui.Tabs.prototype.reloadTab = function(tab){};

 /**
  * 获取Tab的内容区元素。<br/>
  * function getTabBodyEl(tab)
  * @memberOf nui.Tabs
  * @param  tab
  * @returns {Object}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getTabBodyEl = function(tab){return new Object();};

 /**
  * 获取Tab的IFrame元素。<br/>
  * function getTabIFrameEl(tab)
  * @memberOf nui.Tabs
  * @param  tab
  * @returns {Object}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getTabIFrameEl = function(tab){return new Object();};

 /**
  * 
  * function getActiveIndex()
  * @memberOf nui.Tabs
  * @returns {Number}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getActiveIndex = function(){return 0;};

 /**
  * 
  * function setActiveIndex(activeIndex)
  * @memberOf nui.Tabs
  * @param {Number} activeIndex
  * @see nui.Tabs
  */
nui.Tabs.prototype.setActiveIndex = function(activeIndex){};

 /**
  * 
  * function getTabAlign()
  * @memberOf nui.Tabs
  * @returns {String}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getTabAlign = function(){return "";};

 /**
  * 
  * function setTabAlign(tabAlign)
  * @memberOf nui.Tabs
  * @param {String} tabAlign
  * @see nui.Tabs
  */
nui.Tabs.prototype.setTabAlign = function(tabAlign){};

 /**
  * 
  * function getTabPosition()
  * @memberOf nui.Tabs
  * @returns {String}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getTabPosition = function(){return "";};

 /**
  * 
  * function setTabPosition(tabPosition)
  * @memberOf nui.Tabs
  * @param {String} tabPosition
  * @see nui.Tabs
  */
nui.Tabs.prototype.setTabPosition = function(tabPosition){};

 /**
  * 
  * function getShowBody()
  * @memberOf nui.Tabs
  * @returns {Boolean}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getShowBody = function(){return true;};

 /**
  * 
  * function setShowBody(showBody)
  * @memberOf nui.Tabs
  * @param {Boolean} showBody
  * @see nui.Tabs
  */
nui.Tabs.prototype.setShowBody = function(showBody){};

 /**
  * 
  * function getBodyStyle()
  * @memberOf nui.Tabs
  * @returns {String}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getBodyStyle = function(){return "";};

 /**
  * 
  * function setBodyStyle(bodyStyle)
  * @memberOf nui.Tabs
  * @param {String} bodyStyle
  * @see nui.Tabs
  */
nui.Tabs.prototype.setBodyStyle = function(bodyStyle){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.Tabs
  * @returns {String}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.Tabs
  * @param {String} url
  * @see nui.Tabs
  */
nui.Tabs.prototype.setUrl = function(url){};

 /**
  * 
  * function getRefreshOnClick()
  * @memberOf nui.Tabs
  * @returns {Boolean}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getRefreshOnClick = function(){return true;};

 /**
  * 
  * function setRefreshOnClick(refreshOnClick)
  * @memberOf nui.Tabs
  * @param {Boolean} refreshOnClick
  * @see nui.Tabs
  */
nui.Tabs.prototype.setRefreshOnClick = function(refreshOnClick){};

 /**
  * 
  * function getMaskOnLoad()
  * @memberOf nui.Tabs
  * @returns {Boolean}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getMaskOnLoad = function(){return true;};

 /**
  * 
  * function setMaskOnLoad(maskOnLoad)
  * @memberOf nui.Tabs
  * @param {Boolean} maskOnLoad
  * @see nui.Tabs
  */
nui.Tabs.prototype.setMaskOnLoad = function(maskOnLoad){};

 /**
  * 
  * function getTitleField()
  * @memberOf nui.Tabs
  * @returns {String}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getTitleField = function(){return "";};

 /**
  * 
  * function setTitleField(titleField)
  * @memberOf nui.Tabs
  * @param {String} titleField
  * @see nui.Tabs
  */
nui.Tabs.prototype.setTitleField = function(titleField){};

 /**
  * 
  * function getUrlField()
  * @memberOf nui.Tabs
  * @returns {String}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getUrlField = function(){return "";};

 /**
  * 
  * function setUrlField(urlField)
  * @memberOf nui.Tabs
  * @param {String} urlField
  * @see nui.Tabs
  */
nui.Tabs.prototype.setUrlField = function(urlField){};

 /**
  * 
  * function getPlain()
  * @memberOf nui.Tabs
  * @returns {Boolean}
  * @see nui.Tabs
  */
nui.Tabs.prototype.getPlain = function(){return true;};

 /**
  * 
  * function setPlain(plain)
  * @memberOf nui.Tabs
  * @param {Boolean} plain
  * @see nui.Tabs
  */
nui.Tabs.prototype.setPlain = function(plain){};

/**
 * @constructor
 */
nui.Menu.prototype = new nui.Control();

 /**
  * 设置菜单项数组。菜单项对象MenuItem。<br/>
  * function setItems(items)
  * @memberOf nui.Menu
  * @param  items
  * @see nui.Menu
  */
nui.Menu.prototype.setItems = function(items){};

 /**
  * 显示菜单<br/>
  * function showAtPos(x, y)
  * @memberOf nui.Menu
  * @param  x
  * @param  y
  * @see nui.Menu
  */
nui.Menu.prototype.showAtPos = function(x, y){};

 /**
  * 获得选中的菜单项对象。<br/>
  * function getSelectedItem()
  * @memberOf nui.Menu
  * @see nui.Menu
  */
nui.Menu.prototype.getSelectedItem = function(){};

 /**
  * 加载菜单数据<br/>
  * function load(url)
  * @memberOf nui.Menu
  * @param  url
  * @see nui.Menu
  */
nui.Menu.prototype.load = function(url){};

 /**
  * 加载列表数据。比如：tree.loadList(list, "id", "pid")<br/>
  * function loadList(Array, idField, parentField)
  * @memberOf nui.Menu
  * @param  Array
  * @param  idField
  * @param  parentField
  * @see nui.Menu
  */
nui.Menu.prototype.loadList = function(Array, idField, parentField){};

 /**
  * 
  * function getVertical()
  * @memberOf nui.Menu
  * @returns {Boolean}
  * @see nui.Menu
  */
nui.Menu.prototype.getVertical = function(){return true;};

 /**
  * 
  * function setVertical(vertical)
  * @memberOf nui.Menu
  * @param {Boolean} vertical
  * @see nui.Menu
  */
nui.Menu.prototype.setVertical = function(vertical){};

 /**
  * 
  * function getAllowSelectItem()
  * @memberOf nui.Menu
  * @returns {Boolean}
  * @see nui.Menu
  */
nui.Menu.prototype.getAllowSelectItem = function(){return true;};

 /**
  * 
  * function setAllowSelectItem(allowSelectItem)
  * @memberOf nui.Menu
  * @param {Boolean} allowSelectItem
  * @see nui.Menu
  */
nui.Menu.prototype.setAllowSelectItem = function(allowSelectItem){};

 /**
  * 
  * function getUrl()
  * @memberOf nui.Menu
  * @returns {String}
  * @see nui.Menu
  */
nui.Menu.prototype.getUrl = function(){return "";};

 /**
  * 
  * function setUrl(url)
  * @memberOf nui.Menu
  * @param {String} url
  * @see nui.Menu
  */
nui.Menu.prototype.setUrl = function(url){};

 /**
  * 
  * function getTextField()
  * @memberOf nui.Menu
  * @returns {String}
  * @see nui.Menu
  */
nui.Menu.prototype.getTextField = function(){return "";};

 /**
  * 
  * function setTextField(textField)
  * @memberOf nui.Menu
  * @param {String} textField
  * @see nui.Menu
  */
nui.Menu.prototype.setTextField = function(textField){};

 /**
  * 
  * function getIdField()
  * @memberOf nui.Menu
  * @returns {String}
  * @see nui.Menu
  */
nui.Menu.prototype.getIdField = function(){return "";};

 /**
  * 
  * function setIdField(idField)
  * @memberOf nui.Menu
  * @param {String} idField
  * @see nui.Menu
  */
nui.Menu.prototype.setIdField = function(idField){};

 /**
  * 
  * function getParentField()
  * @memberOf nui.Menu
  * @returns {String}
  * @see nui.Menu
  */
nui.Menu.prototype.getParentField = function(){return "";};

 /**
  * 
  * function setParentField(parentField)
  * @memberOf nui.Menu
  * @param {String} parentField
  * @see nui.Menu
  */
nui.Menu.prototype.setParentField = function(parentField){};

 /**
  * 
  * function getResultAsTree()
  * @memberOf nui.Menu
  * @returns {Boolean}
  * @see nui.Menu
  */
nui.Menu.prototype.getResultAsTree = function(){return true;};

 /**
  * 
  * function setResultAsTree(resultAsTree)
  * @memberOf nui.Menu
  * @param {Boolean} resultAsTree
  * @see nui.Menu
  */
nui.Menu.prototype.setResultAsTree = function(resultAsTree){};

/**
 * @constructor
 */
nui.MenuItem.prototype = new nui.Control();

 /**
  * 
  * function getText()
  * @memberOf nui.MenuItem
  * @returns {String}
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.getText = function(){return "";};

 /**
  * 
  * function setText(text)
  * @memberOf nui.MenuItem
  * @param {String} text
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.setText = function(text){};

 /**
  * 
  * function getIconCls()
  * @memberOf nui.MenuItem
  * @returns {String}
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.getIconCls = function(){return "";};

 /**
  * 
  * function setIconCls(iconCls)
  * @memberOf nui.MenuItem
  * @param {String} iconCls
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.setIconCls = function(iconCls){};

 /**
  * 
  * function getIconStyle()
  * @memberOf nui.MenuItem
  * @returns {String}
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.getIconStyle = function(){return "";};

 /**
  * 
  * function setIconStyle(iconStyle)
  * @memberOf nui.MenuItem
  * @param {String} iconStyle
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.setIconStyle = function(iconStyle){};

 /**
  * 
  * function getIconPosition()
  * @memberOf nui.MenuItem
  * @returns {String}
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.getIconPosition = function(){return "";};

 /**
  * 
  * function setIconPosition(iconPosition)
  * @memberOf nui.MenuItem
  * @param {String} iconPosition
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.setIconPosition = function(iconPosition){};

 /**
  * 
  * function getMenu()
  * @memberOf nui.MenuItem
  * @returns {Object}
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.getMenu = function(){return new Object();};

 /**
  * 
  * function setMenu(menu)
  * @memberOf nui.MenuItem
  * @param {Object} menu
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.setMenu = function(menu){};

 /**
  * 
  * function getChecked()
  * @memberOf nui.MenuItem
  * @returns {Boolean}
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.getChecked = function(){return true;};

 /**
  * 
  * function setChecked(checked)
  * @memberOf nui.MenuItem
  * @param {Boolean} checked
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.setChecked = function(checked){};

 /**
  * 
  * function getCheckOnClick()
  * @memberOf nui.MenuItem
  * @returns {Boolean}
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.getCheckOnClick = function(){return true;};

 /**
  * 
  * function setCheckOnClick(checkOnClick)
  * @memberOf nui.MenuItem
  * @param {Boolean} checkOnClick
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.setCheckOnClick = function(checkOnClick){};

 /**
  * 
  * function getGroupName()
  * @memberOf nui.MenuItem
  * @returns {String}
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.getGroupName = function(){return "";};

 /**
  * 
  * function setGroupName(groupName)
  * @memberOf nui.MenuItem
  * @param {String} groupName
  * @see nui.MenuItem
  */
nui.MenuItem.prototype.setGroupName = function(groupName){};

/**
 * @constructor
 */
nui.ToolBar.prototype = new nui.Control();

$J=nui;

/**
 * @constructor
 */
$J.prototype=new nui();

