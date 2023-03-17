import { Injectable } from '@nestjs/common';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDTO } from '../dto/create-cliente.dto';

@Injectable()
export class ClienteServices {
  private clientes: Cliente[] = [];

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  getClientes(): Cliente[] {
    return this.clientes;
  }

  getClienteById(id: number): Cliente {
    return this.clientes.find((cliente) => cliente.id === id);
  }

  updateCliente(id: number, cliente: Cliente) {
    const index = this.clientes.findIndex((c) => c.id === id);
    this.clientes[index] = cliente;
  }

  deleteCliente(id: number) {
    this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
  }

  create(createClienteDto: CreateClienteDTO) {
    const cliente = new Cliente(
      createClienteDto.id,
      createClienteDto.nombre,
      createClienteDto.automovil,
    );
    this.addCliente(cliente);
  }
}
