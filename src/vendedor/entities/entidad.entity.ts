//entidad.entity 
export abstract class Entidad {
    abstract arr: any[];
  
    agregar(nuevo: any): void {
      this.arr.push(nuevo);
    }
  
    buscarPorId(id: number): any {
      return this.arr.find((elem: any) => elem.id === id);
    }
  
    eliminar(id: number): void {
      const index = this.arr.findIndex((elem: any) => elem.id === id);
      if (index !== -1) {
        this.arr.splice(index, 1);
      }
    }
  
    actualizar(nuevo: any): void {
      const index = this.arr.findIndex((elem: any) => elem.id === nuevo.id);
      if (index !== -1) {
        this.arr[index] = nuevo;
      }
    }
  }
  