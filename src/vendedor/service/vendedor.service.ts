import { Injectable, NotFoundException } from '@nestjs/common';
import { Vendedor } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/entities/vendedor.entity';
import { VendedorDTO } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/dto/create-vendedor.dto';

@Injectable()
export class VendedorService {
  private vendedores: Vendedor[] = [];

  async crear(dto: VendedorDTO): Promise<Vendedor> {
    const vendedor: Vendedor = new Vendedor(this.vendedores.length + 1, dto.nombre, dto.autos);
    this.vendedores.push(vendedor);
    return vendedor;
  }

  async obtenerTodos(): Promise<Vendedor[]> {
    return this.vendedores;
  }

  async obtenerPorId(id: number): Promise<Vendedor> {
    const vendedor: Vendedor = this.vendedores.find((v) => v.id === id);
    if (!vendedor) {
      throw new Error(`No se encontró ningún vendedor con el id ${id}`);
    }
    return vendedor;
  }

  async actualizar(id: number, dto: VendedorDTO): Promise<Vendedor> {
    const vendedor: Vendedor = await this.obtenerPorId(id);
    vendedor.nombre = dto.nombre;
    vendedor.autos = dto.autos;
    return vendedor;
  }

  async eliminar(id: number): Promise<void> {
    const index: number = this.vendedores.findIndex((v) => v.id === id);
    if (index === -1) {
      throw new Error(`No se encontró ningún vendedor con el id ${id}`);
    }
    this.vendedores.splice(index, 1);
  }

  async buscarAutoDeVendedorPorId(vendedorId: number, autoId: number): Promise<boolean> {
    const vendedor: Vendedor = await this.obtenerPorId(vendedorId);
    return vendedor.autos.includes(autoId);
  }
}
