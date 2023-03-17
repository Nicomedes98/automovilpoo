import { IAutomovil } from "/users/nicom/ideaprojects/javascript/nestjs/reto-automovil/src/automovil/interface/iauto.interface";

interface Vendedor {
  id: number;
  nombre: string;
  autos: IAutomovil[];
}
