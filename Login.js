
function showLogin(type) {

    document.getElementById("roleSection").style.display = "none";

    if (type === "admin") {
        document.getElementById("adminForm").classList.add("active");
    }

    if (type === "customer") {
        document.getElementById("customerForm").classList.add("active");
    }
}


function backToRoles() {

    document.getElementById("adminForm").classList.remove("active");
    document.getElementById("customerForm").classList.remove("active");

    document.getElementById("roleSection").style.display = "block";
}


function login(type) {

    let username = "";

    if (type === "admin") {
        username = document.getElementById("adminUser").value;
    }

    if (type === "customer") {
        username = document.getElementById("customerUser").value;
    }

    if (username.trim() === "") {
        alert("نام کاربری را وارد کنید");
        return;
    }


    localStorage.setItem("userRole", type);
    localStorage.setItem("username", username);


    window.location.href = "Index.html";
    
}
function login(type) {

    let username = "";
    let password = "";

    if (type === "admin") {

        username = document.getElementById("adminUser").value;
        password = document.getElementById("adminPass").value;

        // رمز مخصوص مدیر
        if (password !== "Admin@2026") {
            alert("رمز مدیر اشتباه است ❌");
            return;
        }
    }

    if (type === "customer") {

        username = document.getElementById("customerUser").value;
        password = document.getElementById("customerPass").value;

        if (username.trim() === "" || password.trim() === "") {
            alert("نام کاربری و رمز عبور را وارد کنید");
            return;
        }
    }

    if (username.trim() === "") {
        alert("نام کاربری را وارد کنید");
        return;
    }

    localStorage.setItem("userRole", type);
    localStorage.setItem("username", username);

    window.location.href = "Index.html";
}