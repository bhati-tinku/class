

// fetch("products").then(response =>{ products = response.json()})
// console.log(products)



const products =        [
    {
      product_picture: "xro.jpg ",
      mobilename: "RealmeX2 Pro",
      model: "RMX1931",
      brand: "Realme",
      price: 32999,
      camera: "64 MP",
      processor: "SD855+",
      rating: 1,
      description: "Description"
    },
    {
      product_picture: "1t.jpg",
      mobilename: "RealmeX7 Pro",
      model: "RMX1981",
      brand: "Realme",
      price: 21999,
      camera: "64 MP",
      processor: "SD765G",
      rating: 17,
      description: "Description"
    },
    {
      product_picture: "1t.jpg",
      mobilename: "MI 11T Pro",
      model: "XM 3271",
      brand: "Xiaomi",
      price: 17999,
      camera: "108 MP",
      processor: "SD765+",
      rating: 4.2,
      description: "Description"
    },
    {
      product_picture: "12Pro.jpg",
      mobilename: "MI 12 Pro",
      model: "XM 3371",
      brand: "Xiaomi",
      price: 37999,
      camera: "108 MP",
      processor: "SD865+",
      rating: 4.3,
      description: "Description"
    },
    {
        product_picture: "12Pro.jpg",
        mobilename: "MI 12 Pro",
        model: "XM 3371",
        brand: "Oppo",
        price: 39999,
        camera: "108 MP",
        processor: "SD865+",
        rating: 4.3,
        description: "Description"
      },
    ] ;



//products.forEach(product => console.log(product) )



// const brandproduct = products.filter(product => product.brand ==="Xiaomi" || product.brand ==="Realme"||product.brand==="Oppo");
// console.log(brandproduct)

// const priceproduct = products.filter(product => product.price >"15000" && product.price<"30000");
// console.log(priceproduct)
// const ratingproduct = products.filter(product => product.rating >"3.6" && product.rating<"4.9");
// console.log(ratingproduct)


// const filterproduct = products.filter(product =>(( product.price >"15000" && product.price<"30000") && (product.rating >"3.6" && product.rating<"4.9") && (product.brand ==="Realme") ))
// console.log(filterproduct)


// let prodName = products.map( product => products.brand);
// console.log(prodName)
//  let productDesc = products.map( product => `${product.mobilename}  : ${product.price} : ${product.model} : ${product.rating }`)
//  console.log(productDesc)
 
//  let productrat = products.map( product => product.rating + 1)
//  console.log(productrat)


//  const proRat = products.sort((p1,p2)=> (parseInt(p1.rating) > p2.rating ?1 : -1))
// console.log(proRat)

// const totalPrice = products.reduce((a,b)=> a+(b.price),0)
// console.log(totalPrice)

const upgrade = products.map( products => products.price - (products.price*0.1));
console.log(upgrade)
      const srt = upgrade.sort((a,b) => a > b ? 1 : -1 )
      const flt = upgrade.filter (upgrade => upgrade >15000 && upgrade <35000 )
            console.log(flt)






//  const totalPoints = topSix.reduce((acc, currTeam) => acc + currTeam.points, 0);
 
// console.log(totalPoints)
 
 



