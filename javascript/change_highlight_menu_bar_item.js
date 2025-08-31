const baseUrl = window.location.href;
let lastElementName = baseUrl.split("#")[1] || "home";
const navNames = ["home", "aboutMe", "skills", "projects"];


const changeHighlightMenuBarItem = (elementName) => {
  if (!elementName) {
    return;
  }

  const element = document.getElementsByName(elementName);
  const lastElement = document.getElementsByName(lastElementName);


  if (element) {
    lastElement[0].classList.remove("text-[#905CF6]");
    element[0].classList.add("text-[#905CF6]");
    lastElementName = elementName;
  }
}

const changeHighlightByClick = () => {
  const url = window.location.href;
  let elementName = url.split("#")[1];

  if (url.includes("#")) {
    elementName = url.split("#")[1];
  } else {
    elementName = "home";
  }
  changeHighlightMenuBarItem(elementName);
}

const changeHighlightByScroll = () => {
  for (const navName of navNames) {
    const element = document.getElementById(navName);
    const isVisible = element.getBoundingClientRect().top < window.innerHeight;

    if (isVisible) {
      changeHighlightMenuBarItem(navName);
    }
  }
}

window.addEventListener("load", changeHighlightByScroll);
window.addEventListener("hashchange", changeHighlightByClick);
window.addEventListener("scroll", changeHighlightByScroll);