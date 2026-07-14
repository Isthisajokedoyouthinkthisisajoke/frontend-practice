 const container = document.querySelector("section")
 const orginal = document.querySelector("article")
 
 const cloned = orginal.cloneNode(true)
 container.appendChild(cloned)

 const threshold = 120

 window.scrollTo(0,threshold)

 window.addEventListener("scroll", () => {
    const halfHeight = orginal.clientHeight

    if (window.scrollY > halfHeight + threshold){
        window.scrollTo(0, window.scrollY - halfHeight)
    } 
    else if (window.scrollY < threshold ){
        scrollTo(0, halfHeight + window.scrollY)
    }
 })
 