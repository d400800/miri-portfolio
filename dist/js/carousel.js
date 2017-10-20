(function () {

	const CLASSES = {
		carouselSlider:'carousel-slider',
		arrow:'carousel-arrow',
		arrowRight:'carousel-arrow-right',
		arrowLeft:'carousel-arrow-left',
		disabled:'inactive',
		navContainer: 'carousel-navigation'
	}

	function Carousel(parameters) {
		this.carousel = parameters.element.find("."+CLASSES.carouselSlider);
		this.slides = this.carousel.find("li");
		this.carouselArrow = parameters.element.find("."+CLASSES.arrow);
		this.arrowRight = parameters.element.find("."+CLASSES.arrowRight);
		this.arrowLeft = parameters.element.find("."+CLASSES.arrowLeft);
		this.navContainer = parameters.element.find("."+CLASSES.navContainer);
		this.transitionTime = parameters.transitionTime;
		
		this.carouselWrapperWidth = parameters.element.outerWidth();

		this.slides.css('width', this.carouselWrapperWidth+'px');
		this.navContainer.css('width', this.carouselWrapperWidth+'px');

		this.slideWidth = parseInt(this.carousel.find("li").outerWidth());
		this.slideMarginRight = parseInt(this.carousel.find("li").css("marginRight"));
		this.movingDistance = parseInt(this.slideWidth+this.slideMarginRight);
		this.carouselWidth = parseInt(this.carousel.find("li").length * (this.movingDistance));
		this.isMoving = false;

		this.carousel.css('width', this.carouselWidth+'px');
		this.carousel.css('transition', "all "+this.transitionTime+"ms");
		
		this.bindEvents();
	}

	Carousel.prototype.getTranslateX = function(element) {
		var currTrans = element.css('transform').split(/[()]/)[1] || 
						element.css('-webkit-transform').split(/[()]/)[1] ||
						element.css('-ms-transform').split(/[()]/)[1] ||
						element.css('-moz-transform').split(/[()]/)[1];
		var pos = parseInt(currTrans.split(',')[4]);

		return pos;
	}

	Carousel.prototype.bindEvents = function() {
		var self = this;

		this.carouselArrow.on("click", function() {

	    	if($(this).hasClass(CLASSES.disabled)) return false;

			if(!self.isMoving) {

				self.isMoving = true;

		    	var pos = self.getTranslateX(self.carousel);
		    	
		    	if( $(this).hasClass(CLASSES.arrowRight) ) {
		    		var newPos = pos-self.movingDistance;
		    	} else {
		    		var newPos = pos+self.movingDistance;
		    	}
		    	
		    	console.log(newPos);

		    	if(Math.abs(newPos) == Math.abs(self.carouselWidth-self.movingDistance)) {
		    		self.arrowRight.addClass(CLASSES.disabled);
		    	} else if(newPos == 0) {
		    		self.arrowLeft.addClass(CLASSES.disabled);
		    	} else {
		    		self.arrowRight.removeClass(CLASSES.disabled);
		    		self.arrowLeft.removeClass(CLASSES.disabled);
		    	}

				self.carousel.animate({ textIndent: 0 }, {
				    step: function() {
				      $(this).css('-moz-transform','translateX('+newPos+'px)');
				      $(this).css('-webkit-transform','translateX('+newPos+'px)');
				      $(this).css('-ms-transform','translateX'+newPos+'px)');
				      $(this).css('transform','translateX('+newPos+'px)');
				    },
				    duration: self.transitionTime,
				    complete: function() {
				    	self.isMoving = false;
				    }
				});
			}
		})
		
		/* key navigation */
		$("body").keydown(function(e) {
		  if(e.keyCode == 39) self.arrowRight.click();
		  if(e.keyCode == 37) self.arrowLeft.click();
		});
	}

	$(document).ready(function() {
		if($(".homepage").length > 0) {
			new Carousel({
					"element": $(".carousel-slider-wrapper"),
					"transitionTime": 1000
				}
			);
		}
		if($(".inner-page").length > 0) {
			
			var innerPageSliders = $('.carousel-slider-wrapper');
			
			$.each(innerPageSliders, function(index, slider) {
				new Carousel({
						"element": $(slider),
						"transitionTime": 650
					}
				);
			});
		}
	})

})();