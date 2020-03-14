var appear = document.getElementById("appear");
var hide = document.getElementById("hide");
var pwd = document.getElementById("pwd");

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

var eye = document.getElementById("eye");
var pwd = document.getElementById("pwd");

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
