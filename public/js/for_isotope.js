$(document).ready(function(){

	var qsRegex;
	var buttonFilter;
	var selectFilter;


// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.element_item',
	  layoutMode: 'fitRows',
	  filter: function () {
	    var $this = $(this);

	    var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
	    // var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
	    // var selectResult = selectFilter ? $this.is( selectFilter ) : true;
	    return searchResult;
  		}
	});



	// bind filter button click
	$('#filters').on( 'click', 'div', function() {
		buttonFilter = $(this).attr('data-filter');
	  // use filterFn if matches value
	  // filterValue = filterFns[ filterValue ] || filterValue;

	  // $grid.isotope();
	  setCustomFilter();
	});


	// -- search --
	// use value of search field to filter
	var $quicksearch = $('#quicksearch').keyup(debounce(function () {
	  setCustomFilter();
	}));



	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'div', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});





function setCustomFilter() {
	var qsRegex = $('#quicksearch').val();
	console.log("qsregex:" + qsRegex);
	$('.element-item').removeClass('show');
	// if( $('.element-item').text().match(qsRegex) ) {
	//   $('.element-item').addClass('show');
	// }
	searchFilter = '';
	$('.element-item').each(function (index) {
	if (qsRegex == '') {
	  $('.element-item').eq(index).addClass('show');
	  searchFilter = '.show';
	} else  if ( $(this).text().toLowerCase().indexOf(qsRegex) >= 0) {
	  console.log($(this).text());
	  $('.element-item').eq(index).addClass('show');
	  searchFilter = '.show';
	}

	});

	console.log($('.show').length);
	if (!buttonFilter) buttonFilter = '';

	var selectFilters = [];
	var filter = [];
	if (selectFilters.length > 0) {
	for (var selectFilter in selectFilters) {
	  filter.push(selectFilters[selectFilter] + buttonFilter + searchFilter);
	}
	filter = filter.join(', ');
	} else {
	filter = buttonFilter + '.show';
	}
	console.log("filter:" + filter);
	$grid.isotope({
		filter: filter
	});
}



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
    timeout = setTimeout( delayed, threshold || 100 );
  }
}









	// // change is-checked class on buttons
	// $('.button-group').each( function( i, buttonGroup ) {
	//   var $buttonGroup = $( buttonGroup );
	//   $buttonGroup.on( 'click', 'div', function() {
	//     $buttonGroup.find('.is-checked').removeClass('is-checked');
	//     $( this ).addClass('is-checked');
	//   });
	// });



	// // $grid.isotope({ filter: '.filter__space'});

	// var strUrl = location.search;
	// 	 if (strUrl.indexOf("?") != -1) {
	//     var getSearch = strUrl.split("=");
	//     var thispage = getSearch[1]
	// }

	// $grid.isotope({ filter: thispage});
	// // var getFilterValue = $('.filter_button_item').attr('data-filter');

	// // console.log(thispage )
	// // console.log(getFilterValue)
	// $('.button-group').find(thispage).addClass('is-checked');











});






