var addBtnFun = function (_e) {
    if (_e.matches(".dropdown")) {
        addBtnEl.style.display = "inline-block";
    }
    else if (_e.matches(".checkbox")) {
        optionListEl.innerHTML = "";
        addBtnEl.style.display = "inline-block";
    }
    else if (_e.matches(".numeric")) {
        optionListEl.innerHTML = "";
        addBtnEl.style.display = "none";
    }
    else {
        optionListEl.innerHTML = "";
        addBtnEl.style.display = "none";
    }
};
var addInputFun = function () {
    var inputBox = document.createElement("input");
    inputBox.setAttribute("placeholder", "type option...");
    optionListEl.appendChild(inputBox);
};
var handleForm = function (_e) {
    _e.preventDefault();
    var optionValues = [];
    var optionList = document.querySelectorAll(".option-list input");
    optionList.forEach(function (node) {
        optionValues.push(node.value);
    });
    var mainDiv = document.createElement("div");
    mainDiv.classList.add("que-with-options", "draggables");
    mainDiv.setAttribute("draggable", "true");
    var p = document.createElement("p");
    p.textContent = question.value;
    var span = document.createElement("span");
    span.textContent = "".concat(optionValues.join(", "));
    p.appendChild(span);
    var actionsDiv = document.createElement("div");
    actionsDiv.classList.add("action-btns");
    var verBtnsDiv = document.createElement("div");
    verBtnsDiv.classList.add("ver-btns");
    var topBtn = document.createElement("button");
    topBtn.classList.add("act-btn", "pos-up-btn");
    topBtn.textContent = "T";
    verBtnsDiv.appendChild(topBtn);
    var btmBtn = document.createElement("button");
    topBtn.classList.add("act-btn", "pos-down-btn");
    verBtnsDiv.appendChild(btmBtn);
    btmBtn.textContent = "B";
    actionsDiv.appendChild(verBtnsDiv);
    var delBtn = document.createElement("button");
    delBtn.classList.add("del-btn", "act-btn");
    delBtn.textContent = "X";
    actionsDiv.appendChild(delBtn);
    mainDiv.appendChild(p);
    mainDiv.appendChild(actionsDiv);
    displayAllQuestions.appendChild(mainDiv);
    submitEl.reset();
    var delBtnAction = document.querySelectorAll(".del-btn");
    var upBtnAction = document.querySelectorAll(".pos-up-btn");
    var downBtnAction = document.querySelectorAll(".pos-down-btn");
    delBtnAction.forEach(function (node) {
        node.addEventListener("click", function () {
            node.parentElement.parentElement.remove();
        });
    });
    var draggables = document.querySelectorAll(".draggables");
    draggables.forEach(function (draggable) {
        draggable.addEventListener("dragstart", function () {
            draggable.classList.add("dragging");
        });
        draggable.addEventListener("dragend", function () {
            draggable.classList.remove("dragging");
        });
        displayAllQuestions.addEventListener("dragover", function () {
            var draggable = document.querySelector(".dragging");
            displayAllQuestions.appendChild(draggable);
        });
    });
};
