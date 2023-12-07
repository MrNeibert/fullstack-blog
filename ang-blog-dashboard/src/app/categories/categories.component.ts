import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

categoryArray !: Observable<any>;

  constructor( private categoryService: CategoriesService) { }

  ngOnInit(): void {
this.categoryArray = this.categoryService.loadData();
  }

  onSubmit(formData: any) {
    const categoryData :Category = { category: formData.value.category };
    this.categoryService.saveData(categoryData);
    formData.reset();
  }

}
