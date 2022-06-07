const addBtnFun = (_e) => {
  if (_e.matches(".dropdown")) {
    addBtnEl.style.display = "inline-block";
  } else if (_e.matches(".checkbox")) {
    optionListEl.innerHTML = ``;
    addBtnEl.style.display = "inline-block";
  } else if (_e.matches(".numeric")) {
    optionListEl.innerHTML = ``;
    addBtnEl.style.display = "none";
  } else {
    optionListEl.innerHTML = ``;
    addBtnEl.style.display = "none";
  }
};

const addInputFun = () => {
  const inputBox = document.createElement("input");
  inputBox.setAttribute("placeholder", "type option...");
  optionListEl.appendChild(inputBox);
};

const handleForm = (_e) => {
  _e.preventDefault();

  const optionValues = [];
  const optionList = document.querySelectorAll(
    ".option-list input"
  ) as NodeListOf<HTMLInputElement>;

  optionList.forEach((node) => {
    optionValues.push(node.value);
  });

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("que-with-options", "draggables");
  mainDiv.setAttribute("draggable", "true");

  const p = document.createElement("p");
  p.textContent = question.value;

  const span = document.createElement("span");
  span.textContent = `${optionValues.join(", ")}`;
  p.appendChild(span);

  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("action-btns");

  const verBtnsDiv = document.createElement("div");
  verBtnsDiv.classList.add("ver-btns");

  const topBtn = document.createElement("button");
  topBtn.classList.add("act-btn", "pos-up-btn");
  topBtn.textContent = "T";
  verBtnsDiv.appendChild(topBtn);

  const btmBtn = document.createElement("button");
  topBtn.classList.add("act-btn", "pos-down-btn");
  verBtnsDiv.appendChild(btmBtn);
  btmBtn.textContent = "B";
  actionsDiv.appendChild(verBtnsDiv);

  const delBtn = document.createElement("button");
  delBtn.classList.add("del-btn", "act-btn");
  delBtn.textContent = "X";
  actionsDiv.appendChild(delBtn);

  mainDiv.appendChild(p);
  mainDiv.appendChild(actionsDiv);

  displayAllQuestions.appendChild(mainDiv);
  submitEl.reset();

  const delBtnAction = document.querySelectorAll(
    ".del-btn"
  ) as NodeListOf<HTMLButtonElement>;

  const upBtnAction = document.querySelectorAll(
    ".pos-up-btn"
  ) as NodeListOf<HTMLButtonElement>;

  const downBtnAction = document.querySelectorAll(
    ".pos-down-btn"
  ) as NodeListOf<HTMLButtonElement>;

  delBtnAction.forEach((node) => {
    node.addEventListener("click", () => {
      node.parentElement.parentElement.remove();
    });
  });

  const draggables = document.querySelectorAll(
    ".draggables"
  ) as NodeListOf<HTMLDivElement>;
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });

    displayAllQuestions.addEventListener("dragover", () => {
      const draggable = document.querySelector(".dragging");
      displayAllQuestions.appendChild(draggable);
    });
  });
};
