document.addEventListener("DOMContentLoaded", function () {
    const contactBtns = document.getElementsByClassName("popup-btn");
    const popup = document.getElementById("open-popup");
    const closeBtn = document.getElementById("close-popup");
    let autoCloseTimer;

    Array.from(contactBtns).forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            popup.classList.remove("hidden");

            clearTimeout(autoCloseTimer);
            autoCloseTimer = setTimeout(() => {
                popup.classList.add("hidden");
            }, 5000);
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.classList.add("hidden");
        clearTimeout(autoCloseTimer);
    });
});
