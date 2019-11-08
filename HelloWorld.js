	 // var show = [];

	function displayMovies() {
   
   for (var i = 0; i < movies.length; i++){
      
			      var storeMovies = $('<div class="Home"></div>');
			      storeMovies.append('<img src="./'+movies[i].img+'">')

			       $('#allMovies').append(storeMovies);
			       $('#'+movies[i].genre).append(storeMovies)
			         }  

          } 
      
     		displayMovies() 
    
    $('.classic').on('click', function(){
       var classicMovies = $('#Classic');
       classicMovies.detach();
       $('main').prepend(classicMovies);
       $('.BigBrother').hide()

       

    });


    $('.home').on('click', function(){
       $('.BigBrother').show()
    })



     $('.scifi').on('click', function(){
       
           moveToTop($('#Sci-fi'))
       

    });  

      $('.drama').on('click', function(){
       
           moveToTop($('#Drama'))
       

    });  

      $('.classic').on('click', function(){
      	   moveToTop($('#Classic'))
      })



      function moveToTop(div){
        
        div.detach()
        $('main').prepend(div);
        $('.BigBrother').hide();
	 }





