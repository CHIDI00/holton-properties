/*
Author       : Dreamguys
Template Name: Dreams-Estate - Bootstrap Template
Version      : 1.0
*/

(function($) {
    "use strict";
	
	var $slimScrolls = $('.slimscroll');	
	var $wrapper = $('.main-wrapper');

	if($(window).width() <= 991) {
		var Sidemenu = function() {
			this.$menuItem = $('.main-nav a');
		};

		function init() {
			var $this = Sidemenu;
			$('.main-nav a').on('click', function(e) {
				if($(this).parent().hasClass('has-submenu')) {
					e.preventDefault();
				}
				if(!$(this).hasClass('submenu')) {
					$('ul', $(this).parents('ul:first')).slideUp(350);
					$('a', $(this).parents('ul:first')).removeClass('submenu');
					$(this).next('ul').slideDown(350);
					$(this).addClass('submenu');
				} else if($(this).hasClass('submenu')) {
					$(this).removeClass('submenu');
					$(this).next('ul').slideUp(350);
				}
			});
		}

		// Sidebar Initiate
		init();
	}



	//Increment Decrement Numberes
    $(".quantity-btn").on("click", function () {

        var $button = $(this);
        var oldValue = $button.closest('.product-quantity').find("input.quntity-input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.closest('.product-quantity').find("input.quntity-input").val(newVal);
    });

	// JQuery CounterUp

	if($('.dash-count .counter-up').length > 0) {
		$('.dash-count .counter-up').counterUp({
			delay: 15,
			time: 1500
		});
	}

	//   View all Show hide One

	if($('.viewall-One').length > 0) {
		$(".viewall-One").hide();
			$(".viewall-button-One").on('click', function () {
			$(this).text($(this).text() === "Close All" ? "View All" : "Close All");
			$(".viewall-One").slideToggle(900);
		});
	}

	//   View all Show hide Two

	if($('.viewall-Two').length > 0) {
		$(".viewall-Two").hide();
		$(".viewall-button-Two").on('click', function () {
			$(this).text($(this).text() === "Close All" ? "View All" : "Close All");
			$(".viewall-Two").slideToggle(900);
		});
	} 

	// Tabs

	$(".property-tabs ul li a").on('click', function () {
		$(".property-tabs ul li a").removeClass("active");
		$(this).addClass("active");
	});

	// Smooth Scroll
    
    $("ul.prop-tab li a").on('click', function(e) {
		$("ul.prop-tab li a").removeClass("active");
		$(this).addClass("active");
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top - 90)
        }, 500);
    });

	// Add More
	
    $(".add-info").on('click','.trash', function () {
		$(this).closest('.add-cont').remove();
		return false;
    });

    $(".add-more").on('click', function () {
			
		var addcontent = '<div class="row add-cont">'+
			'<div class="col-md-12">'+
				'<div class="review-form">'+
					'<label>Plan Name</label>'+
					'<input type="text" class="form-control" placeholder="Plan Name">'+
				'</div>'+
			'</div>'+
			'<div class="col-md-4">'+
				'<div class="review-form">'+
					'<label>No of Bedooms</label>'+
					'<input type="text" class="form-control" placeholder="Enter Value">'+
				'</div>'+
			'</div>'+
			'<div class="col-md-4">'+
				'<div class="review-form">'+
					'<label>No of Bathrooms</label>'+
					'<input type="text" class="form-control" placeholder="Enter Value">'+
				'</div>'+
			'</div>'+
			'<div class="col-md-4">'+
				'<div class="review-form">'+
					'<label>Sqft</label>'+
					'<input type="text" class="form-control" placeholder="Enter Value">'+
				'</div>'+
			'</div>'+
			'<div class="col-md-6">'+
				'<div class="review-form">'+
					'<label>Currency Type</label>'+
					'<select class="select">'+
						'<option>Select</option>'+
						'<option>Square</option>'+
						'<option>Rectangle</option>'+
					'</select>'+
				'</div>'+
			'</div>'+
			'<div class="col-md-6">'+
				'<div class="review-form">'+
					'<label>Sale Price</label>'+
					'<input type="text" class="form-control" placeholder="Enter Value">'+
				'</div>'+
			'</div>'+
			'<div class="col-md-12">'+
				'<div class="review-form">'+
					'<label>Enter Description of Property</label>'+
					'<textarea class="form-control" rows="8" placeholder="Description"></textarea>'+
				'</div>'+
			'</div>'+
			'<div class="col-md-8">'+
				'<div class="review-form">'+
					'<label>Photo</label>'+
					'<div class="upload-file">'+
						'<span>Select Photo</span>'+
						'<input type="file" class="form-control" value="Select documents">'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-md-4">'+
				'<div class="review-form">'+
					'<label>&nbsp</label>'+
					'<button class="btn btn-primary btn-upload"><i class="bx bx-cloud-upload"></i>Upload Photos</button>'+
				'</div>'+
			'</div>'+
			'<div class="col-12 col-md-2"><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>' +
			
		'</div>';
		
        $(".add-info").append(addcontent);

		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});

        return false;		
		
    });

	// Category More & Less

	$('ul.term-list').each(function(){
		var len = $(this).find('li').length;
		if( len > 5){    
		  $('li', this).eq(4).nextAll().hide().addClass('toggleable');
		  $(this).append('<li class="more"><a href="javascript:void(0);"><i class="bx bx-plus-circle"></i> More Categories</a></li>');    
		}  
	});
	$('ul.term-list').on('click','.more', function(){
		if( $(this).hasClass('less') ){    
			$(this).text('').removeClass('less').append('<a href="javascript:void(0);"><i class="bx bx-plus-circle"></i> More Categories<a>');    
		}
		else{
			$(this).text('').addClass('less').append('<a href="javascript:void(0);"><i class="bx bx-minus-circle"></i> Less Categories<a>'); 
		}
		$(this).siblings('li.toggleable').slideToggle(); 
	}); 

	// Category More & Less

	$('ul.amene-list').each(function(){
		var len = $(this).find('li').length;
		if( len > 5){    
			$('li', this).eq(4).nextAll().hide().addClass('toggleable');
			$(this).append('<li class="more"><a href="javascript:void(0);"><i class="bx bx-plus-circle"></i> More Amenities</a></li>');    
		}  
	});

	$('ul.amene-list').on('click','.more', function(){
		if( $(this).hasClass('less') ){    
			$(this).text('').removeClass('less').append('<a href="javascript:void(0);"><i class="bx bx-plus-circle"></i> More Amenities</a>');    
		}else{
			$(this).text('').addClass('less').append('<a href="javascript:void(0);"><i class="bx bx-minus-circle"></i> Less Amenities</a>'); 
		}
		$(this).siblings('li.toggleable').slideToggle(); 
	}); 

	
	// Rent Slider
	if($('.rentfeature-slider').length > 0) {
		$('.rentfeature-slider').owlCarousel({
			loop:true,
			margin:24,
			nav:false,
			dots:true,
			smartSpeed: 2000,
			navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				
				768:{
					items:1
				},		
				992:{
					items:2 
				},
				1200:{
					items:3
				},
			}
		})
	}
	// Modal

	// Scroll to Top
	
	if($('.progress-wrap path').length > 0) {
		$(function(s){
			var e=document.querySelector(".progress-wrap path"),
			t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",
			e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),
			e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";
			var o=function(){var o=s(window).scrollTop(),
			r=s(document).height()-s(window).height(),
			i=t-o*t/r;e.style.strokeDashoffset=i};o(),
			s(window).scroll(o);
			jQuery(window).on("scroll",function(){
				jQuery(this).scrollTop()>50?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")
			}),
			jQuery(".progress-wrap").on("click",function(s){return s.preventDefault(),jQuery("html, body").animate({scrollTop:0},550),!1})
		});
	}
	
	// Fancy Box	
	
	if($('[data-fancybox]').length > 0) {
		Fancybox.bind('[data-fancybox]', {
		}); 
	}
	
})(jQuery);