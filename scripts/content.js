function setCursor(url) {
    $('body').css('cursor', `url(${url}) 1 1, auto`);
  }
  
  chrome.storage.local.get('Image', result => {
    setCursor(result.Image);
  });
  
  chrome.storage.onChanged.addListener(changes => {
    if (changes.Image) {
      setCursor(changes.Image.newValue);
    }
  });
   