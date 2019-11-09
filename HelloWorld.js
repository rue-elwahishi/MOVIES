

	function displayMovies() {
   
   for (var i = 0; i < movies.length; i++){
      
			      var storeMovies = $('<div class="Home"> </div>');
			      storeMovies.append('<img src="./'+movies[i].img+'">')
			      storeMovies.append('<div class="text-wrapper"> <h3 id="description"><br>+</h3> </div>')

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

 

 var array = [
 	$('<img id="1" src="images/1.jpg">'),
 	$(' <img id="2" src="images/2.jpg">'),
 	$('<img id="3" src="images/3.jpg">'),   
  $('<img id="4" src="images/4.jpg">'),   
  $('<img id="5" src="images/5.jpg">'),  
  $('<img id="6"src="images/6.jpg">'),
  $('<img id="7" src="images/7.jpg">'),  
  $('<img id="8" src="images/8.jpg">'),  
  $('<img  id="9" src="images/9.jpg">'),  
  $('<img  id="10" src="images/10.jpg">'),  
  $('<img id="11" src="images/11.jpg">'),
 ];

  var i = 0;
 function loopTheLoop(){
 	$('.BigBrother').html('')
  var counter = 0;
  while (counter < 8){
  	$('.BigBrother').append(array[i++])
     if (i > array.length - 1){
     	i = 0;
     }
  	counter++

  }
 }  
setInterval(loopTheLoop, 2000)
 



     	
 



