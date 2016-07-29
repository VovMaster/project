$(document).ready(function(){
	$('.dropdown > a').click(function () {
		$(this).parent().toggleClass('open');
		return false
	});
	$('.menu-open').click(function () {
		$('.main-nav').removeClass('menu-hide');
		return false
	});
	$('.close-menu').click(function () {
		$('.main-nav').addClass('menu-hide');
		return false
	});
    $( "#datepicker" ).datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
    });



    var dateSelect = [
    	[
	    	[
	    		'dateNewAssignments'
	    	],
	    	[
		    	{
					'dateYear': '2016',
					'dateMonth': '6',
					'dateDay': '9'
				}
		    ]
	    ],

	    [
	    	[
	    		'dateBalances'
	    	],
	    	[
		    	{
					'dateYear': '2016',
					'dateMonth': '6',
					'dateDay': '11',
				}
		    ]
	    ],
	    [
	    	[
	    		'dateExercised'
	    	],
	    	[
				{
					'dateYear': '2016',
					'dateMonth': '6',
					'dateDay': '3',
				},
				{
					'dateYear': '2016',
					'dateMonth': '6',
					'dateDay': '19',
				},
				{
					'dateYear': '2016',
					'dateMonth': '6',
					'dateDay': '26',
				}
			]
	    ],
	    [
	    	[
	    		'datePendingApproval'
	    	],
	    	[
		    	{
					'dateYear': '2016',
					'dateMonth': '6',
					'dateDay': '24',
				}
		    ]
	    ]
    ];

    // console.log(dateSelect);
    // console.log(dateSelect.length);
    // console.log(dateSelect.0);

    		

    function datePickerSelect(){

    	$('#datepicker td').each(function(){
    		var dayDatepic = $(this).children().text();
    		$(this).attr('data-day', dayDatepic);
    	});




    	for (var i = 0; i < dateSelect.length; i++) {

    		// console.log(dateSelect[i][0][0]);
    		for (var b = 0; b < dateSelect[i][1].length; b++) {

    			$('#datepicker td[data-day="' + dateSelect[i][1][b].dateDay + '"][data-month="' + dateSelect[i][1][b].dateMonth + '"][data-year="' + dateSelect[i][1][b].dateYear + '"]').addClass(dateSelect[i][0][0]);
    			// $('#datepicker td[data-day="' + dateSelect[i][1][b].dateDay + '"]').addClass(dateSelect[i][0][0]);
    			// console.log(dateSelect[i][1][b].dateDay);
    			// console.log(dateSelect[i][1][b].dateMonth);
    			// console.log(dateSelect[i][1][b].dateYear);

    		}


    	}

    }

    datePickerSelect();



	$(document).on('click', '.ui-datepicker-next', function () {
	   datePickerSelect();  
	   	$('.ui-state-default').on('click', function () {
		   return false
		});
	})

	$(document).on('click', '.ui-datepicker-prev', function () {
	   datePickerSelect();
		$('.ui-state-default').on('click', function () {
		   return false
		});
	})

	$('.ui-state-default').on('click', function () {
	   return false
	});

	$('.content-tab').perfectScrollbar();

	$('.table-style-wrap').perfectScrollbar();
	$('.table-style-wrap').each(function(){
		var i = 1;
		if($(this).find('thead').length){
			$(this).find('thead').clone().appendTo($(this).prev('.header-new').children('.table-style'));
			$(this).find('thead td').each(function(){
				var widthTd = $(this).outerWidth();
				$(this).closest('.table-style-wrap').prev('.header-new').find('td:nth-child(' + i + ')').outerWidth(widthTd);
				i++;
			});
		}else {
			$(this).addClass('no-thead');
		}

		
	});


	$(window).resize(function(){
		$('.table-style-wrap').each(function(){
			var i = 1;
			$(this).find('thead td').each(function(){
				var widthTd = $(this).outerWidth();
				$(this).closest('.table-style-wrap').prev('.header-new').find('td:nth-child(' + i + ')').outerWidth(widthTd);
				i++;
			});
		});
	});



	function readURL(input, thisIn) {

		var inputForImg = thisIn.closest('.for-img').find('.image');

	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            inputForImg.attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }
	}

	$(".imgInput").change(function(){
		var thisIn = $(this);
	    readURL(this, thisIn);
	});

	$('.manual-open-js').click(function(){
		$(this).closest('.wrap-regulation-block').toggleClass('regulation-block-open');
		return false 
	});

	$('.content-list-search').perfectScrollbar();
	$('.search-dropdown-title').click(function(){
		$(this).parent().toggleClass('openSearch');
		if($(this).parent().hasClass('openSearch')){
			$('.content-list-search').perfectScrollbar('update');
		}
		return false
	});

	$('.wraps-massege-notification > a').click(function(){
		

		if($(this).parent().hasClass('open')){
			$('.wraps-massege-notification ').removeClass('open');
		}else {
			$('.wraps-massege-notification ').removeClass('open');
			$(this).parent().addClass('open');	
		}

		
		return false
	});

	$(document).mouseup(function (e){ 
		var div = $(".wraps-massege-notification"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) { 
			$('.wraps-massege-notification ').removeClass('open');
		}
	});
 
});
