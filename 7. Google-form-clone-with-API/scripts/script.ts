const addBtnFun = (_e) => {
  optionListEl.innerHTML = ``;
  const flag = _e.target.getAttribute("data-option") === "true";
  const type = _e.target.getAttribute("data-type");
  flag
    ? addRemoveDivEl.classList.toggle("hide")
    : addRemoveDivEl.classList.add("hide");
  queTypeInputEl.value = type;
};

const addInputFun = () => {
  const inputBox = document.createElement("input");
  inputBox.setAttribute("placeholder", "type option...");
  optionListEl.appendChild(inputBox);
};

const removeInputFun = () => {
  optionListEl.lastChild
    ? optionListEl.removeChild(optionListEl.lastChild)
    : "";
};

const displayFunction = async () => {
  try {
    const { data } = await allQuestionGet();
    const { questions } = data;
    displayAllQuestions.innerHTML = ``;

    for (let que of questions) {
      const mainDiv = document.createElement("div");
      mainDiv.classList.add("que-with-options", "draggables");
      mainDiv.setAttribute("draggable", "true");

      const p = document.createElement("p");
      p.textContent = `${que.text}`;

      const small = document.createElement('small');
      small.textContent = `${getKeyByValue(queTypes, que.type)}`;

      p.appendChild(small);

      if (que.options) {
        const span = document.createElement("span");
        span.textContent = `${que.options.join(", ")}`;
        p.appendChild(span);
      }

      const actionsDiv = document.createElement("div");
      actionsDiv.classList.add("action-btns");

      const verBtnsDiv = document.createElement("div");
      verBtnsDiv.classList.add("ver-btns");

      const upBtn = document.createElement("button");
      upBtn.classList.add("act-btn", "up-btn");
      const downBtn = document.createElement("button");
      downBtn.classList.add("act-btn", "down-btn");

      const upIcon = document.createElement("i");
      upIcon.classList.add("fa", "fa-arrow-up");
      const downIcon = document.createElement("i");
      downIcon.classList.add("fa", "fa-arrow-down");
      upBtn.appendChild(upIcon);
      downBtn.appendChild(downIcon);
      verBtnsDiv.appendChild(upBtn);
      verBtnsDiv.appendChild(downBtn);
      actionsDiv.appendChild(verBtnsDiv);

      const delBtn = document.createElement("button");
      delBtn.classList.add("del-btn", "act-btn");
      const removeIcon = document.createElement("i");
      removeIcon.classList.add("fa", "fa-remove");
      delBtn.appendChild(removeIcon);

      actionsDiv.appendChild(delBtn);
      mainDiv.appendChild(p);
      mainDiv.appendChild(actionsDiv);
      displayAllQuestions.appendChild(mainDiv);

      const delBtnAction = document.querySelectorAll(
        ".del-btn"
      ) as NodeListOf<HTMLButtonElement>;

      const upBtnEl = document.querySelectorAll(
        ".up-btn"
      ) as NodeListOf<HTMLButtonElement>;
      const downBtnEl = document.querySelectorAll(
        ".down-btn"
      ) as NodeListOf<HTMLButtonElement>;

      delBtnAction.forEach((node) => {
        node.addEventListener("click", async () => {
          // node.parentElement.parentElement.remove();
          const response = await questionDelete(que.position);
          response.data.message
            ? alert("Question Deleted...")
            : alert(response.error);
          displayFunction();
        });
      });

      upBtnEl.forEach((node) => {
        node.addEventListener("click", async () => {
          const response = await shiftFunction("UP", que._id);
          response.data.message
            ? alert("Question Shifted Up...")
            : alert(response.error);
          displayFunction();
        });
      });

      downBtnEl.forEach((node) => {
        node.addEventListener("click", async () => {
          const response = await shiftFunction("DOWN", que._id);
          response.data.message
            ? alert("Question Shifted Down...")
            : alert(response.error);
          displayFunction();
        });
      });
    }

    const allQues = document.querySelectorAll('.que-with-options') as NodeListOf<HTMLDivElement>;
    allQues[0].lastChild.firstChild.firstChild.remove();
    allQues[allQues.length - 1].lastChild.firstChild.lastChild.remove();

  } catch (e) {
    console.log(e);
  }
};

const handleForm = async (_e) => {
  _e.preventDefault();
  const optionValues = [];
  const queType = queTypeInputEl.value;
  const optionList = document.querySelectorAll(
    ".option-list input"
  ) as NodeListOf<HTMLInputElement>;

  optionList.forEach((node) => {
    optionValues.push(node.value);
  });

  const data = {
    text: `${question.value}`,
    type: `${queType}`,
  };

  optionList.length > 0 ? (data["options"] = optionValues) : "";
  const resp = await questionPost(data);
  resp.data.message
    ? alert("Question Added Successfully...")
    : alert(resp.error);
  displayFunction();
  submitEl.reset();
  optionListEl.innerHTML = ``;
};

const getKeyByValue = (object: Object, value: string) => {
  return Object.keys(object).find(key => object[key] === value).toUpperCase();
}

displayFunction();
