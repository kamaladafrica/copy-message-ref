CopyMessageRef = {

  1: function () {

    const gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"]
      .getService(Components.interfaces.nsIClipboardHelper);

    let hdr = gMessageDisplay.displayedMessage;

    let subject = hdr.mime2DecodedSubject;
    let author = hdr.mime2DecodedAuthor;
    let sent = new Date(hdr.dateInSeconds * 1000).toLocaleString();

    let s = `${author}, ${sent}, ${subject}`;
    gClipboardHelper.copyString(s);
  },

}
