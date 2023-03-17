import { VendedorDTO } from 'src/vendedor/dto/create-vendedor.dto';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
import { Entidad } from 'src/vendedor/entities/entidad.entity';
import { ClienteDTO } from 'src/cliente/dto/create-cliente.dto';
import { AutomovilDTO } from '/users/nicom/ideaprojects/javascript/nestjs/reto-automovil/src/automovil/dto/create-automovil.dto';

export class Automovil extends Entidad {
  private static autos: Automovil[] = [];
  arr: Automovil[] = Automovil.autos;

  constructor(
    public readonly id: number,
    public marca: string,
    public modelo: string,
    public anio: number,
    public vendedorId: number,
    public cliente?: ClienteDTO
  ) {
    super();
  }

  // Crea un nuevo automóvil y lo agrega al arreglo de autos
  static createCar(dto: AutomovilDTO): Automovil {
    const id = this.autos.length + 1;
    const auto = new Automovil(id, dto.marca, dto.modelo, dto.anio, dto.vendedorId);
  
    this.autos.push(auto);
  
    return auto;
  }
  

  // Actualiza la información de un automóvil existente
  static updateCar(id: number, dto: AutomovilDTO): Automovil {
    const auto = this.getById(id);

    auto.marca = dto.marca;
    auto.modelo = dto.modelo;
    auto.anio = dto.anio;
    auto.vendedorId = dto.vendedorId;

    return auto;
  }

  // Elimina un automóvil
  static deleteCar(id: number): void {
    const index = this.autos.findIndex((auto) => auto.id === id);

    if (index !== -1) {
      this.autos.splice(index, 1);
    }
  }

  // Obtiene todos los automóviles
  static getAllCars(): Automovil[] {
    return this.autos;
  }

  // Obtiene un automóvil por su identificador
  static getCarById(id: number): Automovil {
    return this.getById(id);
  }

  // Asigna un coche a un cliente
  assignCarToClient(cliente: ClienteDTO): void {
    this.cliente = cliente;
  }

  // Elimina la asignación de un coche a un cliente
  unassignCarFromClient(): void {
    this.cliente = undefined;
  }

  // Actualiza la información del cliente asociado al automóvil
  actualizar(cliente: ClienteDTO): void {
    if (this.cliente && cliente.id === this.cliente.id) {
      this.cliente = cliente;
    }
  }

  private static getById(id: number): Automovil {
    const auto = this.autos.find((auto) => auto.id === id);

    if (!auto) {
      throw new Error(`Automóvil con ID ${id} no encontrado`);
    }

    return auto;
  }
}
