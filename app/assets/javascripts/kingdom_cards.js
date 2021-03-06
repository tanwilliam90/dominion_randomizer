function SelectNewCard(){
  var me = this;
  var cardList = getCardIds();
  $.ajax({
    type: "GET",
    url: "/get_card?"+cardQuery(cardList),
    dataType: 'json',
    success: function(data){
      var kingdom_card = data;
      var new_tr = document.createElement('tr');
      new_tr.setAttribute('data-card-id', kingdom_card.id);
      var td_name = document.createElement('td');
      td_name.innerHTML = kingdom_card.name;
      var td_set = document.createElement('td');
      td_set.innerHTML = kingdom_card.set;
      var td_card_type = document.createElement('td');
      td_card_type.innerHTML = kingdom_card.card_type;
      var td_sub_type = document.createElement('td');
      td_sub_type.innerHTML = kingdom_card.sub_type;
      var td_cost = document.createElement('td');
      td_cost.innerHTML = kingdom_card.cost;
      var td_button = document.createElement('td');
      var button = document.createElement('button');
      button.setAttribute('class', "btn")
      button.innerHTML = "Repick Card"
      td_button.appendChild(button);
      new_tr.appendChild(td_name);
      new_tr.appendChild(td_set);
      new_tr.appendChild(td_card_type);
      new_tr.appendChild(td_sub_type);
      new_tr.appendChild(td_cost);
      new_tr.appendChild(td_button);
      $(new_tr).on('click', 'button.btn', SelectNewCard);
      $(me).parent().parent().replaceWith(new_tr);
    }
  })
};

function getCardIds(){
  var cardRows = document.querySelectorAll('[data-card-id]');
  var cardIds = [];
  for (i = 0; i < cardRows.length; i++) {
    cardIds.push(cardRows[i].getAttribute('data-card-id'));
  }
  return cardIds;
}

function cardQuery(array){
  var queryString = ""
  for (var x = 0; x < array.length; x++){
    queryString = queryString+"&card"+x+"="+array[x];
  }
  return queryString;
}

$(document).ready(function()
  {
    $('tr').on('click', 'button.btn', SelectNewCard)
  }
);
