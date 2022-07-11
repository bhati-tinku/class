var cart = [
    {
        productid: 1,
        brand: "mi",
        price: 12000,
        qty: 1
    },
    {
        productid: 2,
        brand: "POCO",
        price: 13000,
        qty: 3
    },
    {
        productid: 3,
        brand: "REALME",
        price: 21000,
        qty: 2
    },

    {
        productid: 4,
        brand: "Infinix",
        price: 12000,
        qty: 5
    },
    {
        productid: 5,
        brand: "Oppo",
        price: 29000,
        qty: 2
    },
    {
        productid: 6,
        brand: "Oneplus",
        price: 39000,
        qty: 7
    },

    {
        productid: 7,
        brand: "Apple",
        price: 79999,
        qty: 9
    },
    {
        productid: 8,
        brand: "Samsung",
        price: 69000,
        qty: 2
    },
    {
        productid: 9,
        brand: "Iqoo.",
        price: 41000,
        qty: 1
    }]
    // console.log("cart:",cart)
    

    function getCartTotal(data){
        var total = 0;
        for(product of data){
           
            var itotal = product.price*product.qty;
            console.log("product_id=",product.productid,"hb=,quantity=",product.qty,"total amount=",itotal);
            total += (product.price*product.qty);
        }
       console.log("total amount",total);  
    } 
    
    getCartTotal(cart)











    // var total = 0;

    // function getcartTotal(){
    //     var total = 0;
    //     var i = 0, j=0;
    //     var l = cart.length;
    //     for(i = 0; i<=l ; i++){
    //         for(j = 2; j<4; j++){
    //             total=total + cart[j] * cart[j];
    //         }
    //     }

                                                                                       
    //     return total;
    // }
    // console.log ("TOTAL AMOUNT:", total) 
   

















    // for(price of arguments){
    //     total = total+ price
    //     }
