// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");




// button variable
let add = document.querySelector(".add");
let clear = document.querySelector(".clear");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let CandyLand = 
{
  image: "https://i1.sndcdn.com/artworks-000106137072-hbujw9-t500x500.jpg",
  title: "Candyland",
  Artist: "Tobu(NCS)",
  URL: "https://youtu.be/IhchfhxvPKI"
  
}

let Mii = 
  {
    image: "https://static.tvtropes.org/pmwiki/pub/images/miis.png",
    title: "Mii Channel EarHurt",
    Artist: "TheVividYoshi (original theme by Nintendo)",
    URL:  "https://youtu.be/E3-64_uSVjo"
  }

let Goofy =
{
  image: "https://atlas-content1-cdn.pixelsquid.com/assets_v2/244/2448687558553507371/jpeg-600/G03.jpg",
  title: "Goofy Ahh Song",
  Artist: "S56N",
  URL:  "https://youtu.be/M0pQkacbrko"
}

let Duck = 
{
  image: "https://i.ytimg.com/vi/D27DwQlAEp0/maxresdefault.jpg",
  title: "Fluffing A Duck",
  Artist: "Kevin McLeod",
  URL: "https://youtu.be/D27DwQlAEp0"
}

let Funky = 
{
  image: "https://i.ytimg.com/vi/KYxsNJYgrgI/mqdefault.jpg",
  title: "Funkytown(Low Quailty)",
  Artist:  "Sca11ycap (original song by: Lipps. Inc)",
  URL: "https://youtu.be/KYxsNJYgrg"
}


// let imageurl = [CandyLand.image,Mii.image,Goofy.image,Duck.image,Funky.image,newSong.image];

// let songTitle = [CandyLand.title,Mii.title,Goofy.title,Duck.title,Funky.title,]
// let songArtist = [CandyLand.Artist,Mii.Artist,Goofy.Artist,Duck.Artist,Funky.Artist]
// let songURL = [CandyLand.URL,Mii.URL,Goofy.URL,Duck.URL,Funky.URL]



function addSongInfo(imageLink,song,songPerson,songtoLink) {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


  // task 10: use `.push()` to add each input value to the correct array.


  let newSong = 
  {
    image: imageLink,
    title: song,
    Artist: songPerson,
    URL: songtoLink
  
  }
 return newSong;
}
let newSong = addSongInfo(image.value,songName.value,artist.value,songLink.value);
everything.push(newSong);

let everything = [CandyLand,Mii,Goofy,Duck,Funky,];







/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
    for (let i = 0; i < everything.length; i++) 
    {
    displayImage.insertAdjacentHTML('beforeend', `<img    
  src="${everything[i].image}"</img>`);
      
  displaySong.insertAdjacentHTML('beforeend', `<p>${everything[i].title}</p>`);

  displayArtist.insertAdjacentHTML('beforeend', `<p>${everything[i]. Artist}</p>`);
      
  displayLink.insertAdjacentHTML('beforeend', `<a>${everything[i].URL}></a>`);
  }

  
  // for (let i = 0; i < imageurl.length; i++) {
  //   displayImage.insertAdjacentHTML('beforeend', `<img    
  // src="${imageurl[i]}"></img>`);
  // }

  // for (let i = 0; i < songTitle.length; i++) {
  //   displaySong.insertAdjacentHTML('beforeend', `<p>${songTitle[i]}></p>`)
  // }

  // for (let i = 0; i < songArtist.length; i++) {
  //   displayArtist.insertAdjacentHTML('beforeend', `<p>${songArtist[i]}></p>`)
  // }

  // for (let i = 0; i < songURL.length; i++) {
  //   displayLink.insertAdjacentHTML('beforeend', `<a>${songURL[i]}></a>`)
  // }


}




// click event to add and display songs
add.onclick = function() {
  addSongInfo(image.value,songName.value,artist.value,songLink.value));
  displaySongInfo();
};

clear.onclick = function() {
  emptyDisplay();
}
// function call to display stored songs
displaySongInfo();
