var appear = document.getElementById("appear");
var hide = document.getElementById("hide");

var pwd = document.getElementById("pwd");
var username = document.getElementById("username");

var pwd_blur = document.getElementById("pwd_blur");
var username_blur = document.getElementById("username_blur");

username.onblur = function()
{
    username.style.display = "none";
    username_blur.style.display = "inline-block";
}

pwd.onblur = function()
{
    pwd.style.display = "none";
    pwd_blur.style.display = "inline-block";
}

username_blur.onfocus = function()
{
    username_blur.style.display = "none";
    username.style.display = "inline-block";
}

pwd_blur.onfocus = function()
{
    pwd_blur.style.display = "none";
    pwd.style.display = "inline-block";
}

appear.onclick = function(){
    appear.style.display = "none";
    hide.style.display = "block";
    pwd.type = "text";
}

hide.onclick = function(){
    hide.style.display = "none";
    appear.style.display = "block";
    pwd.type = "password";
}

// var eye = document.getElementById("eye");
// var pwd = document.getElementById("pwd");

// 方法二：
// function showhide(){

//         if (pwd.type == "password") {
//             pwd.type = "text";
//                 eye.className='fa fa-eye-slash'
//         }else {
//             pwd.type = "password";
//             eye.className='fa fa-eye'
//         }
// }
