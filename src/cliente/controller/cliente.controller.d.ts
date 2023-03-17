import { Cliente } from '../entities/cliente.entity';
export declare class ClienteController {
    clientes: any;
    findAll(): Cliente[];
    findById(id: number): Cliente;
}
