//education collapsable 
var isOpen = false;

function expandTimeline() {
  if (!isOpen) {
    document.getElementById("list-wrapper").style.maxHeight = "2200px";
    document.getElementById("expand-btn").innerHTML = "COLLAPSE";
    isOpen = true;
  } else {
    document.getElementById("list-wrapper").style.maxHeight = "94px";
    document.getElementById("expand-btn").innerHTML = "EXPAND";
    isOpen = false;
  }
}

// collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Light / dark mode selection
const modeBtn = document.querySelector('#light-dark-mode-container')
  .addEventListener('click', function() {
    const everything = document.querySelectorAll('*');
    everything.forEach((item) => {
      item.classList.toggle('dark');
      item.style.transition = 'all 0.3s';
    });  
  });

// scroll button
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function callback(entries, observer) {
  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     
      scrollToTopBtn.classList.add("showBtn")
    } else {
      
      scrollToTopBtn.classList.remove("showBtn")
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
    
let observer = new IntersectionObserver(callback);
observer.observe(target);