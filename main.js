/*window.addEventListener('load',() => {
	document.addEventListener('load',function(){
		const loader = document.querySelector('.loader');
		loader.style.display = 'flex';
	});
});
*/
const header = document.querySelector('header');

window.addEventListener('scroll', function(){
	if(window.scrollY >= 40){
		header.classList.add('colapse');
	}else{
		header.classList.remove('colapse');
	}
});