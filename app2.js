fetch("https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/index.html")
  .then(response => response.text())
  .then(html => {
    document.body.innerHTML = html;
  });