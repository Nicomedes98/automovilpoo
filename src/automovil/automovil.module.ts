import { Module } from '@nestjs/common';
import { AutomovilService } from './service/automovil.service';
import { AutomovilController } from './controller/automovil.controller';

@Module({
  controllers: [AutomovilController],
  providers: [AutomovilService]
})
export class AutomovilModule {}
