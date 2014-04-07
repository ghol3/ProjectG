function bel(s){
	var element = document.getElementById(s);
	if(element.className == "hide")
		element.className = "show";
	else
		element.className = "hide";
}

function scroll_to_products(){
	var element = document.getElementById("product_part");
   	element.scrollIntoView(true);
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function moveTo(){
	document.getElementById("product_part").focus();
}
