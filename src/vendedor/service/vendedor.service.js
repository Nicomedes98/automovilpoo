"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendedorService = void 0;
const common_1 = require("@nestjs/common");
const vendedor_entity_1 = require("/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/entities/vendedor.entity");
let VendedorService = class VendedorService {
    constructor() {
        this.vendedores = [];
    }
    async crear(dto) {
        const vendedor = new vendedor_entity_1.Vendedor(this.vendedores.length + 1, dto.nombre, dto.autos);
        this.vendedores.push(vendedor);
        return vendedor;
    }
    async obtenerTodos() {
        return this.vendedores;
    }
    async obtenerPorId(id) {
        const vendedor = this.vendedores.find((v) => v.id === id);
        if (!vendedor) {
            throw new Error(`No se encontró ningún vendedor con el id ${id}`);
        }
        return vendedor;
    }
    async actualizar(id, dto) {
        const vendedor = await this.obtenerPorId(id);
        vendedor.nombre = dto.nombre;
        vendedor.autos = dto.autos;
        return vendedor;
    }
    async eliminar(id) {
        const index = this.vendedores.findIndex((v) => v.id === id);
        if (index === -1) {
            throw new Error(`No se encontró ningún vendedor con el id ${id}`);
        }
        this.vendedores.splice(index, 1);
    }
    async buscarAutoDeVendedorPorId(vendedorId, autoId) {
        const vendedor = await this.obtenerPorId(vendedorId);
        return vendedor.autos.includes(autoId);
    }
};
VendedorService = __decorate([
    (0, common_1.Injectable)()
], VendedorService);
exports.VendedorService = VendedorService;
//# sourceMappingURL=vendedor.service.js.map