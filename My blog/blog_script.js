window.addEventListener('DOMContentLoaded', () => {
  const currentURL = window.location.href;
  const ifThePageIsHome = (currentURL === "https://aitimestools.blogspot.com/" || currentURL === "https://aitimestools.blogspot.com/?m=1");
  
  if(document.documentElement.clientWidth > 553) {
    const headerData = [
      {title: "Privacy Policy", url: "https://aitimestools.blogspot.com/p/privacy-policy.html"},
      {title: "About This Blog and The Owner", url: "https://aitimestools.blogspot.com/p/about-this-blog-and-owner.html"},
    ];
  
    const parentElement = document.querySelector('body > div.page > div > div > header > div > div.blog-name');
  
    parentElement.style.display = "flex";
  
    const referenceElement = document.querySelector("#header");
    
    const ul = document.createElement('ul');

    ul.setAttribute("id", "navigation");
  
    parentElement.insertBefore(ul, referenceElement.nextSibling);
    
    if(ifThePageIsHome && document.documentElement.clientWidth <= 1224) {
      ul.style.marginTop = "9px";
    }    
      
    for(let i = 0; i < headerData.length; i++) {
      const li = ul.appendChild(document.createElement("li"));
      const a = li.appendChild(document.createElement("a"));
      a.textContent = headerData[i].title;
      a.setAttribute("href", headerData[i].url);
    }
  }
  
  const IsSearchResultPage = currentURL.includes("https://aitimestools.blogspot.com/search");
  const featuredPost = document.getElementById("featured_post");        
  
  if(IsSearchResultPage || currentURL.includes("https://aitimestools.blogspot.com/p/") || currentURL.includes("https://aitimestools.blogspot.com/2025/")) {         
    featuredPost.setAttribute("style", "display:none;");
  }
  
  if(currentURL.includes("https://aitimestools.blogspot.com/2025/")) { 
    document.body.style.padding = "0";
  }
  
  if((IsSearchResultPage || ifThePageIsHome) && document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 426) { 
    const CardsinSearchResultPage = document.querySelectorAll("#Blog1 > div.blog-posts.hfeed.container > article > div > div");
    const sideBarFeed = document.querySelector("body > div.page > div > div > div.centered-bottom > aside");
  
    for(const card of CardsinSearchResultPage) {
      card.style.width = "100%";
    }
  
    sideBarFeed.classList.add("sideBarWidener");
  }
  
  if(ifThePageIsHome && document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 426) { 
    const HomeBody = document.querySelector("#Blog1 > div.blog-posts.hfeed.container");
    const outerContainerForSmallPosts = document.querySelectorAll("#Blog1 > div.blog-posts.hfeed.container > article");
    const smallPosts = document.querySelectorAll("#Blog1 > div.blog-posts.hfeed.container > article > div > div");
           
    HomeBody.style.display = "flex";
    HomeBody.style.flexWrap = "wrap";
    
    for(const container of outerContainerForSmallPosts) {
      container.style.width = "48.9%";
      
    }

    for(let i = 0; i < smallPosts.length; i++) {
      smallPosts[i].style.width = "100%"
  
      if(i % 2 === 0) {
        continue;
      } else {
        smallPosts[i].style.marginLeft = "15px";
      }
    }
  }

  if(currentURL === "https://aitimestools.blogspot.com/2025/06/how-to-set-up-new-notebooklm-in.html?m=1" && document.documentElement.clientWidth <= 704 && document.documentElement.clientWidth > 552) {
    const pageBody = document.querySelector("body > div.page > div");

    pageBody.style.paddingTop = "95px";
  }
  
  const searchBox = document.querySelector("#BlogSearch1 > div > form > div > input");
  const searchButton = document.querySelector("#BlogSearch1 > div > form > label > svg");
        
  document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
      if(!searchBox.value) {
        event.preventDefault();
      } else {
        return;
      }
    } else {
      return;
    }
  });
          
  searchButton.addEventListener("click", (event) => {
    if(!searchBox.value) {
      event.preventDefault();
    } else {
      return;
    }
  });
});