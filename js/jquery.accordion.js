(function($){
	$.fn.accordion = function() {
		var el = this;
		var ddHeight;
		ddHeight = new Array();
		
		el.addClass('enhance');

		el.find('dd').each(function(i){
			var dd = $(this);
			ddHeight[i] = dd.height();
			console.log(ddHeight[i]);
			dd.addClass('closed')
		});
		
		el.find('dt a').bind('touchstart', function(e) {
			e.preventDefault();
			
			var toExpand = $(this).parent().next('dd');
			var i = toExpand.index('dd');
			console.log(i);
			
			if (toExpand.attr('id') == 'active') {
				toExpand
					.removeAttr('id')
					.removeAttr('style')
					.addClass('closed');
			} else {
				var active = toExpand.parent().find('#active');

				if (active) {
					active
						.removeAttr('id')
						.removeAttr('style')
						.addClass('closed');
				}

				toExpand
					.attr('id', 'active')
					.css('height', ddHeight[i]+'px')
					.removeClass('closed');
			}
		});
	}
})(jQuery);