queTypeEl.forEach((el) => {
  el.addEventListener("click", addBtnFun);
});
addBtnEl.addEventListener("click", addInputFun);
removeBtnEl.addEventListener("click", removeInputFun);
submitEl.addEventListener("submit", handleForm);
