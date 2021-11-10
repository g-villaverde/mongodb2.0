import { Carrito } from "../models/Carrito.js";
import cart from '../models/cart.schema.js'



const carrito = new Carrito();


// Get Carrito
export const getCarrito = async(req, res) => {

        let getCarrito = await cart.find();
        return res.send(getCarrito);
    
}


// Get product by id carrito
export const getProductoCarrito = async (req, res) => {
    
    const { id } = req.params;
    let getCarrito = await carrito.findById(id);
    res.send(getCarrito);


};

export const addCarrito = async (req, res) => {
    
    const cartSaved = new cart(req.body);
    await cartSaved.save()
    res.send(`Recibido ${cartSaved}`);

}   

export const deleteCarrito = async (req, res) => {
    
    const {id} = req.params;
    const removedCarrito = await carrito.deleteOne({_id: id});
    console.log("Elemento borrado");
    res.send(removedCarrito);

}