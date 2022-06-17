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
	var links = document.querySelectorAll(".side-menu .nav-btn");
	for(let i=0;i<links.length;i++){
		links[i].addEventListener("click",function(){
			resizeMenu(sideMenuBtn,sideMenuBtn.getAttribute("data-menu-id"));
		});
	}
}
//
var pages = document.getElementsByClassName("page");
var pageBtns = document.getElementsByClassName("nav-btn");
addHideEventsToPageBtns();
function addHideEventsToPageBtns()
{
	console.log("page: "+pages.length);
	console.log("buttons: "+pageBtns.length);
	for(let i=0;i<pageBtns.length;i++){
		pageBtns[i].addEventListener("click",()=>{

			let pageId = pageBtns[i].getAttribute("data-page-id");
			hideAllPages();
			document.getElementById(pageId).classList.remove("d-none");

		});
	}
}
function hideAllPages()
{
	for(let i=0;i < pages.length;i++)
	{
		if(!pages[i].classList.contains("d-none"))
		{
			pages[i].classList.add("d-none");
		}
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