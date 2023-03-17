"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const entidad_entity_1 = require("../../../C:/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/entities/entidad.entity");
const automovil_entity_1 = require("../../../C:/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/entities/automovil.entity");
class Cliente extends entidad_entity_1.Entidad {
    constructor(id, nombre, automovil) {
        super();
        this.id = id;
        this.nombre = nombre;
        this.automovil = automovil;
        this.arr = [];
    }
    crear(nuevoCliente) {
        const nuevo = new Cliente(this.arr.length + 1, nuevoCliente.nombre);
        if (nuevoCliente.automovilId) {
            const automovil = this.buscarPorId(nuevoCliente.automovilId);
            automovil.cliente = nuevo;
            automovil.actualizar(automovil);
            nuevo.automovil = automovil;
        }
        this.agregar(nuevo);
        return nuevo;
    }
    eliminar(id) {
        const cliente = this.buscarPorId(id);
        if (cliente.automovil) {
            const automovilId = cliente.automovil.id;
            cliente.automovil = undefined;
            const automovil = automovil_entity_1.Automovil.getCarById(automovilId);
            automovil.unassignCarFromClient();
        }
        super.eliminar(id);
    }
    actualizar(cliente) {
        const index = this.arr.findIndex(c => c.id === cliente.id);
        if (index !== -1) {
            this.arr[index] = cliente;
        }
    }
    static getClienteById(id) {
        const cliente = this.clientes.find((cliente) => cliente.id === id);
        if (!cliente) {
            throw new Error(`Cliente con ID ${id} no encontrado`);
        }
        return cliente;
    }
}
exports.Cliente = Cliente;
Cliente.clientes = [];
//# sourceMappingURL=cliente.entity.js.map