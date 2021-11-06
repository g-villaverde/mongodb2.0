import { v4 } from "uuid";

export class Producto {
    constructor(id, timestamp, name, description, code, photo, price, stock) {
        this.id = v4();
        this.timestamp = Date.now();
        this.name = name;
        this.description = description;
        this.code = code;
        this.photo = photo;
        this.price = price;
        this.stock = stock;
    }
}