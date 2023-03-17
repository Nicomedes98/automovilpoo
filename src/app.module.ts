import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { AutomovilModule } from './automovil/automovil.module';
import {AutomovilController} from'./automovil/controller/automovil.controller'
import { ClienteController } from './cliente/controller/cliente.controller';

@Module({
  imports: [ClienteModule, VendedorModule, AutomovilModule],
  controllers: [AutomovilController, ClienteController],
  providers: [],
})
export class AppModule {}
