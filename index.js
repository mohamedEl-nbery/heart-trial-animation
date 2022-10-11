const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(even)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    bodyEl.appendChild(spanEl);
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    setTimeout(()=>{
        spanEl.remove()
    }, 2000)

})