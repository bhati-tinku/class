function welcome() {
    alert("don't do it");

}
var btn = document.getElementById("btn");
// btn.onclick = welcome;

//event delagation
// Element.addEventListener(eventname, event handler)

btn.addEventListener("click", welcome);

function taskOne(ev) {
    console.log("task One")
    ev.preventDefault()
    // if(false){
    //     ev.stopImmediatePropagation()
    // }
}
function taskTwo() {
    console.log("task Two")
    ev.preventDefault()

}



function parentHandler(ev) {
    console.log("This is a parent")
    // console.log(ev.target)
    console.log(ev.currentTarget)

}
function childHandler(ev) {
    console.log("This is a child")
    ev.stopPropagation()
}

var anc = document.getElementById("anc");
var p1 = document.getElementById("parent");
var p2 = document.getElementById("parent1");
var c1 = document.getElementById("child");
var c2 = document.getElementById("child1");

p1.addEventListener("click", parentHandler);
anc.addEventListener("click", taskOne);

//  c1.addEventListener("click",taskOne);
//  c1.addEventListener("click",childHandler);
//  c1.addEventListener("click",taskTwo);

//  p2.addEventListener("click",parentHandler,true);

//  c2.addEventListener("click",childHandler,true);

