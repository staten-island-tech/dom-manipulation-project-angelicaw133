const DOMSelectors = {
    form: document.querySelector("#form"),
    song: document.querySelector(".song_name"),
    artist: document.querySelector(".artist_name"),
    album: document.querySelector(".album_link"),
    songoutput: document.querySelector("#songoutput"),
    artistoutput: document.querySelector("#artistoutput"),
    albumoutput: document.querySelector("#albumoutput"),
    container: document.querySelector(".container"),
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
    // DOMSelectors.container.insertAdjacentHTML(
    //     "afterbegin", '<div class="card"><img src='' alt=''><div class="card text"><h2>${}</h2><h3></h3></div></div>',
    //     create()
    // )
    console.log(create.);
});

// function remove(){
//     let btns = document.querySelectorAll("button"
//     );
//     btns.forEach((button)= button.addEventListener('click', function(event){
//         console.log(event.target.parentElement);
//     }));
// }
// remove()