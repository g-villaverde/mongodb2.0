import mongoose from 'mongoose';
import products from '../models/product.schema.js'




//Get products

export const getProductos = async (req, res) => {
    
        let getProductos = await products.find();
        return res.status(200).send(getProductos);
    
}

// Create product

export const addProducto = async (req, res) => {
    
    const item = new products(req.body);
    await item.save()
    res.send(`Recibido ${item}`);

}

//Update producto

export const updateProducto = async (req, res, next) => {
	const {id} = req.params;
    const {name, description, code, photo, price, stock} = req.body;
    const newProduct = await products.updateMany({_id: id}, req.body);

    console.log("product updated");
    res.send(newProduct);
    
};

// Delete products

export const deleteProducto = async (req, res) => {

    const {id} = req.params;
    const removedItem = await products.deleteOne({_id: id});
    console.log("Elemento borrado");
    res.send(removedItem);
    
}