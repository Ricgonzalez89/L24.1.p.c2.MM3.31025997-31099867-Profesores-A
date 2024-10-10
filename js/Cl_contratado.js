import Cl_profesor from "./Cl_profesor.js";

export default class Cl_contratado extends Cl_profesor {
    constructor(nombre, bono, cntHora) {
        super(nombre, bono);
        this.cntHora = cntHora;
    }

    set cntHora(cH) {
        this._cntHora = +cH;
    }

    get cntHora() {
        return this._cntHora;
    }

    calcIngresoTotal() {
        return this.bono + (this.cntHora * 10);
    }
}