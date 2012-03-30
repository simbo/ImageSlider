# ImageSlider

*ImageSlider* is a jQuery plugin that creates an animated box of images with matching text links.

[Demo](http://simbo.de/files/imageslider "Image Slider Demo")

The HTML markup should look like this:
 
```
<div id="myImageSlider">
	<a href="foo"><img src="foo.jpg" title="Foo" /></a>
	<a href="bar"><img src="bar.jpg" title="Bar" /></a> 	...
</div>
```

To create an ImageSlider with default options just put this in your `$(document).ready()` function:

```
$('#myImageSlider').imageSlider();
```

