import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDTO } from '../dto/create-cliente.dto';
export declare class ClienteServices {
    private clientes;
    addCliente(cliente: Cliente): void;
    getClientes(): Cliente[];
    getClienteById(id: number): Cliente;
    updateCliente(id: number, cliente: Cliente): void;
    deleteCliente(id: number): void;
    create(createClienteDto: CreateClienteDTO): void;
}
