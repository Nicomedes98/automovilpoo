import { Automovil } from "src/automovil/entities/automovil.entity";

export interface ClienteDTO {
  id: number;
  nombre: string;
  automovilId?: number;
  asignarAutomovil?(auto: Automovil): void;
}
