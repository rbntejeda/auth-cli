import { Authorization } from './authorization';
import { Resource } from './resource';

export class User {
    constructor(
        public nombre?: string,
        public password?: string,
        public username?: string,
        public rut?: string,
        public email?: string,
        public id?: number,
        //Relacion
        public authorizations?: Authorization[],
        public resources?: Resource[],
        public children?: Resource[]
    ) { }
}
