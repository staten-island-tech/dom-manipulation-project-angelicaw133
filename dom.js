const DOMSelectors = {
    form: document.querySelector("#form"),
    song: document.querySelector(".song_name"),
    artist: document.querySelector(".artist_name"),
    album: document.querySelector(".album_link"),
    songoutput: document.querySelector("#songoutput"),
    artistoutput: document.querySelector("#artistoutput"),
    albumoutput: document.querySelector("#albumoutput"),
};

// function create(){
//      return `
//         <p>${DOMSelectors.song.value}</p>
//         <p>${DOMSelectors.artist.value}</p>    
//         <p>${DOMSelectors.album.value}</p>   
//         `
//     };
function create(){
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const song = DOMSelectors.song.value 
    const artist = DOMSelectors.artist.value
    const album = DOMSelectors.album.value
    
    document
    .querySelector(".container")
    .insertAdjacentHTML(
        "afterbegin",
         '<div class="card"> <div class="card text"> <h2>${}</h2> <h3></h3> </div> <img src="" alt="" /> </div> '
    );
});
}
create()
// function remove(){
//     let btns = document.querySelectorAll("button"
//     );
//     btns.forEach((button)= button.addEventListener('click', function(event){
//         console.log(event.target.parentElement);
//     }));
// }
// remove()