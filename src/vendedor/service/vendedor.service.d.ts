import { Vendedor } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/entities/vendedor.entity';
import { VendedorDTO } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/dto/create-vendedor.dto';
export declare class VendedorService {
    private vendedores;
    crear(dto: VendedorDTO): Promise<Vendedor>;
    obtenerTodos(): Promise<Vendedor[]>;
    obtenerPorId(id: number): Promise<Vendedor>;
    actualizar(id: number, dto: VendedorDTO): Promise<Vendedor>;
    eliminar(id: number): Promise<void>;
    buscarAutoDeVendedorPorId(vendedorId: number, autoId: number): Promise<boolean>;
}
