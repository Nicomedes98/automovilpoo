"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = void 0;
const entidad_entity_1 = require("./entidad.entity");
class Vendedor extends entidad_entity_1.Entidad {
    constructor(id, nombre, apellido, email, autos = []) {
        super();
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.autos = autos;
    }
    static createVendor(dto) {
        const id = this.vendedores.length + 1;
        const vendedor = new Vendedor(id, dto.nombre, "", "", []);
        this.vendedores.push(vendedor);
        return vendedor;
    }
    static updateVendor(id, dto) {
        const vendedor = this.getById(id);
        vendedor.nombre = dto.nombre;
        return vendedor;
    }
    static deleteVendor(id) {
        const index = this.vendedores.findIndex((vendedor) => vendedor.id === id);
        if (index !== -1) {
            this.vendedores.splice(index, 1);
        }
    }
    static getAllVendors() {
        return this.vendedores;
    }
    static getVendorById(id) {
        return this.getById(id);
    }
    static getById(id) {
        const vendedor = this.vendedores.find((vendedor) => vendedor.id === id);
        if (!vendedor) {
            throw new Error(`Vendedor con ID ${id} no encontrado`);
        }
        return vendedor;
    }
}
exports.Vendedor = Vendedor;
Vendedor.vendedores = [];
//# sourceMappingURL=vendedor.entity.js.map