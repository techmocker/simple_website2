function openImagePopup(imageSrc, altText) {
    var img = document.getElementById('popupImage');
    var popup = document.getElementById('imagePopup');
  
    if (img && popup) {
      img.src = imageSrc;
      img.alt = altText;
      popup.style.display = 'block';
    } else {
      console.error('Bild oder Popup nicht gefunden.');
    }
  }
  
  function closeImagePopup() {
    var img = document.getElementById('popupImage');
    var popup = document.getElementById('imagePopup');
  
    if (img && popup) {
      img.src = '';
      popup.style.display = 'none';
    } else {
      console.error('Bild oder Popup nicht gefunden.');
    }
  }
  