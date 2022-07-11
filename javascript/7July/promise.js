
// var users = [{
//     name: "Tinku",
//     email: "tinkubhatirt@gmail.com"
// },
// {
//     name: "Roop",
//     email: "tinkubhatirt@gmail.com"
// }]
  var url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
     .then(res => res.json())
     .then ((data) => {
          displayUserGrid(data)
     })
     .catch((err) => console.log(err))


// var promise = new Promise(function (resolve, reject) {
//     try {
//         resolve(users)
//     } catch (error) {
//         reject(users)
//     }
// });

// promise
//     .then((res) => {
//         displayUserGrid(res)
//     })
//     .catch((err) => console.log(err))

function displayUserGrid(url) {
    let Url = document.getElementById("url");
    let output = "";
    for (user of url) {
        let statusClass = user.completed ?"Success":"Error"
        
        output += `<div class="post">
        <div> ${user.userId} </div>
        <div> ${user.id} </div>
        <div> ${user.title} </div>
        <div> ${user.body} </div>
        </div>`
        
    }
    Url.innerHTML = output;
}