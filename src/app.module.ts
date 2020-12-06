import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';


// Que features a nossa aplicação vai usar?
// Isso é o que este código abaixo faz e o que ele precisa
// para funcionar. 

// Controllers are responsible of handle a request and send back a response
// providers are extra classes that you can inject into other 
// providers or controllers


// Modules are like features

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
