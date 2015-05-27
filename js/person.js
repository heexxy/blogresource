$(function(){
	$('[data-toggle="switch"]').bootstrapSwitch();
});

function controlButton(id,type){
	jQuery.ajax({
		type : "GET",
		url : path + "/ajax/article/publish?id=" + id + "&type=" + type,
		success : function(){
			window.location.reload();
		}
	});
}

function topControl(id,obj){
	if($(obj).is(':checked')){
		controlButton(id,"top");
	}else{
		controlButton(id,"untop");
	}
}

