let form = document.getElementById("signup")

var api_url = "https://jsonplaceholder.typicode.com/users"
form.addEventListener("submit",async function(e){
   
    e.preventDefault();
    var name = form.elements["name"].value;
    var id = form.elements["id"].value;
    var username = form.elements["username"].value;
    var email = form.elements["email"].value;
    var phone = form.elements["phone"].value;
    var website = form.elements["website"].value;

    let formData = {
        name,
        id,
        username,
        email,
        phone,
        website
    }

    const response = await fetch(api_url,{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)

    })
    console.log(await response.json()   )

})