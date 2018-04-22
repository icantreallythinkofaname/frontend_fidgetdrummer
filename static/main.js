$( function() {
  $( ".draggable" ).draggable({
    revert: "invalid",
    stack: ".draggable",
    helper: 'clone'
  });
  $( ".droppable" ).droppable({
    accept:".draggable",
    drop: function( event, ui ) {
      var droppable = $(this);
      var draggable = ui.draggable;
      // Move draggable into droppable
      var drag = $('.droppable').has(ui.draggable).length ? draggable : draggable.clone().draggable({
        revert: "invalid",
        stack: ".draggable",
        helper: 'clone'
      });
      drag.appendTo(droppable);
      draggable.css({
        float: 'left'
      });
            }
  });
} );