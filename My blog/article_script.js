window.addEventListener('DOMContentLoaded', () => {
  // Code to set the link of the div `article-card-content` the url included in the attribute `value` of the div

  const articleCardContent = document.getElementsByClassName('article-card-content');

  for(let i = 0; i < articleCardContent.length; i++) {
    articleCardContent[i].addEventListener('click', () => {
      window.location.href = articleCardContent[i].getAttribute("value");
    });
  }

  //A script to center X post widgets.
  const twitterWidgets = document.getElementsByClassName("twitter-tweet");

  for(let i = 0; i < twitterWidgets.length; i++) {
    twitterWidgets[i].style.margin = "auto";
  }

  const DropDownBtns = ["sourcesOpenButton"];
  const DropDownContents = ["sources"];

  singleDropdownify(DropDownBtns, DropDownContents);
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

funciton singleDropDownify(DropDownBtns, DropDownContents) {
  for(let i = 0; i < DropDownBtns.length; i++) {
    const DropDownBtn = document.getElementById(DropDownBtns[i]);
    const DropDownContent = document.getElementById(DropDownContents[i]);
      
    DropDownBtn.addEventListener("click", () => {
      if(DropDownContent.style.display === "none") {
        DropDownContent.style.display = "block";
      } else {
        DropDownContent.style.display = "none";
      }
    }); 
  }
}
