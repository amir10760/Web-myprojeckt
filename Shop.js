// ShowKala
document
    .querySelector("#imgdastebandi2")
    .addEventListener("click", function () {

        document.querySelector(".product-detail-box1").style.visibility = "visible";

    });



document
    .querySelector("#imgdastebandi3")
    .addEventListener("click", function () {

        document.querySelector(".product-detail-box2").style.visibility = "visible";

    });


document
    .querySelector("#imgdastebandi4")
    .addEventListener("click", function () {

        document.querySelector(".product-detail-box3").style.visibility = "visible";

    });

document
    .querySelector("#imgdastebandi5")
    .addEventListener("click", function () {

        document.querySelector(".product-detail-box4").style.visibility = "visible";

    });

    function closeProduct() {
    document.querySelectorAll(
        ".product-detail-box1, .product-detail-box2, .product-detail-box3, .product-detail-box4"
    ).forEach(function(product) {
        product.style.visibility = "hidden";
    });
}
// -----------------------------------------------------------------------------
// ShowKala TO xerchBox
document
    .querySelector("#box1")
    .addEventListener("click", function () {

        document.querySelector(".product-detail-box1").style.visibility = "visible";

    });



document
    .querySelector("#box2")
    .addEventListener("click", function () {

        document.querySelector(".product-detail-box2").style.visibility = "visible";

    });


document
    .querySelector("#box3")
    .addEventListener("click", function () {

        document.querySelector(".product-detail-box3").style.visibility = "visible";

    });

document
    .querySelector("#box4")
    .addEventListener("click", function () {

        document.querySelector(".product-detail-box4").style.visibility = "visible";

    });
// -----------------------------------------------------------------------------
// Goshop
document.querySelector("#menutext1").addEventListener('click' ,function Goshop() {
window.location.href="Shop.html";
});
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// Gopagecenter
document.querySelector("#menutext2").addEventListener('click' , function Gopagecenter() {
window.location.href="Index.html";
});

// -----------------------------------------------------------------------------
// Go TasvieHesab
document.querySelector("#s9").addEventListener('click' ,function GotasvieHesab() {
window.location.href="Tasviehesab.html";
})
// -----------------------------------------------------------------------------
// Payam Vorod
let role = localStorage.getItem("userRole");

if (role === "admin") {
    document.getElementById("welcomeMessage").innerText = "سلام ادمین ";
}

else if (role === "customer") {
    document.getElementById("welcomeMessage").innerText = " خوش امدی  ";
}
// -----------------------------------------------------------------------------
// Go Login Form
document.querySelector("#user-Image").addEventListener('click' ,function Login() {
window.location.href="Login.html"  
});
// -----------------------------------------------------------------------------
// Go to About me
document.querySelector("#menutext3").addEventListener('click' ,function GoAbout() {
window.location.href="About.html"  
});
// -----------------------------------------------------------------------------
// GO to call me
document.querySelector("#menutext4").addEventListener('click' ,function gocallmepage() {
window.location.href="Callme.html"  
});