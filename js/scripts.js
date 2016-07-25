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
	})

	$(document).on('click', '.ui-datepicker-prev', function () {
	   datePickerSelect();
	})



});