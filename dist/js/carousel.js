(function () {

	const CLASSES = {
		carouselSlider:'carousel-slider',
		arrow:'carousel-arrow',
		arrowRight:'carousel-arrow-right',
		arrowLeft:'carousel-arrow-left',
		disabled:'inactive'
	}

	function Carousel(carousel) {
		this.carousel = carousel.find("."+CLASSES.carouselSlider);
		this.carouselArrow = carousel.find("."+CLASSES.arrow);
		this.arrowRight = carousel.find("."+CLASSES.arrowRight);
		this.arrowLeft = carousel.find("."+CLASSES.arrowLeft);
		
		this.slideWidth = parseInt(this.carousel.find("li").outerWidth());
		this.slideMarginRight = parseInt(this.carousel.find("li").css("marginRight"));
		this.movingDistance = parseInt(this.slideWidth+this.slideMarginRight);
		this.carouselWidth = parseInt(this.carousel.find("li").length * (this.movingDistance));
		this.isMoving = false;

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
				    duration: 1000,
				    complete: function() {
				    	self.isMoving = false;
				    }
				});
			}
		})
	}

	var myCarousel = new Carousel($(".carousel-slider-wrapper"));

})();