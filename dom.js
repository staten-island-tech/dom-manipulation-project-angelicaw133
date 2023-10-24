const DOMSelectors = {
    form: document.querySelector("#form"),
    song: document.querySelector(".song_name"),
    artist: document.querySelector(".artist_name"),
    album: document.querySelector(".album_link"),
    songoutput: document.querySelector("#songoutput"),
    artistoutput: document.querySelector("#artistoutput"),
    albumoutput: document.querySelector("#albumoutput"),
};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();

    const song_name = DOMSelectors.song.value
    DOMSelectors.songoutput.innerText = song_name
    const artist_name = DOMSelectors.artist.value
    DOMSelectors.artistoutput.innerText = artist_name
    const album = DOMSelectors.album.value
    DOMSelectors.songoutput.innerHTML = '<img src="${album}"/>'
});