/**
 * 该文件主要为各个页面的通用js
 */

$(function(){
	// 跳转到注册页面
	$("#index-regist-button").click(function(){
		window.location = path+"/regist";
	});
	// 跳转到登录页面
	$("#index-login-button").click(function(){
		window.location = path+"/login";
	});
	$("#new-article-button").click(function(){
		window.location = path+"/article/new";
	});
	// 下拉框
	$('.dropdown-toggle').dropdown()
});

document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13){ // enter 键
    	indexLoginFunc();
    }
}; 

// head登录方法
function indexLoginFunc(){
	if($("#head-mail").val() == ""){
		return ;
	}
	var psd = hex_md5($("#head-password").val());
	var msg = "";
	jQuery.ajax({
		url :　path+"/ajax/login",
		type : "POST",
		data : {mail:$("#head-mail").val() , password:psd},
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		success : function(data){
			if(data == "true"){
				$("#index-login-form").attr("data-content","");
				window.location.reload();
			}else{
				if(data == "err1"){
					msg = "账号或者密码不可为空";
				}else if(data == "err2"){
					msg = "该邮箱还未注册";
				}else if(data == "err3"){
					msg = "请输入正确的密码";
				}
    			$("#index-login-form").attr("data-content",msg);
    			$("#index-login-form").popover('show');
    			$(function(){
    				$("[role=tooltip]").click(function(){
    					$("#index-login-form").popover('destroy');
    				});
    			});
			}
		}
	});
}

// 退出
function indexLogoutFunc(){
	window.location = path + "/logout";
}

// 查询
function searchFunc(){
	var word = $("#search-input").val();
	if(word == null || word == ""){
		alert("请输入查询条件");
		return ;
	}
	window.location = path + "/search/word?word=" + word;
}


//返回首页
function backIndexFunc(){
	window.location = path;
}