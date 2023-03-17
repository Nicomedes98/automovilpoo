
import { VendedorDTO } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/dto/create-vendedor.dto';
import { Vendedor } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/entities/vendedor.entity';
import { VendedorService } from '/Users/nicom/IdeaProjects/JavaScript/NESTJS/reto-automovil/src/vendedor/service/vendedor.service';

export class VendedorController {
  private readonly service: VendedorService;

  constructor(service: VendedorService) {
    this.service = service;
  }
/*
  public async crearVendedor(req: Request, res: Response): Promise<void> {
    try {
      const dto: VendedorDTO = req.body;
      const vendedor: Vendedor = await this.service.crear(dto);
      res.status(201).json(vendedor.toDTO());
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  public async obtenerVendedores(req: Request, res: Response): Promise<void> {
    try {
      const vendedores: Vendedor[] = await this.service.obtenerTodos();
      res.json(vendedores.map((vendedor) => vendedor.toDTO()));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  public async obtenerVendedorPorId(req: Request, res: Response): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const vendedor: Vendedor = await this.service.obtenerPorId(id);
      res.json(vendedor.toDTO());
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  public async actualizarVendedor(req: Request, res: Response): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const dto: VendedorDTO = req.body;
      const vendedor: Vendedor = await this.service.actualizar(id, dto);
      res.json(vendedor.toDTO());
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  public async eliminarVendedor(req: Request, res: Response): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      await this.service.eliminar(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  } */
}