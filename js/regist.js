$(function(){
	if(isNotNull(errCode)){
		$("#helpBlock").text(errCode);
	}
});

function submitFunc(){
	checkMail();
	if(!validInput()) return;
	if(getValue("password") != getValue("password-confirm")){
		$(".regist-div").eq(2).addClass("has-error");
		$("#helpBlock3").text("两次输入的密码不同");
		return;
	}
	var psd = hex_md5($("#password").val());
	if(!isNull($("#password").val()) && !isNull($("#password-confirm").val())){
    	$("#password").val(psd);
    	$("#password-confirm").val(psd);
	}
	$("#registForm").submit();
}

function loginFunc(){
	if(!validInput()) return;
	var psd = hex_md5($("#password").val());
	$("#password").val(psd);
	$("#registForm").submit();
}

function checkMail(){
	var mail = $("#email").val();
	if(mail == ""){
		return;
	}
	jQuery.ajax({
		type : "GET",
		url : "${path}/ajax/check-mail?mail="+mail,
		dataType : "json",
		success : function(data){
			if(data == false){
				$("#helpBlock1").text("该邮箱已经注册");
				$(".regist-div").eq(0).addClass("has-error");
				$("#regist-submit-button").attr("disabled","disabled");
			}
		}
	});
}