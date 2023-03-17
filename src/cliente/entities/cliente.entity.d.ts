import { Entidad } from "src/vendedor/entities/entidad.entity";
import { ClienteDTO } from "/users/nicom/ideaprojects/javascript/nestjs/reto-automovil/src/cliente/dto/create-cliente.dto";
import { AutomovilDTO } from "src/automovil/dto/create-automovil.dto";
export declare class Cliente extends Entidad {
    id: number;
    nombre: string;
    automovil?: AutomovilDTO | undefined;
    arr: Cliente[];
    static clientes: Cliente[];
    constructor(id: number, nombre: string, automovil?: AutomovilDTO | undefined);
    crear(nuevoCliente: ClienteDTO): Cliente;
    eliminar(id: number): void;
    actualizar(cliente: Cliente): void;
    static getClienteById(id: number): Cliente;
}
