const mowBtn = document.querySelector(".mow-btn");
const washBtn = document.querySelector(".wash-btn");
const weedsBtn = document.querySelector(".weeds-btn");
const invoiceBtn = document.querySelector(".invoice-btn");
const deleteBtn = document.querySelector(".delete-btn");
const taskList = document.querySelector(".task-list");
const priceList = document.querySelector(".total-list");
const total = document.querySelector(".total-amount");
console.log(total);

// const taskLi = document.createElement("li");
// const priceLi = document.createElement("li");

const mowPrice = 10;
const washPrice = 15;
const weedsPrice = 20;

let taskArr = [];
let priceArr = [];

const taskObj = {
  0: {
    name: `Mow Lawn`,
    price: 10,
  },
  1: {
    name: "Wash Car",
    price: 15,
  },
  2: {
    name: "Pull Weeds",
    price: 20,
  },
};

// console.log(taskObj);
// console.log(taskObj[0].name);

// empty array to store tasks
// on click push value to empty array
// loop through array and append items to list

function renderTask() {
  // move this here - DRY - clear out emojis before rendering
  taskList.innerHTML = "";

  for (let i = 0; i < taskArr.length; i++) {
    // if(taskArr.includes)
    const taskItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    taskItem.classList.add("task-font");
    deleteBtn.classList.add("delete-btn");
    taskItem.textContent += taskArr[i];
    deleteBtn.textContent = "delete";
    taskList.append(taskItem);
    taskItem.append(deleteBtn);
    renderTotal();
  }
}

function renderTotal() {
  let totalAmount = 0;
  priceList.innerHTML = "";
  for (let i = 0; i < priceArr.length; i++) {
    const taskPrice = document.createElement("li");
    taskPrice.classList.add("price-font");
    taskPrice.textContent += `£${priceArr[i]}`;
    priceList.append(taskPrice);
    totalAmount += priceArr[i];
    console.log(totalAmount);
  }
  total.textContent = `£${totalAmount}`;
}

mowBtn.addEventListener("click", () => {
  if (!priceArr.includes(10)) {
    taskArr.push(taskObj[0].name); // 10
    priceArr.push(taskObj[0].price); // 10
    console.log(taskArr);
    console.log(priceArr);

    renderTask();
  }
  // taskLi.textContent += "Mow Lawn";
  // priceLi.textContent += `£ ${mowPrice}`;
  // task.append(taskLi);
  // price.append(priceLi);
});

washBtn.addEventListener("click", () => {
  if (!priceArr.includes(15)) {
    taskArr.push(taskObj[1].name); // 10
    priceArr.push(taskObj[1].price); // 10
    console.log(taskArr);
    console.log(priceArr);
    renderTask();
  }
  // taskLi.textContent = "Wash Car";
  // priceLi.textContent += `£ ${washPrice}`;
  // task.append(taskLi);
  // price.append(priceLi);
});

weedsBtn.addEventListener("click", () => {
  if (!priceArr.includes(20)) {
    taskArr.push(taskObj[2].name); // 10
    priceArr.push(taskObj[2].price); // 10
    console.log(taskArr);
    console.log(priceArr);
    renderTask();
  }
  // taskLi.textContent = "Pull Weeds";
  // priceLi.textContent += `£ ${weedsPrice}`;
  // task.append(taskLi);
  // price.append(priceLi);
});

invoiceBtn.addEventListener("click", () => {
  priceList.innerHTML = "";
  taskList.innerHTML = "";
  total.textContent = "£0";
  taskArr = [];
  priceArr = [];
  // taskLi.textContent = "Pull Weeds";
  // priceLi.textContent += `£ ${weedsPrice}`;
  // task.append(taskLi);
  // price.append(priceLi);
});

document.addEventListener("click", (e) => {
  if (
    e.target.className === "delete-btn" &&
    e.target.parentElement.textContent === "Mow Lawndelete"
  ) {
    // console.log(e);
    // console.log("delete me");
    // console.log(taskArr.indexOf("Mow Lawn"));
    // console.log(e.target.parentNode.textContent);
    // console.log(e.target.parentElement.textContent);
    let index = taskArr.indexOf("Mow Lawn");
    let indexPrice = priceArr.indexOf(10);
    console.log(index);
    taskArr.splice(index, 1);
    priceArr.splice(indexPrice, 1);
    console.log(taskArr);
    renderTask();
    renderTotal();
  }
});
