"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entidad = void 0;
class Entidad {
    agregar(nuevo) {
        this.arr.push(nuevo);
    }
    buscarPorId(id) {
        return this.arr.find((elem) => elem.id === id);
    }
    eliminar(id) {
        const index = this.arr.findIndex((elem) => elem.id === id);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    }
    actualizar(nuevo) {
        const index = this.arr.findIndex((elem) => elem.id === nuevo.id);
        if (index !== -1) {
            this.arr[index] = nuevo;
        }
    }
}
exports.Entidad = Entidad;
//# sourceMappingURL=entidad.entity.js.map