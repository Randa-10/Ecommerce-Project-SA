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
			brand: {
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
			brand: {
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
		quantityInStock: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		discountPercentage: {
			type: Number,
			required: true,
		},
		rating: {
			type: Number,
			default: 0,
		},
		ratingQuantity: {type: Number, default: 0},
		rating: {
			type: Number,
			default: 0,
		},
	
	
	},

	{timestamps: true}
);
productSchema.index({ name: "text" });


const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
