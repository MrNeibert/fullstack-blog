import { Injectable } from '@angular/core';
import { Firestore,collection, addDoc } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fireStore : Firestore) { }

  saveData(formData : any){

      const collectionInstance = collection(this.fireStore, 'categories');

      addDoc(collectionInstance, formData.value).then(()=> {
        console.log('Data Saved Successfully!');
      } )
      .catch((err)=> {
        console.log(err);
      });
}
}
