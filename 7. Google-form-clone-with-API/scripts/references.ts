const queTypeEl = document.querySelectorAll(
  ".option-type"
) as NodeListOf<HTMLButtonElement>;
const addRemoveDivEl = document.getElementById(
  "add-remove-option"
) as HTMLDivElement;
const optionListEl = document.getElementById("option-list") as HTMLDivElement;
const addBtnEl = document.getElementById("add-btn") as HTMLButtonElement;
const removeBtnEl = document.getElementById("remove-btn") as HTMLButtonElement;
const submitEl = document.getElementById("form-submit") as HTMLFormElement;
const question = document.getElementById("question") as HTMLInputElement;
const displayAllQuestions = document.getElementById(
  "display-all-questions"
) as HTMLDivElement;
const queTypeInputEl = document.getElementById("que-type") as HTMLInputElement;
const queTypes = {
  dropdown: "6299b4ffe3d2004c0a545c36",
  checkbox: "6299b4ffe3d2004c0a545c37",
  text: "6299b4ffe3d2004c0a545c38",
  numeric: "6299b4ffe3d2004c0a545c39",
};
