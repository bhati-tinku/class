// var person = {
//     name : "Tinku",
//     email: "tinkubhatirt@gmail.com",
//     pNumber: 8448407313,
//     bGroup: "B+",
//     getName: function(){
//         return this.name                               //here this keyword is referring to this object person
//     },
//     getEail: function(){
//         return this.email                               //here this keyword is referring to this object person
//     },
//     setName: function(name){
//         this.name = name                                 //person.name = "newName"                             //here this keyword is referring to this object person
//     },
//     setEmail: function(mail){
//         this.email = mail                                 //person.name = "newName"                             //here this keyword is referring to this object person
//     },
//     getpNumber: function(){
//         return this.pNumber                              //here this keyword is referring to this object person
//     },
//     getbGroup: function(){
//         return this.bGroup                              //here this keyword is referring to this object person
//     },
//     setbGroup: function(bgroup){
//         this.bGroup = bgroup                                 //person.name = "newName"                             //here this keyword is referring to this object person
//     },

    
// }


//creating constructors using Function keyword 

function Mobile (brand,ram,display,resolution,soc,camera){
             this.brand = brand;
             this.ram = ram;
             this.display = display;
             this.resolution = resolution;
             this.soc = soc;
             this.camera = camera;

            this.getBrand = function(){
                return this.brand
            }
            this.getRam = function(){
                return this.ram
            }
            this.getDisplay = function(){
                return this.display
            }
            this.getResolution = function(){
                return this.resolution
            }
            this.getSoc = function(){
                return this.soc
            }
            this.getCamera = function(){
                return this.camera
            }
      
}
Mobile.prototype.os = "Android(LINUX)";

 let mobile1 = new Mobile("Realme","12GB","Amoled","2K","SD855+","Quad-camers");
 let mobile2 = new Mobile("MI","8GB","Amoled","2K","SD845+","Quad-camers");
 let mobile3 = new Mobile("Oppo","6GB","Amoled","1080P","SD855+","Quad-camers");
 let mobile4 = new Mobile("Realme","12GB","Amoled","2K","SD855+","Quad-camers");
 let mobile5 = new Mobile("Realme","12GB","Amoled","2K","SD855+","Quad-camers");




 //var url = location.href;
// undefined
// var arr = url.split("/");
// undefined
// arr.pop()
// ''
// arr.pop()

 



