export declare abstract class Entidad {
    abstract arr: any[];
    agregar(nuevo: any): void;
    buscarPorId(id: number): any;
    eliminar(id: number): void;
    actualizar(nuevo: any): void;
}
