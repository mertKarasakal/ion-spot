export class Product{
    constructor(
      public id: number,
      public title: string,
      public description: string,
      public imageUrl: string,
      public price: number,
      public isFav: boolean,
      public userId: string
    ){ }
}