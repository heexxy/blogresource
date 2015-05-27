/**
 * 文章页面所用js
 */
// 文章提交
function submitFunc() {
	var content = CKEDITOR.instances.ckeditor.getData();
	$("#hide-textarea").html(content);
	$("#article-form").submit();
}

// 文章修改提交
function editSubmitFunc() {
	var content = CKEDITOR.instances.ckeditor.getData();
	$("#hide-textarea").html(content);
	$("#article-form").submit();
}

