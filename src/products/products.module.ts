import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";


// This decorator receives an object!
@Module({
    // imports: [] // our module depend on what?
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {

} // we still need to tell nestjs that we created this module
// so we have to update the app.module.ts file!