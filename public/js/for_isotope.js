$(document).ready(function(){


	var qsRegex;
	var buttonFilter;
	var filterValue;
	var $selects = $('#form-ui select');


	var strUrl = location.search;
	if (strUrl.indexOf("?") != -1) {
   	 var getSearch = strUrl.split("=");
   	 var thispage = getSearch[1]
	}

	// console.log(thispage)


	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.element_item',
	  layoutMode: 'fitRows',
	  filter: function() {
	    var $this = $(this);
	    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
	    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
	    var thisPage = thispage ? $this.is( thispage ) : true;

	    // console.log(buttonResult)
	    return searchResult && buttonResult  && thisPage;
	  }
	});




	console.log(thispage)


	$('#filters').on( 'click', 'div', function() {

		thispage = '*'
		console.log(thispage)

	  	buttonFilter = $( this ).attr('data-filter');
	  	// console.log(buttonFilter);
	  	$grid.isotope();
	});



	// use value of search field to filter
	var $quicksearch = $('#quicksearch').keyup( debounce( function() {
	  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
	  $grid.isotope();
	}) );



	  // change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	 	  $buttonGroup.on( 'click', 'div', function() {
	      $buttonGroup.find('.is-checked').removeClass('is-checked');
	      $( this ).addClass('is-checked');
	  });
	});


	// debounce so filtering doesn't happen every millisecond
	function debounce( fn, threshold ) {
	  var timeout;
	  return function debounced() {
	    if ( timeout ) {
	      clearTimeout( timeout );
	    }
	    function delayed() {
	      fn();
	      timeout = null;
	    }
	    setTimeout( delayed, threshold || 100 );
	  };
	}

	$('.button-group').find(thispage).addClass('is-checked');



});






