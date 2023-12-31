import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fireStore: Firestore, private toastr: ToastrService) { }

  saveData(formData: any) {
    const collectionInstance = collection(this.fireStore, 'categories');
    addDoc(collectionInstance, formData)
      .then(() => {
        this.toastr.success('Data Saved Successfully!')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadData() {
    const collectionInstance = collection(this.fireStore, 'categories');
    return collectionData(collectionInstance, { idField: 'id' })
  }

  updateData(id: string, updateData: any) {
    const docInstance = doc(this.fireStore, 'categories', id);
    updateDoc(docInstance, updateData)
      .then(() => {
        this.toastr.info('Data Updated Successfully!')
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  deleteData(id: string) {
    const docInstance = doc(this.fireStore, 'categories', id);
    deleteDoc(docInstance)
      .then(() => {
        this.toastr.info('Data Deleted Successfully!')
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}

