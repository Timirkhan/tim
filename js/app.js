// ----- burger menu -----
 
const navToggle = document.querySelector('#nav__toggle');
const nav = document.querySelector('#nav');
    
navToggle.addEventListener('click', function(){
    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// ----- header fixed -----

let header = document.getElementById('header');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

	if( document.body.scrollTop > 100 // если количество прокрученных пикселей от вверха элемента body больше чем 100 
		|| document.documentElement.scrollTop > 100) //позволяет получить доступ к коренному элементу документа/к вершине DOM-дерева. P.S. без этого не робит
	{
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
};