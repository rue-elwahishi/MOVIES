   //this function is going to loop through the array and attach every image a specific div and text and a div for the text


	function displayMovies() {
   
   for (var i = 0; i < movies.length; i++){
      
			      var storeMovies = $('<div class="Home"> </div>');
			      storeMovies.append('<img src="./'+movies[i].img+'">')
			      storeMovies.append('<div class="text-wrapper"> <span id="description"><br>+</span> </div>')
   //putting each collections of movies img according to its own genre			    
			       $('#'+movies[i].genre).append(storeMovies)
   //here I'm going to click on the div with the a particular image, and append 'this' div to Watch List with the id #List.
              storeMovies.on('click', function(){
               $('#List').append($(this))
              })
			         }  

          } 
      
     		   displayMovies() 
    
    

    //this function is to use when you click on a specific button, it's going to detach the div with the specific genre from it's place 
    //and show it at the beginning of the main and hide big brother div witch has the 'Latest' images.
     function moveToTop(div){
        
        div.detach()
        $('main').prepend(div);
        $('.BigBrother').hide();
	 }




    $('.classic').on('click', function(){
          moveToTop($('#Classic'))

    });
       


     $('.scifi').on('click', function(){
       
           moveToTop($('#Sci-fi'))
    });  
       


      $('.drama').on('click', function(){
       
           moveToTop($('#Drama'))
    });  
       


      $('.classic').on('click', function(){
      	   moveToTop($('#Classic'))
      });

      $('.watchList').on('click', function(){
      	       moveToTop($('#List'))
      });


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

// this function is going to loop through the array of images and count images until 5 which is the first set to show, and then append it to big
//brother div, and when that array finishes looping it will go back to index zero and start again.
		  var i = 0;
		 function SlideShow(){
		 	$('.BigBrother').html('')
		  var counter = 0;
		  while (counter < 5){
		  	$('.BigBrother').append(array[i++])
		     if (i > array.length - 1){
		     	i = 0;
		     }
		  	counter++

		  }
		 }  
     

		  $('.home').on('click', function(){
		       $('.BigBrother').show()
		    })


		  setInterval(SlideShow, 2000)
 



  




     	
 



