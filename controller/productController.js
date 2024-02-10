
const Product = require('../models/productModel');
// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//get by id 
const getProductById = async (req, res) => {
    const { id } = req.params; // Extract the product ID from the request parameters
    try {
        const product = await Product.findById(id); // Find the product by its ID
        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); // If product is not found, return 404
        }
        res.json(product); // Return the product if found
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handle any errors
    }
};
// Edit a product
const editProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Filter products by price range
const  filterProductsByPrice = async (req, res) => {
    const { minPrice, maxPrice } = req.query;
    try {
        const products = await Product.find({ price: { $gte: minPrice, $lte: maxPrice } });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//add 
const addProduct = async (req, res) => {
    const { title,description, location, thumbnail, images,  price, category ,beds,distance } = req.body;

    // Validate input
    // if (!en || !ar || !thumbnail  || !price ) {
    //     return res.status(400).json({ message: "Missing required fields" });
    // }

    try {
        // Create a new product instance
        const newProduct = new Product({
            title,
            thumbnail,
            images,
            price,
            category,
            location,
            description
            ,beds,distance 
        });

        // Save the product to the database
        await newProduct.save();

        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Search products by name
const searchProductsByName = async (req, res) => {
    // const { name } = req.query;
    // try {
    //     const products = await Product.find({ $text: { $search: name } });
    //     res.json(products);
    // } catch (err) {
    //     res.status(500).json({ message: err.message });
    // }

    
    try {
        const { title } = req.body;

        // Ensure that the title is provided in the request body
        if (!title) {
            return res.status(400).json({ error: 'Search term (title) is required in the request body' });
        }

        // Use a regular expression to perform a case-insensitive search for the title
        const products = await Product.find({ title: { $regex: new RegExp(title, 'i') } });

        res.json(products);
    } catch (error) {
        console.error('Error searching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }


};






const filterProductsByCategory = async (req, res) => {
    const { category } = req.body;

    try {
        // Query products based on the provided category
        const products = await Product.find({ category });

        res.json(products);
    } catch (error) {
        console.error('Error filtering products by category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



const getCategories = async (req, res) => {
    try {
        const categories = await Product.distinct('category');
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    searchProductsByName,
    filterProductsByPrice,
    editProduct,
    getAllProducts,
    addProduct,
    getProductById,
    filterProductsByCategory,
    getCategories
}