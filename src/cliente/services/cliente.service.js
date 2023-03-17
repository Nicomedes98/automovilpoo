"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteServices = void 0;
const common_1 = require("@nestjs/common");
const cliente_entity_1 = require("../entities/cliente.entity");
let ClienteServices = class ClienteServices {
    constructor() {
        this.clientes = [];
    }
    addCliente(cliente) {
        this.clientes.push(cliente);
    }
    getClientes() {
        return this.clientes;
    }
    getClienteById(id) {
        return this.clientes.find((cliente) => cliente.id === id);
    }
    updateCliente(id, cliente) {
        const index = this.clientes.findIndex((c) => c.id === id);
        this.clientes[index] = cliente;
    }
    deleteCliente(id) {
        this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
    }
    create(createClienteDto) {
        const cliente = new cliente_entity_1.Cliente(createClienteDto.id, createClienteDto.nombre, createClienteDto.automovil);
        this.addCliente(cliente);
    }
};
ClienteServices = __decorate([
    (0, common_1.Injectable)()
], ClienteServices);
exports.ClienteServices = ClienteServices;
//# sourceMappingURL=cliente.service.js.map