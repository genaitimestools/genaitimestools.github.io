window.addEventListener('DOMContentLoaded', () => {
  // Code to set the link of the div `article-card-content` the url included in the attribute `value` of the div

  const articleCardContent = document.getElementsByClassName('article-card-content');

  for(let i = 0; i < articleCardContent.length; i++) {
    articleCardContent[i].addEventListener('click', () => {
      window.location.href = articleCardContent[i].getAttribute("value");
    });
  }
});

function activateTab(allButtons, allGuides, buttonIndex) {
  allButtons.forEach(button => {
    button.style.border = "none";
    button.style.backgroundColor = "white";
  }); 

  allGuides.forEach(guide => {
    guide.style.display = "none";
  });

  allButtons[buttonIndex].style.border = "2px double black";
  allButtons[buttonIndex].style.borderRadius = "5px 5px 0px 0px";
  allButtons[buttonIndex].style.backgroundColor = "white";
  allGuides[buttonIndex].style.display = "block";
}
