var wScroll=0;


$( document ).ready(function() {
	$('.main-home').scroll(function() {
		wScroll = $(this).scrollTop();
		$('.info-text').css({
	    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	  });

    if($('#info').offset().top<= 70){
			$('.nav-item').removeClass('active');
			$('#liInfo').addClass('active');
		}
		if($('#portfolio').offset().top<= 75){
			$('.nav-item').removeClass('active');
			$('#liPortfolio').addClass('active');
		}
		if($('#publication').offset().top<= 75){
			$('.nav-item').removeClass('active');
			$('#liPublication').addClass('active');
		}
		if($('#projects').offset().top<= 75){
			$('.nav-item').removeClass('active');
			$('#liProjects').addClass('active');
		}
		if(($(window).height() - $('#contact').offset().top -300)>0){
			$('.nav-item').removeClass('active');
			$('#liContact').addClass('active');
		}

	});

	$('body,html').css({'height':$(window).height()});
	$('.main-header').css({'height':$(window).height()});

$('#menu').click(function(event) {
	$('.navigation-bar1').css({'display':'inline-block'});
	$('#back').css({'display':'inline-block'});
	$('#menu').css({'display':'none'});
});
$('#back').click(function(event) {
	$('.navigation-bar1').css({'display':'none'});
	$('#menu').css({'display':'inline-block'});
	$('#back').css({'display':'none'});
});

$('.navigation-bar1 a').click(function() {
	$('.navigation-bar1').css({'display':'none'});
	$('#menu').css({'display':'inline-block'});
	$('#back').css({'display':'none'});
});

	$('.navigation-bar li').click(function(event) {


			var id = $(this).attr("value");
			if(! $(this).hasClass('active')){

				var offset = 70;
				var target = $(id).offset().top - offset + wScroll;
				$('.main-home').animate({
						scrollTop: target
				}, 1000);
			}
			$('.nav-item').removeClass('active');
			$(this).addClass('active');

	});
});
$(window ).resize(function() {
	$('body,html').css({'height':$(window).height()});
	$('.main-header').css({'height':$(window).height()});
	if($(window).width()>=767){
		$('.navigation-bar').css({'display':'inline-block'});
		$('.navigation-bar1').css({'display':'none'});
		$('#back').css({'display':'none'});
		$('#menu').css({'display':'none'});
	}else{
		$('.navigation-bar').css({'display':'none'});
		if($('.navigation-bar1').css('display')== 'none'){
			$('#menu').css({'display':'inline-block'});
			$('#back').css({'display':'none'});
		}else{
			$('#menu').css({'display':'none'});
			$('#back').css({'display':'inline-block'});
		}
		
	}
});
