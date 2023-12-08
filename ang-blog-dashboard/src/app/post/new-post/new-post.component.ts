import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {


  permalink: string = '';
  imgsrc: any = '../../../assets/landscape-placeholder-svgrepo-com.svg';
  selectedImage :any;



onTitlechanged(event: any) {
  const title = event.target.value
  this.permalink = title.toLowerCase().replace(/\s/g, '-')
}

showPreview(event: any) {
const reader = new FileReader();
reader.onload = (e)=>{
  this.imgsrc = e.target?.result
}
reader.readAsDataURL(event.target.files[0]);
this.selectedImage = event.target.files[0];

}
}
