"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automovil = void 0;
const entidad_entity_1 = require("../../vendedor/entities/entidad.entity");
class Automovil extends entidad_entity_1.Entidad {
    constructor(id, marca, modelo, anio, vendedorId, cliente) {
        super();
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.vendedorId = vendedorId;
        this.cliente = cliente;
        this.arr = Automovil.autos;
    }
    static createCar(dto) {
        const id = this.autos.length + 1;
        const auto = new Automovil(id, dto.marca, dto.modelo, dto.anio, dto.vendedorId);
        this.autos.push(auto);
        return auto;
    }
    static updateCar(id, dto) {
        const auto = this.getById(id);
        auto.marca = dto.marca;
        auto.modelo = dto.modelo;
        auto.anio = dto.anio;
        auto.vendedorId = dto.vendedorId;
        return auto;
    }
    static deleteCar(id) {
        const index = this.autos.findIndex((auto) => auto.id === id);
        if (index !== -1) {
            this.autos.splice(index, 1);
        }
    }
    static getAllCars() {
        return this.autos;
    }
    static getCarById(id) {
        return this.getById(id);
    }
    assignCarToClient(cliente) {
        this.cliente = cliente;
    }
    unassignCarFromClient() {
        this.cliente = undefined;
    }
    actualizar(cliente) {
        if (this.cliente && cliente.id === this.cliente.id) {
            this.cliente = cliente;
        }
    }
    static getById(id) {
        const auto = this.autos.find((auto) => auto.id === id);
        if (!auto) {
            throw new Error(`Automóvil con ID ${id} no encontrado`);
        }
        return auto;
    }
}
exports.Automovil = Automovil;
Automovil.autos = [];
//# sourceMappingURL=automovil.entity.js.map