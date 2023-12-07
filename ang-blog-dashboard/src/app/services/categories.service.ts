import { Injectable } from '@angular/core';
import { Firestore,collection, addDoc } from '@angular/fire/firestore'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fireStore : Firestore, private toastr: ToastrService) { }

  saveData(formData : any){

      const collectionInstance = collection(this.fireStore, 'categories');

      addDoc(collectionInstance, formData)

      .then(()=> {
        this.toastr.success('Data Saved Successfully!')
      } )
      .catch((err)=> {
        console.log(err);
      });
}
}
