let myNav=document.querySelector(".nav-toggle"); 
let myToggle=document.querySelector(".toggled");
let myClose=document.querySelector(".close")
myNav.addEventListener("click" , e=> {
    document.body.style.cssText="overflow-y:hidden"
    myToggle.style.cssText="transform:rotateY(0deg)"; 
})
myClose.addEventListener("click",e=> {
    document.body.style.cssText="overflow-y:visible"
    myToggle.style.cssText="transform:rotateY(90deg)"
})
let myServices=document.querySelectorAll(".srv"); 
let myProjects=document.querySelectorAll(".project"); 
myProjects.forEach(el=> {
    el.classList.add("hidden")
})
console.log(myServices)
window.addEventListener("scroll",e=> {

    if (window.scrollY>500) {
        myServices.forEach(el=> {
            el.classList.remove("hidden")
            el.classList.add("show")
        })
    }
    else {
        myServices.forEach(el=> {
            
            el.classList.add("hidden")
            el.classList.remove("show")
        })
    }
    if(window.scrollY>1080) {
        myProjects.forEach(el=> {
            el.classList.remove("hidden");
            el.classList.add("show-trans")
        })
    }
    else {
        myProjects.forEach(el=> {
            el.classList.add("hidden");
            el.classList.remove("show-trans")
        })
    }
})