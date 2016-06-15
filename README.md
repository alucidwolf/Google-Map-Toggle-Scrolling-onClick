# Google-Map-Toggle-Scrolling-onClick
Want to remove the autoscrolling of the map when using mousewheel? This adds a click event to the map so that when clicked, you can scroll with the mousewheel, but when you move the mouse out of the iframe, the page scrolls until the iframe is clicked again

##HTML
```
<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Google Map Toggle Scrolling onClick</title>
<!-- using bootstrap for 'row' and col-xs-*' styles -->

<style type="text/css">
.googleMapWrapper iframe{
    pointer-events: none;
}
</style>

</head>

<body>

<div class="row">
    <div class="col-xs-12 googleMapWrapper">
        <iframe width="100%" height="600" frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28598.847254232776!2d-80.09018384802536!3d26.363522169356937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0afd01e0d2d4e863!2sBoca+Raton+Hotel!5e0!3m2!1sen!2sus!4v1466001841946"></iframe>
    </div>
</div>

</body>
</html>
```

##Javascript
```
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
```
