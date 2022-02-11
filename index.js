const mowBtn = document.querySelector(".mow-btn");
const washBtn = document.querySelector(".wash-btn");
const weedsBtn = document.querySelector(".weeds-btn");
const task = document.querySelector(".task-list");
const price = document.querySelector(".price-list");
console.log(task);

const taskLi = document.createElement("li");
const priceLi = document.createElement("li");

const mowPrice = 10;
const washPrice = 15;
const weedsPrice = 20;

mowBtn.addEventListener("click", () => {
  taskLi.textContent = "Mow Lawn";
  priceLi.textContent += `£ ${mowPrice}`;
  task.append(taskLi);
  price.append(priceLi);
});

washBtn.addEventListener("click", () => {
  taskLi.textContent = "Wash Car";
  priceLi.textContent += `£ ${washPrice}`;
  task.append(taskLi);
  price.append(priceLi);
});

weedsBtn.addEventListener("click", () => {
  taskLi.textContent = "Pull Weeds";
  priceLi.textContent += `£ ${weedsPrice}`;
  task.append(taskLi);
  price.append(priceLi);
});
