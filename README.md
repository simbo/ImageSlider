# ImageSlider

*ImageSlider* is a jQuery plugin that creates an animated box of images with matching text links.

[Demo](http://simbo.de/files/imageslider "Image Slider Demo")

## Basics

The HTML markup should look like this:
 
```
<div id="myImageSlider">
	<a href="foo"><img src="foo.jpg" title="Foo" /></a>
	<a href="bar"><img src="bar.jpg" title="Bar" /></a>
	...
</div>
```

To create an ImageSlider with default options just put this in your `$(document).ready()` function:

```
$('#myImageSlider').imageSlider();
```

Or with some individual options:

```
$('.image-slider').imageSlider({
	animation: ['top right','top left','bottom left','bottom right'],
	animationDuration: 1200,
	displayDuration: 5000
});
```

## Options

* `displayDuration`  
	A number of milliseconds how long an image will be displayed.  
	default: `5000`
* `animationDuration`  
	A number of milliseconds how long an animation will run.  
	default: `1200`
* `animation`  
	A string or an array of strings defining the animation or list of animations.  
	Possible values: `fade`, `top`, `bottom`, `left`, `right`, `top left`, `top right`, `bottom left`, `bottom right`  
	default: `fade`
* `easing`  
	A string defining the easing for the animation.