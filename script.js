// script.js
document.addEventListener("DOMContentLoaded", () => {
  const plusBtns = document.querySelectorAll(".plus");
  const minusBtns = document.querySelectorAll(".minus");
  const deleteBtns = document.querySelectorAll(".delete");
  const hearts = document.querySelectorAll(".heart");

  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
      const count = parseInt(item.querySelector(".count").textContent);
      const price = parseFloat(item.querySelector(".price").textContent);
      total += count * price;
    });
    document.getElementById("total").textContent = total.toFixed(2);
  }

  plusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const countEl = btn.parentElement.querySelector(".count");
      countEl.textContent = parseInt(countEl.textContent) + 1;
      updateTotal();
    });
  });

  minusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const countEl = btn.parentElement.querySelector(".count");
      let count = parseInt(countEl.textContent);
      if (count > 1) {
        countEl.textContent = count - 1;
        updateTotal();
      }
    });
  });

  deleteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".cart-item");
      item.remove();
      updateTotal();
    });
  });

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("liked");
      heart.textContent = heart.classList.contains("liked") ? "❤️" : "♡";
    });
  });

  // Calcul initial
  updateTotal();
});
