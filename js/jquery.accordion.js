(function($){
	$.fn.accordion = function() {
		var liHeight
		var liAnchorHeight;
		
		var el = this;
	
		liHeight = new Array();
		liAnchorHeight = new Array();
	
		el.find('li').each(function(i) {
			var li = $(this);
			liHeight[i] = li.outerHeight();
			var liAnchor = li.find('a:first').addClass('open-accordion');
			liAnchorHeight[i] = liAnchor.outerHeight();
			li.css('height', liAnchorHeight[i]);
		});
	
		el.find('.open-accordion').bind('touchstart', function() {
			var toExpand = $(this).parent();
			var i = toExpand.index();

			if (toExpand.attr('id') == 'active') {
				toExpand
					.css('height', liAnchorHeight[i])
					.removeAttr('id');
			} else {
				var active = toExpand.parent().find('#active');

				if (active) {
					active
						.css('height', liAnchorHeight[i])
						.removeAttr('id');
				}

				toExpand
					.attr('id', 'active')
					.css('height', (liHeight[i]+liAnchorHeight[i])-20+'px');
			}

			return false;
		});
	}
})(jQuery);