import { Component} from '@angular/core';
import { Firestore,collection, addDoc } from '@angular/fire/firestore'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private fireStore: Firestore) { }

  onSubmit(formData: any) {
    const collectionInstance = collection(this.fireStore, 'categories/subcategories/subsubcategories');

    addDoc(collectionInstance, formData.value).then(()=> {
      console.log('Data Saved Successfully!');
    } )
    .catch((err)=> {
      console.log(err);
    });
  }

}
