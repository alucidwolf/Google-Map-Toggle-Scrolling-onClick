  $(document).ready(function () {
  var onMapMouseleaveHandler = function () {
	 	    var that = $(this);

	 	    that.on('click', onMapClickHandler);
	 	    that.off('mouseleave', onMapMouseleaveHandler);
	 	    that.find('iframe').css("pointer-events", "none");
	 	}
	 	var onMapClickHandler = function (event) {
	 	    var that = $(this);

	 	    that.off('click', onMapClickHandler);
	 	    that.find('iframe').css("pointer-events", "auto");
	 	    that.on('mouseleave', onMapMouseleaveHandler);
	 	}

	 	$('.googleMapWrapper').on('click', onMapClickHandler);

	 	});
