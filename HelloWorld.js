	 // var show = [];

	function displayMovies(array) {
    // var show = [];
   for (var i = 0; i < movies.length; i++){
      
			      var storeMovies = $('<div class="Home"></div>');
			      storeMovies.append('<img src="./'+movies[i].img+'">')

			       $('#allMovies').append(storeMovies);
			       $('#'+movies[i].genre).append(storeMovies)
			         }  

          } 
      
     		displayMovies() 
    
    $('.classic').on('click', function(){
        movies.filter(function(key){
        return movies[key] === 'Classic'
        })
    }) 




