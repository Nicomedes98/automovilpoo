"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomovilService = void 0;
const common_1 = require("@nestjs/common");
const automovil_entity_1 = require("/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/entities/automovil.entity");
const cliente_entity_1 = require("/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/cliente/entities/cliente.entity");
let AutomovilService = class AutomovilService {
    constructor() {
        this.automoviles = [];
    }
    getAllCars() {
        return this.automoviles;
    }
    getCarById(id) {
        return this.automoviles.find(auto => auto.id === id);
    }
    createCar(dto) {
        const auto = automovil_entity_1.Automovil.createCar(dto);
        this.automoviles.push(auto);
        return auto;
    }
    updateCar(id, dto) {
        const index = this.automoviles.findIndex(auto => auto.id === id);
        const auto = automovil_entity_1.Automovil.updateCar(id, dto);
        this.automoviles[index] = auto;
        return auto;
    }
    deleteCar(id) {
        const index = this.automoviles.findIndex(auto => auto.id === id);
        this.automoviles.splice(index, 1);
    }
    assignCarToClient(id, cliente) {
        const index = this.automoviles.findIndex(auto => auto.id === id);
        const automovil = this.automoviles[index];
        if (cliente.automovil) {
            automovil.assignCarToClient(cliente);
            cliente.automovil = automovil;
        }
        else {
            automovil.assignCarToClient(cliente);
            cliente.automovil = automovil;
        }
    }
    unassignCarFromClient(id) {
        const index = this.automoviles.findIndex(auto => auto.id === id);
        const automovil = this.automoviles[index];
        if (automovil.cliente) {
            automovil.unassignCarFromClient();
            const clienteAsociado = cliente_entity_1.Cliente.getClienteById(automovil.cliente.id);
            clienteAsociado.eliminar(automovil.cliente.id);
        }
    }
};
AutomovilService = __decorate([
    (0, common_1.Injectable)()
], AutomovilService);
exports.AutomovilService = AutomovilService;
//# sourceMappingURL=automovil.service.js.map