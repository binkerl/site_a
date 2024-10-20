const menuTitle = document.querySelector('.header__arrow');
menuTitle.addEventListener('click', menu);
function menu(event, top) {
	if (event.target.closest('img')) {
		const team = document.querySelector(".shadowSecond");
		team.scrollIntoView({
			block: "start",
			inline: "nearest",
			behavior: "smooth"
		});
	}
}