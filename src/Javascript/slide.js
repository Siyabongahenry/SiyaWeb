/*pre for previous*/
var slideContainers = document.getElementsByClassName("slide-container");
var pauseFirstSlide =[]
addEventsToSlideBtns();
addEventListenerToPauseBtns();
function addEventsToSlideBtns(){
	var prevBtnsCollection = document.getElementsByClassName("btn-prev-slide");
	var nextBtnsCollection = document.getElementsByClassName("btn-next-slide");
	for(let i=0;i< prevBtnsCollection.length;i++){
		prevBtnsCollection[i].addEventListener("click",function(){
			/*Get first slide only*/	
			prevSlide(i);
		});
		nextBtnsCollection[i].addEventListener("click",function(){
			/*Get all the slides to find length*/
			nextSlide(i);
		});		
	}
}
function addEventListenerToPauseBtns(){
	var pauseBtnsCollection = document.getElementsByClassName("btn-pause-slide");
	if(pauseBtnsCollection != null)
	{
		for(let i=0;i<pauseBtnsCollection.length;i++)
		{
			pauseBtnsCollection[i].addEventListener("click",function(){
				var progressCollection = slideContainers[i].getElementsByClassName("progress");
				/*Get all the slides to find length*/
				if(pauseFirstSlide[i]==undefined || pauseFirstSlide[i] ==false)
				{
					pauseFirstSlide[i]=true;
					this.innerHTML ="<i class='fa fa fa-play-circle'></i>"
				}
				else{
					pauseFirstSlide[i]=false;
					this.innerHTML ="<i class='fa fa-pause-circle'></i>"
				}
			});
		}	
	}
}
function prevSlide(slideContainerNo){
	/*increment margin of first slide to move to previous slide*/
	var slideCollection =slideContainers[slideContainerNo].getElementsByClassName ("slide-element");
	var progressCollection = slideContainers[slideContainerNo].getElementsByClassName("progress");
	var pageNoElement = slideContainers[slideContainerNo].querySelector(".page-number");
	clearProgressAnim(progressCollection);
	if(slideCollection[0].style.marginLeft !="")
	{
		var slideML = parseInt((slideCollection[0].style.marginLeft).replace("%",""));
		if(slideML < 0)
		{
			slideML += 100;
			slideCollection[0].style.marginLeft = slideML +"%";
			let mL =  parseInt((slideCollection[0].style.marginLeft).replace("%",""));
			addProgressAnim(progressCollection,-1*slideML/100);
			if(pageNoElement != null){
				pageNoElement.innerText =(-1*slideML/100)+1;
			}
		}
		else{
			addProgressAnim(progressCollection,0);
		}
		
	}

}
function nextSlide(slideContainerNo){
	var slideCollection =slideContainers[slideContainerNo].getElementsByClassName ("slide-element");
	var progressCollection = slideContainers[slideContainerNo].getElementsByClassName("progress");
	var pageNoElement = slideContainers[slideContainerNo].querySelector(".page-number");
	clearProgressAnim(progressCollection);
	/*decrement margin of first slide to move to next slide*/
	if(slideCollection[0].style.marginLeft =="" || slideCollection[0].style.marginLeft =="0%"){
		slideCollection[0].style.marginLeft ="-100%";
		addProgressAnim(progressCollection,1);
		if(pageNoElement != null)
		{
			pageNoElement.innerText = 2;
		}
		return true;
	}
	else{
		var slideML = parseInt((slideCollection[0].style.marginLeft).replace("%",""));
		if(slideML > (-1 * slideCollection.length*100 + 100))
		{

			slideML -= 100;
			slideCollection[0].style.marginLeft = slideML +"%";
			addProgressAnim(progressCollection,-1*slideML/100);
			if(pageNoElement != null)
			{
				pageNoElement.innerText = (-1*slideML/100)+1;
			}
			return true;
		}
		else{
			addProgressAnim(progressCollection,-1*slideML/100);
			return false;
		}
	}
}
function addProgressAnim(progressCollection,progressIndex){
	if(progressCollection.length > 0 && !progressCollection[progressIndex].classList.contains("progress-anim")){
		progressCollection[progressIndex].classList.add("progress-anim");
	}
}
function clearProgressAnim(progressCollection){
	if(progressCollection.length > 0){
		for(let i=0;i<progressCollection.length;i++){
			if(progressCollection[i].classList.contains("progress-anim"))
			{
				progressCollection[i].classList.remove("progress-anim");
				if(progressCollection[i].classList.contains("width"))
				{
					progressCollection[i].style.width ="0%";
				}
				else if(progressCollection[i].classList.contains("height")){
					progressCollection[i].style.height ="0%";
				}
			}
		}
	}
}

/*Animate slide*/
/*First Slide Animatiom*/
animateCLSlide(0,1000);
function animateCLSlide(slideContainerNo,time)
{
	if(!pauseFirstSlide[slideContainerNo])
	{		
		let progress = slideContainers[slideContainerNo].querySelector(".progress-anim");
		if(progress !=null && progress.style.width != "100%"){
			let width = parseFloat((progress.style.width).replace("%",""));
			width +=0.1;
			progress.style.width = width+"%";
		}
		else{
			if(!nextSlide(0)){
				slideContainers[slideContainerNo].querySelector(".slide-element").style.marginLeft ="0%";
				slideContainers[slideContainerNo].querySelector(".progress").classList.add("progress-anim");
			}
		}
	}
	setTimeout(()=>{
		animateCLSlide(slideContainerNo,time/1000);	
	},time/1000);
}