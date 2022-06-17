import "./menu";
/*hide or show content*/
addEventsToContentViewBtns();
function addEventsToContentViewBtns()
{
	const contentViewBtn = document.getElementsByClassName("btn-hidden-content");
	for(let i=0;i < contentViewBtn.length;i++){
		contentViewBtn[i].addEventListener("click",function(){
			expandContent(this,this.innerText,this.getAttribute("data-content-id"));
		});
	}
}
function expandContent(btn,newText,contentId){
	var content = document.getElementById(contentId);
	if(!content.classList.contains("d-none"))
	{
		content.classList.add("d-none");
		btn.innerHTML = newText + " <i class='fa fa-caret-down'></i>";
	}
	else
	{
		content.classList.remove("d-none");
		btn.innerHTML = newText + " <i class='fa fa-caret-up'></i>";
	}
}

