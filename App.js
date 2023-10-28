const moviedetails = document.querySelector("#movie");
let pageNumber;

async function showMovies(pageNumber =1){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGNkZWM4NGYyZDc1ODA2NWFhYzNjZTYxY2E1ZWViNiIsInN1YiI6IjY0ZDUwNjEyZDEwMGI2MDExYzgwMjcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAzifNPFYjWGUYG7cfkemM6yyoe5gK_bI-H_dhWhVvc'
    }
  };
  
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`, options)
  const json = await response.json();
  const movieList = json.results
  console.log(json);

  // // const h2 = document.createElement("h2");
  // // const p= document.createElement("p");
  // // h2.textContent = 


  // // const response = await fetch("https://api.jikan.moe/v4/top/anime");
  // // const json = await response.json();
  // // // console.log(json.data);
  // // const animes = json.data;
  // // console.log(animes.title);

  for(let movie of movieList){
    const forName = document.createElement("h2");
    const date = document.createElement("p");
    forName.textContent = movie.title;
    date.textContent = movie.release_date;
    const section = document.createElement("section");
    section.appendChild(forName);
    section.appendChild(date);
    const footer = document.createElement("footer");
    const rating = document.createElement("p");
    rating. textContent = movie.vote_average;
    const heart = document.createElement("i");
    heart.classList.add("fa-regular","fa-heart");
    footer.appendChild(rating);
    footer.appendChild(heart);
    footer.classList.add("footer");
    const image = document.createElement("img");
    image.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    const article = document.createElement("article");
    article.classList.add("movie-card");
    article.appendChild(image);
    article.appendChild(section);
    article.appendChild(footer);
    moviedetails.appendChild(article);
  }




//<------------------------------------- Define the URL of the Jikan API

//<-------------------------- Fetch data from the API for Anime page
// const apiUrl = 'https://api.jikan.moe/v4/top/anime';
// const response = await fetch(apiUrl)

//   const json = await response.json();
  


//   for(let i = 0; i<json.data.length; i++){
//     const forName = document.createElement("h2");
//       const date = document.createElement("p");
//       forName.textContent = json.data[i].titles[0].title;
//       date.textContent = json.data[i].year;
//       const section = document.createElement("section");
//       section.appendChild(forName);
//       section.appendChild(date);
//       const footer = document.createElement("footer");
//       const rating = document.createElement("p");
//       rating. textContent = json.data[i].score;
//       const heart = document.createElement("i");
//       heart.classList.add("fa-regular","fa-heart");
//       footer.appendChild(rating);
//       footer.appendChild(heart);
//       footer.classList.add("footer");
//       const image = document.createElement("img");
//       image.src = json.data[i].images.jpg.image_url;
//       const article = document.createElement("article");
//       article.classList.add("movie-card");
//       article.appendChild(image);
//       article.appendChild(section);
//       article.appendChild(footer);
//       moviedetails.appendChild(article);
//   }


}

function init(){
  pageNumber = 1;
  showMovies(pageNumber);

}
init();