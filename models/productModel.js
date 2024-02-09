const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		en: {
			title: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
	
		},
		ar: {
			title: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
		
		},
		thumbnail: {
			type: String,
			required: true,
		},
		images: {type: Array}
        ,
		
		price: {
			type: Number,
			required: true,
		},
		
		distance:
		 {type: Number, default: 0},
		beds: {
			type: Number,
			default: 0,
		},
	
	
	},

	{timestamps: true}
);
productSchema.index({ name: "text" });


const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
