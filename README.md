# Counter-App
This is a clone Counter-App website.

Table of contents
Overview
Screenshot
Project Skeleton
Links
My process
Built with
What I learned
Useful resources
Author


Overview
This is a simple tool for counting things and keeping truck of numbers.


![SimpleCounter](https://www.linkpicture.com/q/Ekran-Resmi-2023-04-24-19.03.44.png)

Project Skeleton
    
|----app.js  
|----style.css
|----index.html

Links
[live site URL here: (https://counter-app-xi-five.vercel.app)]

My process
Built with
Semantic HTML5 markup

CSS custom properties

Flexbox

JavaScript HTML DOM

Google Specific Fonts

Mobile-first workflow

Styled Components - For styles

What I learned
I learned how to use DOM manipulation , javascript DOM manipulation, @keyframes, html elements and many more.

To see how you can add code snippets, see below:

<h1>Some JS code I'm proud of</h1>

for (let i = 0; i < btnBorder.length; i++) {
  btnBorder[i].addEventListener("click", function () {
    for (let j = 0; j < btnBorder.length; j++) {
      if (btnBorder[j] !== this) {
        btnBorder[j].style.border = "none";
      }
    }
    // Change border style of clicked button
    this.style.border = "2px solid #fff";
    if (event.target.matches('.white-btn')) {
      settingsSection.style.color = "#141516"
      resetCounter.style.color = "#141516"
    } else if (!event.target.matches('.white-btn')) {
      settingsSection.style.color = "#ced4e2"
      resetCounter.style.color = "#ced4e2"
      document.querySelector(".approve-btn").style.color = '#ced4e2';
      document.querySelector(".cancel-btn").style.color = '#ced4e2';
    }
  });
}


Useful resources
W3 Schoold - This helped me for basics of website paradigm. I really liked this pattern and will use it going forward.
MDN - This is an amazing document which helped me finally understand deep sides of web development. I'd recommend it to anyone still learning these concepts.

Original Website - https://simplecounter.app

Author 
Author - [Mizgin]
