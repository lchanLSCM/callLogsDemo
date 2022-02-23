
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var xhr_login = new XMLHttpRequest();
var url_login = "http://lscm-tps.net:8080/CallLogServer/login";
var token;
var login_username_cache;
var login_role_id_cache;

var userList = [
    {username: "user001", password: "password001"},
    {username: "user002", password: "password002"},
    {username: "user003", password: "password003"},
    {username: "user004", password: "password004"},
    {username: "user005", password: "password005"},
    {username: "user006", password: "password006"},
    {username: "user007", password: "password007"},
    {username: "user008", password: "password008"}
]

try{
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        var loginUser = {
            username: username, 
            password: password
        }
    
        var jsonString = JSON.stringify(loginUser);
        xhr_login.open("POST", url_login, true);
        xhr_login.setRequestHeader('X-PINGOTHER', 'pingpong');
        xhr_login.setRequestHeader("Content-Type", "application/json");
        xhr_login.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr_login.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        xhr_login.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, X-Auth-Token");
        xhr_login.setRequestHeader("X-Frame-Options", "DENY");
        xhr_login.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        xhr_login.setRequestHeader("pragma", "no-cache");
        xhr_login.setRequestHeader("X-Content-Type-Options", "nosniff");
    
        xhr_login.send(jsonString);
    
        xhr_login.onreadystatechange = function () {
    
            if (xhr_login.readyState == XMLHttpRequest.DONE) {
    
                console.log(xhr_login.status);
                
                if (xhr_login.status == "200") {
    
                    let xhr_login_resp = JSON.parse(xhr_login.responseText);
                    token = xhr_login_resp.token;
                    login_username_cache = xhr_login_resp.username;
                    login_role_id_cache = xhr_login_resp.roleId;
                    
    
                    console.log(xhr_login_resp);
    
                    console.log(token);
    
                    window.location.href = "covid2022.html";
    
                    localStorage.setItem("token", token);
                    localStorage.setItem("login_username_cache", login_username_cache);
                    localStorage.setItem("login_role_id_cache", login_role_id_cache);
                }
                else {
    
                    loginErrorMsg.style.opacity = 1;
    
                    if (JSON.parse(xhr_login.responseText).status_code == 1) {
       
                    } else{
    
                    } 
                }
            }
        };
    
    
    })
}
catch{

}



function containsUser(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].username === obj.username && list[i].password === obj.password) {
            return true;
        }
    }

    return false;
}
