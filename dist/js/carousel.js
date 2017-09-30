(function () {

	function Carousel(carousel) {
		this.carousel = carousel.find(".works-slider");
		
		this.slideWidth = parseInt(this.carousel.find("li").outerWidth());
		this.slideMarginRight = parseInt(this.carousel.find("li").css("marginRight"));
		this.movingDistance = parseInt(this.slideWidth+this.slideMarginRight);
		this.carouselWidth = parseInt(this.carousel.find("li").length * (this.movingDistance));
		
		this.carouselArrow = carousel.find(".carousel-arrow");
		this.arrowRight = carousel.find(".carousel-arrow-right");
		this.arrowLeft = carousel.find(".carousel-arrow-left");

		this.isMoving = false;
		console.log(this.movingDistance);
		this.bindEvents();
	}

	Carousel.prototype.bindEvents = function() {
		var self = this;

		this.carouselArrow.on("click", function() {

			if(!self.isMoving) {
				self.isMoving = true;
		    	var currTrans = self.carousel.css('transform').split(/[()]/)[1] || carousel.css('-webkit-transform').split(/[()]/)[1] || carousel.css('-ms-transform').split(/[()]/)[1] || carousel.css('-moz-transform').split(/[()]/)[1];
		    	var pos = parseInt(currTrans.split(',')[4]);

		    	if($(this).hasClass("inactive")) {
		    		self.isMoving = false;
		    		return;
		    	}
		    	
		    	if( $(this).hasClass("carousel-arrow-right") ) {
		    		var newPos = pos-self.movingDistance;
		    	} else {
		    		var newPos = pos+self.movingDistance;
		    	}
		    	
		    	console.log(newPos);
		    	if(newPos == -(self.carouselWidth-self.movingDistance)) {
		    		self.arrowRight.addClass("inactive");
		    	} else if(newPos < 0 && newPos > -(self.carouselWidth-self.movingDistance)) {
		    		self.arrowRight.removeClass("inactive");
		    		self.arrowLeft.removeClass("inactive");
		    	} else {
		    		self.arrowLeft.addClass("inactive");
		    	}

		    	if (newPos < -(self.carouselWidth-self.movingDistance) || newPos > 0) {
		    	console.log("We are here");
		    		self.isMoving = false;
		    		return;
		    	} else {
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
			}
		})
	}

	var myCarousel = new Carousel($(".works-slider-wrapper"));

})();