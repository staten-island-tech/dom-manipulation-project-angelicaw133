const DOMSelectors = {
  form: document.querySelector("#form"),
  song: document.querySelector(".song_name"),
  artist: document.querySelector(".artist_name"),
  album: document.querySelector(".album_link"),
  button: document.querySelector(".button"),
  container: document.querySelector("#container"),
  deletebtn: document.querySelector(".deletebtn"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  createhtml();
});

function createhtml() {
  const submittedvariables = {
    song: DOMSelectors.song.value,
    artist: DOMSelectors.artist.value,
    album: DOMSelectors.album.value,
  };
  insert(submittedvariables);
}

function insert(submitted) {
  DOMSelectors.container.insertAdjacentHTML("afterend",
    `<div class="card"> 
    <div class="card text"> 
    <h2>${submitted.song}</h2> <h3>${submitted.artist}</h3> </div> <img src="${submitted.album}" alt="}"/> 
    <button type="button" class="deletebtn">delete!</button>
    </div>`
  );
  clear(DOMSelectors)
  deletebtn()
}

function clear(DOMSelectors) {
  DOMSelectors.song.value = DOMSelectors.artist.value = DOMSelectors.album.value = "";
}

function remove() {
  deletbtn.addEventListener('click', function (event) {
    event.target.parentElement.remove()
  })
}

