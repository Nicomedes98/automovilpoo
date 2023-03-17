"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomovilController = void 0;
const common_1 = require("@nestjs/common");
const cliente_entity_1 = require("/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/cliente/entities/cliente.entity");
const automovil_service_1 = require("/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/service/automovil.service");
let AutomovilController = class AutomovilController {
    constructor(automovilService) {
        this.automovilService = automovilService;
    }
    async getAllCars() {
        return await this.automovilService.getAllCars();
    }
    async getCarById(id) {
        return await this.automovilService.getCarById(id);
    }
    async createCar(dto) {
        return await this.automovilService.createCar(dto);
    }
    async updateCar(id, dto) {
        return await this.automovilService.updateCar(id, dto);
    }
    async deleteCar(id) {
        await this.automovilService.deleteCar(id);
    }
    async assignCarToClient(id, cliente) {
        await this.automovilService.assignCarToClient(id, cliente);
    }
    async unassignCarFromClient(id) {
        await this.automovilService.unassignCarFromClient(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "getAllCars", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "getCarById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "createCar", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "updateCar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "deleteCar", null);
__decorate([
    (0, common_1.Put)(':id/cliente'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, cliente_entity_1.Cliente]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "assignCarToClient", null);
__decorate([
    (0, common_1.Delete)(':id/cliente'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AutomovilController.prototype, "unassignCarFromClient", null);
AutomovilController = __decorate([
    (0, common_1.Controller)('automovil'),
    __metadata("design:paramtypes", [automovil_service_1.AutomovilService])
], AutomovilController);
exports.AutomovilController = AutomovilController;
//# sourceMappingURL=automovil.controller.js.map