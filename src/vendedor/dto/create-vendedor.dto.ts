import { IsNumber, IsString } from 'class-validator';


export class VendedorDTO {
  @IsNumber()
  id: number;

  @IsString()
  nombre: string;

  @IsString()
  apellido: string;
}
