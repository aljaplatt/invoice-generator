function renderTotal() {
  priceList.innerHTML = "";
  for (let i = 0; i < priceArr.length; i++) {
    const taskPrice = document.createElement("li");
    taskPrice.textContent += priceArr[i];
    priceList.append(taskPrice);
  }
}

// priceList.innerHTML = "";
// for (let i = 0; i < priceArr.length; i++) {
//   const taskPrice = document.createElement("li");
//   taskPrice.textContent += priceArr[i];
//   priceList.append(taskPrice);
// }
renderTotal();
