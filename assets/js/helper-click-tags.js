jQuery(document).ready(function() {
	var metaBoxInit = function($a, taxonomy) {
		var $openBtn = $a.find('.open_clicktags'),
				$closeBtn = $a.find('.close_clicktags'),
				$area = $a.find('.container_clicktags');

		$a.on('click', '.open_clicktags', function(evt) {
			evt.preventDefault();
			$area.fadeIn('slow')
			.load( ajaxurl + '?action=simpletags&st_action=click_tags&taxonomy=' + taxonomy, function() {
				$openBtn.hide();
				$closeBtn.show();
			});
			return false;
		}).on('click', '.close_clicktags', function(evt) {
			evt.preventDefault();
			$area.fadeOut('slow', function() {
				$openBtn.show();
				$closeBtn.hide();
			});
			return false;
		});

		$area.on('click', 'span', function(evt) {
			evt.preventDefault();
			addTag(this.innerHTML);
		});
		return;
	}

	// Display initial link
	jQuery('#st-clicks-tags').each(function(i, elm) {
		var $metaBox = jQuery(elm),
				taxonomy = $metaBox.find('#st-simple-tags-advance').data('taxonomy') || '';
		$metaBox.find('.inside').html('<a href="#st_click_tags" class="open_clicktags">'+stHelperClickTagsL10n.show_txt+'</a><a href="#st_click_tags" class="close_clicktags" style="display:none;">'+stHelperClickTagsL10n.hide_txt+'</a><div class="container_clicktags"></div>');
		metaBoxInit($metaBox, taxonomy);
	});
});
