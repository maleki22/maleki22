let myImage = document.querySelector('img');
myImage.onclick = function() {
  mySrc = myImage.getAttribute('src');
  
  if(mySrc === '../images/img_5terre.jpg') {
    myImage.setAttribute('src', '../images/img_forest.jpg');
  } else {
    myImage.setAttribute('src', '../images/img_5terre.jpg');
  }
}
