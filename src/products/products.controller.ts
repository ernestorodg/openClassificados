import {Body, Controller, Post, Get, Param} from '@nestjs/common'
import { ProductsService } from './products.service';



@Controller('products') 
export class ProductsController {
    // Adding a new method for handle post request, retorna any
    constructor(private readonly productsService: ProductsService) {

    }
    // Remember, the controller is kind of a block that deals with
    // requests and responses. It can use some services! That are
    // injectable objects. 

    // readonly diz zque productsService nunca será mudado  
    @Post()
    addProduct(
        @Body('title') title, 
        @Body('description') description, 
        @Body('price') price)
        {
            const genID = this.productsService.insertProduct(title, description, price); 
            return {id: genID};
          // we want to return a JSON, so it would be good if addProduct() returns
        // json. In this case we will return the product ID

    }
    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }

    // @Get() // Somente Get não funcionaria, a gente tem que 
    // adicionar um path dinâmico! -> Basta colocar dois pontinhos
    // "Não sei qual o valor dps, mas se tiver, "
    @Get(':id')
    getOneProduct(@Param('id') param: string){
        return this.productsService.getSingleProduct(param)

    }


    // the app's features should be tied to modules, thats why we
    // create a products module


}