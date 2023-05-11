// Elements

const aboutmeTab = document.querySelector(".aboutme-tab");
const skillsTab = document.querySelector(".links-tab");
const slideOutOne = document.querySelector(".slide-out");
const slideOutTwo = document.querySelector(".slide-out2");
const arrows = document.querySelectorAll("span");

// Pulldowns
console.log(arrows)
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
        skillsTab.classList.remove("tab-active")
	}
};

arrows[1].addEventListener("click", aboutmePulldown);
aboutmeTab.addEventListener("click", aboutmePulldown);
skillsTab.addEventListener("click", skillsPulldown);
arrows[3].addEventListener("click", skillsPulldown)