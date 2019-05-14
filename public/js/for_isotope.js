$(document).ready(function(){

	var qsRegex;

	var $grid = $('.grid').isotope({
	  itemSelector: '.element_item',
	  layoutMode: 'fitRows',
	  filter: function() {
	    return qsRegex ? $(this).text().match( qsRegex ) : true;
	  }
	});


	// bind filter button click
	$('.filters-button-group').on( 'click', 'div', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  // filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});




	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'div', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});



	// $grid.isotope({ filter: '.filter__space'});

	var strUrl = location.search;
		 if (strUrl.indexOf("?") != -1) {
	    var getSearch = strUrl.split("=");
	    var thispage = getSearch[1]
	}

	$grid.isotope({ filter: thispage});
	// var getFilterValue = $('.filter_button_item').attr('data-filter');

	// console.log(thispage )
	// console.log(getFilterValue)
	$('.button-group').find(thispage).addClass('is-checked');






	// // -- search --
	// // use value of search field to filter
	// var $quicksearch = $('.quicksearch').keyup( debounce( function() {
	//   	qsRegex = new RegExp( $quicksearch.val(), 'gi' );
	//  	$grid.isotope();
	// 	}, 200 ) );


	// // debounce so filtering doesn't happen every millisecond
	// function debounce( fn, threshold ) {
	//   var timeout;
	//   return function debounced() {
	//     if ( timeout ) {
	//       clearTimeout( timeout );
	//     }
	//     function delayed() {
	//       fn();
	//       timeout = null;
	//     }
	//     timeout = setTimeout( delayed, threshold || 100 );
	//   }
	// }





});






