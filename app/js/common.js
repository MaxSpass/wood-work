$(document).ready(function(){
	$('.lang-switcher span').click(function(){
		$('.lang-switcher span').toggleClass('active')
		// $(this).show()
	})

})

$(window).on('load resize',function(){
	var resizeProduct = function() {
		var productContainer =  $('.img-inner-top').find('img').height();
		var productBgMobile = '../' + $('.img-inner-top img').attr('src');
		if ($(window).width() > 767) {
			$('.category-box').css({
				'height':productContainer,
				'background-image':'none'
			});
		} else {
			$('.category-box').css({
				'height':'100%',
				'background-image':'url('+productBgMobile+')'
			})
		}
	}();
})