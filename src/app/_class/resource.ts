export class Resource {
    constructor(
        public resource: string,
        public id?: number,
        //Relaciones
        public parents?: Resource[],
        public children?: Resource[]
    ) { }
}
