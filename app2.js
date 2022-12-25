function getLastCommitId() {
  fetch('https://api.github.com/repos/Oskrix222/final_dla_brata/commits')
    .then(response => response.json())
    .then(data => {
      let lastCommit = data[0].sha;
      makeGithubIndex('index.html', lastCommit);
      makeGithubCSS('style.css', lastCommit);
      makeGithubCSS('media.css', lastCommit);
      makeGithubJS('app.js', lastCommit);
    })
}



function makeGithubCSS(file, commit) {
  var link = document.createElement('style');
  link.innerHTML = `https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@${commit}/${file}`;
  document.getElementsByTagName('head')[0].appendChild(link);
}


function makeGithubJS(file, commit) {
  var link = document.createElement('script');
  link.src = `https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@${commit}/${file}`;
  document.getElementsByTagName('head')[0].appendChild(link);
};


function makeGithubIndex(file, commit) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@${commit}/${file}`, true);
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        document.getElementsByTagName("html")[0].innerHTML = xhttp.responseText;
      }
    }
  }
  xhttp.send(null);
}


getLastCommitId();




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