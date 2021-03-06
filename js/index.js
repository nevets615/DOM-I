const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// const imghead = document.querySelector("logo.png");
// imghead.setAttribute('src', "img/logo.png");

let headimg = document.getElementById("cta-img");
headimg.setAttribute( "src", siteContent["cta"]["img-src"]);

// const heading = document.querySelector("cta-img");
// headimg.setAttribute('src',"cta-img");

let navo = document.querySelectorAll("a");
navo.forEach(function(item, index){
item.textContent = siteContent["nav"][`nav-item-${index + 1}`];

});




let headtext = document.querySelector(".cta-text h1");
headtext.textContent = siteContent["cta"]["h1"];


let newButton = document.querySelector(".cta-text button");
newButton.textContent = siteContent['cta']["button"];


let maincon = document.querySelectorAll(".text-content");

maincon[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];

maincon[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];

maincon[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];

maincon[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];

maincon[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];

maincon[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];

maincon[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];

maincon[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];

maincon[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];

maincon[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


let con = document.getElementsByClassName("contact")[0];

con.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]

con.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]

con.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]

con.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]



let foot = document.querySelector("footer");
foot.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];



const newDiv = document.createElement("div");
newDiv.textContent = "This part was easy!!"
text-content.prepend(newDiv);

console.log(newDiv);