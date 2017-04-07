$(document).ready(function(){
	$('.lang-switcher span').click(function(){
		$('.lang-switcher span').toggleClass('active')
		// $(this).show()
	})

})

$(window).on('load resize',function(){
	var resizeProduct = function() {
		
		// var windowWidth = $(window).width();

		// var productContainerTop =  $('#img-inner-top').find('img').height();
		// var productBgMobile = '../' + $('#img-inner-top img').attr('src');
		// if (windowWidth > 767) {
		// 	$('#category-box').css({
		// 		'height':productContainerTop,
		// 		'background-image':'none'
		// 	});
		// } else {
		// 	$('#category-box').css({
		// 		'height':'100%',
		// 		'background-image':'url('+productBgMobile+')'
		// 	})
		// }

		// var productDesc = $('#product-desc');
		// var productProp = $('#product-prop').height();
		// var imgProductCenter1 = $('#img-product-center1');
		// var imgProductCenter1Src = '../' + $('#img-product-center1 img').attr('src');
		// var imgProductRight1 = $('#img-product-right1').height();
		// var deliveryInfo = $('#delivery-info');
		
		// if (windowWidth > 767 && windowWidth < 1150) {
		// 	var imgProductCenter1Height = (imgProductRight1 + deliveryInfo) - productProp;
		// 	imgProductCenter1.css({
		// 		'height':imgProductCenter1Height,
		// 		'background-image': 'url('+imgProductCenter1Src+')'
		// 	})

		// 	var productDescHeight = imgProductRight1 + deliveryInfo.height() + 10;
		// 	productDesc.css({
		// 		'height': productDescHeight
		// 	})

		// } else {
		// 	imgProductCenter1.css({
		// 		'height':'100%',
		// 		'background-image':'none'
		// 	})
		// 	productDesc.css({
		// 		'height':'100%'
		// 	})
		// 	var deliveryInfoHeight = productDesc.height() - imgProductRight1;
		// 	deliveryInfo.css({
		// 		'height':deliveryInfoHeight
		// 	})
		// }
	}();
})