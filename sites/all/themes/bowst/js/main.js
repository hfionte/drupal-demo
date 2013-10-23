jQuery(document).ready(function($) {

	// Main Menu Mobile
	$('#mobile-menu-trigger').live('click', function () {
		$('#navigation #block-system-main-menu ul.menu').toggleClass('mobile-open');
	});

});
