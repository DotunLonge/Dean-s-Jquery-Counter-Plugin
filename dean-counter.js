/*
Author: Oludotun Longe
*/

$(function(){

    var data = [];
    var a = 0;//initialize the counter to start from zero
    var b = 0;


    function count(){

                if($(".decent").data('format') == 'percentage'){
                setTimeout(function(){
                     $('.decent' + "  h4").text(a+"%");
                      a++;
                  if(a <= $(".decent" ).data('number') ){
                     count();
                  }
                }, 15);
            }

                if($(".decent").data('format') == 'plain'){
                setTimeout(function(){
                         $('.decent' + "  h4").text(a);
                          a++;
                      if(a <= $(".decent").data('number') ){
                         count();
                      }
                    }, 15);
                }
            }


    function count2(){

                if($(".super-fast").data('format') == 'percentage'){
                setTimeout(function(){
                     $('.super-fast' + "  h4").text(b+"%");
                         b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++  ;
                  if(b <= $(".super-fast" ).data('number') ){
                     count2();

                  }
                }, 0.0000000001);
            }

                if($(".super-fast").data('format') == 'plain'){
                setTimeout(function(){
                         $('.super-fast' + "  h4").text(b);
                             b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++ + b++  ;
                      if(b <= $(".super-fast").data('number') ){
                         count2();

                      }
                    }, 1);

        }
        }

     count();
     count2();


});
