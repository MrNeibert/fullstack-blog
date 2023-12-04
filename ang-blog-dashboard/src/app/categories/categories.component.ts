import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(){  }

  ngOnInit(){
  }

  onSubmit(formData : any){
    let categoryData= {
      category: formData.value
    }
     console.log(categoryData);
  }

}
