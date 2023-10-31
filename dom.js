const DOMSelectors = {
    form: document.querySelector("#form"),
    song: document.querySelector(".song_name"),
    artist: document.querySelector(".artist_name"),
    album: document.querySelector(".album_link"),
    container: document.querySelector("#container"),
 
};


// function create(){
//      return `
//         <p>${DOMSelectors.song.value}</p>
//         <p>${DOMSelectors.artist.value}</p>    
//         <p>${DOMSelectors.album.value}</p>   
//         `
//     };
  function create(song, artist, album){
    DOMSelectors.container.insertAdjacentHTML("afterbegin",
    '${song}'
   );
}
function submit_form(){
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const song = DOMSelectors.song.value
    const artist = DOMSelectors.artist.value 
    const album = DOMSelectors.album.value


});  
}
create();
submit_form();
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    function clear() {
        DOMSelectors.song.value = "";
        DOMSelectors.artist.value = "";
        DOMSelectors.album.value = "";
    }
    clear()
})


function remove(){
    let btns = document.querySelectorAll("button"
    );
    btns.forEach((button)= button.addEventListener('click', function(event){
        console.log(event.target.parentElement);
    }));
}
remove()