formEl.onsubmit = (e) => {
  e.preventDefault();
  const tr = document.createElement("tr");
  const tdA = document.createElement("td");
  const avg =
    (Number(ambienceEl.value) +
      Number(cleanlinessEl.value) +
      Number(serviceEl.value) +
      Number(foodEl.value)) /
    4;
  tdA.innerText = ambienceEl.value;
  tdA.classList.add("ambience-data");
  tr.appendChild(tdA);

  const tdC = document.createElement("td");
  tdC.classList.add("cleanliness-data");
  tdC.innerText = cleanlinessEl.value;
  tr.appendChild(tdC);

  const tdS = document.createElement("td");
  tdS.innerText = serviceEl.value;
  tdS.classList.add("service-data");
  tr.appendChild(tdS);

  const tdF = document.createElement("td");
  tdF.classList.add("food-data");
  tdF.innerText = foodEl.value;
  tr.appendChild(tdF);

  const tdAvg = document.createElement("td");
  tdAvg.classList.add("all-avg-data");
  tdAvg.innerText = `${avg}`;
  tr.appendChild(tdAvg);

  tbodyEl.appendChild(tr);

  const ambAvg = () => {
    const ambAll = document.querySelectorAll(".ambience-data") as NodeList;
    let avgSum = 0;
    ambAll.forEach((element) => {
      avgSum += Number(element.textContent);
    });
    ambpEl.setAttribute("value", `${(avgSum / ambAll.length).toFixed(1)}`);
  };

  const clAvg = () => {
    const ambAll = document.querySelectorAll(".cleanliness-data") as NodeList;
    let avgSum = 0;
    ambAll.forEach((element) => {
      avgSum += Number(element.textContent);
    });
    clpEl.setAttribute("value", `${(avgSum / ambAll.length).toFixed(1)}`);
  };

  const serAvg = () => {
    const serAll = document.querySelectorAll(".service-data") as NodeList;
    let avgSum = 0;
    serAll.forEach((element) => {
      avgSum += Number(element.textContent);
    });
    serpEl.setAttribute("value", `${(avgSum / serAll.length).toFixed(1)}`);
  };

  const foodAvg = () => {
    const foodAll = document.querySelectorAll(".food-data") as NodeList;
    let avgSum = 0;
    foodAll.forEach((element) => {
      avgSum += Number(element.textContent);
    });
    foodpEl.setAttribute("value", `${(avgSum / foodAll.length).toFixed(1)}`);
  };

  const megaAvg = () => {
    const allAvg = document.querySelectorAll(".all-avg-data") as NodeList;
    let avgSum = 0;
    allAvg.forEach((element) => {
      avgSum += Number(element.textContent);
    });
    megaAvgEl.innerText = `${(avgSum / allAvg.length).toFixed(1)}`;
  };

  ambAvg();
  clAvg();
  serAvg();
  foodAvg();
  megaAvg();
};
