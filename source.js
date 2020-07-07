
window.addEventListener("load",()=>{
	const  sounds = document.querySelectorAll('.sounds');
	const pads = document.querySelectorAll('.pads div');
	const visual=document.querySelector('.visual');
	const colors=["seagreen","red","yellow","blue","orange","purple","grey","pink","powderblue"];

	// firing sounds here
	pads.forEach(myFunction);
	function myFunction(pad,index)
	{
		pad.addEventListener('click',()=>{
			sounds[index].currentTime = 0;
			sounds[index].play();
			createVisual(index);
		});
	}

	//adding visual here
	function createVisual(index)
	{
		const bubble = document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor=colors[index];	
		bubble.style.animation="jump 1s ease";
		if(window.matchMedia('(max-width: 480px)').matches)
		{
			visual.innerHTML='';
		}
		bubble.addEventListener('animationend',function(){
			visual.removeChild(this);
		})

	}


	
});