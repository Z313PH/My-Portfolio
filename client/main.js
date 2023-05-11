// Elements

const aboutmeTab = document.querySelector(".aboutme-tab");
const skillsTab = document.querySelector(".links-tab");
const slideOutOne = document.querySelector(".slide-out");
const slideOutTwo = document.querySelector(".slide-out2");
const arrows = document.querySelectorAll("span");
const contactButton = document.querySelector(".footer>section");
const footer = document.querySelector(".footer");
const contactInfo = document.querySelector(".footer>aside");

// Pulldowns
console.log(arrows);
const aboutmePulldown = () => {
	if (!slideOutOne.classList.contains("slide-out-active")) {
		slideOutOne.classList.add("slide-out-active");
		aboutmeTab.classList.add("tab-active");
		slideOutTwo.classList.add("slide-out2-active");
		skillsTab.classList.remove("tab-active");
	} else {
		slideOutOne.classList.remove("slide-out-active");
		aboutmeTab.classList.remove("tab-active");
		slideOutTwo.classList.remove("slide-out2-active");
	}
};

const skillsPulldown = () => {
	if (slideOutOne.classList.contains("slide-out-active")) {
		slideOutOne.classList.remove("slide-out-active");
		aboutmeTab.classList.remove("tab-active");
		skillsTab.classList.add("tab-active");
	} else if (!slideOutTwo.classList.contains("slide-out2-active")) {
		slideOutTwo.classList.add("slide-out2-active");
		skillsTab.classList.add("tab-active");
	} else {
		slideOutTwo.classList.remove("slide-out2-active");
		skillsTab.classList.remove("tab-active");
	}
};

arrows[1].addEventListener("click", aboutmePulldown);
aboutmeTab.addEventListener("click", aboutmePulldown);
skillsTab.addEventListener("click", skillsPulldown);
arrows[3].addEventListener("click", skillsPulldown);

// Contact Pullup

const contactActivate = () => {
	if (footer.classList.contains("footer-active")) {
		contactButton.style.bottom = ".4rem";

		contactInfo.style.transition =
			"opacity .2s .1s, visibility 0s .5s, transform .5s 0s";
		contactInfo.style.transform = "scaleY(0)";
		contactInfo.style.visibility = "hidden";
		contactInfo.style.opacity = "0";
	} else {
		contactButton.style.bottom = "17.4rem";

		contactInfo.style.transition =
			"opacity .5s .4s, visibility 0s 0s, transform 0s 0s";
		contactInfo.style.transform = "scaleY(1)";
		contactInfo.style.visibility = "visible";
		contactInfo.style.opacity = "1";
	}

	footer.classList.toggle("footer-active");
};

contactButton.addEventListener("click", contactActivate);
