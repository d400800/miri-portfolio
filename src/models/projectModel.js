var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var projectModel = new Schema({
    banner: {type: String},
    heading: {type: String},
    headingHebrew: {type: String},
    homepageSlide: {
    	image: {type: String},
    	title: {type: String}
    },
    introText: {type: String},
    sliders: [
    	{
    		
    	}
    ]
});

module.exports= mongoose.model('Book', bookModel);