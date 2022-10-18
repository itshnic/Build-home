// <Moving (перемещение) a tag>
const movingTag = function (child, parent, newParent, position) {
	const tag = document.querySelector(`.${child}`).cloneNode(true),
		whereFrom = document.querySelector(`.${parent}`),
		where = document.querySelector(`.${newParent}`);

	function handleTabletChange(addElement, removeElement) {
		if (!addElement.querySelector(`.${child}`) && position == "append")
			addElement.append(tag);
		else if (!addElement.querySelector(`.${child}`) && position == "prepend")
			addElement.prepend(tag);
		if (removeElement.querySelector(`.${child}`))
			removeElement.querySelector(`.${child}`).remove();
	}
	controlWidth();
	window.addEventListener("resize", controlWidth);

	function controlWidth() {
		if (window.innerWidth < 991.98) handleTabletChange(whereFrom, where);
		if (window.innerWidth > 991.98) handleTabletChange(where, whereFrom);
	}
};
movingTag("info-header__logo", "header__burger", "info-header", "prepend");
movingTag("catalog-header__list", "_accordion", "catalog-header", "append");
// </Moving (перемещение) a tag>
//<Burger>
const burger = function () {
	const icon = document.querySelector("._burger-cross");

	function active() {
		this.classList.toggle("_active");
		document.querySelector("._burger-list").classList.toggle("_active");
	}
	icon.addEventListener("click", active);
};
burger();
//</Burger>
//<Accordeon>
const accordion = function () {
	const btn = document.querySelector(".btn-accordion");

	btn.addEventListener("click", active);
	function active() {
		this.classList.toggle("_active");
		this.nextElementSibling.classList.toggle("_active");
	}

	addList();
	window.addEventListener("resize", addList);

	function addList() {
		const accordionList = document.querySelector(".catalog-header__list");
		if (
			window.innerWidth < 991.98 &&
			!accordionList.classList.contains("_list-accordion")
		)
			accordionList.classList.add("_list-accordion");
		if (
			window.innerWidth > 991.98 &&
			accordionList.classList.contains("_list-accordion")
		)
			accordionList.classList.remove("_list-accordion");
	}
};
accordion();
//</Accordeon>
