//Expansion of side menu
document.getElementById("btn-side-menu").addEventListener("click",function(){
	resizeMenu(this,this.getAttribute("data-menu-id"));
});
function resizeMenu(btn,menuId){
	btn.style.animation="none";
 	var menu = document.getElementById(menuId);
	if(menu.classList.contains("side-menu-ml")){
		menu.classList.remove("side-menu-ml");
		btn.innerHTML="<i class='fa fa-angle-left'></i>";
	}
	else{
		menu.classList.add("side-menu-ml");
		btn.innerHTML="<i class='fa fa-bars'></i>";
	}
}
//Contact menu view
document.getElementById("btn-contact").addEventListener("click",function(){ displayContact(this);})
function displayContact(btn){
	var soundWave = btn.getElementsByClassName("sound-wave")[0];
	if(soundWave != null)
	{
		btn.removeChild(soundWave);
	}
	var contact = document.getElementById("contact");
	if(contact.style.display =="" || contact.style.display =="none"){
		contact.style.display="initial";
	}
	else{
		contact.style.display ="none";
	}
}