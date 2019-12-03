
let new_task = document.querySelector("#button1");

new_task.addEventListener("click", function(event){
	console.log("hello");
	console.log(count);
	console.log(count_box);

});									

$("#button1").click(function(){
	$("#add_content").show();
}); //show box (button1 = new task)
	
$(document).ready(function(){
  $(document).keypress(function(e){
	if(e.wich == 13 || e.keyCode == 13){
		alert('A tecla ENTER foi pressionada');
	}
  })
});	

/*
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
*/
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $("#add_content").hide();
    }
}); //close box 

function countId(id) {
   var counter = 0;
   $("label").each(function() {
     if(this.id==id) {
        counter+=1;
      } 
   });
}

var count = $('.box').length;
var count_box1 = $('#box_1').length;
var count_box2 = $('#box_2').length; //utilizar esse cálculo p as barras coloridas (numero de elementos na caixa/ qntdd total de elementos)
var count_box3 = $('#box_3').length;
var count_box4 = $('#box_4').length;


$(document).ready(function(){
  $(".p1").click(function(){
  	//$(".p1").appendTo(".p2");
    $(this).remove();
    //$('.p1').removeClass('p1').addClass('p2');
    $(".p2").after(this);
  });
  //$('.p1').removeClass('p1').addClass('p2');
}); //move os elementos da p1 p p2


$(document).ready(function(){
	//if(isEmpty(''))
  $(".p2").click(function(){
    $(this).remove();
    $(".p3").after(this);
    //$('.p1').removeClass('p1').addClass('p2');
  });
}); //move p2 p p3

$(document).ready(function(){
  $(".p3").click(function(){
    $(this).remove();
    $(".p4").after(this);
    //$('.p3').removeClass('p3').addClass('p4');
  });
}); // move p3 p p4