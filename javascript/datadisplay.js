var navItems = ["home","about","services","FAQ","contact"];
var button = document.getElementById("btn");

var promise = new Promise(function (resolve, reject) {
    try {
        resolve(navItems)
    } catch (error) {
        reject(navItems)
    }
});

promise
    .then((res) => {
        generateMenu(res)
    })
    .catch((err) => console.log(err))

function generateMenu(data){
    
    var navEl = document.getElementById("menu");
    var output = "<ul>";
    
    for(navItem of navItems){
        output += `<li><a href="${navItem}.html">${navItem}</a></li>`
    }
    output += "</ul>"
    
    console.log(output)
    navEl.innerHTML = output;

}


// function createMenu(){
//     generateMenu(navItems)
// }
   

button.addEventListener("click", generateMenu);




