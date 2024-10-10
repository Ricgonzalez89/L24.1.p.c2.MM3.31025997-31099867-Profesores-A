export default class Cl_profesor {
    constructor(nombre, bono) {
        this.nombre = nombre;
        this.bono = bono;
    }

    set nombre(n) {
        this._nombre = n;
    }

    set bono(b) {
        this._bono = +b;
    }

    get nombre() {
        return this._nombre;
    }

    get bono() {
        return this._bono;
    }
}