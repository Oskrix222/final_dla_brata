// function getLastCommitId() {


//     fetch('https://api.github.com/repos/Oskrix222/final_dla_brata/commits')
//         .then(response => response.json())
//         .then(data => {
//             let lastCommit = data[0].sha;
//             console.log(lastCommit);

//             var xhttp = new XMLHttpRequest();
//             xhttp.open("GET", `https://cdn.jsdelivr.net/gh/Oskrix222/final_dla_brata@${lastCommit}/app.js`, true);
//             xhttp.onreadystatechange = function () {
//                 if (xhttp.readyState === 4) {
//                     if (xhttp.status === 200) {
//                         eval(xhttp.responseText);
//                     }
//                 }
//             }
//         })
// }



// getLastCommitId();

// console.log(123);