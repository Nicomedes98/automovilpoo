import { Module } from '@nestjs/common';
import { ClienteController } from './controller/cliente.controller';
import { ClienteServices } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/cliente/services/cliente.service';

@Module({
  controllers: [ClienteController],
  providers: [ClienteServices],
})
export class ClienteModule {}
