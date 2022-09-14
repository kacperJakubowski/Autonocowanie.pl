const messageArea = document.querySelector("textarea[name = tresc_odpowiedzi]");
const parkingCheckbox = document.getElementsByName("dodatkowe_opcje[]")[0];
const sendButton = document.querySelector(".js-odpowiedz-wystaw_ogloszenie");

//get data from chrome storage
chrome.storage.sync.get(["enable", "message"], function prepare(result) {
  //enable check
  if (result.enable == 1) {
    //autofill message
    messageArea.textContent = result.message;
    //parking checkbox checked
    parkingCheckbox.checked = true;
    //auto close tab
    setTimeout(function autoCloseTab() {
      sendButton.addEventListener("click", (_) => {
        setTimeout(function () {
          window.close();
        }, 500);
      });
      sendButton.click();
    }, 3500);
  } else {
    console.log("Autonocowanie.pl is disabled");
  }
});
