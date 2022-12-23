// fetch("https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/index.html")
//   .then(response => response.text())
//   .then(html => {
//     document.getElementsByTagName("html")[0].innerHTML += html;
//     fetch('https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@latest/app.js')
//       .then(response => response.text())
//       .then(code => eval(code));
//   });

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/media.css", true);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        var link = document.createElement('style');
  link.innerHTML=xhttp.responseText;
  document.getElementsByTagName('head')[0].appendChild(link);
      }
    }
  }
  xhttp.send(null);
