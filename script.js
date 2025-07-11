
let username = document.querySelector("#user")
let email = document.querySelector("#email")
let gender = document.querySelector("#gender")


function fetchData(){
    fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(result = result=>{
    gender.textContent = result.results[0].gender;
    username.textContent = result.results[0].name.first + ' ' + result.results[0].name.last;
    email.textContent = result.results[0].email;
   
    
});
}

fetchData();