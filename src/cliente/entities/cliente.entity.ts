import { Entidad } from "src/vendedor/entities/entidad.entity";
import { Automovil } from "src/automovil/entities/automovil.entity";
import { ClienteDTO } from "/users/nicom/ideaprojects/javascript/nestjs/reto-automovil/src/cliente/dto/create-cliente.dto";
import { AutomovilDTO } from "src/automovil/dto/create-automovil.dto";

//CLIENTE.ENTITY
export class Cliente extends Entidad {
  arr: Cliente[] = [];
  static clientes: Cliente[] = [];

  constructor(public id: number, public nombre: string, public automovil?: AutomovilDTO) {
    super();
  }

  crear(nuevoCliente: ClienteDTO): Cliente {
    const nuevo = new Cliente(
      this.arr.length + 1,
      nuevoCliente.nombre
    );
    if (nuevoCliente.automovilId) {
      const automovil = this.buscarPorId(nuevoCliente.automovilId);
      automovil.cliente = nuevo;
      automovil.actualizar(automovil);
      nuevo.automovil = automovil;
    }
    this.agregar(nuevo);
    return nuevo;
  }

  eliminar(id: number): void {
    const cliente = this.buscarPorId(id);
    if (cliente.automovil) {
      const automovilId = cliente.automovil.id;
      cliente.automovil = undefined;
      const automovil = Automovil.getCarById(automovilId);
      automovil.unassignCarFromClient();
    }
    super.eliminar(id);
  }
  
  actualizar(cliente: Cliente): void {
    const index = this.arr.findIndex(c => c.id === cliente.id);
    if (index !== -1) {
      this.arr[index] = cliente;
    }
  }

  static getClienteById(id: number): Cliente {
    const cliente = this.clientes.find((cliente) => cliente.id === id);

    if (!cliente) {
      throw new Error(`Cliente con ID ${id} no encontrado`);
    }

    return cliente;
}

}

