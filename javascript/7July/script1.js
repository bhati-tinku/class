

async function getUsers() {
    let url = 'user1.json';
    try{
        let res = await fetch(url);
        return await res.json();
    
    } catch(error){
        console.log(error);
    }
}
async function render(){
    let mobiles = await getmobiles();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class = "user">
                           <img src = "${user.profileURL}">
                           <h2>${user.firstName} ${user.lastname}</h2>
                           <div class = "gender"> ${user.gender}</div>
                           <div class = "email"><a href="email:${user.email}">${user.email}</a></div>
                           </div>`;
        html += htmlSegment;                   
        
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}
renderUsers()