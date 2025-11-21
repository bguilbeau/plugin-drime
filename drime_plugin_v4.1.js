document.addEventListener("DOMContentLoaded",function(){
  // LOAD SCRIPT IN RIGHT ORDER
  const drimeVideos = document.querySelectorAll(".drime-player");
  if (drimeVideos !== null &&  drimeVideos.length > 0){
    const headerHtml = new Promise((resolve, reject) => {
      fetch('https://drime-player.s3.eu-west-3.amazonaws.com/html/player_html_v4.1.html')
        .then(response => response.text())
        .then(data => {
          let drimeTree = document.createElement( 'div' );
          drimeTree.setAttribute('class', 'drime-container');
          drimeTree.innerHTML = data;
          document.body.appendChild(drimeTree);
          resolve();
        });
    });

    headerHtml.then(() => {
      let currentScript = document.createElement("script");
      currentScript.setAttribute( 'src', "https://drime-player.s3.eu-west-3.amazonaws.com/js/drime_controller_v4.1.3.js");
      document.body.appendChild(currentScript);
    });
  }
});
