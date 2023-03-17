//AUTOMOVIL.CONTROLLER 
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Automovil } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/entities/automovil.entity';
import { AutomovilDTO } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/dto/create-automovil.dto';
import { Cliente } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/cliente/entities/cliente.entity';
import {AutomovilService} from'/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/service/automovil.service'



@Controller('automovil')
export class AutomovilController {
  constructor(private readonly automovilService: AutomovilService) {}

  @Get()
  async getAllCars(): Promise<Automovil[]> {
    return await this.automovilService.getAllCars();
  }

  @Get(':id')
  async getCarById(@Param('id') id: number): Promise<Automovil> {
    return await this.automovilService.getCarById(id);
  }

  @Post()
  async createCar(@Body() dto: AutomovilDTO): Promise<Automovil> {
    return await this.automovilService.createCar(dto);
  }

  @Put(':id')
  async updateCar(
    @Param('id') id: number,
    @Body() dto: AutomovilDTO,
  ): Promise<Automovil> {
    return await this.automovilService.updateCar(id, dto);
  }

  @Delete(':id')
  async deleteCar(@Param('id') id: number): Promise<void> {
    await this.automovilService.deleteCar(id);
  }

  @Put(':id/cliente')
  async assignCarToClient(
    @Param('id') id: number,
    @Body() cliente: Cliente,
  ): Promise<void> {
    await this.automovilService.assignCarToClient(id, cliente);
  }

  @Delete(':id/cliente')
  async unassignCarFromClient(@Param('id') id: number): Promise<void> {
    await this.automovilService.unassignCarFromClient(id);
  }
}
