import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../food.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

}
