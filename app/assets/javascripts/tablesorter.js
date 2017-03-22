
$(document).ready(function()
  {
    $('th').on('click', function(){
      //saves which column the user clicks
      var column = $(this).html();
      if (column == "Name") {
        column = 0;
      }
      if (column == "Set") {
        column = 1;
      }
      if (column == "Card type") {
        column = 2;
      }
      if (column == "Sub type") {
        column = 3;
      }
      if (column == "Cost") {
        column = 4;
      }
      var direction = "asc";
      var sortOccured = false;
      //targets the table th/tr/thead/table. [0] to change it from jQuery object to JavascriptObject.
      var table = $(this).parent().parent().parent()[0];
      var sorting = true;
      while (sorting){
        sorting = false;
        //puts every tr in an array.
        rows = table.getElementsByTagName('tr');
        //starts at tr[1] (tr[0] is the header, dont want to sort that)
        for (var i = 1; i < (rows.length - 1); i++){
          //[column] to determine which column to compare.
          var x = rows[i].getElementsByTagName('td')[column];
          var y = rows[i+1].getElementsByTagName('td')[column];
          if (direction == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
              sortOccured = true;
              sorting = true;
            }
          } else if (direction == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
              sorting = true;
            }
          }
        }
        //if there was no sorting done and it was on asc. switch to desc and run function again
        if (!sortOccured && direction == "asc") {
          direction = "desc";
          sorting = true;
        }
      }
    });
  }
);
