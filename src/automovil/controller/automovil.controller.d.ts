import { Automovil } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/entities/automovil.entity';
import { AutomovilDTO } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/dto/create-automovil.dto';
import { Cliente } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/cliente/entities/cliente.entity';
import { AutomovilService } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/service/automovil.service';
export declare class AutomovilController {
    private readonly automovilService;
    constructor(automovilService: AutomovilService);
    getAllCars(): Promise<Automovil[]>;
    getCarById(id: number): Promise<Automovil>;
    createCar(dto: AutomovilDTO): Promise<Automovil>;
    updateCar(id: number, dto: AutomovilDTO): Promise<Automovil>;
    deleteCar(id: number): Promise<void>;
    assignCarToClient(id: number, cliente: Cliente): Promise<void>;
    unassignCarFromClient(id: number): Promise<void>;
}
