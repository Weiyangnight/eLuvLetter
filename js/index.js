// index.js

// 获取按钮元素
var navigateButton = document.getElementById("navigate-button");

// 添加点击事件监听器
navigateButton.addEventListener("click", function () {
    // 获取用户名和密码输入框的值
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 统一的密码
    var unifiedPassword = "123456";

    // 根据用户名和密码进行页面导航
    if (password === unifiedPassword) {
        if (username === "曹钊") {
            window.location.href = "曹钊.html";
        } else if (username === "张馨") {
            window.location.href = "张馨.html";
        } else if (username === "詹俊滔") {
            window.location.href = "詹俊滔.html";
        } else if (username === "黄思伟") {
            window.location.href = "黄思伟.html";
        } else {
            alert("无效的用户名，请输入有效的用户名。");
        }
    } else {
        alert("密码错误，请输入正确的密码。");
    }
});

var imageName = ["1"];
var num = parseInt(Math.random() * imageName.length);
document.getElementById("background").setAttribute("src", "img/" + imageName[num] + ".png");
document.getElementById("background").setAttribute("alt", imageName[num] + ".png");