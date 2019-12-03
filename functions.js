
let new_task = document.querySelector("#button1");

new_task.addEventListener("click", function(event){
	console.log("hello");
	console.log(count);
	console.log(count_box1);


});									

$("#button1").click(function(){
	$("#add_content").show();
	 $("#add_content").keypress(function(e){
	 	if(e.which == 13 || e.keyCode == 13){
			alert('A tarefa foi adiciona');
	}
  });
}); //show box (button1 = new task)
	
$(document).ready(function(){

});	//(estatica)

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
}); //close box (dinamica)


function countId(id) {
   var counter = 0;
   $("label").each(function() {
     if(this.id==id) {
        counter+=1;
      } 
   });
}

var count = $('p').length;
var count_box1 = $('.p1').length;
var count_box2 = $('.p2').length; //utilizar esse cálculo p as barras coloridas (numero de elementos na caixa/ qntdd total de elementos)
var count_box3 = $('.p3').length;
var count_box4 = $('.p4').length;
function atualizar(){
	count = $('p').length;
	count_box1 = $('.p1').length;
	count_box2 = $('.p2').length; //utilizar esse cálculo p as barras coloridas (numero de elementos na caixa/ qntdd total de elementos)
	count_box3 = $('.p3').length;
	count_box4 = $('.p4').length;
	modificar_tamanho();
}

$(document).ready(function(){
  $(".p1").click(function(){
  	//$(".p1").appendTo(".p2");
   	 $(this).remove();
     $(this).removeClass('p1').addClass('p2');
   	 $("#box_2").append(this);
   	 	atualizar();
  });
  $(".p2").click(function(){
  	//$(".p1").appendTo(".p2");
    $(this).remove();
    //$('.p1').removeClass('p1').addClass('p2');
     $(this).removeClass('p2').addClass('p3');
   	 $("#box_3").append(this);
   	 	atualizar();
  });
  $(".p3").click(function(){
    $(this).remove();
     $(this).removeClass('p3').addClass('p4');
   	 $("#box_4").append(this);
   	 	atualizar();
    //$('.p3').removeClass('p3').addClass('p4');
  });
});

function modificar_tamanho(){
	$("#green").css("width",(count_box1/count*100)+"%");
	$("#red").css("width",(count_box2/count*100)+"%");
	$("#purple").css("width",(count_box3/count*100)+"%");
	$("#light_blue").css("width",(count_box4/count*100)+"%");
}
$(document).ready(modificar_tamanho); //barra colorida movimentação

