import "./menu";
import "./slide";

/*Print welcome message*/
const welcomeText = "Hi, welcome to Siyaweb. You came at the right place to know about me. Feel free to use the navigation on the left hand side."+ 
"\n\nThank you have a great journey.";
var i=1;
var typingAlert = document.getElementsByClassName("typing-alert")[0];
setTimeout(()=>{typingAlert.classList.remove("typing-alert-anim");writeWelcomeMSG();},2000);
function writeWelcomeMSG(){
	var messageBox = document.getElementById("welcomeMSG");
	messageBox.classList.add("message-box");
	messageBox.innerText=welcomeText.substr(0,i);
	i++;
	if(messageBox.innerText.length != welcomeText.length){
		setTimeout(writeWelcomeMSG,50);
	}
	else{	
		setTimeout(()=>{messageBox.parentNode.removeChild(messageBox);},1000*600);
	}
}

/*hide or show content*/
addEventsToContentViewBtns();
function addEventsToContentViewBtns()
{
	const contentViewBtn = document.getElementsByClassName("content-view-btn");
	for(let i=0;i < contentViewBtn.length;i++){
		contentViewBtn[i].addEventListener("click",function(){
			expandContent(this,this.getAttribute("data-btn-newText"),this.getAttribute("data-content-id"));
		});
	}
}
function expandContent(btn,newText,contentId){
	var content = document.getElementById(contentId);
	if(content.style.height != "0px" && content.style.height !="")
	{
		content.style.height="0px";
		btn.innerHTML = newText + " <i class='fa fa-caret-down'></i>";
	}
	else
	{
		content.style.height="initial";
		btn.innerHTML = newText + " <i class='fa fa-caret-up'></i>";
	}
}
