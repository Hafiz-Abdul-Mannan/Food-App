import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating/components/star-rating/star-rating.component';
import { Food } from '../food.model';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
  }
}

