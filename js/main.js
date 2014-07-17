$(document).ready(function(){

	function handleDragOver(evt) {
		evt.stopPropagation();
		evt.preventDefault();
		evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
	}

	function handleFileSelect(evt) {
    	evt.stopPropagation();
    	evt.preventDefault();

	    var files = evt.dataTransfer.files; // FileList object.

	    // files is a FileList of File objects. List some properties.
	    var output = [];
	    for (var i = 0, file; file = files[i]; i++) {

			var url = window.URL || window.webkitURL;
			var src = url.createObjectURL(file);
	    	output.push("<audio id='audio' controls autoplay=false src='" + src + "' controls autoplay loop>HTML5 audio not supported</audio>");
	    	console.log(file);
	    	$("#label").html("Listening to </br>" + file.name);
	    }

	    $("#output").html(output.join(""));
	    $("#controls").slideDown("slow");
	    $("#controlsLabel").slideDown("slow");


	    var audio = document.getElementById('audio');
		audio.pause();

		
	    
  	}

	// Setup the dnd listeners.
	var dropZone = document.getElementById('dropZone');
	dropZone.addEventListener('dragover', handleDragOver, false);
	dropZone.addEventListener('drop', handleFileSelect, false);
	
	//$("#audio").autoplay=false;

	var speed = function(x) {
		var audio = document.getElementById('audio');
		audio.playbackRate = x;
	}

	$("a").on("click", function(){
		var isActive = $(this).closest("li").hasClass("active");
		if (!isActive) {
			$(this).closest("ul").find("li.active").removeClass("active");
			var x = $(this).data("speed");
			speed(x);
			$(this).closest("li").addClass("active");
		}
	});

});
