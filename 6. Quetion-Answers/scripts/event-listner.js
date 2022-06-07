queTypeEl.forEach(function (el) {
    el.addEventListener("change", function () { return addBtnFun(el); });
});
addBtnEl.addEventListener("click", addInputFun);
submitEl.addEventListener("submit", handleForm);
