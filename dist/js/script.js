function copyFunc(){
	var copyText = document.getElementById('copyref');
	copyText.select();
	document.execCommand("Copy");
	alert("Copied to clipboard: " + copyText.value);
}