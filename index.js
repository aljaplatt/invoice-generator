const mowBtn = document.querySelector(".mow-btn");
const washBtn = document.querySelector(".wash-btn");
const weedsBtn = document.querySelector(".weeds-btn");
const invoiceBtn = document.querySelector(".invoice-btn");
const deleteBtn = document.querySelector(".delete-btn");
const taskList = document.querySelector(".task-list");
const totalList = document.querySelector(".total-list");
const total = document.querySelector(".total-amount");

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

function renderTask() {
  taskList.innerHTML = "";

  for (let i = 0; i < taskArr.length; i++) {
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
  totalList.innerHTML = "";
  for (let i = 0; i < priceArr.length; i++) {
    const taskPrice = document.createElement("li");
    taskPrice.classList.add("price-font");
    taskPrice.textContent += `£${priceArr[i]}`;
    totalList.append(taskPrice);
    totalAmount += priceArr[i];
  }
  total.textContent = `£${totalAmount}`;
}

mowBtn.addEventListener("click", () => {
  if (!priceArr.includes(10)) {
    taskArr.push(taskObj[0].name);
    priceArr.push(taskObj[0].price);

    renderTask();
  }
});

washBtn.addEventListener("click", () => {
  if (!priceArr.includes(15)) {
    taskArr.push(taskObj[1].name);
    priceArr.push(taskObj[1].price);
    renderTask();
  }
});

weedsBtn.addEventListener("click", () => {
  if (!priceArr.includes(20)) {
    taskArr.push(taskObj[2].name);
    priceArr.push(taskObj[2].price);
    renderTask();
  }
});

invoiceBtn.addEventListener("click", () => {
  totalList.innerHTML = "";
  taskList.innerHTML = "";
  total.textContent = "£0";
  taskArr = [];
  priceArr = [];
});

document.addEventListener("click", (e) => {
  if (
    e.target.className === "delete-btn" &&
    e.target.parentElement.textContent === "Mow Lawndelete"
  ) {
    let index = taskArr.indexOf("Mow Lawn");
    let indexPrice = priceArr.indexOf(10);
    taskArr.splice(index, 1);
    priceArr.splice(indexPrice, 1);
  }
  if (
    e.target.className === "delete-btn" &&
    e.target.parentElement.textContent === "Wash Cardelete"
  ) {
    index = taskArr.indexOf("Wash Car");
    indexPrice = priceArr.indexOf(15);
    taskArr.splice(index, 1);
    priceArr.splice(indexPrice, 1);
  }
  if (
    e.target.className === "delete-btn" &&
    e.target.parentElement.textContent === "Pull Weedsdelete"
  ) {
    index = taskArr.indexOf("Pull Weeds");
    indexPrice = priceArr.indexOf(20);
    taskArr.splice(index, 1);
    priceArr.splice(indexPrice, 1);
  }
  renderTask();
  renderTotal();
});
