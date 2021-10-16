import { Injectable } from '@angular/core';
import { Food, Tag } from 'src/app/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {

  }
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Wiener Schnitzel',
        price: 12,
        tags: ['Fast Food', 'Lunch'],
        favourite: false,
        stars: 3,
        imageURL: 'https://cdn.gutekueche.de/upload/rezept/371/1600x1200_wiener-schnitzel.jpg',
        origins: ['Germany'],
        cookTime: '10-15 min'
      },
      {
        id: 2,
        name: 'Pepperoni Pizza',
        price: 8,
        tags: ['Fast Food', 'Lunch'],
        favourite: false,
        stars: 4,
        imageURL: 'https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg',
        origins: ['Italy'],
        cookTime: '5-10 min'
      },
      {
        id: 3,
        name: 'Kebab mit Frites',
        price: 6,
        tags: ['Fast Food', 'Lunch'],
        favourite: true,
        stars: 4,
        imageURL: 'https://previews.123rf.com/images/margouillat/margouillat1202/margouillat120200281/12615931-d%C3%B6ner-kebab-mit-franz%C3%B6sisch-frites.jpg',
        origins: ['Turkey'],
        cookTime: '5-10 min'
      },
      {
        id: 4,
        name: 'Käsespätzle',
        price: 8,
        tags: ['Lunch'],
        favourite: true,
        stars: 4,
        imageURL: 'https://speisekarte.menu/storage/media/contributions/684330/conversions/contribution_gallery.jpg',
        origins: ['Germany'],
        cookTime: '50-60 min'
      }


    ]
  }

  getAllFoodsByTag(tag: string): Food[] {
    if (tag == "All")
      return this.getAll();
    else
      return this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Fast Food', count: 3 },
      { name: 'Lunch', count: 4 }
    ]
  }
  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id);
  }


}
