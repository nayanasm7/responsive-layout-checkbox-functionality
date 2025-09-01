let qty = 1;
const qtyDisplay = document.getElementById("qty");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", () => {
    qty++;
    qtyDisplay.textContent = qty;
});

decreaseBtn.addEventListener("click", () => {
    if (qty > 1) {
        qty--;
        qtyDisplay.textContent = qty;
    }
});