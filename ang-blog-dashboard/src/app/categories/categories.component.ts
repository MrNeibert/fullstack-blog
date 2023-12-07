import { Component} from '@angular/core';
import { Firestore,collection, addDoc } from '@angular/fire/firestore'
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor( private categoryService: CategoriesService) { }

  onSubmit(formData: any) {
    this.categoryService.saveData(formData)

  }

}
