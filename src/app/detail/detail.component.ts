import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { Food } from '../food.model';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  food: Food;
  constructor(private route: ActivatedRoute, private foodService: FoodService) {
    route.params.subscribe((params) => {
      if (params.id)
        this.food = foodService.getFoodById(params.id);
    })
  }

  ngOnInit(): void {
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
  }

}
