'use strict';

$(document).ready(function (){

  var total = 0;

   $('button').click(function (event){

     var pdt = $('input[name="product"]');
      var prize = $('input[name="prize"]');
       var tbody = $('tbody');
         var totalsuma = $('span');

    if(parseFloat(prize.val()))
    {
      var fila = $('<tr></tr>');
      var boton = $('<button><i class="fa fa-thumbs-o-down fa-2x" aria-hidden="true"></i></button>');


      boton.click(function(event){
        total -= parseFloat($(this).parent().prev().text());
        $(this).parent().parent().remove();

        if(tbody.children.length < 1)
        total = 0;
        totalsuma.text("$"+total.toFixed(2));



      });


      fila.html('<td>' + pdt.val() + '</td>' + '<td>' + parseFloat(prize.val()).toFixed(2) + '</td><td></td>');

       boton.appendTo(fila.children().last());

       fila.appendTo(tbody);

       total += parseFloat(prize.val());
       totalsuma.text('$'+total.toFixed(2));

       pdt.val('');
       pdt.focus();
      prize.val('');
          }else{
              alert('Ingresa un número válido');
              console.log('Ingresa un número válido');
          }




  });
});
