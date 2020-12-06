//fazer uma classe produto que tem id, descrição,titulo e preço

export class Product {
    constructor(
        public id : string,
        public title : string, 
        public description : string,
        public price : number
    ) {}
}