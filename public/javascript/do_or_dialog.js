function do_or_dialog(item,message) {
	var body = window.document.body;
	link = item.href;
	var msg = "<div style='display:none' id='do_or_dialog'><div id='do_or_dialog_window' class='do_or_dialog_window'><p>" + message + "</p><input type='button' onclick='do_or_dialog_redirect_to(\"" + link + "\")' value='Yes'/><input type='button' onclick='do_or_dialog_cancel()' value='No'/></div></div>";
	$(body).insert(msg);
	new Effect.Grow('do_or_dialog', {duration: 0.1});
	return false;
}   
function do_or_dialog_redirect_to(link) {
	window.location = link;
}
function do_or_dialog_cancel() {
	new Effect.Shrink('do_or_dialog', { duration: 0.5 });
	var remove  = "$('do_or_dialog').remove;"
	setTimeout(remove,0.5);
}