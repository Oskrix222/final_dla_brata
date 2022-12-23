fetch("https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata/index.html")
  .then(response => response.text())
  .then(html => {
    document.getElementsByTagName("html")[0].innerHTML += html;
    fetch('https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata/app.js')
      .then(response => response.text())
      .then(code => eval(code));
  });





// let script = document.getElementById('app-script');
// script.src = 'https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/app.js';