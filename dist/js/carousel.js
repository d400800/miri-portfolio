(function () {

	const CLASSES = {
		carouselSlider:'carousel-slider',
		arrow:'carousel-arrow',
		arrowRight:'carousel-arrow-right',
		arrowLeft:'carousel-arrow-left',
		disabled:'inactive',
		navContainer: 'carousel-navigation'
	}

	function Carousel(carousel, transitionTime) {
		this.carousel = carousel.find("."+CLASSES.carouselSlider);
		this.slides = this.carousel.find("li");
		this.carouselArrow = carousel.find("."+CLASSES.arrow);
		this.arrowRight = carousel.find("."+CLASSES.arrowRight);
		this.arrowLeft = carousel.find("."+CLASSES.arrowLeft);
		this.navContainer = carousel.find("."+CLASSES.navContainer);
		this.transitionTime = transitionTime;
		
		this.carouselWrapperWidth = carousel.outerWidth();
		console.log(this.carouselWrapperWidth);

		this.slides.css('width', this.carouselWrapperWidth+'px');
		this.navContainer.css('width', this.carouselWrapperWidth+'px');

		this.slideWidth = parseInt(this.carousel.find("li").outerWidth());
		this.slideMarginRight = parseInt(this.carousel.find("li").css("marginRight"));
		this.movingDistance = parseInt(this.slideWidth+this.slideMarginRight);
		this.carouselWidth = parseInt(this.carousel.find("li").length * (this.movingDistance));
		this.isMoving = false;

		this.carousel.css('width', this.carouselWidth+'px');
		
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

		    	if(newPos == -(self.carouselWidth-self.movingDistance)) {
		    		self.arrowRight.addClass(CLASSES.disabled);
		    	} else if(newPos < 0 && newPos > -(self.carouselWidth-self.movingDistance)) {
		    		self.arrowRight.removeClass(CLASSES.disabled);
		    		self.arrowLeft.removeClass(CLASSES.disabled);
		    	} else {
		    		self.arrowLeft.addClass(CLASSES.disabled);
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
			console.log("lalal");
			var homepageSlider = new Carousel($(".carousel-slider-wrapper"), 1000);
		}
		if($(".inner-page").length > 0) {
			var brandingSlider = new Carousel($(".branding-slider"), 650);
			var brandingSlider = new Carousel($(".website-design-slider"), 650);
		}
	})

})();