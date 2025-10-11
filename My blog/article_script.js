window.addEventListener('DOMContentLoaded', () => {
  // Code to set the link of the div `article-card-content` the url included in the attribute `value` of the div.

  const articleCardContent = document.getElementsByClassName('article-card-content');

  for(let i = 0; i < articleCardContent.length; i++) {
    articleCardContent[i].addEventListener('click', () => {
      window.location.href = articleCardContent[i].getAttribute("value")
    });
  }
});
