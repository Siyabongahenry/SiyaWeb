//Expansion of side menu
var sideMenuBtn = document.getElementById("btn-side-menu");
sideMenuBtn.addEventListener("click",function(){
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
//Close Menu On When a Link Is Clicked
closeOnLinkClick();
function closeOnLinkClick(){
	var links = document.querySelectorAll(".side-menu a");
	for(let i=0;i<links.length;i++){
		links[i].addEventListener("click",function(){
			resizeMenu(sideMenuBtn,sideMenuBtn.getAttribute("data-menu-id"));
		});
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