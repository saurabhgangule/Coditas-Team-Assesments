const youSendMsg = () => {
  console.log("you sent a message");
  const sentMsg = document.createElement("span");
  sentMsg.classList.add("chat-text");

  const receivedMsg = document.createElement("span");
  receivedMsg.classList.add("chat-text");

  sentMsg.innerHTML = youTextArea.value;
  receivedMsg.innerHTML = youTextArea.value;

  //   sentMsg.style.textAlign = "right";
  sentMsg.classList.add("right");
  receivedMsg.style.textAlign = "left";

  console.log("sent msg", sentMsg);
  console.log("received msg", receivedMsg);

  youTextSection.appendChild(sentMsg);
  userTextSection.appendChild(receivedMsg);
  youTextArea.value = "";
};

const userSendMsg = () => {
  console.log("user sent a message");
  const usentMsg = document.createElement("span");
  usentMsg.classList.add("chat-text");

  const ureceivedMsg = document.createElement("span");
  ureceivedMsg.classList.add("chat-text");

  usentMsg.innerHTML = userTextArea.value;
  ureceivedMsg.innerHTML = userTextArea.value;

  //   usentMsg.style.textAlign = "right";
  usentMsg.classList.add("right");
  ureceivedMsg.style.textAlign = "left";

  console.log("sent msg", usentMsg);
  console.log("received msg", ureceivedMsg);

  userTextSection.appendChild(usentMsg);
  youTextSection.appendChild(ureceivedMsg);
  userTextArea.value = "";
};
