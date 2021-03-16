// Function to open a popup and await user feedback
async function copyRef() {

    const tabs = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });
  
    const tabId = tabs[0].id;
  
    const message = await browser.messageDisplay.getDisplayedMessage(tabId);
    
    const subject = message.subject;
    const author = message.author;
    const sent = message.date.toLocaleString();
  
    const s = `${author}, ${sent}, ${subject}`;
    await navigator.clipboard.writeText(s);
  
}

messenger.messageDisplayAction.onClicked.addListener(copyRef);
