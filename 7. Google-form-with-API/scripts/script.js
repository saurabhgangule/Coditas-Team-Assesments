var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const displayFunction = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const { data } = yield allQuestionGet();
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
            const delBtnAction = document.querySelectorAll(".del-btn");
            const upBtnEl = document.querySelectorAll(".up-btn");
            const downBtnEl = document.querySelectorAll(".down-btn");
            delBtnAction.forEach((node) => {
                node.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                    // node.parentElement.parentElement.remove();
                    const response = yield questionDelete(que.position);
                    response.data.message
                        ? alert("Question Deleted...")
                        : alert(response.error);
                    displayFunction();
                }));
            });
            upBtnEl.forEach((node) => {
                node.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                    const response = yield shiftFunction("UP", que._id);
                    response.data.message
                        ? alert("Question Shifted Up...")
                        : alert(response.error);
                    displayFunction();
                }));
            });
            downBtnEl.forEach((node) => {
                node.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                    const response = yield shiftFunction("DOWN", que._id);
                    response.data.message
                        ? alert("Question Shifted Down...")
                        : alert(response.error);
                    displayFunction();
                }));
            });
        }
        const allQues = document.querySelectorAll('.que-with-options');
        allQues[0].lastChild.firstChild.firstChild.remove();
        allQues[allQues.length - 1].lastChild.firstChild.lastChild.remove();
    }
    catch (e) {
        console.log(e);
    }
});
const handleForm = (_e) => __awaiter(this, void 0, void 0, function* () {
    _e.preventDefault();
    const optionValues = [];
    const queType = queTypeInputEl.value;
    const optionList = document.querySelectorAll(".option-list input");
    optionList.forEach((node) => {
        optionValues.push(node.value);
    });
    const data = {
        text: `${question.value}`,
        type: `${queType}`,
    };
    optionList.length > 0 ? (data["options"] = optionValues) : "";
    const resp = yield questionPost(data);
    resp.data.message
        ? alert("Question Added Successfully...")
        : alert(resp.error);
    displayFunction();
    submitEl.reset();
    optionListEl.innerHTML = ``;
});
const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value).toUpperCase();
};
displayFunction();
