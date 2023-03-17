import { Entidad } from 'src/vendedor/entities/entidad.entity';
import { ClienteDTO } from 'src/cliente/dto/create-cliente.dto';
import { AutomovilDTO } from '/users/nicom/ideaprojects/javascript/nestjs/reto-automovil/src/automovil/dto/create-automovil.dto';
export declare class Automovil extends Entidad {
    readonly id: number;
    marca: string;
    modelo: string;
    anio: number;
    vendedorId: number;
    cliente?: ClienteDTO | undefined;
    private static autos;
    arr: Automovil[];
    constructor(id: number, marca: string, modelo: string, anio: number, vendedorId: number, cliente?: ClienteDTO | undefined);
    static createCar(dto: AutomovilDTO): Automovil;
    static updateCar(id: number, dto: AutomovilDTO): Automovil;
    static deleteCar(id: number): void;
    static getAllCars(): Automovil[];
    static getCarById(id: number): Automovil;
    assignCarToClient(cliente: ClienteDTO): void;
    unassignCarFromClient(): void;
    actualizar(cliente: ClienteDTO): void;
    private static getById;
}
