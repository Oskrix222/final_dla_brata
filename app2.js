fetch("https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/index.html")
  .then(response => response.text())
  .then(html => {
    document.getElementsByTagName("html")[0].innerHTML = html;
  }).then(function () {
    fetch("https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/app.js")
      .then(response => eval(response.text()))
  })