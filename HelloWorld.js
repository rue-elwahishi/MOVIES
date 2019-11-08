	var show = [];
	
	function displayMovies() {
    var show = [];
   for (var i = 0; i < movies.length; i++){
      
			      var storeMovies = $('<div class="poster"></div>');
			         storeMovies.append('<img src="./'+movies[i].img+'">')

			       $('#allMovies').append(storeMovies);
			       $('#'+movies[i].genre).append(storeMovies)

			   
      for (var key in movies){
      	show.push(movies[i].genre)
      }
   
   }
     
     }   
  displayMovies(); 


