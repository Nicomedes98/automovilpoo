import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
export interface IAutomovil {
    id: number;
    marca: string;
    modelo: string;
    anio: number;
    vendedor: Vendedor;
    cliente?: Cliente;
}
