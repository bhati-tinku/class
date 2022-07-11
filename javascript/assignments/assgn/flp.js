var url="flp.json";
fetch(url)
.then(res=>res.json())
.then((flipkart)=>{
  displayUserGrid(flipkart)
})
.catch((err)=>console.log(err))

function displayUserGrid(products) {
    let flipkart = document.getElementById("flipkart");
    

    let output = "";
    for (product of products) {
    
        output += `
        <div>
          <div >${product.title}</div>
          <div>${product.Brand}</div>
          <img src="./images/${product.image}" />
          <div>${product.Price}</div>
        </div>`
    }




    flipkart.innerHTML = output; 
}