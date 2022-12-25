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
  makeGithubCSS('style.css');
  makeGithubCSS('media.css');
  