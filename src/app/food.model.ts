export class Food {
    id: number;
    name: string;
    price: number;
    tags: string[];
    favourite: boolean = false;
    stars: number = 0;
    imageURL: string;
    origins: string[];
    cookTime: string;
}
export class Tag {
    name!: string;
    count!: number;
}
