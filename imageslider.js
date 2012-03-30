$.fn.imageSlider = function( _options ) {
	var options = $.extend({
			displayDuration: 4000,
			animationDuration: 600,
			easing: 'swing',
			animation: 'fade'
		}, _options==undefined ? {} : _options),
		container = $(this),
		width = container.width(),
		height = container.height(),
		nav = $('<ul/>'),
		timer = null,
		slides = null,
		current = null,
		animations = null,
		currentAnimation = 0;
	setTimer = function() {
		if( timer )
			window.clearTimeout(timer);
		timer = window.setTimeout(function(){
			var next = nav.find('.current').closest('li').next();
			if( next.length==0 )
				next = nav.find('li:first');
			next.find('a').trigger('click');
		},options.displayDuration);
	}
	if( $.isArray(options.animation) ) {
		animations = options.animation;
		options.animation = animations[currentAnimation];
	}
	container.find('a').each(function(i){
		var img = $(this).find('img').detach();
		$(this).text( img.attr('title') ).wrap('<div/>').after(img);
		nav.append(
			$('<li/>').append(
				$('<a href="#"></a>').click(function(ev){
					ev.preventDefault();
					if( slides.filter(':animated').length>=1 || slides.filter(':eq('+i+')').is(':visible') )
						return;
					var aniOptions = {
						easing: options.easing,
						duration: options.animationDuration,
						complete: function() {
							slides.not(':eq('+i+')').hide()
							setTimer();
						}
					};
					nav.find('.current').removeClass('current');
					$(this).addClass('current');
					current = slides.css('z-index',1).filter(':eq('+i+')').css('z-index',2);
					switch( options.animation ) {
						case 'top right':
						case 'right top':
							current.css({top:-height,left:width}).show().animate({top:0,left:0},aniOptions);
							break;
						case 'top left':
						case 'left top':
							current.css({top:-height,left:-width}).show().animate({top:0,left:0},aniOptions);
							break;
						case 'bottom left':
						case 'left bottom':
							current.css({top:height,left:-width}).show().animate({top:0,left:0},aniOptions);
							break;
						case 'bottom right':
						case 'right bottom':
							current.css({top:height,left:width}).show().animate({top:0,left:0},aniOptions);
							break;
						case 'top':
							current.css('top',-height).show().animate({top:0},aniOptions);
							break;
						case 'bottom':
							current.css('top',height).show().animate({top:0},aniOptions);
							break;
						case 'left':
							current.css('left',-width).show().animate({left:0},aniOptions);
							break;
						case 'right':
							current.css('left',width).show().animate({left:0},aniOptions);
							break;
						case 'fade':
						default:
							current.css('opacity',0).show().animate({opacity:1},aniOptions);
							break;
					}
					if( animations ) {
						currentAnimation = currentAnimation<(animations.length-1) ? currentAnimation+1 : 0;
						options.animation = animations[ currentAnimation ];
					}
				}).addClass( i==0 ? 'current' : '' )
			)
		);
	});
	slides = $(this).find('div');
	slides.not(':first').hide();
	$(this).append(nav);
	setTimer();
	return $(this);
}