


function makeGithubCSS(file) {
  const repo = 'Oskrix222/final_dla_brata'; // Replace with your repository name
  const apiUrl = `https://api.github.com/repos/${repo}/commits?per_page=1`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var commitId = data[0].sha;
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", `https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@${commitId}/${file}`, true);
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
          if (xhttp.status === 200) {
            var link = document.createElement('style');
            link.innerHTML = xhttp.responseText;
            document.getElementsByTagName('head')[0].appendChild(link);
          }
        }
      }
      xhttp.send(null);
    });
}



function makeGithubJS(file) {
  const repo = 'Oskrix222/final_dla_brata'; // Replace with your repository name
  const apiUrl = `https://api.github.com/repos/${repo}/commits?per_page=1`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var commitId = data[0].sha;
      var link = document.createElement('script');
      link.src =`https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@${commitId}/${file}`;
      documen
    });
}

function makeGithubIndex(file) {
  const repo = 'Oskrix222/final_dla_brata'; // Replace with your repository name
  const apiUrl = `https://api.github.com/repos/${repo}/commits?per_page=1`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var commitId = data[0].sha;
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", `https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@${commitId}/${file}`, true);
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
          if (xhttp.status === 200) {
            document.getElementsByTagName("html")[0].innerHTML = xhttp.responseText;
          }
        }
      }
      xhttp.send(null);
    });
}



makeGithubIndex('index.html');
makeGithubCSS('style.css');
makeGithubCSS('media.css');
makeGithubJS('app.js');



// fetch("https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/index.html")
//   .then(response => response.text())
//   .then(html => {
//     document.getElementsByTagName("html")[0].innerHTML += html;
//     fetch('https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@latest/app.js')
//       .then(response => response.text())
//       .then(code => eval(code));
//   });





// let script = document.getElementById('app-script');
// script.src = 'https://raw.githubusercontent.com/Oskrix222/final_dla_brata/master/app.js';