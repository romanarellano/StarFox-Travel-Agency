

$(function(){


  var main_nav_element = $(".main_nav");

  

  
  $("#nav_interstellar_travel").click(function(event){
      


        var new_nav_item= create_nav_link("Foo");
       

        

        

        main_nav_element.append(new_nav_item);

  });

        $("#nav_services").click(function(){

             

            

               main_nav_element.append(create_nav_link("Bar"));


        });


        $("#nav_about").click(function(){
 
             
             // var new_nav_item = create_nav_link("Baz");
               main_nav_element.append(create_nav_link("Baz"));

         
        });


        function create_nav_link(link_text){

          var new_nav_item = $("<li></li>");

          new_nav_item.addClass("new_nav_item");
          var new_nav_link = $("<a>",{

            href:"#",

            html: link_text
          });

          new_nav_item.append(new_nav_link);
          return new_nav_item;
        }

        function remove_all_new_nav_items(){

            var remove_all_new_nav_item = $(".new_nav_item");

            remove_all_new_nav_item.remove();
          

        }



        $("#nav_home").click(remove_all_new_nav_items());

     
        $("h1.desktop_logo span").click(function(event){

            event.preventDefault();
            $(this).html("<span>Starfox</span>Slave Trade Company");

        });

          
        $("a.hero_button").click(function(event){


          var random_width = Math.floor(Math.random()*200) +200;
          var random_height = Math.floor(Math.random()*200)+200;


          $("div.pic").css({"background-image":"url(http://placekitten.com/g/" + random_width + "/" + random_height + ")"
        });

          
        });

  

$(".large_deal").click(function(){

                var random_r = Math.floor(Math.random()* 256);
               var random_g = Math.floor(Math.random()* 256);
                var random_b = Math.floor(Math.random()* 256);

               

                 var randomColor = "rgb("+random_r+ "," + random_g + "," + random_b + ")";
              

                 $('body').css({'background-color' : randomColor});

          });

  }); 