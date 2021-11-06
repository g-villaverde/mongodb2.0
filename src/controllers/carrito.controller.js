import { Carrito } from "../models/Carrito.js";
import cart from '../models/cart.schema.js'
import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/ecommerce_coder');
    await cart.deleteMany({});
    return console.log('Schemas inicializados');
}

const carrito = new Carrito();


// Get Carrito
export const getCarrito = async(req, res) => {
    try {
        let getCarrito = await cart.find('cart');
        return res.send(getCarrito);
        
    } catch (error) {
        return error
    }
}


// Get product by id carrito
export const getProductoCarrito = async (req, res, id) => {
    
    try {
        let getCarrito = await cart.findById('cart', id);
        return res.send(getCarrito);
        
    } catch (error) {
        return error
    }


};

export const addCarrito = async (req, res) => {
    
    

    try {

        const {body} = req;
        carrito.productos.push(body);
        const newCarrito = carrito(body);

        const saveCarritoModel = new module.newCarritos(newCarrito);
        let saveCarrito = await saveCarritoModel.save();

        return res.send(saveCarrito);

    } catch (error) {
        return error
    }
   

}   

export const deleteCarrito = async (req, res) => {
    const {id} = req.params;
    const index = carrito.productos.findIndex((producto) => producto.id == id);
    const deleted = carrito.productos.splice(index, 1);
    try {
        
        let removed = await cart.findByIdAndDelete(index);
        return res.send(removed);



    } catch (error) {
        return error
    }

    ;
}