/**
 * input框校验Js
 * 需要jQuery
 */
function validInput(){
	var flag = true;
	$("[valid=valid]").each(function(){
		flag = true;
		//获取input内容
		var val = $(this).val();
		//获取需要验证的规则
		var rule = $(this).attr("valid-rule");
		
		var req = null,type = null,err=null;
		
		//判断类型
		if(rule.indexOf("type") != -1){
			var i = rule.indexOf("type[");
			var j = rule.indexOf("]",i);
			var tmp = rule.substring(i+5,j);
			flag = isTypeValid(val,tmp);
			if(!flag){
				err = "输入的格式不正确";
				changeInput(this,err);
				return true;
			}
		}
		
		//判断是否必填
		if(rule.indexOf("require") != -1){
			flag = isNotNull(val);
			if(!flag){
				err = "该项为必填";
				changeInput(this,err);
				return true;
			}
		}
		
		//判断最大长度
		if(rule.indexOf("max") != -1){
			var i = rule.indexOf("max[");
			var j = rule.indexOf("]",i);
			var tmp = rule.substring(i+4,j);
			flag = isValidLength(val,"max",tmp);
			if(!flag){
				err = "该项最大长度为"+tmp;
				changeInput(this,err);
				return true;
			}
		}
		
		//判断最小长度
		if(rule.indexOf("min") != -1){
			var i = rule.indexOf("min[");
			var j = rule.indexOf("]",i);
			var tmp = rule.substring(i+4,j);
			flag = isValidLength(val,"min",tmp);
			if(!flag){
				err = "该项最小长度为"+tmp;
				changeInput(this,err);
				return true;
			}
		}
	});
	return flag;
}

//判断是否为空
function isNull(val){
	if(val == null) return true;
	if(typeof(val) == "undefined") return true;
	if($.trim(val) == "") return true;
	if($.trim(val) == "null") return true;
	return false;
}

function isNotNull(val){
	return !isNull(val);
}

//判断类型
function isTypeValid(obj,type){
	if(!isNotNull(obj)) return true;
	if(!isNotNull(type)) return true;
	var regexp;
	type = type.toUpperCase();
	switch (type)
	  {
	    case "STRING":
	    	regexp = /^.*$/;
	    	break;
	    case "INT":
	    	regexp = /^[0-9]*$/;
	    	break; 
	    case "FLOAT":
	    	regexp = /^(([1-9]\d{0,9})|0)(\.\d{1,8})?$/;
	    	break;
	    case "EMAIL":
	    	regexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    	break;
	    case "MOBILE":
	    	regexp = /^(13|15|18)[0-9]{9}$/;
	    	break;
	    case "ZIPCODE":
	    	regexp = /^\d{6}$/;
	    	break;
	 }
	return regexp.test(obj);
}

//判断长度
function isValidLength(obj,type,len){
	if(!isNotNull(obj)) return true;
	if(type == "max"){
		if(obj.length > len){
			return false;
		}
	}else{
		if(obj.length < len){
			return false;
		}
	}
	return true;
}

//更改input框的颜色
function changeInput(obj,err){
	if(isNotNull(err)){
		$(obj).parent("div.regist-div").addClass("has-error");
		$(obj).siblings("span.help-block").text(err);
	}else{
		$(obj).parent("div.regist-div").removeClass("has-error");
		$(obj).siblings("span.help-block").text("");
	}
}