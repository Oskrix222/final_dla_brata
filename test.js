function getLastCommitId() {
    fetch('https://api.github.com/repos/Oskrix222/final_dla_brata/commits')
      .then(response => response.json())
      .then(data => {
        let lastCommit = data[0].sha;
       
        makeGithubJS('app.js', lastCommit);
        
      })
  }

  function makeGithubJS(file, commit) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@${commit}/${file}`, true);
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          eval(xhttp.responseText);
        }
      }
    }
  };

  getLastCommitId();