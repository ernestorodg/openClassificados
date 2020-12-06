import { Injectable, NotFoundException } from "@nestjs/common";

import { Product } from './products.model'

@Injectable()
export class ProductsService {
    private products : Product[] = [];

    insertProduct(title: string, description: string, price: number) : string {
        const productID: string = Math.random().toString();
        const newProduct = new Product(productID, title, description, price);
        this.products.push(newProduct);

        return productID; 
    }

    getProducts() {
        return [...this.products] // isto retornaria o que está dentro do 
        // array, que é justamente o que a gente procura
        // return [products] // isto retornaria um array do que a gente
        // quer
        // return products // isto retornaria por referência, por 
        // default em javascript.
    }

    getSingleProduct(productID: string){
        const response = this.products.find(prod => productID == prod.id);
        if (!response)
        {
            throw new NotFoundException();
        }
        return response;
    
    }

    // we have to inject that service so we can use it

}