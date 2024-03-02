let des1 = document.getElementById('des1');

window.addEventListener('scroll', () =>{
    let value= window.scrollY;

    des1.style.left= 100 + value*2 + "px";
})



const cursor= document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+ (e.pageY -13)+"px; left: "+ (e.pageX -12)+"px; ");
})
const cursor1= document.querySelector(".cursor1");
document.addEventListener("mousemove", e => {
    cursor1.setAttribute("style", "top: "+ (e.pageY -29)+"px; left: "+ (e.pageX -29)+"px; ");
})
const c1= document.querySelector("#cc1");
document.addEventListener("mousemove", e => {
    c1.setAttribute("style", "top: "+ (e.pageY - 15) +"px; left: "+ (e.pageX) +"px; ");
})
const c2= document.querySelector("#cc2");
document.addEventListener("mousemove", e => {
    c2.setAttribute("style", "top: "+ (e.pageY) +"px; left: "+ (e.pageX -15) +"px; ");
})
const c3= document.querySelector("#cc3");
document.addEventListener("mousemove", e => {
    c3.setAttribute("style", "top: "+ (e.pageY + 5) +"px; left: "+ (e.pageX) +"px; ");
})
const c4= document.querySelector("#cc4");
document.addEventListener("mousemove", e => {
    c4.setAttribute("style", "top: "+ (e.pageY) +"px; left: "+ (e.pageX + 5) +"px; ");
})