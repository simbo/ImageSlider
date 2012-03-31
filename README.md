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
$('#myImageSlider').imageSlider({
	animation: ['top right','top left','bottom left','bottom right'],
	animationDuration: 800,
	displayDuration: 6000,
	appearance: 'out'
});
```

## Options

* `displayDuration`  
	A number of milliseconds how long an image will be displayed.  
	default value: `5000`
* `animationDuration`  
	A number of milliseconds how long an animation will run.  
	default value: `1200`
* `animation`  
	A string or an array of strings defining the animation or the list of animations.  
	possible values: `fade`, `top`, `bottom`, `left`, `right`, `top left`, `top right`, `bottom left`, `bottom right`, `[...]`  
	default value: `fade`
* `appearance`  
	A string defining whether the next image should slide in or the current image should slide out.  
	possible values: `in`, `out`  
	default value: `in`
* `easing`  
	A string defining the easing for the animation.  
	default: `swing`
