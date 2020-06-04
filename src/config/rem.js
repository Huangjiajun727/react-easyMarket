(function() {
  function setFontSize() {
    var html = document.getElementsByTagName('html')[0];
    var pageWidth = html.getBoundingClientRect().width;

    html.style.fontSize = pageWidth / 10 + 'px';
  }
  setFontSize();
  window.onresize = () => {
   setFontSize();
  }
})();
