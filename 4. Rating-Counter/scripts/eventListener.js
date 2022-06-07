formEl.onsubmit = function (e) {
    e.preventDefault();
    var tr = document.createElement("tr");
    var tdA = document.createElement("td");
    var avg = (Number(ambienceEl.value) +
        Number(cleanlinessEl.value) +
        Number(serviceEl.value) +
        Number(foodEl.value)) /
        4;
    tdA.innerText = ambienceEl.value;
    tdA.classList.add("ambience-data");
    tr.appendChild(tdA);
    var tdC = document.createElement("td");
    tdC.classList.add("cleanliness-data");
    tdC.innerText = cleanlinessEl.value;
    tr.appendChild(tdC);
    var tdS = document.createElement("td");
    tdS.innerText = serviceEl.value;
    tdS.classList.add("service-data");
    tr.appendChild(tdS);
    var tdF = document.createElement("td");
    tdF.classList.add("food-data");
    tdF.innerText = foodEl.value;
    tr.appendChild(tdF);
    var tdAvg = document.createElement("td");
    tdAvg.classList.add("all-avg-data");
    tdAvg.innerText = "".concat(avg);
    tr.appendChild(tdAvg);
    tbodyEl.appendChild(tr);
    var ambAvg = function () {
        var ambAll = document.querySelectorAll(".ambience-data");
        var avgSum = 0;
        ambAll.forEach(function (element) {
            avgSum += Number(element.textContent);
        });
        ambpEl.setAttribute("value", "".concat((avgSum / ambAll.length).toFixed(1)));
    };
    var clAvg = function () {
        var ambAll = document.querySelectorAll(".cleanliness-data");
        var avgSum = 0;
        ambAll.forEach(function (element) {
            avgSum += Number(element.textContent);
        });
        clpEl.setAttribute("value", "".concat((avgSum / ambAll.length).toFixed(1)));
    };
    var serAvg = function () {
        var serAll = document.querySelectorAll(".service-data");
        var avgSum = 0;
        serAll.forEach(function (element) {
            avgSum += Number(element.textContent);
        });
        serpEl.setAttribute("value", "".concat((avgSum / serAll.length).toFixed(1)));
    };
    var foodAvg = function () {
        var foodAll = document.querySelectorAll(".food-data");
        var avgSum = 0;
        foodAll.forEach(function (element) {
            avgSum += Number(element.textContent);
        });
        foodpEl.setAttribute("value", "".concat((avgSum / foodAll.length).toFixed(1)));
    };
    var megaAvg = function () {
        var allAvg = document.querySelectorAll(".all-avg-data");
        var avgSum = 0;
        allAvg.forEach(function (element) {
            avgSum += Number(element.textContent);
        });
        megaAvgEl.innerText = "".concat((avgSum / allAvg.length).toFixed(1));
    };
    ambAvg();
    clAvg();
    serAvg();
    foodAvg();
    megaAvg();
};
