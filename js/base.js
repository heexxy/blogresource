/**
 * 该文件为各个通用的方法js
 */

//根据ID获取value
function getValue(obj){
	var value = document.getElementById(obj).value;
	return value;
}

//获取字符串长度
function getLength(val){
	try{
		return parseInt(val);
	}catch(e){
		return 50;
	}
}

//判断是否为空
function isNull(val){
	if(val == null) return true;
	if(typeof(val) == "undefined") return true;
	if(jQuery.trim(val) == "") return true;
	if(jQuery.trim(val) == "null") return true;
	return false;
}

function isNotNull(val){
	return !isNull(val);
}