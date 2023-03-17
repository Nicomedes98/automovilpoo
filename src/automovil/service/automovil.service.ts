
// AUTOMOVIL.SERVICE
import { Injectable } from '@nestjs/common';
import { Automovil } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/entities/automovil.entity';
import { AutomovilDTO } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/dto/create-automovil.dto';
import { Cliente } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/cliente/entities/cliente.entity';


@Injectable()
export class AutomovilService {

  private automoviles: Automovil[] = [];

  getAllCars(): Automovil[] {
    return this.automoviles;
  }

  getCarById(id: number): Automovil {
    return this.automoviles.find(auto => auto.id === id);
  }

  createCar(dto: AutomovilDTO): Automovil {
    const auto = Automovil.createCar(dto);
    this.automoviles.push(auto);
    return auto;
  }

  updateCar(id: number, dto: AutomovilDTO): Automovil {
    const index = this.automoviles.findIndex(auto => auto.id === id);
    const auto = Automovil.updateCar(id, dto);
    this.automoviles[index] = auto;
    return auto;
  }

  deleteCar(id: number): void {
    const index = this.automoviles.findIndex(auto => auto.id === id);
    this.automoviles.splice(index, 1);
  }

  assignCarToClient(id: number, cliente: any): void {
    const index = this.automoviles.findIndex(auto => auto.id === id);
    const automovil = this.automoviles[index];

    if (cliente.automovil) {
      automovil.assignCarToClient(cliente);
      cliente.automovil = automovil;
    } else {
      automovil.assignCarToClient(cliente);
      cliente.automovil = automovil;
    }
  }

  unassignCarFromClient(id: number): void {
    const index = this.automoviles.findIndex(auto => auto.id === id);
    const automovil = this.automoviles[index];

    if (automovil.cliente) {
      automovil.unassignCarFromClient();
      const clienteAsociado = Cliente.getClienteById(automovil.cliente.id);
      clienteAsociado.eliminar(automovil.cliente.id);
    }
  }
  
}
