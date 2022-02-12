const mowBtn = document.querySelector(".mow-btn");
const washBtn = document.querySelector(".wash-btn");
const weedsBtn = document.querySelector(".weeds-btn");
const taskList = document.querySelector(".task-list");
const priceList = document.querySelector(".total-list");
console.log(taskList);

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
    const taskItem = document.createElement("li");
    // taskItem.classList.add("");
    taskItem.textContent += taskArr[i];
    taskList.append(taskItem);
  }
}

mowBtn.addEventListener("click", () => {
  taskArr.push(taskObj[0].name); // 10
  priceArr.push(taskObj[0].price); // 10
  console.log(taskArr);
  console.log(priceArr);

  renderTask();
  // taskLi.textContent += "Mow Lawn";
  // priceLi.textContent += `£ ${mowPrice}`;
  // task.append(taskLi);
  // price.append(priceLi);
});

washBtn.addEventListener("click", () => {
  taskArr.push(taskObj[1].name); // 10
  priceArr.push(taskObj[1].price); // 10
  console.log(taskArr);
  console.log(priceArr);
  renderTask();
  // taskLi.textContent = "Wash Car";
  // priceLi.textContent += `£ ${washPrice}`;
  // task.append(taskLi);
  // price.append(priceLi);
});

weedsBtn.addEventListener("click", () => {
  taskArr.push(taskObj[2].name); // 10
  priceArr.push(taskObj[2].price); // 10
  console.log(taskArr);
  console.log(priceArr);
  renderTask();
  // taskLi.textContent = "Pull Weeds";
  // priceLi.textContent += `£ ${weedsPrice}`;
  // task.append(taskLi);
  // price.append(priceLi);
});
