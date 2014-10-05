var SimpleTags = {};
function addTag(tag) {
	// Trim tag
	tag = tag.replace( /^\s+/, '' ).replace( /\s+$/, '' );

	if ( document.getElementById("adv-tags-input") ) { // Tags input from Simple Tags

		var tag_entry = document.getElementById("adv-tags-input");
		if ( tag_entry.value.length > 0 && !tag_entry.value.match(/,\s*$/) ) {
			tag_entry.value += ", ";
		}

		var re = new RegExp(tag + ",");
		if ( !tag_entry.value.match(re) ) {
			tag_entry.value += tag + ", ";
		}

	} else { // Default tags input from WordPress
		if(SimpleTags.metaboxID) {
			tag.replace( /\s+,+\s*/g, ',' ).replace( /,+/g, ',' ).replace( /,+\s+,+/g, ',' ).replace( /,+\s*$/g, '' ).replace( /^\s*,+/g, '' );
		}
		var $inp = jQuery(SimpleTags.metaboxID).find('input.newtag');
		var val = $inp.val();
		if (val == "") {
			$inp.val(tag);
		} else {
			$inp.val(val + ", " + tag);
		}
		jQuery('.tagadd').click();

	}
}

jQuery(function() {
	if(!document.getElementById("adv-tags-input")) {
		jQuery('.tagcloud-link').parent().hide();
		jQuery('.tagsdiv').each(function(i, elm) {
			var id = this.id;
			if(id && id.indexOf('_tag') > 0) {
				SimpleTags.metaboxID = '#' + id;
			}
		});
	}
});
