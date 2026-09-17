const payments = document.querySelectorAll(".payment");

payments.forEach(payment => {

    payment.addEventListener("click", function () {

        payments.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});


document.getElementById("submitBtn").addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (name === "") {
        alert("نام و نام خانوادگی را وارد کنید");
        return;
    }

    if (phone === "") {
        alert("شماره موبایل را وارد کنید");
        return;
    }

    if (address === "") {
        alert("آدرس را وارد کنید");
        return;
    }

    const payment = document.querySelector(
        'input[name="payment"]:checked'
    ).value;

    if (payment === "online") {
        alert("در حال انتقال به درگاه پرداخت...");
    } else {
        alert("سفارش شما با موفقیت ثبت شد");
    }

});

// ------------------------------------------------------------------------
// back page center
document.querySelector(".btn").addEventListener('click' ,function back(){
    window.location.href="Index.html"
})