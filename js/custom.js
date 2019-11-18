let search =document.getElementById('searchText');
search.addEventListener('keypress',e =>{
    let searchText = e.target.value;
    getMovies(searchText);//calling getmovis function as callback function
});

function getMovies(searchText){
    console.log(searchText);
}

function getMovies(searchText){
    let api =` http://www.omdbapi.com/?s=${searchText}&apikey=a5e84c86`;

    window.fetch(api).then(data =>{
       // console.log(data);//next step id converting into json object

       let jsonData =data.json();
       //console.log(jsonData);

       jsonData.then(movie =>{
           let movies=movie.Search;
           let output ='';
           for(let imdbMovie of movies){
                output +=`
                <h1>${imdbMovie.Title}</h1>
                <p>${imdbMovie.Year}</p>
                <p>${imdbMovie.imdbID}</p>
                <p>${imdbMovie.Type}</p>
                <img src="${imdbMovie.Poster}">`;
                document.getElementById('template').innerHTML = output;
           }
       })


    }).catch(err =>console.log(err));
}