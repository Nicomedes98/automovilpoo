import { Automovil } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/entities/automovil.entity';
import { AutomovilDTO } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/dto/create-automovil.dto';
export declare class AutomovilService {
    private automoviles;
    getAllCars(): Automovil[];
    getCarById(id: number): Automovil;
    createCar(dto: AutomovilDTO): Automovil;
    updateCar(id: number, dto: AutomovilDTO): Automovil;
    deleteCar(id: number): void;
    assignCarToClient(id: number, cliente: any): void;
    unassignCarFromClient(id: number): void;
}
