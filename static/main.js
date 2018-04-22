var instrument_names = ["ride_1", "ride_2", "ride_3", "ride_4", "rim_1", "rim_2", "snare_1",
                        "snare_2", "snare_3", "snare_4", "snare_5", "snare_6",
                        "clap_1", "tom_1", "tom_2", "tom_3", "tom_4", "tom_5", "tom_6",
                        "hihat_1", "hihat_2", "hihat_3", "crash_1", "crash_2",
                        "crash_3", "crash_4", "crash_5", "shaker_1", "cowbell_1"];

  var instrument_spaces = new Array(12);

  for(var i = 0; i < 12; i++) {
    instrument_spaces[i] = {
      "instrument": "",
      "box": null
    };
  }

  function subname(name) {
    var newname = name;
    for(var i = 0; i < name.length; i++) {
      if(name[i] == "_") {
        newname = name.substring(0, i-1);
      }
    }
    return newname;
  }

  function labelname(name) {
    var newname = name;
    for(var i = 0; i < name.length; i++) {
      if(name[i] == "_") {
        newname = name.substring(0, i-1)+" "+name[name.length-1];
      }
    }
    return newname;
  }

  //console.log(labelname(instrument_names[1]));

  $( function() {
    for(var i = 0; i < instrument_names.length; i++) {
      instrument_image = $("<img>").addClass("draggable")
                                   .attr("id", instrument_names[i])
                                   .attr("src", "/static/squareex.jpg");

      instrument_label = $("<p>").text(labelname(instrument_names[i]));

      instrument_div = $("<div>").addClass("col-xs-2")
                                 .addClass("col-md-1")
                                 .append(instrument_image)
                                 .append(instrument_label)
                                 .appendTo(".desktop");
    }

    $( ".draggable" ).draggable({
      revert: "invalid",
      stack: ".draggable",
      helper: 'clone',
      snap: ".droppable",
      snapMode: "inner"
    });

    $( ".droppable" ).droppable({
      drop: function(event, ui) {
        $(this).append($(ui.helper).clone().css('width', '60px').css('top', '-2px').css('left', '-2px'));

        instrument_spaces[Object.values($(this))[0].id-1].instrument = Object.values(($(ui.helper)))[2].id;
        instrument_spaces[Object.values($(this))[0].id-1].box = Object.values($(this))[0].id;

        $.post("receiver", instrument_spaces, function(){

	       });
         event.preventDefault();

        console.log(instrument_spaces);
      }
    });
  } );