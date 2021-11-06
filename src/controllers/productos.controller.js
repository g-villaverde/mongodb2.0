import {config} from "../constants/index.js";
import {Producto} from "../models/Productos.js";
import mongoose from 'mongoose';
import products from '../models/product.schema.js'

main().catch(err => console.log(err));

async function main() {
    let connect = await mongoose.connect('mongodb://localhost:27017/ecommerce_coder');
    await products.deleteMany({});
    return 'Schemas inicializados'
}


//Get products

export const getProductos = async (req, res) => {
    
        let getProductos = await products.find('products');
        return res.status(200).send(getProductos);
    
}

// Create product

export const addProducto = async (req, res) => {
    try {
        const {id, timestamp, name, description, code, photo, price, stock} = req.body;

        const newProducto = new Producto(id, timestamp, name, description, code, photo, price, stock);
        
        const saveProductoModel = new module.newProductos(newProducto);
        let saveProducto = await saveProductoModel.save();

        res.send(saveProducto)

    } catch(err) {
        return err
    }
}

//Update producto

export const updateProducto = async (req, res, next) => {
	const {id} = req.params;
    const {name, description, code, photo, price, stock} = req.body;

    try {
        const producto = producto.find((producto)=> producto.id == id);
        if(!producto) {
        return res.status(404).json({msg: "producto no encontrado"});
        }
        (producto.name = name),
            (producto.description = description),
            (producto.code = code),
            (producto.photo = photo),
            (producto.prcio = price),
            (producto.stock = stock);
        let response = await producto.update('products');
        res.send(response)

    } catch(err) {
        return err
    }
    
};

// Delete products

export const deleteProducto = async (req, res) => {
    const {id} = req.params;
    try {
        let response = await products.delete('products', id);
        return res.send(response)
    } catch (err){ 
        return err
    }
}