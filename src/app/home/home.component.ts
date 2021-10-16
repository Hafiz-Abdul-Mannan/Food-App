import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating/components/star-rating/star-rating.component';
import { Food } from '../food.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private route: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      }
      else {
        this.foods = this.foodService.getAll();
      }
    })

  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
  }

}

