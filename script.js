//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes(); // call the function to get all episodes
  let episodes = document.getElementById("root");
  episodes.innerHTML = '';
  
  allEpisodes.map((episode) => {
    const episodeHTML = `
    <div class="episode">
    <h3>${episode.name}<small><bold> : </bold>S0${episode.season}E0${episode.number}</small></h3>
    <img src="${episode.image.medium}" alt="${episode.name}">
    <div class="summary">${episode.summary}</div>
    <p>Link to the <a href="${episode._links.self.href}">Episode</a></p>
    </div>
    `;

    episodes.innerHTML += episodeHTML;
  });
  makePageForEpisodes(allEpisodes);

}



function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent ;
}

window.onload = setup;
