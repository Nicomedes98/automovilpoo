import { IAutomovil } from "/users/nicom/ideaprojects/javascript/nestjs/reto-automovil/src/automovil/interface/iauto.interface";

interface Cliente {
  id: number;
  nombre: string;
  automovil?: IAutomovil;
}
