// on button click
const button = document.getElementById("chatBtn");
button.addEventListener("click", sendChat);

function sendChat() {
  // get chatBox value
  const input = document.getElementById("chatBox");
  const chatBoxVal = input.value;

  console.log(chatBoxVal);
}