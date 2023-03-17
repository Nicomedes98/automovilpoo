import { Entidad } from './entidad.entity';
import { Automovil } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/automovil/entities/automovil.entity';
import { VendedorDTO} from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/dto/create-vendedor.dto';
export class Vendedor extends Entidad {
  arr: any[];
  private static vendedores: Vendedor[] = [];

  constructor(
    public readonly id: number,
    public nombre: string,
    public apellido: string,
    public email: string,
    public autos: Automovil[] = []
  ) {
    super();
  }

  static createVendor(dto: VendedorDTO): Vendedor {
    const id = this.vendedores.length + 1;

    const vendedor = new Vendedor(id, dto.nombre, "", "", []);

    this.vendedores.push(vendedor);

    return vendedor;
  }

  static updateVendor(id: number, dto: VendedorDTO): Vendedor {
    const vendedor = this.getById(id);

    vendedor.nombre = dto.nombre;

    return vendedor;
  }

  static deleteVendor(id: number): void {
    const index = this.vendedores.findIndex((vendedor) => vendedor.id === id);

    if (index !== -1) {
      this.vendedores.splice(index, 1);
    }
  }

  static getAllVendors(): Vendedor[] {
    return this.vendedores;
  }

  static getVendorById(id: number): Vendedor {
    return this.getById(id);
  }

  private static getById(id: number): Vendedor {
    const vendedor = this.vendedores.find((vendedor) => vendedor.id === id);

    if (!vendedor) {
      throw new Error(`Vendedor con ID ${id} no encontrado`);
    }

    return vendedor;
  }
}
