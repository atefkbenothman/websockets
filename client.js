const websocket = new WebSocket("ws://localhost:8001/")

// on button click
const button = document.getElementById("chatBtn");
button.addEventListener("click", sendChat);

function sendChat() {
  // get nameBox value
  const name = document.getElementById("nameBox");
  const nameVal = name.value;

  // get chatBox value
  const msg = document.getElementById("chatBox");
  const chatBoxVal = msg.value;

  const data = {
    "name": nameVal,
    "message": chatBoxVal,
  }

  // send ws msg
  websocket.send(JSON.stringify(data));
}

function showMessage(data) {
  const chatMessagesDiv = document.getElementById("chatMessages");
  const pTag = document.createElement("p");
  data = JSON.parse(data);
  const msg = `(${data.datetime}) ${data.name}: ${data.message}`;
  pTag.textContent = msg;
  chatMessagesDiv.append(pTag);
}

window.addEventListener("DOMContentLoaded", () => {
  websocket.addEventListener("message", ({ data }) => {
    const event = JSON.parse(data);
    showMessage(data);
  });
});