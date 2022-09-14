//shortcuts
const logo = document.querySelector(".logoLink");
const switchButton = document.querySelector(".switchButton");
const messageArea = document.querySelector(".messageArea");
const saveButton = document.querySelector(".btn");
//logo click event
logo.addEventListener("click", function openInNewTab() {
  chrome.tabs.create({ active: true, url: logo.href });
});
//get data from chrome storage
chrome.storage.sync.get(["enable", "message"], function prepare(result) {
  // overwriting
  if (result.message != "") {
    saveButton.textContent = "Nadpisz";
  }
  //enable check
  if (result.enable == 1) {
    switchButton.checked = true;
    messageArea.readOnly = false;
    saveButton.disabled = false;
  } else {
    switchButton.checked = false;
    messageArea.readOnly = true;
    saveButton.disabled = true;
  }
});

//switch toggling
switchButton.addEventListener("change", function switchToggling() {
  if (switchButton.checked) {
    chrome.storage.sync.set({ enable: 1 });
    messageArea.readOnly = false;
    saveButton.disabled = false;
  } else {
    chrome.storage.sync.set({ enable: 0 });
    messageArea.readOnly = true;
    saveButton.disabled = true;
  }
});

//save message
saveButton.addEventListener("click", function saveMessage() {
  saveButton.textContent = "Nadpisz";
  chrome.storage.sync.set({ message: messageArea.value });
  messageArea.value = "";
});

// chrome.management.setEnabled("aonhalieidfghjfcjjkckpnggfnkikmk", true);
