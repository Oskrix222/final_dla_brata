fetch("https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/index.html")
  .then(response => response.text())
  .then(html => {
    document.getElementsByTagName("html")[0].innerHTML = html;
    fetch('https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/app.js')
      .then(response => response.text())
      .then(code => eval(code));
  });





// let script = document.getElementById('app-script');
// script.src = 'https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/app.js';