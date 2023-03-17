import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClienteDTO } from '../dto/create-cliente.dto';
import { Cliente } from '../entities/cliente.entity';
import { AutomovilDTO } from 'src/automovil/dto/create-automovil.dto';


@Controller('clientes')
export class ClienteController {
  clientes: any;
  @Get()
  findAll(): Cliente[] {
    return Cliente.clientes;
  }

  @Get(':id')
  findById(@Param('id') id: number): Cliente {
    return Cliente.getClienteById(id);
  }
/* 
  @Post()
  create(@Body() nuevoCliente: ClienteDTO): Cliente {
    const automovilDTO: AutomovilDTO = { id: nuevoCliente.automovilId };
    return new Cliente(this.clientes.length + 1, nuevoCliente.nombre, automovilDTO);
  }
  

  @Put(':id')
  update(@Param('id') id: number, @Body() cliente: ClienteDTO): Cliente {
    const clienteExistente = Cliente.getClienteById(id);
    clienteExistente.nombre = cliente.nombre;
    return clienteExistente.actualizar(clienteExistente);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    Cliente.eliminar(id);
  }  */
}
