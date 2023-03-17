import { Entidad } from './entidad.entity';
import { Automovil } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/entities/automovil.entity';
import { VendedorDTO } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/dto/create-vendedor.dto';
export declare class Vendedor extends Entidad {
    readonly id: number;
    nombre: string;
    apellido: string;
    email: string;
    autos: Automovil[];
    arr: any[];
    private static vendedores;
    constructor(id: number, nombre: string, apellido: string, email: string, autos?: Automovil[]);
    static createVendor(dto: VendedorDTO): Vendedor;
    static updateVendor(id: number, dto: VendedorDTO): Vendedor;
    static deleteVendor(id: number): void;
    static getAllVendors(): Vendedor[];
    static getVendorById(id: number): Vendedor;
    private static getById;
}
