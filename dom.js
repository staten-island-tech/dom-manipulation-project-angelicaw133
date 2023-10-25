const DOMSelectors = {
    form: document.querySelector("#form"),
    song: document.querySelector(".song_name"),
    artist: document.querySelector(".artist_name"),
    album: document.querySelector(".album_link"),
    songoutput: document.querySelector("#songoutput"),
    artistoutput: document.querySelector("#artistoutput"),
    albumoutput: document.querySelector("#albumoutput"),
    div: document.querySelector('.output')
};

function create(){
     return `
        <p>${DOMSelectors.song.value}</p>
        <p>${DOMSelectors.artist.value}</p>    
        <p>${DOMSelectors.album.value}</p>   
        `
    };
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    DOMSelectors.div.insertAdjacentHTML(
        "afterbegin", create()
    )
});

