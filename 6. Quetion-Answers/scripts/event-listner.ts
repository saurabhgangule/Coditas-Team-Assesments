queTypeEl.forEach((el) => {
  el.addEventListener("change", () => addBtnFun(el));
});
addBtnEl.addEventListener("click", addInputFun);
submitEl.addEventListener("submit", handleForm);
