$(document).ready(function()
  {
    $("#cardList").tablesorter({
      //sets default sort to the first column, descending
      sortList: [[0,0]]
    });
    $('.btn').on('click', function(){
      $(this).closest('tr').remove();
      $.ajax({
        type: "GET",
        url: "/kingdom_cards/"+card_id+".json",
        dataType: 'json',
        success: function(data){
          var kingdom_card = data;
          $('#cardList').append('<tr><td>'+kingdom_card.name+'</td><td>'+kingdom_card.set+'</td><td>'+kingdom_card.card_type+'</td><td>'+kingdom_card.sub_type+'</td><td>'+kingdom_card.cost+'<td></tr>');
        }
      });
    })
  }
);
