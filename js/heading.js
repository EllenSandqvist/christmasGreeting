setInterval(()=> {
    const mainHeading = document.querySelector('h1');
    const modal = document.querySelector('.modal');
    
    let newColor;
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    mainHeading.style.color = `rgb(${r},${g},${b})`;
    modal.style.color = `rgb(${r},${g},${b})`
}, 1000)


const title = document.querySelector("h1")
title.addEventListener("mouseenter",()=>{
  title.innerHTML= "God Jul\noch ett gott nytt år!"
})
title.addEventListener("mouseout", ()=> {
  title.innerHTML = "God Jul!"
})